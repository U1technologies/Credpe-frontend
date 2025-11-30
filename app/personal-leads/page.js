"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import LoanCalculator from '../components/LoanCalculator';
import PersonalDetailsForm from '../components/PersonalDetails';
import ThankYou from '../components/ThankYou';
import DocumentsModal from '../components/DocumentsModal';
import BankingPartners from "../components/BankingPartners";
import Testimonials from '../components/LandingPageTestimonial';
import FAQPersonalLoan from '../components/FAQPersonalLoan';
import PersonalLoanCTA from '../components/PersonalLoanCTA';
import TopPersonalLoanBanner from '../components/TopPersonalLoanBanner';

const Index = () => {
  const [currentStep, setCurrentStep] = useState('calculator');
  const [mobileNumber, setMobileNumber] = useState('');
  const [applicationId, setApplicationId] = useState('');
  const [showDocuments, setShowDocuments] = useState(false);

  const handleApplyNow = (mobile) => {
    setMobileNumber(mobile);
    setCurrentStep('form');
  };

  const handleFormSubmit = (applicationId) => {
    setApplicationId(applicationId); 
    setCurrentStep('thank-you');
  };

  const handleViewDocuments = () => {
    setShowDocuments(true);
  };

  const handleBackToCalculator = () => {
    setCurrentStep('calculator');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <TopPersonalLoanBanner />
      
     {currentStep === 'calculator' && (
  <>
    <div id="loan-calculator-section">
  <LoanCalculator onApplyNow={handleApplyNow} />
</div>

  </>
)}    
      {currentStep === 'form' && (
        <PersonalDetailsForm
          onSubmit={handleFormSubmit} 
          onBack={handleBackToCalculator}
        />
      )}

      {currentStep === 'thank-you' && (
        <ThankYou
          applicationId={applicationId}
          onViewDocuments={handleViewDocuments}
          onBackToForm={() => setCurrentStep('form')} 
        />
      )}
          <BankingPartners /> 
    <Testimonials />
     <FAQPersonalLoan />
     <PersonalLoanCTA />
      <DocumentsModal
        isOpen={showDocuments}
        onClose={() => setShowDocuments(false)}
      />
    </div>
  );
};

export default Index;