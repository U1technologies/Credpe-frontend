export const metadata = {
  title: "Loan Eligibility Calculator – Check Loan Amount You Qualify For | CredPe",
  description:
    "Calculate your loan eligibility instantly using income, expenses, credit score and EMI obligations. Works for personal, home, business, education and vehicle loans.",
  keywords: [
    "loan eligibility calculator",
    "check loan eligibility",
    "personal loan eligibility",
    "home loan calculator",
    "EMI eligibility",
  ],
};

"use client";
import { useState, useEffect } from "react";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Slider } from "../components/ui/slider";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const loanTypes = [
  { name: "Personal Loan", href: "/apply/personal", rate: 12, tenure: 60 },
  { name: "Business Loan", href: "/apply/business", rate: 14, tenure: 72 },
  { name: "Education Loan", href: "/apply/education", rate: 10, tenure: 84 },
  { name: "Home Loan", href: "/apply/home", rate: 8, tenure: 240 },
  { name: "Vehicle Loan", href: "/apply/vehicle", rate: 9, tenure: 84 },
  { name: "Medical Loan", href: "/apply/medical", rate: 11, tenure: 48 },
  { name: "Gold Loan", href: "/apply/gold", rate: 7, tenure: 36 },
  { name: "Loan Against Property", href: "/apply/property", rate: 9, tenure: 180 },
  { name: "Transfer Home Loan", href: "/apply/transfer-home", rate: 8, tenure: 240 },
  { name: "Loan Against Car", href: "/apply/car", rate: 12, tenure: 60 },
];

const loanConfigs = {
  "Personal Loan": {
    income: [10000, 2000000],
    expenses: [0, 800000],
    emi: [0, 800000],
    cibil: [300, 900],
  },
  "Business Loan": {
    income: [20000, 5000000],
    expenses: [0, 2000000],
    emi: [0, 2000000],
    cibil: [300, 900],
  },
  "Education Loan": {
    income: [10000, 1000000],
    expenses: [0, 500000],
    emi: [0, 500000],
    cibil: [300, 900],
  },
  "Home Loan": {
    income: [25000, 5000000],
    expenses: [0, 2000000],
    emi: [0, 2000000],
    cibil: [650, 900],
  },
  "Vehicle Loan": {
    income: [15000, 1000000],
    expenses: [0, 500000],
    emi: [0, 500000],
    cibil: [600, 900],
  },
  "Medical Loan": {
    income: [10000, 500000],
    expenses: [0, 300000],
    emi: [0, 300000],
    cibil: [300, 900],
  },
  "Gold Loan": {
    income: [5000, 200000],
    expenses: [0, 100000],
    emi: [0, 100000],
    cibil: [300, 900],
  },
  "Loan Against Property": {
    income: [30000, 8000000],
    expenses: [0, 4000000],
    emi: [0, 4000000],
    cibil: [650, 900],
  },
  "Transfer Home Loan": {
    income: [25000, 8000000],
    expenses: [0, 3000000],
    emi: [0, 3000000],
    cibil: [650, 900],
  },
  "Loan Against Car": {
    income: [10000, 1000000],
    expenses: [0, 500000],
    emi: [0, 500000],
    cibil: [600, 900],
  },
};

const InputWithSlider = ({ label, min, max, step, value, setValue, prefix }) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!isFocused) {
      setInputValue(value[0].toString());
    }
  }, [value, isFocused]);

  const handleInputChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    setInputValue(rawValue);
    
    let val = parseInt(rawValue) || 0;
    if (val < min) val = min;
    if (val > max) val = max;
    setValue([val]);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    setInputValue(value[0].toString());
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    // Format the final value
    let val = parseInt(inputValue) || 0;
    if (val < min) val = min;
    if (val > max) val = max;
    setValue([val]);
    setInputValue(val.toString());
  };

  const displayValue = isFocused 
    ? inputValue 
    : `${prefix}${value[0].toLocaleString("en-IN")}`;

  return (
    <div className="space-y-2">
      {/* Label + Input in same row */}
      <div className="flex justify-between items-center">
        <Label className="text-base font-semibold">{label}</Label>
        <Input
          type="text"
          value={displayValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={`${prefix}${min.toLocaleString("en-IN")}`}
          className="w-32 text-left px-2 py-1 h-8 border"
        />
      </div>

      {/* Slider */}
      <Slider
        value={value}
        onValueChange={setValue}
        min={min}
        max={max}
        step={step}
        className="flex-1"
      />

      {/* Min & Max in same row */}
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>
          {prefix}
          {min.toLocaleString("en-IN")}
        </span>
        <span>
          {prefix}
          {max.toLocaleString("en-IN")}
        </span>
      </div>
    </div>
  );
};

