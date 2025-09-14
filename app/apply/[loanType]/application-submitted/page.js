// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/app/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
// import { CheckCircle, FileText, ArrowLeft } from "lucide-react";
// import Header from "@/app/components/Header";
// import Footer from "@/app/components/Footer";

// export default function ApplicationSubmitted() {
//   const router = useRouter();
//   const [applicationData, setApplicationData] = useState(null);

//   useEffect(() => {
//     const data = localStorage.getItem("applicationData");
//     if (data) {
//       setApplicationData(JSON.parse(data));
//     } else {
//       router.push("/");
//     }
//   }, [router]);

//   if (!applicationData) {
//     return null;
//   }

//   const getLoanRoute = (loanType) => {
//     const routeMap = {
//       "Personal Loan": "/loans/personal",
//       "Business Loan": "/loans/business",
//       "Education Loan": "/loans/education",
//       "Home Loan": "/loans/home",
//       "Vehicle Loan": "/loans/vehicle",
//       "Medical Loan": "/loans/medical",
//     };
//     return routeMap[loanType] || "/";
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />

//       <main className="pt-20">
//         <div className="container mx-auto px-4 py-12">
//           <div className="max-w-2xl mx-auto">
//             <Card className="gradient-card border-0 shadow-elegant text-center">
//               <CardHeader className="pb-4">
//                 <div className="flex justify-center mb-4">
//                   <CheckCircle className="h-16 w-16 text-accent" />
//                 </div>
//                 <CardTitle className="text-3xl text-foreground mb-2">
//                   Application Submitted Successfully!
//                 </CardTitle>
//                 <p className="text-muted-foreground">
//                   Thank you {applicationData.fullName} for applying with CredPe
//                 </p>
//               </CardHeader>

//               <CardContent className="space-y-6">
//                 <div className="bg-muted/50 rounded-lg p-6">
//                   <h3 className="text-lg font-semibold mb-2">
//                     Application Details
//                   </h3>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex justify-between">
//                       <span className="text-muted-foreground">
//                         Application ID:
//                       </span>
//                       <span className="font-mono font-bold text-primary">
//                         #{applicationData.applicationId}
//                       </span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-muted-foreground">Loan Type:</span>
//                       <span className="font-semibold">
//                         {applicationData.loanType}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-accent/20 rounded-lg p-6">
//                   <h3 className="text-lg font-semibold mb-2 text-foreground">
//                     What's Next?
//                   </h3>
//                   <p className="text-muted-foreground text-sm">
//                     Our loan expert will reach out to you within 24 hours to
//                     discuss your application and guide you through the next
//                     steps. Please keep your documents ready.
//                   </p>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                   <Button
//                     variant="outline"
//                     className="flex-1"
//                     onClick={() => router.push(getLoanRoute(applicationData.loanType))}
//                   >
//                     <FileText className="mr-2 h-4 w-4" />
//                     View Required Documents
//                   </Button>
//                   <Button
//                     variant="cta"
//                     className="flex-1"
//                     onClick={() => router.push("/")}
//                   >
//                     <ArrowLeft className="mr-2 h-4 w-4" />
//                     Check Other Loan Options
//                   </Button>
//                 </div>

//                 <div className="pt-4 text-xs text-muted-foreground">
//                   Need help? Contact us at{" "}
//                   <span className="text-primary">support@credpe.in</span> or
//                   call <span className="text-primary">1800-123-4567</span>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { CheckCircle, FileText, ArrowLeft } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ApplicationSubmitted() {
  const router = useRouter();
  const [applicationData, setApplicationData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("applicationData");
    if (data) {
      setApplicationData(JSON.parse(data));
    } else {
      router.push("/");
    }
  }, [router]);

  if (!applicationData) return null;

  const getLoanRoute = (loanType) => {
    const routeMap = {
      "Personal Loan": "/loans/personal",
      "Business Loan": "/loans/business",
      "Education Loan": "/loans/education",
      "Home Loan": "/loans/home",
      "Vehicle Loan": "/loans/vehicle",
      "Medical Loan": "/loans/medical",
    };
    return routeMap[loanType] || "/";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <Card className="gradient-card border-0 shadow-elegant text-center">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4"><CheckCircle className="h-16 w-16 text-accent" /></div>
                <CardTitle className="text-3xl text-foreground mb-2">Application Submitted Successfully!</CardTitle>
                <p className="text-muted-foreground">Thank you {applicationData.fullName} for applying with CredPe</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Application Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Application ID:</span><span className="font-mono font-bold text-primary">#{applicationData.applicationId}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Loan Type:</span><span className="font-semibold">{applicationData.loanType}</span></div>
                  </div>
                </div>
                <div className="bg-accent/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">What&apos;s Next?</h3>
                  <p className="text-muted-foreground text-sm">Our loan expert will reach out to you within 24 hours to discuss your application and guide you through the next steps. Please keep your documents ready.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button variant="outline" className="flex-1" onClick={() => router.push(getLoanRoute(applicationData.loanType))}><FileText className="mr-2 h-4 w-4" />View Required Documents</Button>
                  <Button variant="cta" className="flex-1" onClick={() => router.push("/")}><ArrowLeft className="mr-2 h-4 w-4" />Check Other Loan Options</Button>
                </div>
                <div className="pt-4 text-xs text-muted-foreground">Need help? Contact us at <span className="text-primary">support@credpe.in</span> or call <span className="text-primary">1800-123-4567</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
