"use client";

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Benefits from "@/app/components/Benefits";
import EMICalculator from "@/app/components/EMICalculator";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { CheckCircle } from "lucide-react";
import businessLoanImg from "../../../public/assets/business-loan.jpg";
import Image from "next/image";

const BusinessLoan = () => {
  const benefits = [
    "Collateral-free loans up to ₹50 lakhs",
    "Competitive interest rates from 10.99%",
    "Quick approval in 24-48 hours",
    "Flexible repayment tenure up to 7 years",
    "Minimal documentation required",
    "Digital process - Apply from anywhere",
  ];

  const eligibility = [
    "Business vintage of 2+ years",
    "Annual turnover of ₹10 lakhs+",
    "CIBIL score of 650+",
    "Valid business registration",
    "ITR filed for last 2 years",
  ];

  const documents = [
    "Business registration certificate",
    "ITR for last 2 years",
    "Bank statements (6 months)",
    "GST returns (if applicable)",
    "Identity and address proof",
    "Business financial statements",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="relative py-20  overflow-hidden">
         <div className="absolute inset-0">
                  <Image
                    src={businessLoanImg}
                    alt="Business Loan"
                    height={100}
                    width={100}
                    className="w-full h-full object-cover opacity-50"
                  />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-black/50" />
                </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-bold text-primary-foreground mb-6">Business Loan</h1>
            <p className="text-primary-foreground mb-8">
              Get instant business loans with competitive rates and quick approval
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta">
                Apply Now
              </Button>
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
            <h2 className="text-3xl font-bold text-center mb-12">
              Business Loan Overview
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    Loan Amount
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">
                    ₹1 Lakh - ₹50 Lakhs
                  </p>
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
                  <p className="text-2xl font-bold text-primary">
                    Starting from 10.99%
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Benefits</CardTitle>
                  <CardDescription>Why choose our business loan?</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Eligibility</CardTitle>
                  <CardDescription>Requirements to apply</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {eligibility.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Documents</CardTitle>
                  <CardDescription>Required paperwork</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {documents.map((doc, i) => (
                      <li key={i} className="flex items-start gap-2">
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
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the funding you need to take your business to the next level.
            Apply now for quick approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="cta">
              Apply Now
            </Button>
            <Button size="lg" variant="outline">
              Check Eligibility
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BusinessLoan;


