"use client"; // Ensure this runs on the client side in Next.js

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp';
import Image from 'next/image';
import verify from '../../public/assets/mob-verify.svg'; // Your illustration

const OTPVerification = ({ mobileNumber, onVerificationSuccess, onBack }) => {
  const [step, setStep] = useState('send');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [timer, setTimer] = useState(0);
  const [resendCount, setResendCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSendOTP = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newOtp = generateOTP();
    setGeneratedOtp(newOtp);
    setStep('verify');
    setTimer(30);
    setIsLoading(false);
    alert(`Demo OTP: ${newOtp}`);
  };

  const handleResendOTP = async () => {
    if (resendCount >= 2) {
      alert('Maximum resend attempts reached. Please try again later.');
      return;
    }
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newOtp = generateOTP();
    setGeneratedOtp(newOtp);
    setTimer(30);
    setResendCount(prev => prev + 1);
    setOtp('');
    setIsLoading(false);
    alert(`Demo OTP: ${newOtp}`);
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      alert('Please enter a complete 6-digit OTP');
      return;
    }
    
    if (otp !== generatedOtp) {
      alert('Invalid OTP. Please try again.');
      setOtp('');
      return;
    }
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    onVerificationSuccess();
  };

  return (
    <div className="min-h-[80vh] bg-background flex items-center justify-center p-4">
      {/* Main container for 50-50 layout */}
      <div className="w-full h-full flex flex-col lg:flex-row">
        {/* Left side: Modal */}
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold text-foreground">Mobile Verification</CardTitle>
              <p className="text-muted-foreground">
                {step === 'send' ? 'We will send you an OTP to verify your mobile number' : `Enter the OTP sent to +91 ${mobileNumber}`}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {step === 'send' ? (
                <>
                  <Input value={`+91 ${mobileNumber}`} disabled className="text-center font-medium" />
                  <Button onClick={handleSendOTP} disabled={isLoading} className="w-full">
                    {isLoading ? 'Sending...' : 'Send OTP'}
                  </Button>
                </>
              ) : (
                <>
                  <div className="space-y-4 flex justify-center">
                    <InputOTP
                      maxLength={6}
                      value={otp}
                      onChange={(value) => setOtp(value)}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>

                  <div className="text-center">
                    {timer > 0 ? (
                      <p className="text-sm text-muted-foreground">Resend OTP in {timer} seconds</p>
                    ) : (
                      <Button variant="link" onClick={handleResendOTP} disabled={isLoading || resendCount >= 2} className="text-primary">
                        {resendCount >= 2 ? 'Max attempts reached' : 'Resend OTP'}
                      </Button>
                    )}
                  </div>
                  <Button onClick={handleVerifyOTP} disabled={isLoading || otp.length !== 6} className="w-full">
                    {isLoading ? 'Verifying...' : 'Verify OTP'}
                  </Button>
                </>
              )}
              <Button variant="outline" onClick={onBack} className="w-full">Back to Calculator</Button>
            </CardContent>
          </Card>
        </div>

        {/* Right side: Illustration */}
        <div className="lg:w-1/2 w-full flex justify-center items-center mt-8 lg:mt-0">
          <Image src={verify} alt="Mobile Verification" width={460} height={460} className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
