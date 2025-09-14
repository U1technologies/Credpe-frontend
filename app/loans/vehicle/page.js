"use client";

import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import EMICalculator from "@/app/components/EMICalculator";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { CheckCircle } from "lucide-react";
import vehicleLoanImg from "../../../public/assets/car-loan.jpg";

export default function VehicleLoan() {
  const benefits = [
    "Finance up to 100% of vehicle cost",
    "Interest rates starting from 7.5%",
    "Quick approval in 2 hours",
    "Flexible tenure up to 7 years",
    "Minimal documentation",
    "Insurance and RTO assistance",
  ];

  const eligibility = [
    "Age: 21-65 years",
    "Minimum income ₹15,000/month",
    "CIBIL score 650+",
    "Stable employment/business",
    "Valid driving license",
  ];

  const documents = [
    "Vehicle quotation/invoice",
    "Income proof documents",
    "Bank statements (3 months)",
    "Identity and address proof",
    "Driving license",
    "Passport size photographs",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
         <div className="absolute inset-0">
                  <Image
                    src={vehicleLoanImg}
                    alt="Business Loan"
                    height={100}
                    width={100}
                    className="w-full h-full object-cover opacity-50"
                  />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-black/50" />
                </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-primary-foreground font-bold mb-6">Vehicle Loan</h1>
            <p className="text-primary-foreground mb-4">Drive your dream vehicle home today</p>
            <p className="text-primary-foreground mb-8 opacity-90">
              Get instant vehicle loans for cars, bikes, and commercial vehicles with competitive rates
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

      {/* Loan Overview */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Vehicle Loan Overview</h2>

            {/* Loan Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    Loan Amount
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">₹50,000 - ₹2 Crores</p>
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
                  <p className="text-2xl font-bold text-primary">Starting from 7.5%</p>
                </CardContent>
              </Card>
            </div>

            {/* Benefits, Eligibility, Documents */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Benefits</CardTitle>
                  <CardDescription>Why choose our vehicle loan?</CardDescription>
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Drive Your Dream Vehicle?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get on the road faster with our quick vehicle loan approval and competitive interest rates.
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


