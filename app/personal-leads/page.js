"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import LoanCalculator from '../components/LoanCalculator';
import OTPVerification from '../components/OtpVerification';
import PersonalDetailsForm from '../components/PersonalDetails';
import ThankYou from '../components/ThankYou';
import DocumentsModal from '../components/DocumentsModal';

const Index = () => {
  const [currentStep, setCurrentStep] = useState('calculator');
  const [mobileNumber, setMobileNumber] = useState('');
  const [applicationId, setApplicationId] = useState('');
  const [showDocuments, setShowDocuments] = useState(false);

  const handleApplyNow = (mobile) => {
    setMobileNumber(mobile);
    setCurrentStep('otp');
  };

  const handleOTPVerificationSuccess = () => {
    setCurrentStep('form');
  };

  const handleFormSubmit = (data) => {
    const appId = `CREDPE${Date.now().toString().slice(-8)}`;
    setApplicationId(appId);
    setCurrentStep('thank-you');
  };

  const handleViewDocuments = () => {
    setShowDocuments(true);
  };

  const handleExploreLoanOptions = () => {
    setCurrentStep('calculator');
  };

  const handleBackToCalculator = () => {
    setCurrentStep('calculator');
  };

  const handleBackToOTP = () => {
    setCurrentStep('otp');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {currentStep === 'calculator' && (
        <LoanCalculator onApplyNow={handleApplyNow} />
      )}
      
      {currentStep === 'otp' && (
        <OTPVerification
          mobileNumber={mobileNumber}
          onVerificationSuccess={handleOTPVerificationSuccess}
          onBack={handleBackToCalculator}
        />
      )}
      
      {currentStep === 'form' && (
        <PersonalDetailsForm
          onSubmit={handleFormSubmit}
          onBack={handleBackToOTP}
        />
      )}
      
      {currentStep === 'thank-you' && (
        <ThankYou
          applicationId={applicationId}
          onViewDocuments={handleViewDocuments}
          onExploreLoanOptions={handleExploreLoanOptions}
        />
      )}
      
      <DocumentsModal
        isOpen={showDocuments}
        onClose={() => setShowDocuments(false)}
      />
    </div>
  );
};

export default Index;
