"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";
import { Calculator } from "lucide-react";
import Link from "next/link";
import { Doughnut } from "react-chartjs-2";
import underline from '../../public/assets/under-1.svg'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import Image from "next/image";

ChartJS.register(ArcElement, Tooltip, Legend);

// 🔹 Reusable Input + Slider Component
const InputWithSlider = ({ label, min, max, step, value, setValue, prefix, suffix }) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Update input value when slider value changes (only if not focused)
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
    : `${prefix || ''}${value[0].toLocaleString("en-IN")}${suffix || ''}`;

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
          placeholder={`${prefix || ''}${min.toLocaleString("en-IN")}${suffix || ''}`}
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
          {prefix || ''}
          {min.toLocaleString("en-IN")}
          {suffix || ''}
        </span>
        <span>
          {prefix || ''}
          {max.toLocaleString("en-IN")}
          {suffix || ''}
        </span>
      </div>
    </div>
  );
};

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
    <div className="w-[85%] pb-20 max-md:pb-14 mx-auto">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-7">
         <div className="inline-block">
    <h3 className="font-bold text-gray-800">
      EMI <span className="inline-block text-primary">Calculator
        <Image 
          src={underline} 
          alt="" 
          width={120}
          height={10}
          className="-mt-1"
        />
      </span>
    </h3>
  </div>
        </div>

        {/* Card */}
        <div className="max-w-5xl mx-auto">
          <Card className="gradient-card border border-[#000] shadow-medium">
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-md:gap-6 mt-6">
                {/* Input Controls */}
                <div className="space-y-6 pb-12">
                  {/* Loan Amount with Input */}
                  <InputWithSlider
                    label={`Loan Amount: ${formatCurrency(loanAmount[0])}`}
                    min={50000}
                    max={10000000}
                    step={50000}
                    value={loanAmount}
                    setValue={setLoanAmount}
                    prefix="₹"
                  />

                  {/* Tenure with Input */}
                  <InputWithSlider
                    label={`Tenure: ${tenure[0]} months (${Math.round(tenure[0] / 12)} years)`}
                    min={6}
                    max={360}
                    step={6}
                    value={tenure}
                    setValue={setTenure}
                    suffix=" months"
                  />

                  {/* Interest Rate with Input - needs decimal support */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-semibold">
                        Interest Rate: {interestRate[0]}% p.a.
                      </Label>
                      <Input
                        type="number"
                        value={interestRate[0]}
                        onChange={(e) => {
                          let val = parseFloat(e.target.value) || 8;
                          if (val < 8) val = 8;
                          if (val > 30) val = 30;
                          setInterestRate([val]);
                        }}
                        step="0.5"
                        min="8"
                        max="30"
                        className="w-32 text-left px-2 py-1 h-8 border"
                      />
                    </div>
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

                  <div className="absolute flex bg-accent-light px-4 py-1 w-[35%] max-md:w-[72%] !border !border-accent rounded-xl items-center justify-center text-center gap-x-2">
                    <p className="text-accent">In Total:</p>
                    <span className="font-semibold text-2xl text-primary">{formatCurrency(totalAmount)}</span>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-4 flex flex-col justify-center items-center">
                  <div className="w-68 h-68 max-md:w-60 max-md:h-60">
                    <Doughnut
                      data={{
                        labels: ["Principal", "Interest", "Total EMI"],
                        datasets: [
                          {
                            label: "Breakdown",
                            data: [loanAmount[0], totalInterest, totalAmount],
                            backgroundColor: ["#0e499c", "#facc15", "#ff914d"],
                            borderWidth: 0,
                          },
                        ],
                      }}
                      options={{
                        cutout: "70%",
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                      }}
                    />
                  </div>

                  {/* Legends */}
                  <div className="flex gap-6 max-md:gap-2 mt-4 max-md:mt-2">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 max-md:h-2 rounded-full bg-[#0e499c]"></span>
                      <span className="text-sm font-medium">
                        Principal: {formatCurrency(loanAmount[0])}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 max-md:h-2 rounded-full bg-[#facc15]"></span>
                      <span className="text-sm font-medium">
                        Interest: {formatCurrency(totalInterest)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 max-md:h-2 rounded-full bg-accent"></span>
                      <span className="text-sm font-medium">
                        EMI: {formatCurrency(emi)}
                      </span>
                    </div>
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