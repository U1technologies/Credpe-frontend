"use client";

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Benefits from "@/app/components/Benefits";
import EMICalculator from "@/app/components/EMICalculator";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import educationLoanImg from "../../../public/assets/education-loan.jpg";

export default function EducationLoan() {
  const benefits = [
    "Finance up to 100% of course fees",
    "Interest rates starting from 8.5%",
    "Moratorium period during studies",
    "Tax benefits under Section 80E",
    "No collateral required up to ₹7.5 lakhs",
    "Flexible repayment options"
  ];

  const eligibility = [
    "Indian citizen aged 18-35 years",
    "Admission to recognized institution",
    "Co-applicant (parent/guardian/spouse)",
    "Good academic record",
    "Course duration minimum 6 months"
  ];

  const documents = [
    "Admission letter from institution",
    "Fee structure from college",
    "Academic mark sheets",
    "Identity and address proof",
    "Income proof of co-applicant",
    "Bank statements (6 months)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
                         <Image
                           src={educationLoanImg}
                           alt="Business Loan"
                           height={100}
                           width={100}
                           className="w-full h-full object-cover opacity-50"
                         />
               <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-black/50" />
                       </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-bold text-primary-foreground mb-6">Education Loan</h1>
            <p className="text-primary-foreground mb-4">Invest in your future with our education financing</p>
            <p className="text-primary-foreground mb-8 opacity-90">
              Get the best education loan to pursue your dream course without financial stress
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
            <h2 className="text-3xl font-bold text-center mb-12">Education Loan Overview</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    Loan Amount
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">₹50,000 - ₹1.5 Crores</p>
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
                  <p className="text-2xl font-bold text-primary">Starting from 8.5%</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle>Benefits</CardTitle>
                  <CardDescription>Why choose our education loan?</CardDescription>
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

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Fund Your Education?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don&apos;t let financial constraints stop you from achieving your academic dreams. Apply now for quick approval.
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


