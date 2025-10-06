"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Disclaimer() {
  return (
    <>
      {/* Global Header */}
      <Header />

      {/* Top Primary Bar */}
      <div className="w-full bg-primary h-[20vh] max-md:h-[14vh] flex items-center justify-center">
        <h2 className="max-md:hidden text-center text-white font-bold">
          Disclaimer
        </h2>
        <span className="md:hidden text-[34px] text-white font-bold">
    Disclaimer
  </span>
      </div>

      <main className="w-[90%] mx-auto py-6 text-foreground">
        {/* Intro Section */}
        <p className="mb-4">
          This Disclaimer governs the use of the Website{" "}
          <a
            href="https://www.credpe.in"
            className="text-primary hover:underline"
          >
            www.credpe.in
          </a>{" "}
          (“CREDPE”/“Platform”), managed and operated by U1 Technologies Private
          Limited. By accessing or using the Platform, you acknowledge and agree
          to the terms outlined below.
        </p>

        {/* Numbered Clauses */}
        <div className="space-y-6">
          {/* 1 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">1.</span>
              <h4 className="font-semibold underline">General Information Only</h4>
            </div>
            <p>
              The information provided on the Platform is for general awareness
              and informational purposes only. It should not be treated as
              professional, legal, financial, or investment advice.
            </p>
          </div>

          {/* 2 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">2.</span>
              <h4 className="font-semibold underline">No Lending Activity</h4>
            </div>
            <p>
              CREDPE operates solely as a loan aggregator and facilitator and is
              not a lender. All loans are processed, sanctioned, approved, or
              rejected exclusively by partnered NBFCs, banks, or financial
              institutions.
            </p>
          </div>

          {/* 3 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">3.</span>
              <h4 className="font-semibold underline">No Guarantees</h4>
            </div>
            <p>
              Submission of personal or financial information, checking
              eligibility, or applying for any product on CREDPE does not
              guarantee approval, sanction, loan amount, interest rate, tenure,
              or terms.
            </p>
          </div>

          {/* 4 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">4.</span>
              <h4 className="font-semibold underline">
                Third-Party Links and Accuracy
              </h4>
            </div>
            <p>
              The Platform may contain links or references to third-party
              websites, lenders, or financial partners. CREDPE is not
              responsible for the content, terms, accuracy, or policies of
              third-party entities.
            </p>
          </div>

          {/* 5 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">5.</span>
              <h4 className="font-semibold underline">User Responsibility</h4>
            </div>
            <p>
              Users must independently verify interest rates, charges,
              eligibility criteria, and terms of service directly with the
              lending partner before making any financial decision.
            </p>
          </div>

          {/* 6 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">6.</span>
              <h4 className="font-semibold underline">
                Marketing & Communication Consent
              </h4>
            </div>
            <p>
              By using the Website, you authorize CREDPE and its lending
              partners to contact you via SMS, WhatsApp, email, or phone
              regarding loan products, offers, or services.
            </p>
          </div>

          {/* 7 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">7.</span>
              <h4 className="font-semibold underline">Limitation of Liability</h4>
            </div>
            <p>
              CREDPE shall not be held liable for loan delays, rejections,
              decisions made by lenders, financial loss, disputes with third
              parties, or damages arising out of the use of the Platform or
              services.
            </p>
          </div>

          {/* 8 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">8.</span>
              <h4 className="font-semibold underline">
                Fraud-Related Disclaimer
              </h4>
            </div>
            <p>
              CREDPE does not request payments for loan approvals, document
              processing, or fast-track services. Users are advised to avoid
              sharing OTPs, passwords, PAN, Aadhaar, or banking credentials with
              unauthorized individuals. Any fraud, phishing, or misuse of the
              CREDPE name should be reported immediately to{" "}
              <a
                href="mailto:support@credpe.in"
                className="text-primary hover:underline"
              >
                support@credpe.in
              </a>{" "}
              or 8292943921. The Company will not be responsible for losses
              caused by fraudulent communications or third-party impersonation.
            </p>
          </div>

          {/* 9 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">9.</span>
              <h4 className="font-semibold underline">
                Investment Adviser Disclaimer
              </h4>
            </div>
            <p>
              CREDPE is not a SEBI-registered investment adviser and does not
              provide investment, wealth management, or financial advisory
              services. Any financial decision made through or outside the
              Platform is solely at the user’s discretion. Users are encouraged
              to consult a certified professional before making
              investment-related decisions.
            </p>
          </div>

          {/* 10 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">10.</span>
              <h4 className="font-semibold underline">Changes to Disclaimer</h4>
            </div>
            <p>
              CREDPE reserves the right to update or modify this Disclaimer at
              any time without prior notice. Continued use of the Platform
              implies your acceptance of the updated terms.
            </p>
          </div>

          {/* 11 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">11.</span>
              <h4 className="font-semibold underline">Grievance Contact</h4>
            </div>
            <p>
              <span className="block">Grievance Officer: Anupam Kumar</span>
              <span className="block">
                Email:{" "}
                <a
                  href="mailto:support@credpe.in"
                  className="text-primary hover:underline"
                >
                  support@credpe.in
                </a>
              </span>
              <span className="block">Phone: 8292943921</span>
              <span className="block">Address: Sector 4, Noida 201301</span>
            </p>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
