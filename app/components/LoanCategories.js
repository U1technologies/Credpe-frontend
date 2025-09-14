
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Import icons
import homeLoan from "../../public/assets/home-loan.png";
import personalLoan from "../../public/assets/personal.png";
import businessLoan from "../../public/assets/business-1.png";
import goldLoan from "../../public/assets/gold-loan.png";
import loanAgainstProperty from "../../public/assets/loan-against.png";
import loanAgainstCar from "../../public/assets/loan-against-car.png";
import vehicleLoan from "../../public/assets/vehicle-loan.png";
import educationLoan from "../../public/assets/education-loan.png";
import medicalLoan from "../../public/assets/medical-loan.png";
import transferLoan from "../../public/assets/transfer-loan.png";

const LoanCategories = () => {
  const [activeTab, setActiveTab] = useState("loans");

  const loanTypes = [
    {
      name: "Personal Loan",
      image: personalLoan,
      href: "/loans/personal",
      applyHref: "/apply/personal",
      badge: "Trending",
      badgeColor: "bg-green-100 text-green-600",
    },
    {
      name: "Business Loan",
      image: businessLoan,
      href: "/loans/business",
      applyHref: "/apply/business",
      badge: "Cashback Offer",
      badgeColor: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "Education Loan",
      image: educationLoan,
      href: "/loans/education",
      applyHref: "/apply/education",
      badge: "2 Years",
      badgeColor: "bg-gray-100 text-gray-700",
    },
    {
      name: "Home Loan",
      image: homeLoan,
      href: "/loans/home",
      applyHref: "/apply/home",
      badge: "Popular",
      badgeColor: "bg-blue-100 text-blue-600",
    },
    {
      name: "Vehicle Loan",
      image: vehicleLoan,
      href: "/loans/vehicle",
      applyHref: "/apply/vehicle",
    },
    {
      name: "Medical Loan",
      image: medicalLoan,
      href: "/loans/medical",
      applyHref: "/apply/medical",
      badge: "Special Offer",
      badgeColor: "bg-pink-100 text-pink-600",
    },
    {
      name: "Gold Loan",
      image: goldLoan,
      href: "/loans/gold",
      applyHref: "/apply/gold",
    },
    {
      name: "Loan Against Property",
      image: loanAgainstProperty,
      href: "/loans/property",
      applyHref: "/apply/property",
    },
    {
      name: "Transfer Home Loan",
      image: transferLoan,
      href: "/loans/transfer-home",
      applyHref: "/apply/transfer-home",
    },
    {
      name: "Loan Against Car",
      image: loanAgainstCar,
      href: "/loans/car",
      applyHref: "/apply/car",
    },
  ];

  return (
    <div className="bg-[#F0F7FF]">
      <div className="w-[90%] mx-auto py-10">
        <div className="text-center mb-10">
          <h3 className="font-bold text-gray-800">Popular Products</h3>

          {/* Tab Navigation */}
          <div className="flex justify-center mt-6 space-x-8">
            <button
              onClick={() => setActiveTab("loans")}
              className={`pb-2 font-medium text-sm transition-all relative ${
                activeTab === "loans"
                  ? "text-[#0057d1] border-b-2 border-[#0057d1] font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <h4>Loans</h4>
            </button>
            <button
              onClick={() => setActiveTab("insurance")}
              className={`pb-2 font-medium text-sm transition-all relative ${
                activeTab === "insurance"
                  ? "text-[#0057d1] border-b-2 border-[#0057d1] font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <h4>Insurance</h4>
            </button>
          </div>
        </div>

        {/* Loans Section */}
        {activeTab === "loans" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
            {loanTypes.map((loan) => (
              <div
                key={loan.name}
                className="relative flex flex-col items-center text-center rounded-xl shadow hover:shadow-md transition-all overflow-hidden bg-white"
              >
                {/* Badge - top right */}
                {loan.badge && (
                  <div
                    className={`absolute top-2 right-2 text-xs font-medium px-3 py-[2px] rounded-full ${loan.badgeColor}`}
                  >
                    {loan.badge}
                  </div>
                )}

                {/* Top Section */}
                <Link
                  href={loan.href}
                  className="flex-1 flex flex-col items-center justify-center p-6"
                >
                  <div className="w-10 h-10 my-2">
                    <Image
                      src={loan.image}
                      alt={loan.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-semibold text-sm text-gray-800">
                    {loan.name}
                  </span>
                </Link>

                {/* Footer Button */}
                <Link
                  href={loan.applyHref}
                  className="w-full bg-primary text-white py-1.5 text-sm hover:bg-primary/80 transition-colors"
                >
                  Apply
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Insurance Products
              </h3>
              <p className="text-gray-600 mb-6">
                Our comprehensive insurance solutions are coming soon. Stay tuned for exciting coverage options!
              </p>
              <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full inline-block font-medium">
                Coming Soon
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCategories;
