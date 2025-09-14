"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import EMICalculator from "@/app/components/EMICalculator";
import { CheckCircle, FileText, DollarSign, Clock, Shield } from "lucide-react";
import personalLoanImg from "../../../public/assets/personal-loan.jpg";
import Image from "next/image";
// import { useToast } from "../hooks/use-toast";

export default function PersonalLoan() {
//   const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanAmount: "",
    city: "",
    income: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Our team will contact you within 24 hours to process your personal loan application.",
    });
  };

  const benefits = [
    "No collateral required",
    "Quick approval in 30 seconds",
    "Flexible repayment tenure",
    "Competitive interest rates",
    "Minimal documentation",
    "Pre-approved offers available"
  ];

  const eligibilityCriteria = [
    "Age: 21-65 years",
    "Monthly Income: ₹25,000+",
    "Employment: Salaried/Self-employed",
    "Credit Score: 650+",
    "Work Experience: 2+ years"
  ];

  const documents = [
    "PAN Card",
    "Aadhaar Card",
    "Salary Slips (3 months)",
    "Bank Statements (6 months)",
    "Employment Certificate",
    "Income Tax Returns"
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="relative py-20  overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={personalLoanImg}
            alt="Personal Loan"
            height={100}
            width={100}
            className="w-full h-full object-cover opacity-50"
          />
<div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-bold text-primary-foreground mb-6">
              Personal Loan
            </h1>
            <p className="text-primary-foreground mb-8">
              Get instant personal loans up to ₹40 lakhs with competitive interest rates
              starting at 10.5% p.a. Quick approval and minimal documentation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4">
                <DollarSign className="w-8 h-8 text-accent-light mx-auto mb-2" />
                <div className="text-primary-foreground font-semibold">Up to ₹40 Lakhs</div>
                <div className="text-primary-foreground/80 text-sm">Loan Amount</div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="w-8 h-8 text-accent-light mx-auto mb-2" />
                <div className="text-primary-foreground font-semibold">30 Seconds</div>
                <div className="text-primary-foreground/80 text-sm">Quick Approval</div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4">
                <Shield className="w-8 h-8 text-accent-light mx-auto mb-2" />
                <div className="text-primary-foreground font-semibold">10.5% p.a.</div>
                <div className="text-primary-foreground/80 text-sm">Starting Rate</div>
              </div>
            </div>

            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Apply Now - Get Instant Approval
            </Button>
          </div>
        </div>
      </div>

      <main>
        {/* Application Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <Card className="gradient-card border-0 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Apply for Personal Loan
                  </CardTitle>
                  <p className="text-muted-foreground text-center">
                    Fill in your details and get instant pre-approval
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="+91 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, loanAmount: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select amount" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="100000">₹1 Lakh</SelectItem>
                            <SelectItem value="300000">₹3 Lakhs</SelectItem>
                            <SelectItem value="500000">₹5 Lakhs</SelectItem>
                            <SelectItem value="1000000">₹10 Lakhs</SelectItem>
                            <SelectItem value="2000000">₹20 Lakhs</SelectItem>
                            <SelectItem value="4000000">₹40 Lakhs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="income">Monthly Income (₹)</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, income: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select income" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="25000">₹25,000 - ₹50,000</SelectItem>
                            <SelectItem value="50000">₹50,000 - ₹1,00,000</SelectItem>
                            <SelectItem value="100000">₹1,00,000 - ₹2,00,000</SelectItem>
                            <SelectItem value="200000">₹2,00,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="Enter your city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      Get Instant Pre-Approval
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Benefits & Eligibility */}
              <div className="space-y-8">
                <Card className="gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-accent" />
                      Key Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-card-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-6 h-6 text-primary" />
                      Eligibility Criteria
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {eligibilityCriteria.map((criteria, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-card-foreground">{criteria}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Documents */}
        <div className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Documents Required
              </h2>
              <p className="text-muted-foreground">
                Keep these documents ready for quick loan processing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {documents.map((doc, index) => (
                <Card
                  key={index}
                  className="text-center gradient-card border-0 hover:shadow-medium transition-all"
                >
                  <CardContent className="p-6">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground">{doc}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* EMI Calculator */}
        <EMICalculator />
      </main>

      <Footer />
    </div>
  );
}


