"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsOfUse() {
  return (
    <>
      {/* Global Header */}
      <Header />

      {/* Top Primary Bar */}
      <div className="w-full bg-primary h-[20vh] max-md:h-[14vh] flex items-center justify-center">
        <h1 className="text-center text-white font-bold">
          Terms of Use
        </h1>
      </div>

      <main className="w-[90%] mx-auto py-6 text-foreground">

        {/* Intro Section */}
        <p className="mb-4">
          This Agreement sets forth the terms and conditions that apply to the
          access and use of the Website{" "}
          <a
            href="https://www.credpe.in"
            className="text-primary hover:underline"
          >
            www.credpe.in
          </a>{" "}
          and its Mobile Application (collectively referred to as &quot;Website&quot;),
          which is managed and operated by U1 Technologies Private Limited
          (hereinafter referred to as &quot;Company&quot;/ &quot;Credpe&quot;), incorporated under
          the laws of India and registered under the Companies Act, 2013.
        </p>

        <p className="mb-4">
          This document/agreement (referred to as “Agreement”) is an electronic
          record in terms of the Information Technology Act, 2000 and generated
          by a computer system and does not require any physical or digital
          signatures. This document is published in accordance with the
          provisions of Rule 3 of the Information Technology (Intermediaries
          guidelines) 2011, which provides for the due diligence to be exercised
          for the access or usage of this Website.
        </p>

        <p className="mb-4">
          By accessing this Website or registering your information on the Website, the users (hereinafter referred to as &quot;you&quot; or &quot;your&quot;) agree
          to be bound by these Terms and Conditions (&quot;T&C&quot;). This Agreement along with
          the Privacy Policy and Disclaimer describes our relationship with you
          and will be subject to the rules, guidelines, policies, terms, and
          conditions applicable to any specific Service that is provided by this
          Website. They shall be deemed to be incorporated into this T&C and
          shall be considered as part and parcel of this T&C.
        </p>

        <p className="mb-4 font-medium">
          Be sure to return to this page periodically to review the most current
          version of the TOU. We reserve the right at any time, at our sole
          discretion, to change or otherwise modify the TOU without prior
          notice, and your continued access or use of this Website signifies
          your acceptance of the updated or modified TOU.
        </p>

        <p className="mb-6 font-semibold">
          PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY. YOUR ACCEPTANCE OF
          TERMS CONTAINED HEREIN CONSTITUTES THE AGREEMENT BETWEEN YOU AND THE
          COMPANY FOR THE PURPOSES AS DEFINED HEREUNDER.
        </p>

        {/* Numbered Clauses */}
        <div className="space-y-6">
          {/* 1 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">1.</span>
              <h4 className="font-semibold underline">
                Description and Acceptance of Services
              </h4>
            </div>
            <p>
              Credpe.in provides a platform to connect users with financial
              products and services offered by third-party institutions. By
              using the Website, you agree and acknowledge that Credpe is not a
              financial institution or bank, but acts as an intermediary to
              facilitate connections with service providers.
            </p>
          </div>

          {/* 2 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">2.</span>
              <h4 className=" font-semibold underline">
                License and Website Access
              </h4>
            </div>
            <p>
              Credpe grants you a limited, non-transferable, and revocable
              license to access and use the Website for personal and
              non-commercial use. You agree not to modify, distribute,
              reproduce, or exploit any content or information available on the
              Website for commercial purposes.
            </p>
          </div>

          {/* 3 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">3.</span>
              <h4 className="font-semibold underline">Privacy Policy</h4>
            </div>
            <p>
              Your use of the Website is also governed by our Privacy Policy,
              which outlines how we collect, use, and protect your personal
              information. By using the Website, you consent to the terms of our
              Privacy Policy.
            </p>
          </div>

          {/* 4 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">4.</span>
              <h4 className="font-semibold underline">
                Your Registration/Account
              </h4>
            </div>
            <p>
              In order to access certain services, you may be required to
              register on the Website by providing accurate and complete
              information. You are responsible for maintaining the
              confidentiality of your account and password and for restricting
              access to your device. You agree to accept responsibility for all
              activities that occur under your account.
            </p>
          </div>

          {/* 5 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">5.</span>
              <h4 className=" font-semibold underline">
                Customer Due Diligence Requirements (CDD)
              </h4>
            </div>
            <p>
              As per applicable laws and regulations, you may be required to
              provide documents and information for verification of identity,
              address, and other details for availing services through
              Credpe.in. Failure to provide such information may result in
              denial of services.
            </p>
          </div>

          {/* 6 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">6.</span>
              <h4 className=" font-semibold underline">Eligibility</h4>
            </div>
            <p>
              By using this Website, you confirm that you are at least 18 years
              of age and are legally competent to enter into a binding agreement
              under Indian laws.
            </p>
          </div>

          {/* 7 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">7.</span>
              <h4 className=" font-semibold underline">
                Submitted Content
              </h4>
            </div>
            <p>
              Any information, data, or material submitted by you to the Website
              shall be accurate and complete. You grant Credpe a non-exclusive,
              royalty-free, worldwide license to use, reproduce, and display
              such content for the purpose of providing services.
            </p>
          </div>

          {/* 8 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">8.</span>
              <h4 className="font-semibold underline">
                Third Party Links/Offers
              </h4>
            </div>
            <p>
              The Website may contain links to third-party websites, offers, or
              services. Credpe is not responsible for the content, accuracy, or
              practices of such third parties. Your dealings with such third
              parties are at your own risk.
            </p>
          </div>

          {/* 9 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">9.</span>
              <h4 className=" font-semibold underline">
                Group Insurance Policy
              </h4>
            </div>
            <p>
              If applicable, group insurance policies facilitated through the
              Website will be governed by the terms and conditions of the
              respective insurance provider. Credpe shall not be liable for
              claims, disputes, or services related to such policies.
            </p>
          </div>

          {/* 10 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">10.</span>
              <h4 className=" font-semibold underline">
                Disclaimer of Warranty
              </h4>
            </div>
            <p>
              The Website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. Credpe does not warrant that the Website will be
              uninterrupted, secure, or error-free. We disclaim all warranties
              of any kind, express or implied, including merchantability and
              fitness for a particular purpose.
            </p>
          </div>

          {/* 11 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">11.</span>
              <h4 className=" font-semibold underline">
                Limitation of Liability
              </h4>
            </div>
            <p>
              Credpe and its affiliates shall not be liable for any direct,
              indirect, incidental, consequential, or punitive damages arising
              from your use of the Website or reliance on its content.
            </p>
          </div>

          {/* 12 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">12.</span>
              <h4 className=" font-semibold underline">
                Site-Provided Email and Postings
              </h4>
            </div>
            <p>
              Users may not use the Website to send unsolicited messages, spam,
              or post harmful content. Credpe reserves the right to remove or
              block such content at its sole discretion.
            </p>
          </div>

          {/* 13 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">13.</span>
              <h4 className=" font-semibold underline">Indemnity</h4>
            </div>
            <p>
              You agree to indemnify and hold harmless Credpe, its directors,
              officers, employees, and affiliates from any claims, damages, or
              liabilities arising out of your use of the Website, your violation
              of the TOU, or infringement of any third-party rights.
            </p>
          </div>

          {/* 14 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">14.</span>
              <h4 className="font-semibold underline">
                Additional Terms and Conditions
              </h4>
            </div>
            <p>
              Specific services offered on the Website may be subject to
              additional terms and conditions. Such terms will be communicated
              at the time of availing the service and shall form part of this
              TOU.
            </p>
          </div>

          {/* 15 */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-bold">15.</span>
              <h4 className=" font-semibold underline">General</h4>
            </div>
            <p>
              This Agreement is governed by the laws of India. Any disputes
              shall be subject to the exclusive jurisdiction of the courts in
              Noida, Uttar Pradesh. For any queries, please contact us at{" "}
              <a
                href="mailto:support@credpe.in"
                className="text-primary hover:underline"
              >
                support@credpe.in
              </a>{" "}
              or visit us at Sector 4, Noida 201301.
            </p>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
