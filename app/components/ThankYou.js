"use client";

import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, FileText, ArrowLeft } from 'lucide-react';

const ThankYou = ({ applicationId, onViewDocuments, onBackToForm }) => {
  return (
    <div className="bg-background pt-10 pb-8">
      <div className="max-md:w-[90%] w-[75%] mx-auto">
        <Card className="text-center">
          <CardContent className="py-6 px-8">
            <div className="space-y-4">
              {/* Success Icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>

              {/* Success Message */}
              <div className="space-y-1">
                <h3 className="font-semibold text-foreground">
                  Application Submitted Successfully!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for choosing CREDPE. Your loan application has been received and is being processed.
                </p>
              </div>

              {/* Application ID */}
              <div className="border border-accent p-2 rounded-lg">
                <p className="text-sm text-muted-foreground">Application ID</p>
                <p className="text-xl font-semibold text-primary">{applicationId}</p>
              </div>

              {/* Next Steps */}
              <div className="text-left bg-card border rounded-lg p-4 space-y-4">
                <h4 className="font-semibold text-foreground">Next Steps:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2.5"></div>
                    <div>
                      <p className="font-medium text-foreground">Document Verification</p>
                      <p className="text-sm text-muted-foreground">Our team will review your application and may request additional documents.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2.5"></div>
                    <div>
                      <p className="font-medium text-foreground">Loan Approval & Disbursement</p>
                      <p className="text-sm text-muted-foreground">Once approved, loan will be disbursed within 24-48 hrs.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons (Updated) */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  onClick={onBackToForm}
                  variant="outline"
                  className="flex-1"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back
                </Button>

                <Button
                  onClick={onViewDocuments}
                  className="flex-1"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Required Documents
                </Button>
              </div>

              {/* Footer Note */}
              <div className="text-xs text-muted-foreground pt-4 border-t">
                <p>
                  You will receive SMS/email updates about your application status. Please keep your phone accessible.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;
