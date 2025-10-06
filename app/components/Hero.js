"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { TrendingUp, CheckCircle } from "lucide-react";

// your icons (replace with actual imports if they're images instead of lucide icons)
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
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const containerRef = useRef(null);

  // Auto scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isDragging]);

  // Handle manual dot click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch/Mouse event handlers
  const handleStart = (clientX) => {
    setIsDragging(true);
    startX.current = clientX;
    currentX.current = clientX;
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    currentX.current = clientX;
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    const diff = startX.current - currentX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left → next
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else {
        // Swipe right → prev
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
    }

    setIsDragging(false);
  };

  // Touch events
  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Mouse events for desktop
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd();
    }
  };

  // Add mouse event listeners
useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  const handleGlobalMouseMove = (e) => handleMouseMove(e);
  const handleGlobalMouseUp = () => handleMouseUp();

  if (isDragging) {
    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('mouseup', handleGlobalMouseUp);
  }

  return () => {
    document.removeEventListener('mousemove', handleGlobalMouseMove);
    document.removeEventListener('mouseup', handleGlobalMouseUp);
  };
}, [isDragging, handleMouseMove, handleMouseUp]); // Add missing dependencies

  return (
    <div className="relative min-h-[60vh] max-md:min-h-[45vh] max-md:mt-2 max-md:mb-7 flex flex-col items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="w-[85%] max-md:w-[95%] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-md:hidden">
            <div className="space-y-4">
             <div className="font-semibold">
  <div className="text-lg sm:text-2xl">Want A Dream Loan?</div>
  <div className="text-3xl sm:text-5xl">
    <span className="text-primary">90% Approval Rate</span>
  </div>
</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Credit Score and Eligibility buttons for desktop */}
              <Link href="/credit-score">
              <div className="flex items-center justify-between bg-primary text-white px-6 py-2 rounded-full shadow-md w-[240px] cursor-pointer transition">
                <div>
                  <span className="font-medium text-sm">Credit Score</span>
                  <div className="text-[10px]">Check Your Free Credit Score!</div>
                </div>
                <Image
                  src={creditScoreIcon}
                  alt="Credit Score"
                  width={35}
                  height={35}
                />
              </div>
              </Link>
              <Link href="/eligibility-check">
              <div className="flex items-center justify-between bg-primary text-white px-6 py-2 rounded-full shadow-md w-[240px] cursor-pointer transition">
                <div>
                  <span className="font-medium text-sm">Check Eligibility</span>
                  <div className="text-[10px]">Get Your Loan Eligibility Now!</div>
                </div>
                <Image
                  src={calculatorIcon}
                  alt="Calculator"
                  width={35}
                  height={35}
                />
              </div>
              </Link>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <div
              ref={containerRef}
              className="relative w-full max-w-[350px] sm:max-w-[450px] overflow-hidden mx-auto cursor-pointer"
            >
              <div
                className="flex transition-transform duration-700 ease-in-out select-none"
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%)`,
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                draggable={false}
              >
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-full pr-5 max-md:pr-0"
                  >
                    <Image
                      src={src}
                      alt={`Slide ${idx + 1}`}
                      width={450}
                      height={220}
                      className="object-cover rounded-2xl w-full pointer-events-none"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex space-x-2 mt-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                    currentIndex === idx ? "bg-primary" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>

        </div>
        <div className="hidden"></div>
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-3 w-[90%] mx-auto md:hidden">
              {/* Free Credit Score */}
              <Link href="/credit-score">
              <div className="flex items-center justify-between bg-primary text-white px-6 py-2 rounded-full shadow-md w-full sm:w-[300px] cursor-pointer transition">
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
              </Link>

              {/* Check Eligibility */}
              <Link href="/eligibility-check">
              <div className="flex items-center justify-between bg-primary text-white px-6 py-2 rounded-full shadow-md w-full sm:w-[300px] cursor-pointer transition">
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
              </Link>
            </div>
      </div>
    </div>
  );
};

export default Hero;