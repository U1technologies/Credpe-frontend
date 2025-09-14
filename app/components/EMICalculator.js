"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Calculator } from "lucide-react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState([500000]);
  const [tenure, setTenure] = useState([24]);
  const [interestRate, setInterestRate] = useState([12]);

  // EMI Calculation Formula: [P x R x (1+R)^N] / [(1+R)^N - 1]
  const calculateEMI = () => {
    const P = loanAmount[0]; // Principal
    const R = interestRate[0] / (12 * 100); // Monthly interest rate
    const N = tenure[0]; // Number of months

    if (R === 0) {
      return P / N;
    }

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return emi;
  };

  const emi = calculateEMI();
  const totalAmount = emi * tenure[0];
  const totalInterest = totalAmount - loanAmount[0];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="py-4 bg-muted/30">
      <section className=" mx-auto ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            EMI Calculator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate your Equated Monthly Installment (EMI) and plan your loan
            repayment. Get instant results with our advanced calculator.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card border-0 shadow-medium">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <Calculator className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold">
                Loan EMI Calculator
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Controls */}
                <div className="space-y-8">
                  {/* Loan Amount */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">
                      Loan Amount: {formatCurrency(loanAmount[0])}
                    </Label>
                    <Slider
                      value={loanAmount}
                      onValueChange={setLoanAmount}
                      max={10000000}
                      min={50000}
                      step={50000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹50K</span>
                      <span>₹1 Cr</span>
                    </div>
                  </div>

                  {/* Tenure */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">
                      Tenure: {tenure[0]} months ({Math.round(tenure[0] / 12)} years)
                    </Label>
                    <Slider
                      value={tenure}
                      onValueChange={setTenure}
                      max={360}
                      min={6}
                      step={6}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>6 months</span>
                      <span>30 years</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">
                      Interest Rate: {interestRate[0]}% p.a.
                    </Label>
                    <Slider
                      value={interestRate}
                      onValueChange={setInterestRate}
                      max={30}
                      min={8}
                      step={0.5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>8%</span>
                      <span>30%</span>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-6">
                  <div className="bg-primary rounded-lg p-6 text-center">
                    <div className="text-lg font-semibold text-white mb-2">
                      Monthly EMI
                    </div>
                    <div className="text-4xl font-bold text-primary-foreground">
                      {formatCurrency(emi)}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card border rounded-lg p-4 text-center">
                      <div className="text-sm text-muted-foreground mb-1">
                        Principal Amount
                      </div>
                      <div className="text-xl font-bold text-foreground">
                        {formatCurrency(loanAmount[0])}
                      </div>
                    </div>
                    <div className="bg-card border rounded-lg p-4 text-center">
                      <div className="text-sm text-muted-foreground mb-1">
                        Total Interest
                      </div>
                      <div className="text-xl font-bold text-foreground">
                        {formatCurrency(totalInterest)}
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-4 text-center">
                    <div className="text-sm text-muted-foreground mb-1">
                      Total Amount Payable
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {formatCurrency(totalAmount)}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="cta" className="flex-1">
                      Apply for This Loan
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Get Best Rates
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default EMICalculator;
