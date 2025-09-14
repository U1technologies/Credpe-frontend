"use client";

import Header from "@/app/components/Header";
import EMICalculator from "@/app/components/EMICalculator";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { CheckCircle } from "lucide-react";
import medicalLoanImg from "../../../public/assets/medical-loan.jpg";
import Image from "next/image";

export default function MedicalLoan() {
  const benefits = [
    "Instant approval for medical emergencies",
    "Interest rates starting from 10.5%",
    "No collateral required up to ₹10 lakhs",
    "Quick disbursal within 24 hours",
    "Flexible repayment options",
    "Direct payment to hospital/clinic"
  ];

  const eligibility = [
    "Age: 21-70 years",
    "Minimum income ₹20,000/month",
    "CIBIL score 600+",
    "Valid medical prescription/estimate",
    "Stable employment record"
  ];

  const documents = [
    "Medical prescription/estimate",
    "Hospital treatment plan",
    "Income proof documents",
    "Bank statements (3 months)",
    "Identity and address proof",
    "Medical reports (if available)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
         <div className="absolute inset-0">
                         <Image
                           src={medicalLoanImg}
                           alt="Business Loan"
                           height={100}
                           width={100}
                           className="w-full h-full object-cover opacity-50"
                         />
               <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-black/50" />
                       </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-primary-foreground font-bold mb-6">Medical Loan</h1>
            <p className="text-primary-foreground mb-4">Healthcare financing when you need it most</p>
            <p className="text-primary-foreground mb-8 opacity-90">
              Get instant medical loans for treatments, surgeries, and emergency healthcare needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta">Apply Now</Button>
              <Button
                size="lg"
                variant="outline"
                className="text-foreground"
              >
                Check Eligibility
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Medical Loan Overview</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    Loan Amount
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">₹25,000 - ₹25 Lakhs</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    Interest Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">Starting from 10.5%</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle>Benefits</CardTitle>
                  <CardDescription>Why choose our medical loan?</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Eligibility */}
              <Card>
                <CardHeader>
                  <CardTitle>Eligibility</CardTitle>
                  <CardDescription>Requirements to apply</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {eligibility.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Documents */}
              <Card>
                <CardHeader>
                  <CardTitle>Documents</CardTitle>
                  <CardDescription>Required paperwork</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {documents.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* EMI Calculator */}
      <EMICalculator />

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don&apos;t Let Healthcare Costs Worry You</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Focus on your health while we take care of the finances. Get instant medical loan approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="cta">Apply Now</Button>
            <Button
                size="lg"
                variant="outline"
                className="text-foreground"
              >
                Check Eligibility
              </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


