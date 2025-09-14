// // "use client";

// // import Image from "next/image";
// // import { Button } from "./ui/button";

// // const Hero = () => {
// //   return (
// //     <div className="relative min-h-[80vh] flex items-center bg-gradient-hero overflow-hidden">
// //       {/* Background Image */}
// //       <div className="absolute inset-0">
// //         <Image
// //           src="/assets/hero-image.jpg" // Place hero-image.jpg inside /public
// //           alt="Professional fintech services"
// //           fill
// //           className="object-cover opacity-20"
// //           priority
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-light/80" />
// //       </div>

// //       <div className="container mx-auto px-15 relative z-10">
// //         <div className="max-w-3xl">
// //           <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
// //             Smart Loans.{" "}
// //             <span className="text-accent-light">Simple Process.</span>{" "}
// //             Fast Approval.
// //           </h1>

// //           <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
// //             Get the best loan deals with competitive interest rates.
// //             Quick approval, flexible EMIs, and 100% secure process.
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-4 mb-12">
// //             <Button variant="cta" size="lg" className="text-lg px-8 py-6">
// //               Apply Now
// //             </Button>
// //             <Button variant="hero" size="lg" className="text-lg px-8 py-6">
// //               Check Eligibility
// //             </Button>
// //           </div>

// //           {/* Trust Indicators */}
// //           <div className="flex flex-wrap items-center gap-8 text-primary-foreground/80">
// //             <div className="flex items-center gap-2">
// //               <div className="w-2 h-2 rounded-full bg-accent-light" />
// //               <span className="text-sm font-medium">₹10,000 Cr+ Disbursed</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <div className="w-2 h-2 rounded-full bg-accent-light" />
// //               <span className="text-sm font-medium">5 Lakh+ Happy Customers</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <div className="w-2 h-2 rounded-full bg-accent-light" />
// //               <span className="text-sm font-medium">30 Sec Application</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Decorative Elements */}
// //       <div className="absolute top-20 right-20 w-32 h-32 bg-accent-light/20 rounded-full blur-2xl" />
// //       <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary-light/30 rounded-full blur-3xl" />
// //     </div>
// //   );
// // };

// // export default Hero;

// "use client";

// import Image from "next/image";
// import { Button } from "./ui/button";
// import { Card } from "./ui/card";
// import { CheckCircle, TrendingUp, Shield, Zap } from "lucide-react";

// const Hero = () => {
//   return (
//     <div className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-[#F0F7FF] overflow-hidden">
//       {/* Background SVG decorations */}
//       <div className="absolute inset-0 opacity-7 pointer-events-none">
//         <svg
//           className="absolute inset-0 w-full h-full"
//           viewBox="0 0 1200 800"
//           preserveAspectRatio="none" 
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {/* Flowing Lines */}
//           <path
//             d="M0,400 Q300,200 600,400 T1200,400"
//             stroke="#4d7ac4ff"
//             strokeWidth="2"
//             fill="none"
//           />
//           <path
//             d="M0,500 Q200,300 400,500 T800,500 Q1000,300 1200,500"
//             stroke="#93C5FD"
//             strokeWidth="1.5"
//             fill="none"
//           />

//           {/* Floating Circles */}
//           <circle cx="100" cy="200" r="20" fill="rgba(32,109,231,0.1)" />
//           <circle cx="1100" cy="600" r="30" fill="rgba(147,197,253,0.1)" />
//           <circle cx="300" cy="100" r="15" fill="rgba(56,189,248,0.15)" />
//         </svg>
//       </div>

//       {/* Hero Content */}
//       <div className="w-[90%] mx-auto relative z-10">
//         <div className="grid lg:grid-cols-2 gap-20 items-center -mt-45">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <div className="inline-flex items-center px-4 py-2 bg-[#206de7]/10 text-[#206de7] rounded-full text-sm font-medium">
//                 <TrendingUp className="h-4 w-4 mr-2" />
//                 India&apos;s #1 Loan Platform
//               </div>

//                <h2 className="font-bold leading-tight">
//                 Get Your{" "}
//                 <span className="text-[#206de7]">Dream Loan</span>
//                 <br />
//                 in Minutes
//               </h2>

//               {/* <p className="text-lg text-gray-600 max-w-lg">
//                 Get the best loan deals with competitive interest rates. Quick
//                 approval, flexible EMIs, and 100% secure process.
//               </p> */}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button
//                 size="lg"
//                 className="bg-[#206de7] hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md"
//               >
//                 Apply Now
//                 <CheckCircle className="ml-2 h-5 w-5" />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-[#206de7] text-[#206de7] hover:bg-[#206de7] hover:text-white px-6 py-3 rounded-lg"
//               >
//                 Check Eligibility
//               </Button>
//             </div>

