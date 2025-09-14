// "use client";

// import { useState, useEffect } from "react";
// import { useRouter, useParams } from "next/navigation";
// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Label } from "../../components/ui/label";
// // import { Progress } from "../../components/ui/progress";
// import { Card, CardContent } from "../../components/ui/card";
//  import { useToast } from "../../hooks/useToast";
// import { ArrowLeft, Shield, CheckCircle, RefreshCw } from "lucide-react";
// import Header from "@/app/components/Header";
// import Footer from "@/app/components/Footer";

// export default function MobileVerificationFlow() {
//   const router = useRouter();
//   const params = useParams();
//   const { toast } = useToast();

//   const loanType = params?.loanType;

//   // State management
//   const [step, setStep] = useState("mobile");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [resendCount, setResendCount] = useState(0);
//   const [timer, setTimer] = useState(0);

//   const loanTitles = {
//     personal: "Personal Loan",
//     business: "Business Loan", 
//     education: "Education Loan",
//     home: "Home Loan",
//     vehicle: "Vehicle Loan",
//     medical: "Medical Loan",
//     gold: "Gold Loan",
//     property: "Loan Against Property",
//     "transfer-home": "Transfer Home Loan",
//     car: "Loan Against Car"
//   };

//   const loanImages = {
//     personal: "/assets/personal-loan.jpg",
//     business: "/assets/business-loan.jpg",
//     education: "/assets/education-loan.jpg",
//     home: "/assets/home-loan.jpg",
//     vehicle: "/assets/vehicle-loan.jpg",
//     medical: "/assets/medical-loan.jpg",
//     gold: "/assets/gold-loan.jpg",
//     property: "/assets/property-loan.jpg",
//     "transfer-home": "/assets/transfer-home-loan.jpg",
//     car: "/assets/car-loan.jpg"
//   };

//   // Timer countdown
//   useEffect(() => {
//     if (timer > 0) {
//       const countdown = setTimeout(() => setTimer(timer - 1), 1000);
//       return () => clearTimeout(countdown);
//     }
//   }, [timer]);

//   const validatePhoneNumber = (phone) => /^[6-9]\d{9}$/.test(phone);

//   // API Integration - Send OTP
//   const handleSendOtp = async () => {
//     if (!validatePhoneNumber(phoneNumber)) {
//       toast({
//         title: "Invalid Phone Number",
//         description: "Please enter a valid 10-digit mobile number.",
//         variant: "destructive"
//       });
//       return;
//     }

//     setIsLoading(true);
    
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/send-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           mobile: phoneNumber, 
//           loanType: loanTitles[loanType] || "Personal Loan" 
//         }),
//       });
      
//       const data = await res.json();
      
//       if (data.success) {
//         setIsOtpSent(true);
//         setStep("otp");
//         setTimer(60);
//         toast({
//           title: "OTP Sent Successfully",
//           description: `OTP sent to +91 ${phoneNumber}. Use 123456 for demo.`,
//         });
//       } else {
//         toast({
//           title: "Error",
//           description: data.message || "Failed to send OTP",
//           variant: "destructive"
//         });
//       }
//     } catch (error) {
//       console.error("Send OTP error:", error);
//       toast({
//         title: "Network Error",
//         description: "Please check your connection and try again.",
//         variant: "destructive"
//       });
//     }
    
//     setIsLoading(false);
//   };

//   // API Integration - Resend OTP
//   const handleResendOtp = async () => {
//     if (resendCount >= 2) {
//       toast({
//         title: "Resend Limit Reached",
//         description: "Please try again later.",
//         variant: "destructive"
//       });
//       return;
//     }

//     setIsLoading(true);
    
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/send-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           mobile: phoneNumber, 
//           loanType: loanTitles[loanType] || "Personal Loan" 
//         }),
//       });
      
//       const data = await res.json();
      
//       if (data.success) {
//         setResendCount(resendCount + 1);
//         setTimer(60);
//         toast({
//           title: "OTP Resent",
//           description: `New OTP sent to +91 ${phoneNumber}. Use 123456 for demo.`,
//         });
//       } else {
//         toast({
//           title: "Error",
//           description: data.message || "Failed to resend OTP",
//           variant: "destructive"
//         });
//       }
//     } catch (error) {
//       console.error("Resend OTP error:", error);
//       toast({
//         title: "Network Error",
//         description: "Please check your connection and try again.",
//         variant: "destructive"
//       });
//     }
    
