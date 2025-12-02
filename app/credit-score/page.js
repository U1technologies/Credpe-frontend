
export const metadata = {
  title: "Check Your Credit Score Online – Free CIBIL Score | CredPe",
  description:
    "Check your CIBIL credit score instantly through CredPe. Simple mobile verification, secure data handling, and personalised credit insights.",
  keywords: [
    "credit score",
    "CIBIL score check",
    "free credit score",
    "check CIBIL online",
    "credit report India",
  ],
};

'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Lottie from "lottie-react";
import wheelAnimation from "@/public/assets/animations/wheel.json";


export default function CreditScoreLanding() {
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    pan: '',
    dob: '',
    pincode: ''
  })
    const router = useRouter()


  const handleProceed = (e) => {
    e.preventDefault()
    const cleaned = mobile.replace(/\D/g, '')
    if (!/^\d{10}$/.test(cleaned)) {
      setError('Enter a valid 10-digit mobile number')
      return
    }
    setError('')
    setStep(2)
  }

  const handleVerify = (e) => {
    e.preventDefault()
    if (otp === '123456') {
      setError('')
      setStep(3)
    } else {
      setError('Invalid OTP. Use 123456 (mock)')
    }
  }

const handleCibilSubmit = (e) => {
  e.preventDefault()
  
  const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
  if (!panPattern.test(formData.pan)) {
    setError('Invalid PAN format (e.g., ABCDE1234F)')
    return
  }
  
  if (!/^\d{6}$/.test(formData.pincode)) {
    setError('Invalid pincode format')
    return
  }
  
  const score = Math.floor(600 + Math.random() * 250)
  
  // Generate mock credit report data
  const mockReport = {
    accounts: {
      active: [
        { name: 'HDFC Bank', type: 'Credit Card', status: 'Active', open: 'Jan 2020' },
        { name: 'ICICI Bank', type: 'Personal Loan', status: 'Active', open: 'Mar 2021' },
        { name: 'SBI Card', type: 'Credit Card', status: 'Active', open: 'Jul 2022' }
      ],
      closed: [
        { name: 'Axis Bank', type: 'Credit Card', status: 'Closed', open: 'May 2019' }
      ]
    },
    age: {
      avgYears: 3.5
    },
    enquiries: [
      { name: 'HDFC Bank', type: 'Credit Card', date: 'Sep 2024' },
      { name: 'Bajaj Finserv', type: 'Personal Loan', date: 'Aug 2024' }
    ],
    payment: {
      timelyPercent: 95,
      late: 2,
      banks: [
        { name: 'HDFC Bank', type: 'Credit Card', timely: 45, total: 47 },
        { name: 'ICICI Bank', type: 'Personal Loan', timely: 38, total: 40 },
        { name: 'SBI Card', type: 'Credit Card', timely: 28, total: 28 }
      ]
    },
    limit: {
      overallUsedPercent: 32
    }
  }
  
  localStorage.setItem('credpe_score', score)
  localStorage.setItem('credpe_report', JSON.stringify(mockReport))
  console.log('Generated:', { score, mobile, userDetails: formData })
  router.push('/credit-score/score')
}

  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-primary lg:bg-gray-100">
   <div className="w-full lg:w-[45%] bg-primary text-white flex flex-col justify-center items-center relative overflow-hidden pt-12 pb-4 lg:pt-0 lg:pb-0">
  <div className="max-w-md text-center flex flex-col justify-center items-center px-6">
    <span className="font-semibold text-xl">
      Apply for a credit card & stand a chance to
    </span>
    <h2 className="max-lg:hidden font-extrabold text-yellow-400">
      WIN up to ₹1 Lakh
    </h2>
     <span className="lg:hidden font-extrabold text-[35px] text-yellow-400">
      WIN up to ₹1 Lakh
    </span>
    <p className="font-medium text-white mb-6">
      Assured Gifts on every credit card
    </p>

    <div className="flex justify-center items-center w-full">
      <Lottie 
        animationData={wheelAnimation} 
        loop={3}  
        className="h-80 w-80 block mx-auto"
      />
    </div>
  </div>
