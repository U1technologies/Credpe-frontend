"use client";

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { CheckCircle, FileText, Download } from 'lucide-react';

const DocumentsModal = ({ isOpen, onClose }) => {
  const documents = [
    {
      category: 'Identity Proof',
      required: true,
      items: ['Aadhaar Card', 'PAN Card', 'Passport', 'Voter ID']
    },
    {
      category: 'Address Proof',
      required: true,
      items: ['Utility Bills (last 3 months)', 'Bank Statement', 'Rental Agreement', 'Property Documents']
    },
    {
      category: 'Income Proof',
      required: true,
      items: ['Salary Slips (last 3 months)', 'Bank Statement (last 6 months)', 'ITR (last 2 years)', 'Form 16']
    },
    {
      category: 'Employment Proof',
      required: true,
      items: ['Employment Letter', 'Offer Letter', 'Experience Certificate']
    },
    {
      category: 'Additional Documents',
      required: false,
      items: ['Property Documents (if any)', 'Investment Proofs', 'Business Registration (for self-employed)']
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="text-xl font-semibold text-foreground">
            Required Documents for Loan Processing
          </div>
        </DialogHeader>
        
        <div className="space-y-4 ">
          <div className="border border-primary p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <h4 className="font-semibold text-foreground">Important Note</h4>
            </div>
            <span className="text-sm text-muted-foreground">
              Please ensure all documents are clear, readable, and not older than 3 months (unless specified otherwise). 
              You can upload documents in PDF, JPG, or PNG format.
            </span>
          </div>

          <div className="grid gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    {doc.category}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    doc.required 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {doc.required ? 'Required' : 'Optional'}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground mb-2">
                    Any one of the following:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {doc.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-foreground mb-1">Document Guidelines:</h4>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>• Documents should be clear and legible</li>
                <li>• File size should not exceed 5MB per document</li>
                <li>• Accepted formats: PDF, JPG, PNG</li>
              </ul>
              <ul className="space-y-2">
                <li>• All pages of multi-page documents required</li>
                <li>• Self-attested copies are acceptable</li>
                <li>• Original documents may be required for verification</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentsModal;