//     setIsLoading(false);
//   };

//   // API Integration - Verify OTP
//   const handleVerifyOtp = async () => {
//     if (otp.length !== 6) {
//       toast({
//         title: "Invalid OTP",
//         description: "Please enter a 6-digit OTP.",
//         variant: "destructive"
//       });
//       return;
//     }

//     setIsLoading(true);
    
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           mobile: phoneNumber, 
//           otp: otp,
//           loanType: loanTitles[loanType] || "Personal Loan" 
//         }),
//       });
      
//       const data = await res.json();
      
// if (data.success) {
//   setIsOtpSent(true);
//   setTimer(60);
//   toast({
//     title: "OTP Verified Successfully",
//     description: `OTP verified for +91 ${phoneNumber}.`,
//   });

//   // Save verification data
//   localStorage.setItem(
//     "mobileVerified",
//     JSON.stringify({ phoneNumber, loanType })
//   );

//   // Navigate to details page
//   router.push(`/apply/${loanType}/details`);
// }

//        else {
//         toast({
//           title: "Verification Failed",
//           description: data.message || "Invalid OTP. Please try again.",
//           variant: "destructive"
//         });
//       }
//     } catch (error) {
//       console.error("Verify OTP error:", error);
//       toast({
//         title: "Network Error",
//         description: "Please check your connection and try again.",
//         variant: "destructive"
//       });
//     }
    
//     setIsLoading(false);
//   };

//   const currentLoanTitle = loanTitles[loanType] || "Personal Loan";
//   const currentLoanImage = loanImages[loanType] || loanImages.personal;

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />

//       <main className="">
//         <div className="container mx-auto px-4 py-8">
//           {/* Progress Bar */}
//           <div className="max-w-4xl mx-auto mb-8">
//             {/* <div className="flex items-center justify-between mb-4">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => router.back()}
//                 className="flex items-center gap-2"
//               >
//                 <ArrowLeft className="h-4 w-4" />
//                 Back
//               </Button>
//               <span className="text-sm text-muted-foreground">
//                 Step 1 of 6 - Mobile Verification
//               </span>
//             </div> */}
//             {/* <Progress value={16.67} className="h-2" /> */}
//           </div>

//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px]">
//               {/* Left Side */}
//               <div className="relative bg-primary rounded-2xl p-6 text-center text-white order-2 lg:order-1">
//                 <div className="space-y-6">
//                   <div className="relative mx-auto w-48 h-48 lg:w-64 lg:h-64 rounded-xl overflow-hidden shadow-2xl">
//                     <img
//                       src={currentLoanImage}
//                       alt={currentLoanTitle}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-black/20" />
//                   </div>
//                   <div className="space-y-4">
//                     <h3 className="font-bold">
//                       Secure Loans in Minutes
//                     </h3>
//                     <p className="text-lg opacity-90">
//                       Get approved for your {currentLoanTitle} with our quick and secure process
//                     </p>
//                     <div className="flex items-center justify-center gap-4 text-sm">
//                       <div className="flex items-center gap-2">
//                         <Shield className="h-5 w-5" />
//                         <span>100% Secure</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <CheckCircle className="h-5 w-5" />
//                         <span>Instant Approval</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Side */}
//               <div className="order-1 lg:order-2">
//                 <Card className="bg-white border-0 shadow-xl">
//                   <CardContent className="p-8">
//                     <div className="space-y-6">
//                       <div className="text-center">
//                         <h3 className="text-2xl font-bold text-foreground mb-2">
//                           {step === "mobile" ? "Enter Mobile Number" : "Enter OTP"}
//                         </h3>
//                         <p className="text-muted-foreground">
//                           {step === "mobile" ? "We'll send you a verification code" : `OTP sent to +91 ${phoneNumber}`}
//                         </p>
//                       </div>