//             {/* Trust Indicators */}
//             {/* <div className="flex items-center space-x-6 pt-4 text-gray-600">
//               <div className="flex items-center space-x-2 text-sm">
//                 <Shield className="h-5 w-5 text-[#206de7]" />
//                 <span>₹10,000 Cr+ Disbursed</span>
//               </div>
//               <div className="flex items-center space-x-2 text-sm">
//                 <Zap className="h-5 w-5 text-[#206de7]" />
//                 <span>5 Lakh+ Happy Customers</span>
//               </div>
//               <div className="flex items-center space-x-2 text-sm">
//                 <Zap className="h-5 w-5 text-[#206de7]" />
//                 <span>30 Sec Application</span>
//               </div>
//             </div> */}
//           </div>

//           {/* Right Content */}
//           {/* <div className="relative"> */}
//             <div className="relative flex justify-center">
//               <div className="relative overflow-hidden">
//                 <div className="relative">
//                  <Image
//   src="/assets/main-2.png"
//   alt="Professional fintech services"
//   width={380}
//   height={200}
//   className="rounded-2xl object-cover"
// />

//                 </div>
//               </div>
//             {/* </div> */}
//           </div>
//         </div>
//       </div>


//       {/* Bottom Wave (blending into next section) */}
//       <div className="absolute bottom-0 left-0 w-full">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//           className="w-full h-auto"
//         >
//           <path
//             fill="#ffffff"
//             fillOpacity="1"
//             d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L0,320Z"
//           ></path>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Hero;



// "use client";

// import Image from "next/image";
// import { Button } from "./ui/button";

// const Hero = () => {
//   return (
//     <div className="relative min-h-[80vh] flex items-center bg-gradient-hero overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/assets/hero-image.jpg" // Place hero-image.jpg inside /public
//           alt="Professional fintech services"
//           fill
//           className="object-cover opacity-20"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-light/80" />
//       </div>

//       <div className="container mx-auto px-15 relative z-10">
//         <div className="max-w-3xl">
//           <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
//             Smart Loans.{" "}
//             <span className="text-accent-light">Simple Process.</span>{" "}
//             Fast Approval.
//           </h1>

//           <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
//             Get the best loan deals with competitive interest rates.
//             Quick approval, flexible EMIs, and 100% secure process.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mb-12">
//             <Button variant="cta" size="lg" className="text-lg px-8 py-6">
//               Apply Now
//             </Button>
//             <Button variant="hero" size="lg" className="text-lg px-8 py-6">
//               Check Eligibility
//             </Button>
//           </div>

//           {/* Trust Indicators */}
//           <div className="flex flex-wrap items-center gap-8 text-primary-foreground/80">
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-accent-light" />
//               <span className="text-sm font-medium">₹10,000 Cr+ Disbursed</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-accent-light" />
//               <span className="text-sm font-medium">5 Lakh+ Happy Customers</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-accent-light" />
//               <span className="text-sm font-medium">30 Sec Application</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute top-20 right-20 w-32 h-32 bg-accent-light/20 rounded-full blur-2xl" />
//       <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary-light/30 rounded-full blur-3xl" />
//     </div>
//   );
// };

// export default Hero;

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
    <div className="relative min-h-[80vh] max-md:min-h-[55vh] flex flex-col items-center justify-center overflow-hidden">
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
                className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg shadow-md"
              >
                Apply Now
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
                </Link>
            </div>
          </div>

          {/* Right Content (Carousel) */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-full max-w-[350px] sm:max-w-[450px] h-[200px] sm:h-[220px] overflow-hidden mx-auto">
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
            <div className="flex space-x-2 mt-4">
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
          <div className="flex items-center justify-between bg-primary text-white px-6 py-2 rounded-full shadow-md w-[300px] cursor-pointer hover:bg-[#0595d9] transition">
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
          <div className="flex items-center justify-between bg-primary text-white px-6 py-2 rounded-full shadow-md w-[300px] cursor-pointer hover:bg-[#0595d9] transition">
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
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 w-[85%] mx-auto md:hidden">
              {/* Free Credit Score */}
              <div className="flex items-center justify-between bg-[#206de7] text-white px-6 py-2 rounded-full shadow-md w-full sm:w-[300px] cursor-pointer hover:bg-[#0595d9] transition">
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
              <div className="flex items-center justify-between bg-[#206de7] text-white px-6 py-2 rounded-full shadow-md w-full sm:w-[300px] cursor-pointer hover:bg-[#0595d9] transition">
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




