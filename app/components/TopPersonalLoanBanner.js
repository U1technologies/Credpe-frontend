"use client";

import React from "react";
import mainLogo from '../../public/assets/main-logo.svg'
import Image from "next/image";
import Link from "next/link";

const TopPersonalLoanBanner = () => {
  return (
    <div className="w-[95%] max-lg:w-[90%] max-lg:mx-auto pt-8 flex items-center justify-center gap-8 max-md:gap-4">
    <Image
      src={mainLogo}
      alt="Credpe – AI-Powered Smart Finance Platform for Loans & Credit Cards"
      width={150} 
      height={80} 
      className="max-md:hidden"
      priority
    />
      <Image
      src={mainLogo}
      alt="Credpe – AI-Powered Smart Finance Platform for Loans & Credit Cards"
      width={100} 
      height={80} 
      className="md:hidden"
      priority
    />

      <div className="font-bold text-[36px] max-md:text-[18px]">
        Check your Personal Loan Eligibility in 2 mins
      </div>
    </div>
  );
};

export default TopPersonalLoanBanner;
