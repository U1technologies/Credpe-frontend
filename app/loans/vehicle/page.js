export const metadata = {
  title: "Vehicle Loan – Car, Bike & EV Loan at Best Interest Rates | CredPe",
  description:
    "Apply for a Vehicle Loan with flexible EMIs and competitive interest rates. Compare car, bike, EV, and commercial vehicle loan offers from top banks & NBFCs. Check eligibility, documents, and calculate EMI on CredPe.",
  keywords: [
    "vehicle loan",
    "car loan",
    "bike loan",
    "electric vehicle loan",
    "EV loan",
    "used car loan",
    "commercial vehicle loan",
    "vehicle loan interest rate",
    "vehicle loan eligibility",
    "vehicle loan documents",
    "new car loan",
    "two wheeler loan"
  ],
  openGraph: {
    title: "Vehicle Loan – Compare Car, Bike & EV Loan Offers | CredPe",
    description:
      "Get the best vehicle loan offers for cars, bikes, EVs, and commercial vehicles. Compare interest rates, eligibility criteria, and documents required. Apply online with CredPe.",
    url: "https://credpe.in/loans/vehicle",
    siteName: "CredPe",
    type: "website",
  },
  alternates: {
    canonical: "https://credpe.in/loans/vehicle",
  },
};

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import EMICalculator from "@/app/components/EMICalculator";
import { CheckCircle, DollarSign, Clock, Shield, ArrowRight , ChevronLeft, ChevronRight, Check, Percent, Calendar, Zap, CreditCard, RefreshCw, FileText} from "lucide-react";
import vehicleLoan from "../../../public/assets/vehicle-loan.png";
import loanImg from "../../../public/assets/loan-bg.png";
import Image from "next/image";
import loanContent from "@/app/content";
import { useRef } from "react";
import underline from '../../../public/assets/under-1.svg'
import AutoScrollLogos from "@/app/components/LoanLogos";