//                       <div className="space-y-6">
//                         {step === "mobile" && (
//                           <>
//                             {/* Phone Input */}
//                             <div className="space-y-2">
//                               <Label htmlFor="phoneNumber" className="text-sm font-medium">
//                                 Mobile Number
//                               </Label>
//                               <div className="flex gap-3">
//                                 <div className="flex items-center bg-muted px-3 rounded-md border">
//                                   <span className="text-sm font-medium">+91</span>
//                                 </div>
//                                 <Input
//                                   id="phoneNumber"
//                                   type="tel"
//                                   placeholder="e.g. 9999999999"
//                                   value={phoneNumber}
//                                   onChange={(e) =>
//                                     setPhoneNumber(
//                                       e.target.value.replace(/\D/g, "").slice(0, 10)
//                                     )
//                                   }
//                                   className="flex-1"
//                                 />
//                               </div>
//                               <p className="text-sm text-gray-500">No spam calls, we promise!</p>
//                             </div>

//                             {/* Send OTP */}
//                             <Button
//                               onClick={handleSendOtp}
//                               disabled={!phoneNumber || phoneNumber.length !== 10 || isLoading}
//                               className="w-full bg-blue-600 hover:bg-blue-700"
//                             >
//                               {isLoading ? (
//                                 <div className="flex items-center gap-2">
//                                   <RefreshCw className="h-4 w-4 animate-spin" />
//                                   Sending OTP...
//                                 </div>
//                               ) : (
//                                 "Send OTP"
//                               )}
//                             </Button>
//                           </>
//                         )}

//                         {step === "otp" && (
//                           <>
//                             {/* OTP Input */}
//                             <div className="space-y-2">
//                               <Label htmlFor="otp" className="text-sm font-medium">
//                                 Enter 6-Digit OTP
//                               </Label>
//                               <Input
//                                 id="otp"
//                                 type="text"
//                                 placeholder="Enter OTP"
//                                 value={otp}
//                                 onChange={(e) =>
//                                   setOtp(
//                                     e.target.value.replace(/\D/g, "").slice(0, 6)
//                                   )
//                                 }
//                                 className="text-center text-lg font-mono tracking-widest"
//                               />
//                             </div>

//                             <Button
//                               onClick={handleVerifyOtp}
//                               disabled={otp.length !== 6 || isLoading}
//                               className="w-full bg-green-600 hover:bg-green-700"
//                             >
//                               {isLoading ? (
//                                 <div className="flex items-center gap-2">
//                                   <RefreshCw className="h-4 w-4 animate-spin" />
//                                   Verifying...
//                                 </div>
//                               ) : (
//                                 "Verify OTP"
//                               )}
//                             </Button>

//                             {/* Resend */}
//                             <div className="text-center space-y-2">
//                               {timer > 0 ? (
//                                 <p className="text-sm text-muted-foreground">
//                                   Resend OTP in {timer} seconds
//                                 </p>
//                               ) : (
//                                 <Button
//                                   variant="ghost"
//                                   size="sm"
//                                   onClick={handleResendOtp}
//                                   disabled={resendCount >= 2 || isLoading}
//                                 >
//                                   Resend OTP {resendCount > 0 && `(${resendCount}/2)`}
//                                 </Button>
//                               )}

//                               {resendCount >= 2 && (
//                                 <p className="text-xs text-destructive">
//                                   Maximum resend attempts reached
//                                 </p>
//                               )}
//                             </div>
//                           </>
//                         )}
//                       </div>

//                       <div className="pt-4 border-t border-border">
//                         <p className="text-xs text-muted-foreground text-center">
//                           I confirm that this is my registered mobile number and authorize the use of it for communications related to my loan application, as per the Terms & Conditions and Privacy Policy.
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

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
import Footer from "@/app/components/Footer";
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
      const res = await fetch("http://localhost:5000/api/auth/send-otp", {
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
      const res = await fetch("http://localhost:5000/api/auth/send-otp", {
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
    const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px]">
          <div className="relative bg-primary rounded-2xl p-6 text-center text-white order-2 lg:order-1">
            <div className="space-y-6">
              <div className="relative mx-auto w-48 h-48 lg:w-64 lg:h-64 rounded-xl overflow-hidden shadow-2xl">
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
            <Card className="bg-white border-0 shadow-xl">
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
                              placeholder="e.g. 9999999999"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                              className="flex-1"
                            />
                          </div>
                          <p className="text-sm text-gray-500">No spam calls, we promise!</p>
                        </div>
                        <Button
                          onClick={handleSendOtp}
                          disabled={!phoneNumber || phoneNumber.length !== 10 || isLoading}
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
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      I confirm that this is my registered mobile number and authorize the use of it for communications related to my loan application, as per the Terms & Conditions and Privacy Policy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}