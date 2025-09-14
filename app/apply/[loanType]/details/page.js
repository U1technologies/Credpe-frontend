

// "use client";

// import { useState, useEffect } from "react";
// import { useRouter, useParams } from "next/navigation";
// import { Button } from "../../../components/ui/button";
// import { Input } from "../../../components/ui/input";
// import { Label } from "../../../components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../../components/ui/select";
// import { Card, CardContent } from "../../../components/ui/card";
// import { useToast } from "../../../hooks/useToast";
// import { ArrowLeft, Phone } from "lucide-react";
// import Header from "@/app/components/Header";
// import Footer from "@/app/components/Footer";

// export default function ApplicationDetails() {
//   const params = useParams();
//   const loanType = params?.loanType;
//   const router = useRouter();
//   const { toast } = useToast();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     dateOfBirth: "",
//     employmentType: "",
//     monthlyIncome: "",
//     cityPincode: "",
//   });

//   const [verificationData, setVerificationData] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     const savedVerification = localStorage.getItem("mobileVerified");
//     if (!savedVerification) {
//       // ✅ Use replace to avoid history glitch
//       router.replace(`/apply/${loanType}`);
//       return;
//     }
//     setVerificationData(JSON.parse(savedVerification));
//   }, [loanType, router]);

//   const loanTitles = {
//     personal: "Personal Loan",
//     business: "Business Loan",
//     education: "Education Loan",
//     home: "Home Loan",
//     vehicle: "Vehicle Loan",
//     medical: "Medical Loan",
//   };

