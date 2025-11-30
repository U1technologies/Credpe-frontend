"use client";

import Image from "next/image";
import React from "react";

// SVG from public must be referenced as a path
const OurBanking = "/assets/our-partners.svg";

const BankingPartners = () => {
  const partners = [
    { logo: "/assets/banks/axis.svg", name: "Axis Bank" },
    { logo: "/assets/banks/Bajaj_Finserv.svg", name: "Bajaj Finserv" },
    { logo: "/assets/banks/hdfc.svg", name: "HDFC" },
    { logo: "/assets/banks/incred-finance.png", name: "Incred" },
    { logo: "/assets/banks/finnable.jpg", name: "Finnable Bank" },
    { logo: "/assets/banks/au-bank.jpg", name: "AU bank" },
    { logo: "/assets/banks/protium.png", name: "Protium Finance" },
    { logo: "/assets/banks/yes-bank.svg", name: "Yes bank" },
    { logo: "/assets/banks/hinduja-1.jpg", name: "Hinduja" },
  ];

  return (
    <div className="w-[85%] mx-auto mt-3 text-center">
      
      {/* Heading (Fixed Now) */}
      <div className="flex items-center justify-center mt-6">
        <Image
          src={OurBanking}
          alt="Our Banking Partners"
          width={380}
          height={80}
          className="max-md:hidden"
        />
         <Image
          src={OurBanking}
          alt="Our Banking Partners"
          width={290}
          height={80}
          className="md:hidden"
        />
      </div>

      <p className="text-[16px] text-gray-600 max-md:text-[14px]">
        A variety of top lenders you can choose from
      </p>

   <div className="flex flex-wrap justify-center gap-6 mt-8">
  {partners.map((bank, index) => (
    <div
      key={index}
      className="w-[140px] h-[70px] border-[1.5px] border-[#d4d4d4] rounded-md bg-white 
                 flex items-center justify-center hover:shadow-md transition"
    >
      <Image
        src={bank.logo}
        alt={bank.name}
        width={110}
        height={60}
        className="object-contain max-w-[110px] max-h-[60px]"
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default BankingPartners;