// Reusable Components
const SectionNavigation = ({ sections, activeSection, onSectionClick }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  return (
   <div className="sticky top-20 z-40  w-[90%] max-md:w-[92%] rounded-full mx-auto bg-primary-light border !border-[#e3ecfa] py-2 mt-5 max-md:mt-2">
      <div className="container mx-auto px-2">
        <div className="relative flex items-center">
          {/* Left Chevron */}
          <button
            onClick={scrollLeft}
            className=" md:flex items-center justify-center w-8 h-8 rounded-full bg-primary-light hover:bg-gray-200 transition-colors mr-2 max-md:mr-0 flex-shrink-0"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 text-primary" />
          </button>

          {/* Scrollable Navigation */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto  no-scrollbar scroll-smooth space-x-8 max-md:space-x-4 flex-1"
          >
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionClick(section.id)}
                className={`whitespace-nowrap  text-sm transition-all relative flex-shrink-0 ${
                  activeSection === section.id
                    ? "text-primary font-semibold"
                    : "text-muted-foreground "
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Right Chevron */}
          <button
            onClick={scrollRight}
            className=" md:flex items-center justify-center w-8 h-8 rounded-full bg-primary-light hover:bg-gray-200 transition-colors ml-2 flex-shrink-0"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

const KeyHighlights = ({ highlights }) => (
  <section id="highlights" className="pt-10">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-4xl">
               <div className="inline-block mb-4">
    <h3 className="font-bold text-gray-800">
                Key Highlights of{" "}
 <span className="inline-block text-primary"> Vehicle Loan
        <Image 
          src={underline} 
          alt="" 
          width={100}
          height={10}
          className="-mt-1"
        />
      </span>
    </h3>
  </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ">
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const BestBanks = ({ banks }) => (
  <section id="banks" className="py-10">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-6">
    <h3 className="font-bold text-gray-800">
                Best Banks & NBFCs Offering{" "}
 <span className="inline-block text-primary">Vehicle Loan
        <Image 
          src={underline} 
          alt="" 
          width={100}
          height={10}
          className="-mt-1"
        />
      </span>
    </h3>
  </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Bank/NBFC</th>
                <th className="px-6 py-4 text-left font-semibold">Loan Amount</th>
                <th className="px-6 py-4 text-left font-semibold">Interest Rate</th>
                <th className="px-6 py-4 text-left font-semibold">Processing Fee</th>
                <th className="px-6 py-4 text-left font-semibold">Max Tenure</th>
              </tr>
            </thead>
            <tbody>
              {banks.map((bank, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="px-6 py-4 font-semibold text-primary">{bank.bank}</td>
                  <td className="px-6 py-4">{bank.loanAmount}</td>
                  <td className="px-6 py-4">{bank.interestRate}</td>
                  <td className="px-6 py-4">{bank.processingFee}</td>
                  <td className="px-6 py-4">{bank.maxTenure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

const Features = ({ features }) => {
  return (
    <section id="features" className="pb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
                                      <div className="text-center mb-6">
    <h3 className="font-bold text-gray-800">
                Features & Benefits of{" "}
 <span className="inline-block text-primary">Vehicle Loan
        <Image 
          src={underline} 
          alt="" 
          width={100}
          height={10}
          className="-mt-1"
        />
      </span>
    </h3>
  </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-md:px-0">
            {features.map((feature, index) => (
              <div key={index} className="flex justify-center">
                {/* Main content container */}
                <div className="relative w-full h-[100px] bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-3 flex items-center pl-10">
                  {/* Icon positioned half outside container */}
                  <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{feature.title}</p>
                    <span className="text-sm text-gray-600 leading-relaxed">{feature.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LoanTypes = ({ types }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 260; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="types" className="pb-10">
      <div className="container mx-auto px-4">
                                   <div className="text-center mb-6">
    <h3 className="font-bold text-gray-800">
                Types of{" "}
 <span className="inline-block text-primary">Vehicle Loan
        <Image 
          src={underline} 
          alt="" 
          width={100}
          height={10}
          className="-mt-1"
        />
      </span>
    </h3>
  </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-2"
        >
          {types.map((type, index) => (
            <Card
              key={index}
              className="w-[278px] flex-shrink-0 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <CardHeader>
                <div className="flex items-center mb-2">
                  <ArrowRight className="w-5 h-5 mr-2 text-primary" />
                  <h4 className="text-primary font-semibold">{type.name}</h4>
                </div>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Bottom-centered scroll buttons */}
        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={() => scroll("left")}
            className="bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
          >
            <ArrowRight className="w-5 h-5 rotate-180 text-primary" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
          >
            <ArrowRight className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Eligibility = ({ eligibility, documents }) => {
  const [activeTab, setActiveTab] = useState('eligibility');

  return (
    <section id="eligibility" className="pb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
                                      <div className="text-center mb-6">
    <h3 className="font-bold text-gray-800">
                Eligibility &{" "}
 <span className="inline-block text-primary">Documents
        <Image 
          src={underline} 
          alt="" 
          width={120}
          height={10}
          className="-mt-1"
        />
      </span>
    </h3>
  </div>          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 bg-white rounded-lg shadow-sm p-1">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'eligibility'
                    ? 'bg-accent text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('eligibility')}
              >
                Eligibility Criteria
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'documents'
                    ? 'bg-accent text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('documents')}
              >
                Documents Required
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl border border-primary p-5">
            {activeTab === 'eligibility' ? (
              <div className="space-y-6">
                <h4 className="font-semibold text-primary border-b pb-2">Eligibility Criteria</h4>
                <div className="">
                  <table className="w-full text-left border-separate border-spacing-0">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium text-gray-700 border-b border-r border-gray-300">Age</td>
                        <td className="py-2 text-gray-600 pl-4 border-b">{eligibility.age}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium text-gray-700 border-b border-r border-gray-300">Income</td>
                        <td className="py-2 text-gray-600 pl-4 border-b">{eligibility.income}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium text-gray-700 border-b border-r border-gray-300">Employment</td>
                        <td className="py-2 text-gray-600 pl-4 border-b">{eligibility.employment}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium text-gray-700 border-b border-r border-gray-300">Credit Score</td>
                        <td className="py-2 text-gray-600 pl-4 border-b">{eligibility.creditScore}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium text-gray-700  border-r border-gray-300">Documents</td>
                        <td className="py-2 text-gray-600 pl-4 ">{eligibility.documents}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
            <div className="space-y-6">
  <h4 className="font-semibold text-primary border-b pb-2">Documents Required</h4>
  <div className="">
    <table className="w-full text-left border-separate border-spacing-0">
      <tbody>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium text-gray-700 border-b border-r border-gray-300">Identity Proof</td>
          <td className="py-2 text-gray-600 pl-4 border-b">
            <ul className="list-disc list-inside">
              {documents.identity.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium text-gray-700 border-b border-r border-gray-300">Income Proof (Salaried)</td>
          <td className="py-2 text-gray-600 pl-4 border-b">
            <ul className="list-disc list-inside">
              {documents.income.salaried.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium text-gray-700 border-b border-r border-gray-300">Income Proof (Self-Employed)</td>
          <td className="py-2 text-gray-600 pl-4 border-b">
            <ul className="list-disc list-inside">
              {documents.income.selfEmployed.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium text-gray-700 border-b border-r border-gray-300">Vehicle Documents</td>
          <td className="py-2 text-gray-600 pl-4 border-b">
            <ul className="list-disc list-inside">
              {documents.vehicle.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </td>
        </tr>
        <tr className="border-b border-gray-200">
          <td className="py-2 font-medium text-gray-700 border-r border-gray-300">Others</td>
          <td className="py-2 text-gray-600 pl-4">
            <ul className="list-disc list-inside">
              {documents.others.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


const ApplicationProcess = ({ steps }) => (
  <section id="application" className="pb-10">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
                                    <div className="text-center mb-6">
    <h3 className="font-bold text-gray-800">
                How to Apply for{" "}
 <span className="inline-block text-primary">Vehicle Loan
        <Image 
          src={underline} 
          alt="" 
          width={100}
          height={10}
          className="-mt-1"
        />
      </span>
    </h3>
  </div>       
        {/* Desktop: Horizontal Timeline, Mobile: Vertical Timeline */}
        <div className="relative bg-[#f7faff] py-10 px-8 max-md:py-4 max-md:px-4 rounded-xl">
          {/* Desktop Steps Grid */}
          <div className="hidden md:flex justify-between items-start relative max-w-5xl mx-auto">
            {/* Horizontal Connection Line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-primary z-0"></div>
           
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative z-10 flex-1">
                {/* Step Number Circle */}
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-2xl mb-4 shadow-xl border-4 border-white">
                  {index + 1}
                </div>
               
                {/* Step Content */}
                <div className="text-center max-w-48">
                  <p className="text-gray-600 text-sm leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="md:hidden relative pl-6">
            {/* Continuous Vertical Line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-primary"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="flex items-start relative mb-4 last:mb-0">
                {/* Step Number Circle */}
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-lg border-4 border-white flex-shrink-0 relative z-10 -ml-6">
                  {index + 1}
                </div>
                
                {/* Step Content */}
                <div className="ml-4 pt-[6px]">
                  <p className="text-gray-600 text-sm leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function VehicleLoan() {
  // const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("highlights");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanAmount: "",
    city: "",
    income: ""
  });
  const [showHeader, setShowHeader] = useState(true);

  // Get content for personal loan
  const content = loanContent.vehicle;

  // Define sections for navigation
  const sections = [
    { id: "highlights", title: "Key Highlights" },
    { id: "banks", title: "Best Banks & NBFCs" },
    { id: "features", title: "Features & Benefits" },
    { id: "types", title: "Types" },
    { id: "eligibility", title: "Eligibility Required" },
    { id: "application", title: "How to Apply" },
     { id: "calculator", title: "EMI Calculator" },
  ];

const handleSectionClick = (sectionId) => {
  setActiveSection(sectionId);
  const element = document.getElementById(sectionId);
  if (element) {
    const yOffset = -120; // adjust this based on your sticky navbar height
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};


useEffect(() => {
  const handleScroll = () => {
    let currentSection = sections[0].id;

    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i].id);
      if (section) {
        const rect = section.getBoundingClientRect();
        // pick the section whose top is closest to (but not too far above) the viewport
        if (rect.top <= window.innerHeight * 0.25 && rect.bottom >= 150) {
          currentSection = sections[i].id;
          break;
        }
      }
    }

    setActiveSection(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once on mount

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [sections]);


  return (
    <div className="min-h-screen">
      <Header />

<div className="relative py-10 bg-white">
  <div className="container mx-auto px-4 relative z-10 max-w-5xl">
    <div className="flex flex-col md:flex-row items-center md:items-start">
      
{/* Mobile: Icon and Title in Same Row */}
<div className="flex md:hidden items-start gap-4 w-full">
  <div className="flex-shrink-0">
    <div className="rounded-full bg-primary-light border !border-[#e3ecfa] p-6 flex items-center justify-center">
      <Image
        src={vehicleLoan}
        alt="Business Loan"
        width={50}
        height={50}
        className="object-contain"
      />
    </div>
  </div>
  <div className="flex-1">
    <span className="font-bold text-[30px] text-primary mb-2">
      {content.heroTitle}
    </span>
    <p className="text-muted-foreground text-sm">
      {content.heroSubtitle}
    </p>
  </div>
</div>

{/* Desktop: Left Circle with Icon */}
<div className="hidden md:flex flex-shrink-0">
  <div className="rounded-full bg-primary-light border !border-[#e3ecfa] p-12 flex items-center justify-center">
    <Image
      src={vehicleLoan}
      alt="Business Loan"
      width={100}
      height={100}
      className="object-contain"
    />
  </div>
</div>

{/* Right Content */}
<div className="w-full md:mt-0 md:ml-8 text-left">
  
  {/* Desktop: Title */}
  <h2 className="hidden md:block font-bold text-3xl text-primary mb-2">
    {content.heroTitle}
  </h2>
  
  {/* Desktop: Subtitle */}
  <p className="hidden md:block text-muted-foreground">
    {content.heroSubtitle}
  </p>

  {/* AUTO-SCROLL LOGOS */}
  <AutoScrollLogos logos={content.bestBanks} />

  {/* Apply Now Button */}
{/* Buttons */}
<div className="flex gap-4 justify-start">
  <Button variant="cta" size="sm">
    Apply Now
  </Button>
  <Button
    variant="outline"
    size="sm"
    className="!border-1.5px !border-[color:var(--primary)]"
  >
    Check Eligibility
  </Button>
</div>
</div>
    </div>
  </div>
</div>

      <SectionNavigation 
        sections={sections} 
        activeSection={activeSection} 
        onSectionClick={handleSectionClick} 
      />

      <main>
        {/* Content Sections */}
        <KeyHighlights highlights={content.keyHighlights} />
        <BestBanks banks={content.bestBanks} />
        <Features features={content.features} />
        <LoanTypes types={content.loanTypes} />
        <Eligibility eligibility={content.eligibility} documents={content.documents} />
        <ApplicationProcess steps={content.applicationSteps} />
        {/* <ImportantPoints points={content.importantPoints} /> */}

        {/* EMI Calculator */}
        {/* <EMICalculator /> */}
        {/* EMI Calculator */}
<div id="calculator" className="pb-10">
  <EMICalculator />
</div>
      </main>

      <Footer />
    </div>
  );
}