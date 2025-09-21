"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Calculator } from "lucide-react";
import Link from "next/link";

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
    <div className="w-[85%] pt-10 mx-auto">
      <div className=" mx-auto ">
        {/* Header */}
        <div className="text-center mb-7">
          <h3 className="font-bold text-gray-800 mb-2">
            EMI Calculator
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Get instant EMI results with our advanced loan calculator.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card border border-[#000] shadow-medium">
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-md:gap-6 mt-6">
                {/* Input Controls */}
                <div className="space-y-6">
                  {/* Loan Amount */}
                  <div className="space-y-2">
                    <Label className="text-base font-semibold">
                      Loan Amount: {formatCurrency(loanAmount[0])}
                    </Label>
                    <Slider
                      value={loanAmount}
                      onValueChange={setLoanAmount}
                      max={10000000}
                      min={50000}
                      step={50000}
                      className="w-full mt-1"
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
                <div className="space-y-3">
                  <div className="bg-primary rounded-lg p-3 text-center">
                    <span className="text-sm text-white">
                      Monthly EMI
                    </span>
                    <h3 className=" font-bold text-primary-foreground">
                      {formatCurrency(emi)}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card border rounded-lg p-2 text-center">
                      <div className="text-sm text-muted-foreground mb-1">
                        Principal Amount
                      </div>
                      <h4 className="font-bold text-foreground">
                        {formatCurrency(loanAmount[0])}
                      </h4>
                    </div>
                    <div className="bg-card border rounded-lg p-2 text-center">
                      <div className="text-sm text-muted-foreground mb-1">
                        Total Interest
                      </div>
                      <h4 className="font-bold text-foreground">
                        {formatCurrency(totalInterest)}
                      </h4>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-2 text-center">
                    <div className="text-sm text-muted-foreground mb-1">
                      Total Amount Payable
                    </div>
                    <h3 className="font-bold text-foreground">
                      {formatCurrency(totalAmount)}
                    </h3>
                  </div>

                 <div className="w-full">
  <Link href="/apply/personal">
    <Button variant="cta" className="w-full">
      Apply Now
    </Button>
  </Link>
</div>

                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