</div>


      <div className="w-full lg:w-[55%] bg-white flex flex-col py-12 lg:py-16 rounded-tl-3xl rounded-tr-3xl lg:rounded-none">
       <div className="w-[85%] lg:w-[70%] mx-auto">
  {/* Progress Line and Steps */}
  <div className="relative flex items-center justify-between">
    {/* Gray base line (always visible) */}
    <div className="absolute top-1/2 left-0 w-full h-[4px] bg-gray-200 -translate-y-1/2 z-0" />

    {/* Primary progress line (fills progressively) */}
    <div
      className="absolute top-1/2 left-0 h-[2px] bg-primary -translate-y-1/2 z-10 transition-all duration-500 ease-in-out"
      style={{
        width:
          step === 1 ? '0%' : step === 2 ? '50%' : '100%',
      }}
    />

    {/* Step Circles */}
    {[1, 2, 3].map((s) => (
      <div key={s} className="relative z-20 flex flex-col items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold transition-all duration-300
          ${
            step >= s
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-500'
          }`}
        >
          {step > s ? '✓' : s}
        </div>
      </div>
    ))}
  </div>

  {/* Labels */}
  <div className="flex justify-between mt-2 mb-4 text-sm text-gray-600 font-medium">
    <span>Mobile</span>
    <span>OTP</span>
    <span>Details</span>
  </div>
</div>


        <div className="flex-1 flex items-center justify-center">
          <div className="w-[85%] lg:w-[70%]">
            <div className="text-primary font-bold mb-2 text-2xl">
              CREDIT SAHI, <span className="text-accent font-medium">MILEGA YAHIN!</span>
            </div>
            <p className="text-gray-600 mb-6">Get best Credit Cards for all your needs</p>

            {step === 1 && (
              <div>
                <ul className="text-gray-700 mb-6 text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary text-base">✔</span> Exclusive Co-Branded Cards
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary text-base">✔</span> Pre Qualified Card offers (3x Approval Chances)
                  </li>
                </ul>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <div className="flex items-center border rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-primary">
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 border-r">
                      <span className="text-sm font-medium">+91</span>
                    </div>
                    <input
                      type="tel"
                      value={mobile}
                      onChange={(e) => {
                        setMobile(e.target.value)
                        setError('')
                      }}
                      placeholder="Enter 10-digit mobile"
                      maxLength={10}
                      className="flex-1 px-3 py-2 outline-none text-gray-800"
                    />
                  </div>
            

                  <button
                    onClick={handleProceed}
                    className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-2 rounded-md mt-2 transition-colors"
                  >
                    Proceed
                  </button>

                  <p className="text-gray-500 mt-3 text-sm">
                    By clicking on proceed, you have read and agree to the{' '}
                    <span className="text-primary underline cursor-pointer">Terms of Use</span> and{' '}
                    <span className="text-primary underline cursor-pointer">Privacy Policy</span>
                  </p>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="text-xl font-semibold text-gray-800">
                  Verify Mobile Number
                </div>
                <div className="text-sm text-gray-500 -mt-3 mb-3">
                  We have sent an OTP to +91-{mobile}
                </div>

                <input
                  type="tel"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value)
                    setError('')
                  }}
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  className="w-full border text-sm rounded-md px-3 py-[6px] outline-none focus:ring-2 focus:ring-primary"
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  onClick={handleVerify}
                  className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-2 rounded-md transition-colors"
                >
                  Verify OTP
                </button>

                <p className="text-xs text-gray-500 mt-3">
                  Did not receive OTP?{' '}
                  <span className="text-primary font-medium cursor-pointer hover:underline">
                    Resend
                  </span>
                </p>
                <p className="text-xs text-gray-400">
                  (Mock OTP: <strong>123456</strong>)
                </p>

                <button
                  onClick={() => setStep(1)}
                  className="text-primary hover:text-primary/80"
                >
                  ← Change mobile number
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3">
                <span className="text-xl font-semibold text-gray-800 ">
                  Enter details to check your CIBIL score
                </span>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mt-2 mb-1">
                    Full Name
                  </label>
                  <input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full text-sm border rounded-md px-3 py-[5px] outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PAN Number
                  </label>
                  <input
                    value={formData.pan}
                    onChange={(e) => setFormData({...formData, pan: e.target.value.toUpperCase()})}
                    placeholder="ABCDE1234F"
                    maxLength={10}
                    className="w-full text-sm border rounded-md px-3 py-[5px] outline-none focus:ring-2 focus:ring-primary uppercase"
                  />
                  <span className="text-xs text-gray-500 mt-1">Format: ABCDE1234F</span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({...formData, dob: e.target.value})}
                    className="w-full text-sm border rounded-md px-3 py-[5px] outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pincode
                  </label>
                  <input
                    value={formData.pincode}
                    onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                    placeholder="110001"
                    maxLength={6}
                    className="w-full text-sm border rounded-md px-3 py-[5px] outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  onClick={handleCibilSubmit}
                  className="w-full bg-primary hover:bg-primary text-white font-semibold py-2 rounded-md mt-2 transition-colors"
                >
                  Submit & Check Score
                </button>

                <button
                  onClick={() => setStep(2)}
                  className="text-sm text-primary hover:text-primary/80 mt-1"
                >
                  ← Back to OTP
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}