"use client";

import React, { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { Percent, Calendar } from "lucide-react";
import loan from "../../public/assets/time.png";
import interest from "../../public/assets/interest.png";
import Image from "next/image";
import { DollarSign, Timer, BadgeCheck } from "lucide-react";

const LoanCalculator = ({ onApplyNow }) => {
  const [loanAmount, setLoanAmount] = useState([200000]);
  const [tenure, setTenure] = useState([24]);
  const [interestRate] = useState(12.5);
  const [emi, setEmi] = useState(0);
  const [mobileNumber, setMobileNumber] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(true);

  const [otpStep, setOtpStep] = useState("input");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const [resendCount, setResendCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // EMI Calc
  useEffect(() => {
    const P = loanAmount[0];
    const R = interestRate / 100 / 12;
    const N = tenure[0];
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(Math.round(emi));
  }, [loanAmount, tenure, interestRate]);

  // Timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  const generateOTP = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

  const handleSendOTP = async () => {
    if (!mobileNumber || mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newOtp = generateOTP();
    setGeneratedOtp(newOtp);
    setOtpStep("verify");
    setTimer(30);
    setIsLoading(false);
    alert(`Demo OTP: ${newOtp}`);
  };

  const handleResendOTP = async () => {
    if (resendCount >= 2) {
      alert("Maximum resend attempts reached. Please try again later.");
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newOtp = generateOTP();
    setGeneratedOtp(newOtp);
    setTimer(30);
    setResendCount((prev) => prev + 1);
    setOtp("");
    setIsLoading(false);
    alert(`Demo OTP: ${newOtp}`);
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      alert("Please enter complete OTP");
      return;
    }
    if (otp !== generatedOtp) {
      alert("Invalid OTP, try again");
      setOtp("");
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);

    localStorage.setItem(
      "mobileVerified",
      JSON.stringify({
        phoneNumber: mobileNumber,
        leadId: `LEAD${Date.now().toString().slice(-6)}`,
        verifiedAt: new Date().toISOString(),
      })
    );

    onApplyNow(mobileNumber);
  };

  const handleEditNumber = () => {
    setOtpStep("input");
    setOtp("");
    setTimer(0);
    setResendCount(0);
  };

  return (
    <div className=" bg-background flex items-center justify-center w-[85%] max-md:w-[95%] mx-auto pt-10 pb-10 max-md:pb-6">
      <div className="w-full flex flex-col lg:flex-row gap-8">

        {/* --- LEFT SECTION (existing content preserved) --- */}
        <div className="lg:w-[40%] w-full space-y-4">

          {/* Desktop Left Content */}
          <div className="hidden md:block">
            <p className="text-[18px] font-semibold text-[#242a71]">
              10,000+ Personal Loans Sanctioned! &nbsp;
            </p>
            <div className="text-[32px] font-bold max-md:text-[24px] leading-[1.1]">
              Get the Best Personal Loan to Meet Your Needs
            </div>

            <div className="space-y-8 mt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#e1f1ff] flex items-center justify-center p-3">
                  <Image src="/assets/money-bag.png" width={75} height={75} alt="Offers" />
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-[#242a71]">Choose from the Best Offers</div>
                  <div className="text-sm text-[#555]">Apply for multiple personal loans in one go and discover the best one.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#e1f1ff] flex items-center justify-center p-3">
                  <Image src="/assets/approval.png" width={70} height={70} alt="Approval" />
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-[#242a71]">Higher Chances of Approval</div>
                  <div className="text-sm text-[#555]">Get quick assistance for hassle-free and instant loan approval.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-[#e1f1ff] flex items-center justify-center p-3">
                  <Image src="/assets/free.png" width={70} height={70} alt="Free Service" />
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-[#242a71]">Absolutely Free Service</div>
                  <div className="text-sm text-[#555]">100% end-to-end service at no additional cost to you.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile simplified view */}
<div className="block md:hidden text-center space-y-6">
  <div className="text-[24px] font-bold leading-[1.2] w-[95%]">
    Get the Best Personal Loan to Meet Your Needs
  </div>

  <div className="flex justify-around items-start">
    
    {/* 1️⃣ Best Offers */}
    <div className="flex flex-col items-center w-[30%]">
      <div className="rounded-full bg-[#e1f1ff] p-3 mb-2">
        <Image src="/assets/money-bag.png" width={40} height={40} alt="Offers" />
      </div>
      <div className="font-semibold text-[#242a71] leading-[1.2]">Choose from the Best Offers</div>
    </div>

    {/* 2️⃣ Approval */}
    <div className="flex flex-col items-center w-[30%]">
      <div className="rounded-full bg-[#e1f1ff] p-3 mb-2">
        <Image src="/assets/approval.png" width={40} height={40} alt="Approval" />
      </div>
      <div className="font-semibold text-[#242a71] leading-[1.2]">Higher Chances of Approval</div>
    </div>

    {/* 3️⃣ Free Service */}
    <div className="flex flex-col items-center w-[30%]">
      <div className="rounded-full bg-[#e1f1ff] p-3 mb-2">
        <Image src="/assets/free.png" width={40} height={40} alt="Free Service" />
      </div>
      <div className="font-semibold text-[#242a71] leading-[1.2]">Absolutely Free Service</div>
    </div>

  </div>
</div>

        </div>

        {/* --- RIGHT SECTION (form preserved) --- */}
        <div className="lg:w-[60%] w-full">
          <Card className="p-6 bg-card shadow-xl border border-black">
            <div className="space-y-5">

              {/* Existing functionality below remains untouched */}
              {/* Loan Amount */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="font-medium text-foreground">Loan Amount</label>
                  <span className="font-bold text-[#ff914d]">{formatCurrency(loanAmount[0])}</span>
                </div>
                <Slider value={loanAmount} onValueChange={setLoanAmount} max={500000} min={50000} step={10000} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>₹50,000</span>
                  <span>₹5,00,000</span>
                </div>
              </div>

              {/* Tenure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="font-medium text-foreground">Tenure (Months)</label>
                  <span className="font-bold">{tenure[0]} months</span>
                </div>
                <Slider value={tenure} onValueChange={setTenure} max={84} min={6} step={6} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>6 months</span>
                  <span>84 months</span>
                </div>
              </div>

              {/* EMI */}
              <div className="border border-primary bg-[#f4ece1] p-3 rounded-lg text-center">
                <span className="text-sm text-muted-foreground">EMI Amount</span>
                <h3 className="text-4xl font-bold text-[#ff914d]">{formatCurrency(emi)}</h3>
              </div>

              {/* Mobile / OTP */}
              {otpStep === "input" ? (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mobile no.</label>
                  <Input
                    type="tel"
                    placeholder="Bank registered number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    className="text-center bg-[#faf4eb]"
                  />
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex gap-2 items-center">
                    <label>Enter OTP sent to +91 {mobileNumber}</label>
                    <Button variant="link" onClick={handleEditNumber} className="text-xs p-0">
                      Edit
                    </Button>
                  </div>
                  <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                    <InputOTPGroup>
                      {[...Array(6)].map((_, i) => (
                        <InputOTPSlot key={i} index={i} />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                  <div className="">
                    {timer > 0 ? (
                      <p>Resend in {timer}s</p>
                    ) : (
                      <div className='cursor-pointer' onClick={handleResendOTP}>
                        Resend OTP
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Checkbox */}
              <div className="flex items-start gap-2">
                <Checkbox checked={termsAccepted} onCheckedChange={(checked) => setTermsAccepted(!!checked)} />
                <div className="text-sm text-muted-foreground">
                  I confirm this is my registered number and authorize CREDPE & partners to
                  contact me via call, SMS, WhatsApp, or email (even if on DND), as per the{" "}
                  Terms &amp; Conditions{" "}
                  and{" "}
                  Privacy Policy.
                </div>
              </div>

              {/* Buttons */}
              {otpStep === "input" ? (
                <Button
                  onClick={handleSendOTP}
                  disabled={!mobileNumber || isLoading}
                  className="w-full bg-[#ed8545]"
                >
                  {isLoading ? "Sending OTP..." : "Send OTP"}
                </Button>
              ) : (
                <Button
                  onClick={handleVerifyOTP}
                  disabled={otp.length !== 6 || isLoading}
                  className="w-full bg-[#ed8545]"
                >
                  {isLoading ? "Verifying..." : "Verify & Continue"}
                </Button>
              )}

            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
