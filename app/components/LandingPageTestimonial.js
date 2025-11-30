"use client";

import React, { useState } from "react";
import Image from "next/image";

const OurCustomer = "/assets/our-customers.svg";

const testimonials = [
  {
    image: "/assets/profile-user.png",
    name: "Rohan Mehta",
    profile: "Salaried, Mumbai",
    story:
      "The entire loan process was handled very efficiently. The team explained everything clearly and ensured quick approval without any complications.",
    link: "#",
  },
  {
    image: "/assets/profile-user.png",
    name: "Sneha Iyer",
    profile: "Self-Employed, Bengaluru",
    story:
      "Very smooth and professional experience. Documentation was minimal and support was excellent, making the whole process extremely convenient.",
    link: "#",
  },
  {
    image: "/assets/profile-user.png",
    name: "Amitabh Kulkarni",
    profile: "Salaried, Pune",
    story:
      "I was impressed with the speed and clarity during the loan approval. The support team guided me well and helped me choose the right plan.",
    link: "#",
  },
  {
    image: "/assets/profile-user.png",
    name: "Neha Malhotra",
    profile: "Business Owner, Noida",
    story:
      "The guidance was really helpful and the approval came faster than expected. The process was simple and very well managed.",
    link: "#",
  },
  {
    image: "/assets/profile-user.png",
    name: "Vikram Singh",
    profile: "Self-Employed, Jaipur",
    story:
      "They understood my requirements properly and assisted with the right loan option. Quick processing helped me manage urgent financial needs.",
    link: "#",
  },
  {
    image: "/assets/profile-user.png",
    name: "Priya Nanduri",
    profile: "Salaried, Hyderabad",
    story:
      "The process was seamless with excellent communication. I really appreciated the transparency and minimal paperwork involved.",
    link: "#",
  },
];


const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const handleNext = () =>
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const getVisibleCards = () => {
    const total = testimonials.length;
    return [
      testimonials[(activeIndex - 1 + total) % total],
      testimonials[activeIndex],
      testimonials[(activeIndex + 1) % total],
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="w-[85%] mx-auto mt-3 text-center relative ">
      {/* Title */}
      <div className="flex items-center justify-center mt-16 max-md:hidden">
        <Image
          src={OurCustomer}
          alt="Our Customers"
          width={290}
          height={80}
          className=""
        />
      </div>
          {/* Title */}
      <div className="flex items-center justify-center mt-12 md:hidden">
        <Image
          src={OurCustomer}
          alt="Our Customers"
          width={220}
          height={80}
          className=""
        />
      </div>

      {/* Cards Section */}
{/* Desktop Testimonials - No Change */}
<div className="hidden md:flex items-center justify-center gap-6 pt-20 pb-10 w-full overflow-hidden">
  {visibleCards.map((item, index) => {
    const isCenter = index === 1;
    return (
      <div
        key={index}
        className={`transition-all duration-500 ease-in-out relative rounded-2xl px-6 pb-6 pt-12 shadow-lg ${
          isCenter
            ? "scale-110 bg-[#fff9f4] border border-black z-20"
            : "scale-90 bg-white border border-black z-10"
        }`}
        style={{ width: isCenter ? "320px" : "260px" }}
      >
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <Image
            src={item.image}
            width={85}
            height={85}
            alt={item.name}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>

        <h4 className="font-bold text-[#242a71] mt-2">{item.name}</h4>
        <div className="text-gray-600 text-[14px]">{item.profile}</div>
        <hr className="my-4 border-gray-300" />
        <p className="leading-relaxed">{item.story}</p>
      </div>
    );
  })}
</div>

{/* Navigation Buttons (Desktop only) */}
<button
  onClick={handlePrev}
  className="hidden md:flex absolute left-[-3px] top-[55%] -translate-y-1/2 w-10 h-10 bg-white text-[#242a71] border-[1.5px] !border-[#dbdbdb] rounded-full items-center justify-center hover:bg-gray-100 transition"
>
  ←
</button>
<button
  onClick={handleNext}
  className="hidden md:flex absolute right-[-3px] top-[55%] -translate-y-1/2 w-10 h-10 bg-white text-[#242a71] border-[1.5px] !border-[#dbdbdb] rounded-full items-center justify-center hover:bg-gray-100 transition"
>
  →
</button>


{/* 📱 Mobile Testimonials (Only 1 card, scrollable) */}
<div
  className="flex md:hidden gap-4 mt-8 snap-x snap-mandatory overflow-x-auto no-scrollbar scroll-smooth px-2 pb-8 relative"
>

  {testimonials.map((item, index) => (
 <div
  key={index}
  className="
    snap-center shrink-0 w-[90%] mx-auto 
    bg-white border border-black rounded-2xl 
    px-3 pb-4 pt-4 shadow-lg relative
  "
>
  <div
    className="
      absolute left-1/2 -translate-x-1/2
       
    "
  >
    <Image
      src={item.image}
      width={85}
      height={85}
      alt={item.name}
      className="
        rounded-full border-4 border-white shadow-lg
        max-md:w-[75px] max-md:h-[75px] 
      "
    />
  </div>

  <h4 className="font-bold text-[#242a71] mt-24">{item.name}</h4>
  <div className="text-gray-600 text-[14px]">{item.profile}</div>
  <hr className="my-4 border-gray-300" />
  <p className="leading-relaxed">{item.story}</p>
</div>

  ))}
</div>
    </div>
  );
};

export default Testimonials;
