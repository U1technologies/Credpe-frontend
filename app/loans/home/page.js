

"use client";

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Benefits from "@/app/components/Benefits";
import EMICalculator from "@/app/components/EMICalculator";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { CheckCircle } from "lucide-react";
import homeLoanImg from "../../../public/assets/home-loan.jpg";
import Image from "next/image";

export default function HomeLoan() {
  const benefits = [
    "Loan up to ₹10 crores at attractive rates",
    "Interest rates starting from 8.4%",
    "Tenure up to 30 years",
    "Tax benefits up to ₹2 lakhs",
    "Zero prepayment charges",
    "Digital approval process"
  ];

  const eligibility = [
    "Age: 23-70 years",
    "Minimum income ₹25,000/month",
    "CIBIL score 650+",
    "Stable employment (2+ years)",
    "Property value assessment"
  ];

  const documents = [
    "Property documents",
    "Income proof (salary slips/ITR)",
    "Bank statements (6 months)",
    "Identity and address proof",
    "Property valuation report",
    "No objection certificate"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
                  <Image
                    src={homeLoanImg}
                    alt="Business Loan"
                    height={100}
                    width={100}
                    className="w-full h-full object-cover opacity-50"
                  />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-black/50" />
                </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-primary-foreground font-bold mb-6">Home Loan</h1>
            <p className="text-primary-foreground mb-4">Turn your dream home into reality</p>
            <p className="text-primary-foreground mb-8 opacity-90">
              Get the best home loan rates with quick approval and flexible repayment options
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
            <h2 className="text-3xl font-bold text-center mb-12">Home Loan Overview</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    Loan Amount
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">₹5 Lakhs - ₹10 Crores</p>
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
                  <p className="text-2xl font-bold text-primary">Starting from 8.4%</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle>Benefits</CardTitle>
                  <CardDescription>Why choose our home loan?</CardDescription>
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

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Buy Your Dream Home?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Make your homeownership dream come true with our competitive home loan rates and quick processing.
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


