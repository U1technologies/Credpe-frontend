
export function generateMetadata({ params }) {
  const loanType = params.loanType;

  const loanTitles = {
    personal: "Personal Loan",
    business: "Business Loan",
    education: "Education Loan",
    home: "Home Loan",
    vehicle: "Vehicle Loan",
    medical: "Medical Loan",
    gold: "Gold Loan",
    property: "Loan Against Property",
    "transfer-home": "Transfer Home Loan",
    car: "Loan Against Car",
  };

  const titleText = loanTitles[loanType] || "Loan Application";

  return {
    title: `${titleText} – Apply Online | CredPe`,
    description: `Apply for ${titleText} with CredPe. Secure loan process, instant OTP verification, and fast approval.`,
    keywords: [
      `${titleText} apply`,
      `${titleText} online`,
      "loan application",
      "CredPe loans",
      "OTP loan verification",
    ],
  };
}

"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card, CardContent } from "../../components/ui/card";
import { useToast } from "../../hooks/useToast";
import { ArrowLeft, Shield, CheckCircle, RefreshCw } from "lucide-react";
import Header from "@/app/components/Header";
// import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function MobileVerificationFlow() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();

  const loanTypeParam = params?.loanType;
  const loanTitles = {
    personal: "Personal Loan",
    business: "Business Loan",
    education: "Education Loan",
    home: "Home Loan",
    vehicle: "Vehicle Loan",
    medical: "Medical Loan",
    gold: "Gold Loan",
    property: "Loan Against Property",
    "transfer-home": "Transfer Home Loan",
    car: "Loan Against Car",
  };

  const [step, setStep] = useState("mobile");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resendCount, setResendCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const validatePhoneNumber = (phone) => /^[6-9]\d{9}$/.test(phone);

  const handleSendOtp = async () => {
    if (!validatePhoneNumber(phoneNumber)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit mobile number starting with 6-9.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("https://credpe-backend.vercel.app/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mobile: phoneNumber,
          loanType: loanTitles[loanTypeParam] || "Personal Loan",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setIsOtpSent(true);
        setStep("otp");
        setTimer(60);
        toast({
          title: "OTP Sent Successfully",
          description: `OTP sent to +91 ${phoneNumber}. Use 123456 for demo.`,
        });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send OTP",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Send OTP error:", error);
      toast({
        title: "Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleResendOtp = async () => {
    if (resendCount >= 2) {
      toast({
        title: "Resend Limit Reached",
        description: "Please try again later.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("https://credpe-backend.vercel.app/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mobile: phoneNumber,
          loanType: loanTitles[loanTypeParam] || "Personal Loan",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setResendCount(resendCount + 1);
        setTimer(60);
        toast({
          title: "OTP Resent",
          description: `New OTP sent to +91 ${phoneNumber}. Use 123456 for demo.`,
        });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to resend OTP",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Resend OTP error:", error);
      toast({
        title: "Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

const handleVerifyOtp = async () => {
  if (otp.length !== 6) {
    toast({ title: "Invalid OTP", description: "Please enter a 6-digit OTP.", variant: "destructive" });
    return;
  }

  setIsLoading(true);
  try {
    const res = await fetch("https://credpe-backend.vercel.app/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile: phoneNumber, otp, loanType: loanTitles[loanTypeParam] || "Personal Loan" }),
    });
    const data = await res.json();
    console.log("Verify OTP Response:", data); // Debug the response
    if (data.success) {
      localStorage.setItem("mobileVerified", JSON.stringify({ phoneNumber, loanType: loanTitles[loanTypeParam] || "Personal Loan", leadId: data.zohoResult.leadId }));
      toast({ title: "OTP Verified Successfully", description: `OTP verified for +91 ${phoneNumber}.` });
      router.push(`/apply/${loanTypeParam}/details`);
    } else {
      toast({ title: "Verification Failed", description: data.message || "Invalid OTP or server error. Please try again.", variant: "destructive" });
    }
  } catch (error) {
    console.error("Verify OTP error:", error);
    toast({ title: "Network Error", description: "Please check your connection and try again.", variant: "destructive" });
  }
  setIsLoading(false);
};

  const currentLoanTitle = loanTitles[loanTypeParam] || "Personal Loan";
  const currentLoanImage = `/assets/${loanTypeParam}-loan.jpg` || "/assets/personal-loan.jpg";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="">
          {/* Mobile Layout: Blue section first, then form */}
          <div className="md:hidden space-y-6">
            {/* Blue section for mobile */}
            <div className="relative  text-center text-white">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-foreground">Secure Loans in Minutes</h3>
                  <p className="text-lg text-gray-600">Get approved for your {currentLoanTitle} with our quick and secure process</p>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-primary"><Shield className="h-5 w-5" /><span className="text-primary font-medium">100% Secure</span></div>
                    <div className="flex items-center gap-2 text-primary"><CheckCircle className="h-5 w-5" /><span className="text-primary font-medium">Instant Approval</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form section for mobile */}
            <Card className="bg-white border border-primary shadow-md">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {step === "mobile" ? "Enter Mobile Number" : "Enter OTP"}
                    </h3>
                    <p className="text-muted-foreground">
                      {step === "mobile" ? "We'll send you a verification code" : `OTP sent to +91 ${phoneNumber}`}
                    </p>
                  </div>
                  <div className="space-y-6">
                    {step === "mobile" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="phoneNumber" className="text-sm font-medium">Mobile Number</Label>
                          <div className="flex gap-3">
                            <div className="flex items-center bg-muted px-3 rounded-md border"><span className="text-sm font-medium">+91</span></div>
                            <Input
                              id="phoneNumber"
                              type="tel"
                              placeholder="8292458790"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                              className="flex-1"
                            />
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <input
                            type="checkbox"
                            id="terms"
                            checked={isTermsAccepted}
                            onChange={(e) => setIsTermsAccepted(e.target.checked)}
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="terms" className="text-xs text-muted-foreground">
                            I confirm this is my registered number and authorize Credpe & partners to contact me via call, SMS, WhatsApp, or email (even if on DND), as per the{" "}
                            <a href="/terms" className="text-blue-600 hover:underline" target="_blank">
                              Terms & Conditions
                            </a>{" "}
                            and{" "}
                            <a href="/privacy" className="text-blue-600 hover:underline" target="_blank">
                              Privacy Policy.
                            </a>
                          </label>
                        </div>
                        <Button
                          onClick={handleSendOtp}
                          disabled={!phoneNumber || phoneNumber.length !== 10 || !isTermsAccepted || isLoading}
                          className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                          {isLoading ? <div className="flex items-center gap-2"><RefreshCw className="h-4 w-4 animate-spin" />Sending OTP...</div> : "Send OTP"}
                        </Button>
                      </>
                    )}
                    {step === "otp" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="otp" className="text-sm font-medium">Enter 6-Digit OTP</Label>
                          <Input
                            id="otp"
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                            className="text-center text-lg font-mono tracking-widest"
                          />
                        </div>
                        <Button
                          onClick={handleVerifyOtp}
                          disabled={otp.length !== 6 || isLoading}
                          className="w-full bg-green-600 hover:bg-green-700"
                        >
                          {isLoading ? <div className="flex items-center gap-2"><RefreshCw className="h-4 w-4 animate-spin" />Verifying...</div> : "Verify OTP"}
                        </Button>
                        <div className="text-center space-y-2">
                          {timer > 0 ? (
                            <p className="text-sm text-muted-foreground">Resend OTP in {timer} seconds</p>
                          ) : (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={handleResendOtp}
                              disabled={resendCount >= 2 || isLoading}
                            >
                              Resend OTP {resendCount > 0 && `(${resendCount}/2)`}
                            </Button>
                          )}
                          {resendCount >= 2 && <p className="text-xs text-destructive">Maximum resend attempts reached</p>}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Desktop Layout: Original grid layout */}
          <section className="flex items-center justify-center py-12">
<div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="relative bg-primary rounded-2xl h-[410px] p-6 text-center text-white order-2 lg:order-1">
              <div className="space-y-6">
                <div className="relative mx-auto w-48 h-48 rounded-xl overflow-hidden shadow-2xl">
                  <Image src={currentLoanImage} alt={currentLoanTitle} height={100} width={100} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold">Secure Loans in Minutes</h3>
                  <p className="text-lg opacity-90">Get approved for your {currentLoanTitle} with our quick and secure process</p>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2"><Shield className="h-5 w-5" /><span>100% Secure</span></div>
                    <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5" /><span>Instant Approval</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Card className="bg-white border border-primary rounded-2xl shadow-md h-[400px]">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {step === "mobile" ? "Enter Mobile Number" : "Enter OTP"}
                      </h3>
                      <p className="text-muted-foreground">
                        {step === "mobile" ? "We'll send you a verification code" : `OTP sent to +91 ${phoneNumber}`}
                      </p>
                    </div>
                    <div className="space-y-6">
                      {step === "mobile" && (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="phoneNumber" className="text-sm font-medium">Mobile Number</Label>
                            <div className="flex gap-3">
                              <div className="flex items-center bg-muted px-3 rounded-md border"><span className="text-sm font-medium">+91</span></div>
                              <Input
                                id="phoneNumber"
                                type="tel"
                                placeholder="8292458790"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                                className="flex-1"
                              />
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <input
                              type="checkbox"
                              id="terms"
                              checked={isTermsAccepted}
                              onChange={(e) => setIsTermsAccepted(e.target.checked)}
                              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="terms" className="text-xs text-muted-foreground">
                            I confirm this is my registered number and authorize Credpe & partners to contact me via call, SMS, WhatsApp, or email (even if on DND), as per the{" "}
                            <a href="/terms" className="text-blue-600 hover:underline" target="_blank">
                              Terms & Conditions
                            </a>{" "}
                            and{" "}
                            <a href="/privacy" className="text-blue-600 hover:underline" target="_blank">
                              Privacy Policy.
                            </a>
                          </label>
                          </div>
                          <Button
                            onClick={handleSendOtp}
                            disabled={!phoneNumber || phoneNumber.length !== 10 || !isTermsAccepted || isLoading}
                            className="w-full bg-blue-600 hover:bg-blue-700"
                          >
                            {isLoading ? <div className="flex items-center gap-2"><RefreshCw className="h-4 w-4 animate-spin" />Sending OTP...</div> : "Send OTP"}
                          </Button>
                        </>
                      )}
                      {step === "otp" && (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="otp" className="text-sm font-medium">Enter 6-Digit OTP</Label>
                            <Input
                              id="otp"
                              type="text"
                              placeholder="Enter OTP"
                              value={otp}
                              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                              className="text-center text-lg font-mono tracking-widest"
                            />
                          </div>
                          <Button
                            onClick={handleVerifyOtp}
                            disabled={otp.length !== 6 || isLoading}
                            className="w-full bg-green-600 hover:bg-green-700"
                          >
                            {isLoading ? <div className="flex items-center gap-2"><RefreshCw className="h-4 w-4 animate-spin" />Verifying...</div> : "Verify OTP"}
                          </Button>
                          <div className="text-center space-y-2">
                            {timer > 0 ? (
                              <p className="text-sm text-muted-foreground">Resend OTP in {timer} seconds</p>
                            ) : (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleResendOtp}
                                disabled={resendCount >= 2 || isLoading}
                              >
                                Resend OTP {resendCount > 0 && `(${resendCount}/2)`}
                              </Button>
                            )}
                            {resendCount >= 2 && <p className="text-xs text-destructive">Maximum resend attempts reached</p>}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          </section>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}