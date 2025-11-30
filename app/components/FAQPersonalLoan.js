"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

import Image from "next/image";

const OurFAQ = "/assets/FAQ.svg";

const faqData = [
  {
    question: "How does CredPe help borrowers get better personal loans?",
    answer: `
      CredPe simplifies the entire personal loan journey by allowing borrowers to compare 
      the best loan offers from trusted lenders in one place. You don’t need to visit 
      multiple banks or handle separate applications. Our team ensures a smooth, 
      guided experience with minimal documentation and fast approvals.

      With CredPe, you can apply to multiple lenders at the same time, track your loan 
      status through a personalized dashboard, consult loan experts for free, 
      and secure the best interest rate available—all at zero additional cost.
    `,
  },
  {
    question: "What does a personal loan cover?",
    answer: `
      A personal loan can be used for a variety of needs including medical emergencies, 
      home renovation, travel, wedding expenses, business needs, or any other personal 
      financial requirement. It is unsecured, meaning no collateral is needed.
    `,
  },
  {
    question: "What determines the interest rate on a personal loan?",
    answer: `
      The interest rate depends on multiple factors such as your credit score, income level, 
      employment type, repayment history, existing EMIs, age, and the loan amount requested. 
      Better creditworthiness generally results in lower interest rates.
    `,
  },
  {
    question: "Can one avail tax benefits on personal loans?",
    answer: `
      Personal loans do not typically provide tax benefits. However, if the loan amount is 
      used for specific purposes such as home renovation, business investment, or purchasing 
      assets, it may qualify for tax deductions depending on the usage and applicable tax laws.
    `,
  },
];

const FAQPersonalLoan = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="w-[85%] mx-auto mt-3 mb-12 text-center">
      <div className="flex items-center justify-center mt-6 mb-8">
           <Image
             src={OurFAQ}
             alt="Our Banking Partners"
             width={460}
             height={80}
             className=""
           />
         </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border rounded-lg bg-white shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-3 text-left"
            >
              <p className="font-semibold">
                {faq.question}
              </p>

              {openIndex === index ? (
                <Minus className="text-green-600 w-5 h-5" />
              ) : (
                <Plus className="text-[#242a71] w-5 h-5" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-4 pb-5 text-start text-gray-600 leading-relaxed text-[14px]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPersonalLoan;
