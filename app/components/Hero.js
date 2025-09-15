
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { TrendingUp, CheckCircle } from "lucide-react";

// your icons (replace with actual imports if they’re images instead of lucide icons)
import creditScoreIcon from "/public/assets/credit-score.png";
import calculatorIcon from "/public/assets/calculator.png";
import Link from "next/link";

const images = [
  "/assets/hero-2nd.png",
  "/assets/hero-1st.png",
  "/assets/hero-3rd.png",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual dot click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative min-h-[80vh] max-md:min-h-[45vh] max-md:my-2 flex flex-col items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="w-[85%] max-md:w-[95%] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-md:hidden">
            <div className="space-y-4">
              <div className="font-semibold text-3xl sm:text-5xl">
                Want A Dream Loan?{" "}
                <span className="text-primary">90% Approval Rate</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={"/apply/personal"}
                >
                 <Button
                size="lg"
                className="bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-lg shadow-md"
              >
                Apply Now
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
                </Link>
            </div>
          </div>

          {/* Right Content (Carousel) */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-full max-w-[350px] sm:max-w-[450px] overflow-hidden mx-auto">
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {images.map((src, idx) => (
      <Image
        key={idx}
        src={src}
        alt={`Slide ${idx + 1}`}
        width={450}
        height={220}
        className="object-cover rounded-2xl flex-shrink-0 w-full"
      />
    ))}
  </div>
</div>


            {/* Dots Indicator */}
            <div className="flex space-x-2 mt-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === idx ? "bg-[#206de7]" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Two Big Buttons Below */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 max-md:hidden">
          {/* Free Credit Score */}
          <div className="flex items-center justify-between bg-accent text-white px-6 py-2 rounded-full shadow-md w-[300px] cursor-pointer hover:bg-[#0595d9] transition">
            <div>
              <p className="font-medium">Free Credit Score</p>
              <div className="text-[10px]">Get Your Free Credit Score Here!</div>
            </div>
            <Image
              src={creditScoreIcon}
              alt="Credit Score"
              width={45}
              height={45}
            />
          </div>

          {/* Check Eligibility */}
          <div className="flex items-center justify-between bg-accent text-white px-6 py-2 rounded-full shadow-md w-[300px] cursor-pointer hover:bg-[#0595d9] transition">
            <div>
              <p className="font-medium">Check Eligibility</p>
              <div className="text-[10px]">Get Your Loan Eligibility Now!</div>
            </div>
            <Image
              src={calculatorIcon}
              alt="Calculator"
              width={45}
              height={45}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-3 w-[85%] mx-auto md:hidden">
              {/* Free Credit Score */}
              <div className="flex items-center justify-between bg-accent text-white px-6 py-2 rounded-full shadow-md w-full sm:w-[300px] cursor-pointer hover:bg-[#0595d9] transition">
                <div>
                  <p className="font-medium">Free Credit Score</p>
                  <div className="text-[10px]">Get Your Free Credit Score Here!</div>
                </div>
                <Image
                  src={creditScoreIcon}
                  alt="Credit Score"
                  width={45}
                  height={45}
                />
              </div>

              {/* Check Eligibility */}
              <div className="flex items-center justify-between bg-accent text-white px-6 py-2 rounded-full shadow-md w-full sm:w-[300px] cursor-pointer hover:bg-[#0595d9] transition">
                <div>
                  <p className="font-medium">Check Eligibility</p>
                  <div className="text-[10px]">Get Your Loan Eligibility Now!</div>
                </div>
                <Image
                  src={calculatorIcon}
                  alt="Calculator"
                  width={45}
                  height={45}
                />
              </div>
            </div>
      </div>
    </div>
  );
};

export default Hero;




