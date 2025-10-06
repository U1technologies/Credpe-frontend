"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Global Header */}
      <Header />

      {/* Top Primary Bar */}
      <div className="w-full bg-primary h-[20vh] max-md:h-[14vh] flex items-center justify-center">
        <h2 className="max-md:hidden text-center text-white font-bold">
          Privacy Policy
        </h2>
        <span className="md:hidden text-[34px] text-white font-bold">
    Privacy Policy
  </span>
      </div>

      <main className="w-[90%] mx-auto py-6 text-foreground">
        {/* Intro Section */}
        <p className="mb-4">
          CREDPE (“Company”/“We”/“Our”/“Platform”), operated under U1
          Technologies Pvt. Ltd., respects your privacy and is committed to
          protecting your personal information. This Privacy Policy explains how
          we collect, use, store, and share your data when you use our Website{" "}
          <a
            href="https://www.credpe.in"
            className="text-primary hover:underline"
          >
            www.credpe.in
          </a>
          , mobile applications, or any related services.
        </p>

        {/* Numbered Clauses */}
        <div className="space-y-6">
          {/* 1 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">1.</span>
              <h4 className="font-semibold underline">
                Controllers of Personal Information
              </h4>
            </div>
            <p>
              Your personal information is collected and stored on servers
              located in India by U1 Technologies Pvt. Ltd. along with its
              representatives, affiliates, and business partners.
            </p>
          </div>

          {/* 2 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">2.</span>
              <h4 className="font-semibold underline">
                Information We Collect
              </h4>
            </div>
            <p>
              We may collect the following information: Full Name, Contact
              Number, Email Address, Date of Birth, Employment Type, Monthly
              Income, City/Pincode, and any additional details required for loan
              facilitation.
            </p>
          </div>

          {/* 3 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">3.</span>
              <h4 className=" font-semibold underline">Cookies</h4>
            </div>
            <p>
              We use cookies and similar technologies to enhance your user
              experience, analyze usage trends, and improve services.
            </p>
          </div>

          {/* 4 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">4.</span>
              <h4 className=" font-semibold underline">
                Use of Information
              </h4>
            </div>
            <p>
              Your information is used to verify eligibility, process loan
              applications, communicate updates, provide services, send
              promotional content, and improve customer experience.
            </p>
          </div>

          {/* 5 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">5.</span>
              <h4 className=" font-semibold underline">
                Disclosure to Third Parties
              </h4>
            </div>
            <p>
              We may share your information with our NBFC partners, lenders, and
              service providers solely for the purpose of loan processing,
              verification, marketing, and compliance requirements.
            </p>
          </div>

          {/* 6 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">6.</span>
              <h4 className=" font-semibold underline">Data Storage</h4>
            </div>
            <p>
              Your data is stored securely with restricted access to authorized
              personnel only.
            </p>
          </div>

          {/* 7 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">7.</span>
              <h4 className=" font-semibold underline">
                Your Control Over Information
              </h4>
            </div>
            <p>
              You may request updates, corrections, or access to your personal
              data by contacting us.
            </p>
          </div>

          {/* 8 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">8.</span>
              <h4 className=" font-semibold underline">
                Revocation of Consent & Deletion
              </h4>
            </div>
            <p>
              You can withdraw consent or request data deletion by writing to us
              at{" "}
              <a
                href="mailto:support@credpe.in"
                className="text-primary hover:underline"
              >
                support@credpe.in
              </a>
              .
            </p>
          </div>

          {/* 9 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">9.</span>
              <h4 className=" font-semibold underline">Log Files</h4>
            </div>
            <p>
              We collect log information such as device type, IP address,
              browser type, and referring URLs to improve services.
            </p>
          </div>

          {/* 10 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">10.</span>
              <h4 className=" font-semibold underline">
                Data Security
              </h4>
            </div>
            <p>
              We implement necessary technical and organizational measures to
              protect your personal data from unauthorized access or misuse.
            </p>
          </div>

          {/* 11 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">11.</span>
              <h4 className=" font-semibold underline">
                Third-Party Links
              </h4>
            </div>
            <p>
              Our platform may contain links to third-party websites. We are not
              responsible for their privacy practices.
            </p>
          </div>

          {/* 12 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">12.</span>
              <h4 className=" font-semibold underline">
                Changes to Privacy Policy
              </h4>
            </div>
            <p>
              We may update this Privacy Policy from time to time. Continued use
              of our services indicates your acceptance of the changes.
            </p>
          </div>

          {/* 13 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">13.</span>
              <h4 className=" font-semibold underline">
                Nodal Grievance Officer
              </h4>
            </div>
            <p>
              <span className="block">Name: Anupam Kumar</span>
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

          {/* 14 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">14.</span>
              <h4 className=" font-semibold underline">
                Data Grievance Officer
              </h4>
            </div>
            <p>
              For concerns related to personal data, please reach out to the
              Grievance Officer mentioned above.
            </p>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
