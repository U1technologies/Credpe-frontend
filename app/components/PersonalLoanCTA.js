"use client";

import Image from "next/image";
import React from "react";

const PersonalLoanCTA = () => {

  const scrollToCalculator = () => {
    const target = document.getElementById("loan-calculator-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-[85%] mx-auto mt-12 mb-16 p-4 rounded-xl bg-[#f8dfc1] flex items-center justify-between">
      
      <div>
        <h3 className="font-semibold max-md:leading-[1.2]">
          Find the best personal loan for your needs.
        </h3>

        <button
          onClick={scrollToCalculator}
          className="mt-4 bg-white font-semibold px-4 py-1 cursor-pointer rounded-lg shadow hover:shadow-md transition"
        >
          <span className="text-[14px]">Check Eligibility</span>
        </button>
      </div>

      <Image
        src="/assets/loan-cta.png"
        alt="loan illustration"
        height={80}
        width={80}
      />
    </div>
  );
};

export default PersonalLoanCTA;