const EligibilityCalculator = () => {
  const [loanType, setLoanType] = useState(loanTypes[0].name);
  const config = loanConfigs[loanType];

  const [income, setIncome] = useState([50000]);
  const [expenses, setExpenses] = useState([2000]);
  const [emi, setEmi] = useState([0]);
  const [cibil, setCibil] = useState([700]);

  // 🔹 Loan calculation formula
  const calculateEligibility = () => {
    const netIncome = income[0] - expenses[0] - emi[0];
    if (netIncome <= 0) return 0;

    const loanConfig = loanTypes.find((l) => l.name === loanType);
    if (!loanConfig) return 0;

    const { rate, tenure } = loanConfig;
    const eligibleEmi = netIncome * 0.5; // 50% rule

    const r = rate / 12 / 100;
    const n = tenure;
    let loanAmount =
      (eligibleEmi * (1 - Math.pow(1 + r, -n))) / r;

    // Adjust with CIBIL
    if (cibil[0] < 650) loanAmount *= 0.5;
    if (cibil[0] > 750) loanAmount *= 1.1;

    return loanAmount;
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
     <div className="min-h-screen">
      <Header />
    <section className="py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Form */}
        <Card className="p-6 space-y-6">
           <div className="space-y-2">
            <Label className="text-base font-semibold">Loan Type</Label>
            <select
              className="w-full border rounded-md px-3 py-2 mt-2"
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
            >
              {loanTypes.map((loan, idx) => (
                <option key={idx} value={loan.name}>
                  {loan.name}
                </option>
              ))}
            </select>
          </div>

          <InputWithSlider
            label="My Monthly Income"
            min={config.income[0]}
            max={config.income[1]}
            step={1000}
            value={income}
            setValue={setIncome}
            prefix="₹"
          />
          <InputWithSlider
            label="My Monthly Expenses"
            min={config.expenses[0]}
            max={config.expenses[1]}
            step={1000}
            value={expenses}
            setValue={setExpenses}
            prefix="₹"
          />
          <InputWithSlider
            label="Current EMI / Obligations"
            min={config.emi[0]}
            max={config.emi[1]}
            step={1000}
            value={emi}
            setValue={setEmi}
            prefix="₹"
          />
        
        </Card>

        {/* Right Result */}
{/* Right Result */}
<Card className="flex flex-col items-center justify-center text-center space-y-6 relative py-0 max-lg:py-8">
  <h3 className="text-xl font-semibold mb-4">Your Loan Eligibility</h3>

  <div className="relative w-60 h-60 flex items-center justify-center">
    <Doughnut
      data={{
        labels: ["Eligible", "Remaining"],
        datasets: [
          {
            data: [
              calculateEligibility(),
              Math.max(0, 10000000 - calculateEligibility()),
            ],
            backgroundColor: ["#0e499c", "#E5E7EB"],
            borderWidth: 0,
          },
        ],
      }}
      options={{
        cutout: "75%",
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
      }}
    />

    {/* ✅ Center value */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <div className="text-2xl font-bold text-primary">
        ₹{(calculateEligibility() / 100000).toFixed(2)}L
      </div>
    </div>
  </div>

  <Link href={loanTypes.find((l) => l.name === loanType)?.href || "/apply"}>
    <Button className="bg-accent hover:bg-accent/80 text-white px-6 rounded-lg shadow-md">
      Apply Now
    </Button>
  </Link>
</Card>


      </div>
    </section>
    <Footer />
    </div>
  );
};

export default EligibilityCalculator;