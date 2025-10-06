"use client";

import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Slider } from './ui/slider';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { CheckCircle, FileText, Download } from 'lucide-react';
import { Percent, Calendar } from 'lucide-react';
import loan from '../../public/assets/time.png';
import interest from '../../public/assets/interest.png'
import Image from 'next/image';


const LoanCalculator = ({ onApplyNow }) => {
  const [loanAmount, setLoanAmount] = useState([200000]);
  const [tenure, setTenure] = useState([24]);
  const [interestRate] = useState(12.5);
  const [emi, setEmi] = useState(0);
  const [mobileNumber, setMobileNumber] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [communicationConsent, setCommunicationConsent] = useState(false);

  // Calculate EMI: EMI = [P x R x (1+R)^N] / [(1+R)^N – 1]
  useEffect(() => {
    const P = loanAmount[0];
    const R = interestRate / 100 / 12; // Monthly interest rate
    const N = tenure[0]; // Number of months
    
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(Math.round(emi));
  }, [loanAmount, tenure, interestRate]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

const handleApplyNow = () => {
  if (!mobileNumber || mobileNumber.length !== 10) {
    alert("Please enter a valid 10-digit mobile number");
    return;
  }
  onApplyNow(mobileNumber);
};


  return (
    <div className="min-h-screen bg-background flex items-center justify-center w-[92%] max-md:w-[90%] mx-auto py-10">
      <div className=" w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Content */}
        <div className="space-y-4 md:-mt-40 max-md:mt-0">
         <div className="space-y-2 ">
  {/* Heading for desktop */}
  <h2 className="font-bold text-foreground leading-tight mb-2 max-md:hidden">
    <span className="text-primary">Step Up with a</span>
    <span className=" text-[#ff914d] px-2 rounded">
      100% Digital Personal Loan
    </span>
  </h2>

  {/* Heading for mobile */}
  <div className="font-bold text-foreground leading-tight mb-4 md:hidden">
    <span className="text-primary text-[34px]">Step Up with a</span>
    <span className="text-primary text-[34px] px-2 rounded">
      100% Digital Personal Loan
    </span>
  </div>

  {/* Sub text */}
  <p className="text-muted-foreground mb-5 max-md:mb-3">
    100% Online Process | Pre-Approved Offers From Multiple NBFCs
  </p>

  {/* Bullet points */}
  <div className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-2 pt-1 pb-2">
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-primary rounded-full"></div>
      <span className="text-foreground">Lowest Interest Rate</span>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-primary rounded-full"></div>
      <span className="text-foreground">Low CIBIL Allowed</span>
    </div>
  </div>
</div>


          {/* Interest Rate and Tenure Display */}
<div className="flex gap-4">
  <div className="border border-primary bg-[#f2f7fa] text-secondary-foreground px-5 py-2 rounded-lg flex items-center gap-3">
    <div className="w-8 h-8 rounded-full flex items-center justify-center">
      <Image
        src={interest} // Use your custom interest rate image
        alt="Interest Rate"
        width={30} // Adjust size as needed
        height={30} // Adjust size as needed
        className="object-contain"
      />
    </div>
    <div>
      <div className="text-xs font-medium">Interest Rate</div>
      <div className="font-medium">{interestRate}% p.a.</div>
    </div>
  </div>

  <div className="border border-primary bg-[#f2f7fa] px-5 py-2 rounded-lg flex items-center gap-3">
    <div className="w-8 h-8 rounded-full flex items-center justify-center">
      <Image
        src={loan} // Use your custom loan tenure image
        alt="Loan Tenure"
        width={32} // Adjust size as needed
        height={32} // Adjust size as needed
        className="object-contain"
      />
    </div>
    <div>
      <div className="text-xs font-medium">Loan Tenure</div>
      <div className="font-medium">{tenure[0]} months</div>
    </div>
  </div>
</div>
        </div>

        {/* Right Side - Calculator Card */}
        <Card className="p-6 bg-card shadow-xl border border-black">
          <div className="space-y-5">

            {/* Loan Amount Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-medium text-foreground">Loan Amount</label>
                <span className="font-bold text-[#ff914d]">{formatCurrency(loanAmount[0])}</span>
              </div>
              <Slider
                value={loanAmount}
                onValueChange={setLoanAmount}
                max={500000}
                min={50000}
                step={10000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>₹50,000</span>
                <span>₹5,00,000</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-medium text-foreground">Tenure (Months)</label>
                <span className="font-bold">{tenure[0]} months</span>
              </div>
              <Slider
                value={tenure}
                onValueChange={setTenure}
                max={84}
                min={6}
                step={6}
                className="w-full "
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>6 months</span>
                <span>84 months</span>
              </div>
            </div>

            {/* EMI Display */}
            <div className="border border-primary bg-[#f4ece1] p-3 rounded-lg">
              <div className="text-center">
                <span className="text-sm text-muted-foreground">EMI Amount</span>
                <h3 className="text-4xl font-bold text-[#ff914d]">{formatCurrency(emi)}</h3>
              </div>
            </div>

            {/* Mobile Number Input */}
            <div className="space-y-2 ">
              <label className="text-sm font-medium text-foreground">Mobile no.</label>
              <Input
                type="tel"
                placeholder="Bank registered number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                className="text-center bg-[#faf4eb]"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
             <div className="flex items-start space-x-2">
  <Checkbox
    id="consent"
    checked={termsAccepted}
    onCheckedChange={(checked) => setTermsAccepted(!!checked)}
  />
  <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
    I confirm this is my registered number and authorize CREDPE & partners to
    contact me via call, SMS, WhatsApp, or email (even if on DND), as per the{" "}
    <a href="#" className="text-[#ff914d] hover:underline">Terms &amp; Conditions</a>{" "}
    and{" "}
    <a href="#" className="text-[#ff914d] hover:underline">Privacy Policy</a>.
  </label>
</div>
              
              {/* <div className="flex items-start space-x-2">
                <Checkbox
                  id="communication"
                  checked={communicationConsent}
                  onCheckedChange={(checked) => setCommunicationConsent(checked)}
                />
                <label htmlFor="communication" className="text-xs text-muted-foreground leading-relaxed">
                  I agree to receive promotional & informational communications from CREDPE through Emails, calls or SMS Services.
                </label>
              </div> */}
            </div>

            {/* Apply Now Button */}
           <Button
  onClick={handleApplyNow}
  className="w-full bg-[#ed8545]"
  disabled={!mobileNumber || mobileNumber.length !== 10}
>
  <p className='text-white'>Apply Now</p>
</Button>


            {/* NBFC Partners */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Loan facility are provided by Our NBFC Partners
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="bg-white p-2 rounded shadow-sm">
                  <span className="text-xs font-bold text-orange-600">Fullerton India</span>
                </div>
                <div className="bg-white p-2 rounded shadow-sm">
                  <span className="text-xs font-bold text-red-600">Hero FinCorp</span>
                </div>
                <div className="bg-white p-2 rounded shadow-sm">
                  <span className="text-xs font-bold text-blue-600">PaySense</span>
                </div>
                <div className="bg-white p-2 rounded shadow-sm">
                  <span className="text-xs font-bold text-purple-600">Piramal</span>
                </div>
                <div className="bg-white p-2 rounded shadow-sm">
                  <span className="text-xs font-bold text-green-600">Upwards</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoanCalculator;