//   const loanImages = {
//     personal: "/src/assets/personal-loan.jpg",
//     business: "/src/assets/business-loan.jpg",
//     education: "/src/assets/education-loan.jpg",
//     home: "/src/assets/home-loan.jpg",
//     vehicle: "/src/assets/vehicle-loan.jpg",
//     medical: "/src/assets/medical-loan.jpg",
//   };

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     if (
//       !formData.fullName ||
//       !formData.email ||
//       !formData.dateOfBirth ||
//       !formData.employmentType ||
//       !formData.monthlyIncome ||
//       !formData.cityPincode
//     ) {
//       toast({
//         title: "Error",
//         description: "Please fill in all required fields.",
//         variant: "destructive",
//       });
//       setIsSubmitting(false);
//       return;
//     }

//     const applicationId = `APP${Math.floor(Math.random() * 100000)
//       .toString()
//       .padStart(5, "0")}`;

//     try {
//       // Submit to backend API
//       const response = await fetch("http://localhost:5000/api/auth/submit-application", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...formData,
//           phoneNumber: verificationData?.phoneNumber,
//           loanType: loanTitles[loanType || "personal"],
//           applicationId,
//         }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         // Store data locally for the success page
//         localStorage.setItem(
//           "applicationData",
//           JSON.stringify({
//             ...formData,
//             phoneNumber: verificationData?.phoneNumber,
//             loanType: loanTitles[loanType || "personal"],
//             applicationId,
//             submittedAt: new Date().toISOString(),
//           })
//         );

//         localStorage.removeItem("mobileVerified");

//         toast({
//           title: "Success",
//           description: "Application submitted successfully!",
//           variant: "default",
//         });

//         router.replace(`/apply/${loanType}/application-submitted`);
//       } else {
//         throw new Error(result.message || "Failed to submit application");
//       }
//     } catch (error) {
//       console.error("Error submitting application:", error);
//       toast({
//         title: "Error",
//         description: error.message || "Failed to submit application. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const currentLoanTitle = loanTitles[loanType || "personal"];
//   const currentLoanImage = loanImages[loanType || "personal"];

//   if (!verificationData) {
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />

//       <main className="pt-20">
//         <div className="container mx-auto px-4 py-8">
//           {/* Progress Bar */}
//           <div className="max-w-4xl mx-auto mb-8">
//             <div className="flex items-center justify-between mb-4">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => router.replace(`/apply/${loanType}`)}
//                 className="flex items-center gap-2"
//                 disabled={isSubmitting}
//               >
//                 <ArrowLeft className="h-4 w-4" />
//                 Back
//               </Button>
//               <span className="text-sm text-muted-foreground">
//                 Step 2 of 6 - Personal Details
//               </span>
//             </div>
//           </div>

//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//               {/* Left Side */}
//               <div className="relative bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center text-white order-2 lg:order-1">
//                 <div className="space-y-6">
//                   <div className="relative mx-auto w-48 h-48 lg:w-64 lg:h-64 rounded-xl overflow-hidden shadow-strong">
//                     <img
//                       src={currentLoanImage}
//                       alt={currentLoanTitle}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-black/20" />
//                   </div>

//                   <div className="space-y-4">
//                     <h2 className="text-2xl lg:text-3xl font-bold">
//                       {currentLoanTitle}
//                     </h2>
//                     <p className="text-lg opacity-90">
//                       Complete your application with accurate personal
//                       information
//                     </p>

//                     <div className="bg-white/10 backdrop-blur rounded-lg p-4">
//                       <div className="flex items-center justify-center gap-2 text-sm">
//                         <Phone className="h-4 w-4" />
//                         <span>
//                           Verified: +91 {verificationData.phoneNumber}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Side */}
//               <div className="order-1 lg:order-2">
//                 <Card className="gradient-card border-0 shadow-medium">
//                   <CardContent className="p-8">
//                     <div className="space-y-6">
//                       <div className="text-center">
//                         <h3 className="text-2xl font-bold text-foreground mb-2">
//                           Personal Details
//                         </h3>
//                         <p className="text-muted-foreground">
//                           Please provide your personal information to continue
//                         </p>
//                       </div>

//                       <form onSubmit={handleSubmit} className="space-y-6">
//                         <div className="space-y-2">
//                           <Label htmlFor="fullName">Full Name *</Label>
//                           <Input
//                             id="fullName"
//                             value={formData.fullName}
//                             onChange={(e) =>
//                               handleInputChange("fullName", e.target.value)
//                             }
//                             placeholder="Enter your full name as per ID"
//                             required
//                             disabled={isSubmitting}
//                           />
//                         </div>

//                         <div className="space-y-2">
//                           <Label htmlFor="email">Email Address *</Label>
//                           <Input
//                             id="email"
//                             type="email"
//                             value={formData.email}
//                             onChange={(e) =>
//                               handleInputChange("email", e.target.value)
//                             }
//                             placeholder="Enter your email address"
//                             required
//                             disabled={isSubmitting}
//                           />
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           <div className="space-y-2">
//                             <Label htmlFor="dateOfBirth">Date of Birth *</Label>
//                             <Input
//                               id="dateOfBirth"
//                               type="date"
//                               value={formData.dateOfBirth}
//                               onChange={(e) =>
//                                 handleInputChange(
//                                   "dateOfBirth",
//                                   e.target.value
//                                 )
//                               }
//                               required
//                               disabled={isSubmitting}
//                             />
//                           </div>

//                           <div className="space-y-2">
//                             <Label htmlFor="employmentType">
//                               Employment Type *
//                             </Label>
//                             <Select
//                               value={formData.employmentType}
//                               onValueChange={(value) =>
//                                 handleInputChange("employmentType", value)
//                               }
//                               disabled={isSubmitting}
//                             >
//                               <SelectTrigger>
//                                 <SelectValue placeholder="Select employment type" />
//                               </SelectTrigger>
//                               <SelectContent>
//                                 <SelectItem value="salaried">
//                                   Salaried
//                                 </SelectItem>
//                                 <SelectItem value="self-employed">
//                                   Self-Employed
//                                 </SelectItem>
//                               </SelectContent>
//                             </Select>
//                           </div>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           <div className="space-y-2">
//                             <Label htmlFor="monthlyIncome">
//                               Monthly Income (₹) *
//                             </Label>
//                             <Input
//                               id="monthlyIncome"
//                               type="number"
//                               value={formData.monthlyIncome}
//                               onChange={(e) =>
//                                 handleInputChange(
//                                   "monthlyIncome",
//                                   e.target.value
//                                 )
//                               }
//                               placeholder="Enter monthly income"
//                               required
//                               disabled={isSubmitting}
//                             />
//                           </div>

//                           <div className="space-y-2">
//                             <Label htmlFor="cityPincode">City/Pincode *</Label>
//                             <Input
//                               id="cityPincode"
//                               value={formData.cityPincode}
//                               onChange={(e) =>
//                                 handleInputChange(
//                                   "cityPincode",
//                                   e.target.value
//                                 )
//                               }
//                               placeholder="Enter city or pincode"
//                               required
//                               disabled={isSubmitting}
//                             />
//                           </div>
//                         </div>

//                         <div className="pt-6 space-y-4">
//                           <Button 
//                             type="submit" 
//                             className="w-full" 
//                             size="lg"
//                             disabled={isSubmitting}
//                           >
//                             {isSubmitting ? "Submitting..." : "Submit Application"}
//                           </Button>

//                           <p className="text-xs text-muted-foreground text-center">
//                             By proceeding, you agree to our Terms & Conditions
//                             and Privacy Policy. Your information is secure and
//                             will be used only for loan processing.
//                           </p>
//                         </div>
//                       </form>
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
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { Card, CardContent } from "../../../components/ui/card";
import { useToast } from "../../../hooks/useToast";
import { ArrowLeft, Phone } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function ApplicationDetails() {
  const params = useParams();
  const loanType = params?.loanType;
  const router = useRouter();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    employmentType: "",
    monthlyIncome: "",
    cityPincode: "",
  });
  const [verificationData, setVerificationData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedVerification = localStorage.getItem("mobileVerified");
    if (!savedVerification) {
      router.replace(`/apply/${loanType}`);
      return;
    }
    setVerificationData(JSON.parse(savedVerification));
  }, [loanType, router]);

  const loanTitles = {
    personal: "Personal Loan",
    business: "Business Loan",
    education: "Education Loan",
    home: "Home Loan",
    vehicle: "Vehicle Loan",
    medical: "Medical Loan",
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: field === "monthlyIncome" ? value.replace(/[^0-9.]/g, "").slice(0, 16) : value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  if (!formData.fullName || !formData.email || !formData.dateOfBirth || !formData.employmentType || !formData.monthlyIncome || !formData.cityPincode) {
    toast({ title: "Error", description: "Please fill in all required fields.", variant: "destructive" });
    setIsSubmitting(false);
    return;
  }

  const applicationId = `APP${Math.floor(Math.random() * 100000).toString().padStart(5, "0")}`;
  const monthlyIncome = parseFloat(formData.monthlyIncome) || 0;
  const verificationData = JSON.parse(localStorage.getItem("mobileVerified") || "{}");

  try {
    const response = await fetch("http://localhost:5000/api/auth/submit-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        dateOfBirth: formData.dateOfBirth,
        employmentType: formData.employmentType,
        monthlyIncome: monthlyIncome.toFixed(2),
        cityPincode: formData.cityPincode,
        phoneNumber: verificationData?.phoneNumber,
        loanType: loanTitles[loanType || "personal"],
        applicationId,
        leadId: verificationData?.leadId, // Pass the leadId from OTP step
      }),
    });
    const result = await response.json();

    if (result.success) {
      localStorage.setItem("applicationData", JSON.stringify({
        ...formData,
        phoneNumber: verificationData?.phoneNumber,
        loanType: loanTitles[loanType || "personal"],
        applicationId,
        submittedAt: new Date().toISOString(),
      }));
      localStorage.removeItem("mobileVerified");
      toast({ title: "Success", description: "Application submitted successfully!", variant: "default" });
      router.replace(`/apply/${loanType}/application-submitted`);
    } else {
      throw new Error(result.message || "Failed to submit application");
    }
  } catch (error) {
    console.error("Error submitting application:", error);
    toast({ title: "Error", description: error.message || "Failed to submit application. Please try again.", variant: "destructive" });
  } finally {
    setIsSubmitting(false);
  }
};

  const currentLoanTitle = loanTitles[loanType || "personal"];
  const currentLoanImage = `/src/assets/${loanType || "personal"}-loan.jpg`;

  if (!verificationData) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.replace(`/apply/${loanType}`)}
                className="flex items-center gap-2"
                disabled={isSubmitting}
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
              <span className="text-sm text-muted-foreground">Step 2 of 6 - Personal Details</span>
            </div>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="relative bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center text-white order-2 lg:order-1">
              <div className="space-y-6">
                <div className="relative mx-auto w-48 h-48 lg:w-64 lg:h-64 rounded-xl overflow-hidden shadow-strong">
                  <Image src={currentLoanImage} alt={currentLoanTitle} height={100} width={100} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold">{currentLoanTitle}</h2>
                  <p className="text-lg opacity-90">Complete your application with accurate personal information</p>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Phone className="h-4 w-4" />
                      <span>Verified: +91 {verificationData.phoneNumber}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Card className="gradient-card border-0 shadow-medium">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Personal Details</h3>
                      <p className="text-muted-foreground">Please provide your personal information to continue</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input id="fullName" value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} placeholder="Enter your full name as per ID" required disabled={isSubmitting} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="Enter your email address" required disabled={isSubmitting} />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                          <Input id="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={(e) => handleInputChange("dateOfBirth", e.target.value)} required disabled={isSubmitting} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="employmentType">Employment Type *</Label>
                          <Select value={formData.employmentType} onValueChange={(value) => handleInputChange("employmentType", value)} disabled={isSubmitting}>
                            <SelectTrigger><SelectValue placeholder="Select employment type" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="salaried">Salaried</SelectItem>
                              <SelectItem value="self-employed">Self-Employed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="monthlyIncome">Monthly Income (₹) *</Label>
                          <Input id="monthlyIncome" type="number" step="0.01" value={formData.monthlyIncome} onChange={(e) => handleInputChange("monthlyIncome", e.target.value)} placeholder="Enter monthly income" required disabled={isSubmitting} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cityPincode">City/Pincode *</Label>
                          <Input id="cityPincode" value={formData.cityPincode} onChange={(e) => handleInputChange("cityPincode", e.target.value)} placeholder="Enter city or pincode" required disabled={isSubmitting} />
                        </div>
                      </div>
                      <div className="pt-6 space-y-4">
                        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Submit Application"}
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">By proceeding, you agree to our Terms & Conditions and Privacy Policy. Your information is secure and will be used only for loan processing.</p>
                      </div>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}