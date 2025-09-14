"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EMICalculator from "../components/EMICalculator";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Calculator, TrendingUp, BarChart3 } from "lucide-react";

const Calculators = () => {
  const [form, setForm] = useState({
    income: "",
    expenses: "",
    cibil: "",
    type: "",
  });

  const [result, setResult] = useState(null);

  const calculate = () => {
    const income = parseFloat(form.income);
    const expenses = parseFloat(form.expenses);
    const cibil = parseFloat(form.cibil);

    if (income && expenses && cibil) {
      const disposable = income - expenses;
      const multiplier = cibil >= 750 ? 60 : cibil >= 650 ? 50 : 40;
      const eligible = disposable * multiplier;
      setResult(Math.max(0, eligible));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Loan Calculators</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Use our smart calculators to plan your loan journey and make informed
            financial decisions
          </p>
        </div>
      </section>

      {/* EMI Calculator */}
      <EMICalculator />

      {/* Eligibility Calculator */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Eligibility Calculator</h2>
            <p className="text-muted-foreground">
              Check how much loan amount you&apos;re eligible for based on your income
              and profile
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Calculate Your Loan Eligibility</CardTitle>
              <CardDescription>
                Enter your details to know your eligible loan amount
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Form Side */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="income">Monthly Income (₹)</Label>
                    <Input
                      id="income"
                      type="number"
                      placeholder="Enter monthly income"
                      value={form.income}
                      onChange={(e) =>
                        setForm({ ...form, income: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="expenses">Monthly Expenses (₹)</Label>
                    <Input
                      id="expenses"
                      type="number"
                      placeholder="Enter monthly expenses"
                      value={form.expenses}
                      onChange={(e) =>
                        setForm({ ...form, expenses: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="cibil">CIBIL Score</Label>
                    <Input
                      id="cibil"
                      type="number"
                      placeholder="Enter CIBIL score"
                      value={form.cibil}
                      onChange={(e) =>
                        setForm({ ...form, cibil: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="loan-type">Loan Type</Label>
                    <Select
                      onValueChange={(val) => setForm({ ...form, type: val })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select loan type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal Loan</SelectItem>
                        <SelectItem value="business">Business Loan</SelectItem>
                        <SelectItem value="home">Home Loan</SelectItem>
                        <SelectItem value="vehicle">Vehicle Loan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={calculate} className="w-full">
                    Calculate Eligibility
                  </Button>
                </div>

                {/* Result Side */}
                <div className="flex items-center justify-center">
                  {result !== null ? (
                    <div className="text-center p-8 bg-primary/5 rounded-lg border">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Eligible Loan Amount
                      </h3>
                      <p className="text-4xl font-bold text-accent">
                        ₹{result.toLocaleString()}
                      </p>
                      <p className="text-muted-foreground mt-4">
                        Based on your income and credit profile
                      </p>
                      <Button variant="cta" className="mt-6">
                        Apply Now
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>Fill in your details to see eligibility</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Loan Comparison Tool */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Loan Comparison Tool</h2>
            <p className="text-muted-foreground">
              Compare different loan options to find the best deal for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Personal Loan",
                desc: "Quick unsecured loans",
                rate: "10.5% - 24%",
                amount: "₹25K - ₹40L",
                tenure: "1-7 years",
                process: "2-3 days",
              },
              {
                title: "Home Loan",
                desc: "Property financing",
                rate: "8.4% - 12%",
                amount: "₹5L - ₹10Cr",
                tenure: "5-30 years",
                process: "7-15 days",
              },
              {
                title: "Vehicle Loan",
                desc: "Car & bike financing",
                rate: "7.5% - 15%",
                amount: "₹50K - ₹2Cr",
                tenure: "1-7 years",
                process: "2-5 days",
              },
            ].map((loan) => (
              <Card key={loan.title}>
                <CardHeader>
                  <CardTitle>{loan.title}</CardTitle>
                  <CardDescription>{loan.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Interest Rate:</span>
                      <span className="font-semibold">{loan.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Loan Amount:</span>
                      <span className="font-semibold">{loan.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tenure:</span>
                      <span className="font-semibold">{loan.tenure}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Processing:</span>
                      <span className="font-semibold">{loan.process}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Compare
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calculators;


