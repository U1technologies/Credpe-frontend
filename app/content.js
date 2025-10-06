import { DollarSign, Clock, Shield, Home, Car, GraduationCap, Building, Heart, Coins, Percent, Calendar, RefreshCw, Receipt, Lock, Zap, Package, TrendingUp, Vault, EyeOff, Layers, ArrowLeftRight, Key, Activity, FileText, Shuffle, PlusCircle, Gauge, Laptop, ShieldCheck, Globe } from "lucide-react";

export const loanContent = {
  personal: {
    title: "Personal Loan",
    heroTitle: "Personal Loan",
    heroSubtitle: "Compare personal loan offers from multiple lenders.",
    keyStats: [
      { icon: DollarSign, title: "Up to ₹40 Lakhs", subtitle: "Loan Amount" },
      { icon: Clock, title: "30 Seconds", subtitle: "Quick Approval" },
      { icon: Shield, title: "10.5% p.a.", subtitle: "Starting Rate" }
    ],
    keyHighlights: [
      "Interest rates starting from 10.5% per annum",
      "Loan amount ranging from ₹10,000 to ₹40 lakhs",
      "Flexible repayment tenure from 12 to 84 months",
      "Quick online application with instant approval",
      "No collateral required - completely unsecured loan",
      "Multipurpose usage for any personal financial need",
      "Minimal documentation with digital verification"
    ],
    bestBanks: [
      {
        bank: "HDFC Bank",
        logo: "/assets/banks/hdfc.svg",
        loanAmount: "₹50k - ₹40L",
        interestRate: "10.8% - 13.5%",
        processingFee: "Up to ₹6,500 + GST",
        maxTenure: "60 months"
      },
      {
        bank: "IndusInd Bank",
        logo: "/assets/banks/indusind.svg",
        loanAmount: "₹50k - ₹15L",
        interestRate: "10.49% - 28%",
        processingFee: "Up to 3.5% + GST",
        maxTenure: "84 months"
      },
      {
        bank: "Axis Bank",
        logo: "/assets/banks/axis.svg",
        loanAmount: "₹50k - ₹40L",
        interestRate: "10.25% - 22%",
        processingFee: "Up to 2% + GST",
        maxTenure: "84 months"
      },
      {
        bank: "ICICI Bank",
        logo: "/assets/banks/icici.svg",
        loanAmount: "₹30k - ₹50L",
        interestRate: "10.75% - 19%",
        processingFee: "Up to 2.5% + GST",
        maxTenure: "72 months"
      },
      {
        bank: "Bajaj Finserv",
        logo: "/assets/banks/Bajaj_Finserv.svg",
        loanAmount: "₹20k - ₹55L",
        interestRate: "11% - 15%",
        processingFee: "Up to 3.93%",
        maxTenure: "96 months"
      }
    ],
    features: [
      {
        title: "Interest Rate",
        description: "Starting from 10.5% per annum based on your credit profile and income",
        icon: Percent
      },
      {
        title: "Loan Amount",
        description: "From ₹10,000 to ₹40 lakhs depending on your eligibility and requirements",
        icon: DollarSign
      },
      {
        title: "Loan Tenure",
        description: "Flexible repayment period from 12 to 84 months",
        icon: Calendar
      },
      {
        title: "Processing Time",
        description: "Get approval within 30 seconds and disbursement within 24 hours",
        icon: Clock
      },
      {
        title: "Security",
        description: "No collateral or guarantor required - completely unsecured",
        icon: Shield
      },
      {
        title: "Prepayment",
        description: "Partial or full prepayment allowed with minimal charges",
        icon: RefreshCw
      }
    ],
    loanTypes: [
      {
        name: "Wedding Loan",
        description: "Finance your dream wedding with special packages for venue, catering, and honeymoon expenses"
      },
      {
        name: "Travel Loan",
        description: "Explore the world with instant travel loans covering flights, hotels, and vacation packages"
      },
      {
        name: "Medical Loan",
        description: "Handle medical emergencies and planned treatments with quick medical loans"
      },
      {
        name: "Education Loan",
        description: "Invest in your future with education loans for courses, certifications, and skill development"
      },
      {
        name: "Home Renovation Loan",
        description: "Transform your home with loans for renovation, repair, and interior designing"
      },
      {
        name: "Debt Consolidation Loan",
        description: "Consolidate multiple debts into a single EMI with better interest rates"
      }
    ],
    eligibility: {
      age: "21 to 65 years",
      income: "₹20,000 per month minimum",
      employment: "Salaried/Self-employed with 2+ years experience",
      creditScore: "700 and above preferred",
      documents: "Minimal KYC and income documents required"
    },
    documents: {
      identity: ["PAN Card", "Aadhaar Card", "Driving License", "Voter ID", "Passport"],
      income: {
        salaried: ["Last 3 months salary slips", "Last 2 years ITR", "Bank statements", "Employment certificate"],
        selfEmployed: ["Last 2 years ITR", "Business financials", "Bank statements", "GST registration"]
      },
      others: ["Recent photographs", "Application form", "Processing fee payment"]
    },
    applicationSteps: [
      "Check your eligibility online",
      "Fill the application form with basic details",
      "Upload required documents",
      "Get instant approval decision",
      "Complete verification process",
    ],
    importantPoints: [
      "Maintain a good credit score for better interest rates",
      "Compare offers from multiple lenders before applying",
      "Calculate total cost including all charges and fees",
      "Borrow only what you need and can comfortably repay",
      "Read terms and conditions carefully before signing",
      "Avoid multiple loan applications simultaneously"
    ]
  },

  home: {
    title: "Home Loan",
    heroTitle: "Home Loan",
    heroSubtitle: "Own your dream home with the best home loan rates. Compare offers without affecting your credit score.",
    keyStats: [
      { icon: Home, title: "Up to ₹10 Crores", subtitle: "Loan Amount" },
      { icon: Clock, title: "7 Days", subtitle: "Quick Processing" },
      { icon: Shield, title: "8.5% p.a.", subtitle: "Starting Rate" }
    ],
    keyHighlights: [
      "Competitive interest rates starting from 8.5% per annum",
      "Loan amount up to ₹10 crores based on income and property value",
      "Extended repayment tenure up to 30 years",
      "Tax benefits under Section 80C and 24B",
      "Minimal processing fees and charges",
      "Balance transfer facility available",
      "Pre-approved loans for eligible customers"
    ],
    bestBanks: [
      {
        bank: "SBI",
        logo: "/assets/banks/sbi.svg",
        loanAmount: "₹1L - ₹10Cr",
        interestRate: "8.5% - 9.65%",
        processingFee: "0.35% + GST",
        maxTenure: "30 years"
      },
      {
        bank: "HDFC Bank",
        logo: "/assets/banks/hdfc.svg",
        loanAmount: "₹1L - ₹10Cr",
        interestRate: "8.6% - 9.5%",
        processingFee: "Up to ₹3,000 + GST",
        maxTenure: "30 years"
      },
      {
        bank: "ICICI Bank",
        logo: "/assets/banks/icici.svg",
        loanAmount: "₹1L - ₹10Cr",
        interestRate: "8.7% - 9.8%",
        processingFee: "0.5% + GST",
        maxTenure: "30 years"
      },
      {
        bank: "Axis Bank",
        logo: "/assets/banks/axis.svg",
        loanAmount: "₹5L - ₹5Cr",
        interestRate: "8.75% - 9.65%",
        processingFee: "Up to ₹10,000 + GST",
        maxTenure: "30 years"
      },
      {
        bank: "LIC Housing Finance",
         logo: "/assets/banks/lic.svg",
        loanAmount: "₹1L - ₹10Cr",
        interestRate: "8.6% - 9.4%",
        processingFee: "0.25% + GST",
        maxTenure: "30 years"
      }
    ],
  features: [
      {
        title: "Interest Rate",
        description: "Competitive rates starting from 8.5% with both fixed and floating rate options",
        icon: Percent
      },
      {
        title: "Loan Amount",
        description: "Up to ₹10 crores or 80-90% of property value, whichever is lower",
        icon: DollarSign
      },
      {
        title: "Loan Tenure",
        description: "Extended repayment period up to 30 years for comfortable EMIs",
        icon: Calendar
      },
      {
        title: "Tax Benefits",
        description: "Deductions up to ₹1.5 lakh on principal and ₹2 lakh on interest",
        icon: Receipt
      },
      {
        title: "Property Types",
        description: "Covers ready-to-move, under-construction, plots, and resale properties",
        icon: Home
      },
      {
        title: "Balance Transfer",
        description: "Switch your existing loan for better rates and terms",
        icon: RefreshCw
      }
    ],
    loanTypes: [
      {
        name: "Purchase Home Loan",
        description: "For buying ready-to-move-in residential properties including apartments and independent houses"
      },
      {
        name: "Construction Home Loan",
        description: "For constructing your dream home on an owned plot with stage-wise disbursement"
      },
      {
        name: "Plot Purchase Loan",
        description: "For purchasing residential plots in approved layouts and DTCP approved areas"
      },
      {
        name: "Home Extension Loan",
        description: "For extending or adding new rooms to your existing residential property"
      },
      {
        name: "Home Improvement Loan",
        description: "For renovation, repair, and interior decoration of your existing home"
      },
      {
        name: "Balance Transfer Loan",
        description: "Transfer your existing home loan for better interest rates and terms"
      }
    ],
    eligibility: {
      age: "21 to 65 years (at loan maturity)",
      income: "₹25,000 per month minimum",
      employment: "Salaried/Self-employed/Professional with stable income",
      creditScore: "750 and above preferred",
      documents: "Complete property and income documentation required"
    },
    documents: {
      identity: ["PAN Card", "Aadhaar Card", "Passport", "Driving License"],
      income: {
        salaried: ["Last 6 months salary slips", "Form 16 for 2 years", "Bank statements", "Employment certificate"],
        selfEmployed: ["ITR for 3 years", "Audited financials", "Bank statements", "Business proof documents"]
      },
      property: ["Sale deed", "Property documents", "Approved building plan", "NOC certificates", "Property valuation report"],
      others: ["Application form", "Passport size photos", "Processing fee payment"]
    },
    applicationSteps: [
      "Check eligibility and get pre-approved amount",
      "Select property and finalize purchase agreement",
      "Submit application with required documents",
      "Property valuation and technical verification",
      "Legal verification and approval process",
    ],
    importantPoints: [
      "Ensure property has clear title and proper approvals",
      "Compare interest rates and choose between fixed/floating",
      "Factor in additional costs like registration and stamp duty",
      "Maintain good credit history for better loan terms",
      "Consider loan insurance for family protection",
      "Plan EMI amount within 40-50% of monthly income"
    ]
  },

  business: {
    title: "Business Loan",
    heroTitle: "Business Loan",
    heroSubtitle: "Get funding for your business quickly with competitive rates. Compare lenders and choose the best option.",
    keyStats: [
      { icon: Building, title: "Up to ₹75 Lakhs", subtitle: "Loan Amount" },
      { icon: Clock, title: "48 Hours", subtitle: "Quick Approval" },
      { icon: Shield, title: "11% p.a.", subtitle: "Starting Rate" }
    ],
    keyHighlights: [
      "Competitive interest rates starting from 11% per annum",
      "Loan amount from ₹50,000 to ₹75 lakhs based on business profile",
      "Flexible repayment tenure from 12 to 96 months",
      "Minimal documentation with online application process",
      "No collateral required for loans up to ₹10 lakhs",
      "Quick disbursement within 48-72 hours of approval",
      "Customized solutions for different business types"
    ],
    bestBanks: [
      {
        bank: "HDFC Bank",
        logo: "/assets/banks/hdfc.svg",
        loanAmount: "₹1L - ₹40L",
        interestRate: "11% - 21%",
        processingFee: "Up to 2% + GST",
        maxTenure: "60 months"
      },
      {
        bank: "ICICI Bank",
        logo: "/assets/banks/icici.svg",
        loanAmount: "₹1L - ₹50L",
        interestRate: "11.25% - 20%",
        processingFee: "Up to 2.5% + GST",
        maxTenure: "72 months"
      },
      {
        bank: "Axis Bank",
        logo: "/assets/banks/axis.svg",
        loanAmount: "₹50k - ₹75L",
        interestRate: "11.5% - 24%",
        processingFee: "Up to 3% + GST",
        maxTenure: "84 months"
      },
      {
        bank: "Bajaj Finserv",
        logo: "/assets/banks/Bajaj_Finserv.svg",
        loanAmount: "₹1L - ₹45L",
        interestRate: "13% - 30%",
        processingFee: "Up to 4% + GST",
        maxTenure: "96 months"
      },
      {
        bank: "Tata Capital",
        logo: "/assets/banks/tata-1.jpg",
        loanAmount: "₹75k - ₹25L",
        interestRate: "16% - 24%",
        processingFee: "Up to 5% + GST",
        maxTenure: "60 months"
      }
    ],
    features: [
      {
        title: "Interest Rate",
        description: "Competitive rates from 11% p.a. based on business profile and credit history",
        icon: Percent
      },
      {
        title: "Loan Amount",
        description: "From ₹50,000 to ₹75 lakhs depending on business turnover and requirements",
        icon: DollarSign
      },
      {
        title: "Loan Tenure",
        description: "Flexible repayment period from 12 to 96 months",
         icon: Calendar
      },
      {
        title: "Collateral Free",
        description: "No collateral required for unsecured business loans up to ₹10 lakhs",
        icon: Lock
      },
      {
        title: "Quick Processing",
        description: "Fast approval and disbursement within 48-72 hours",
        icon: Zap
      },
      {
        title: "Multiple Usage",
        description: "Use for working capital, expansion, equipment purchase, or any business need",
         icon: Package
      }
    ],
    loanTypes: [
      {
        name: "Working Capital Loan",
        description: "Manage day-to-day business operations, inventory purchase, and cash flow requirements"
      },
      {
        name: "Equipment Finance",
        description: "Purchase machinery, equipment, and technology for business expansion and modernization"
      },
      {
        name: "Business Expansion Loan",
        description: "Expand your business operations, open new branches, or enter new markets"
      },
      {
        name: "MSME Loan",
        description: "Specially designed loans for Micro, Small, and Medium Enterprises with government support"
      },
      {
        name: "Trade Finance",
        description: "Finance for import-export businesses, letter of credit, and international trade"
      },
      {
        name: "Professional Loan",
        description: "For chartered accountants, doctors, lawyers, and other professionals"
      }
    ],
    eligibility: {
      age: "25 to 65 years for proprietors/partners",
      income: "₹2 lakhs annual turnover minimum",
      employment: "Business operational for minimum 2 years",
      creditScore: "650 and above acceptable",
      documents: "Business registration and financial documents required"
    },
    documents: {
      identity: ["PAN Card", "Aadhaar Card", "Passport", "Driving License"],
      business: ["Business registration certificate", "GST registration", "Trade license", "Partnership deed/MOA"],
      financial: ["Last 2 years ITR", "Audited financials", "Bank statements for 12 months", "Sales tax returns"],
      others: ["Application form", "Business plan", "Quotations for equipment (if applicable)"]
    },
    applicationSteps: [
      "Assess your business loan requirements",
      "Check eligibility criteria and gather documents",
      "Submit online application with business details",
      "Business verification and document scrutiny",
      "Credit assessment and approval decision",
    ],
    importantPoints: [
      "Maintain proper books of accounts and financial records",
      "Have a clear business plan and growth strategy",
      "Ensure business compliance with all regulatory requirements",
      "Keep business and personal finances separate",
      "Build good banking relationship for future requirements",
      "Consider loan insurance to protect business interests"
    ]
  },

  vehicle: {
    title: "Vehicle Loan",
    heroTitle: "Vehicle Loan",
    heroSubtitle: "Drive home your dream car with low-interest vehicle loans. Check rates from multiple lenders instantly.",
    keyStats: [
      { icon: Car, title: "Up to ₹1 Crore", subtitle: "Loan Amount" },
      { icon: Clock, title: "Same Day", subtitle: "Quick Approval" },
      { icon: Shield, title: "7.5% p.a.", subtitle: "Starting Rate" }
    ],
    keyHighlights: [
      "Attractive interest rates starting from 7.5% per annum",
      "Finance up to 90% of vehicle's on-road price",
      "Flexible repayment tenure from 12 to 84 months",
      "Covers new and used cars, two-wheelers, and commercial vehicles",
      "Minimal documentation with quick processing",
      "Online application with instant approval",
      "Comprehensive insurance options available"
    ],
    bestBanks: [
      {
        bank: "HDFC Bank",
        logo: "/assets/banks/hdfc.svg",
        loanAmount: "₹1L - ₹1Cr",
        interestRate: "7.5% - 13.75%",
        processingFee: "Up to ₹5,500 + GST",
        maxTenure: "84 months"
      },
      {
        bank: "ICICI Bank",
        logo: "/assets/banks/icici.svg",
        loanAmount: "₹1L - ₹1Cr",
        interestRate: "7.75% - 14%",
        processingFee: "Up to ₹5,000 + GST",
        maxTenure: "84 months"
      },
      {
        bank: "Axis Bank",
        logo: "/assets/banks/axis.svg",
        loanAmount: "₹1L - ₹75L",
        interestRate: "8% - 15%",
        processingFee: "Up to ₹7,500 + GST",
        maxTenure: "84 months"
      },
      {
        bank: "Mahindra Finance",
        logo: "/assets/banks/mahindra.svg",
        loanAmount: "₹50k - ₹50L",
        interestRate: "8.5% - 18%",
        processingFee: "Up to 2% + GST",
        maxTenure: "84 months"
      },
      {
        bank: "Tata Motors Finance",
          logo: "/assets/banks/tata-1.jpg",
        loanAmount: "₹1L - ₹35L",
        interestRate: "9% - 16%",
        processingFee: "Up to 3% + GST",
        maxTenure: "72 months"
      }
    ],
 features: [
      {
        title: "Interest Rate",
        description: "Competitive rates starting from 7.5% p.a. for new vehicles",
        icon: Percent
      },
      {
        title: "Loan Amount",
        description: "Finance up to 90% of vehicle cost with flexible down payment options",
        icon: DollarSign
      },
      {
        title: "Loan Tenure",
        description: "Repayment period up to 84 months for comfortable EMIs",
        icon: Calendar
      },
      {
        title: "Vehicle Coverage",
        description: "Covers cars, two-wheelers, commercial vehicles, and construction equipment",
        icon: Car
      },
      {
        title: "Insurance Benefits",
        description: "Comprehensive insurance options with easy claim settlement",
        icon: Shield
      },
      {
        title: "Prepayment Options",
        description: "Part-payment and foreclosure facilities with minimal charges",
        icon: RefreshCw
      }
    ],
    loanTypes: [
      {
        name: "New Car Loan",
        description: "Finance your brand new car with attractive interest rates and extended tenure options"
      },
      {
        name: "Used Car Loan",
        description: "Get financing for pre-owned cars up to 5 years old with proper valuation"
      },
      {
        name: "Two Wheeler Loan",
        description: "Easy financing for motorcycles and scooters with minimal documentation"
      },
      {
        name: "Commercial Vehicle Loan",
        description: "Finance trucks, buses, and commercial vehicles for business use"
      },
      {
        name: "Construction Equipment Loan",
        description: "Financing for JCBs, cranes, and other construction machinery"
      },
      {
        name: "Refinance Vehicle Loan",
        description: "Transfer your existing vehicle loan for better rates and terms"
      }
    ],
    eligibility: {
      age: "21 to 65 years at loan maturity",
      income: "₹15,000 per month minimum",
      employment: "Salaried/Self-employed with stable income proof",
      creditScore: "650 and above preferred",
      documents: "Standard KYC and income documents required"
    },
    documents: {
      identity: ["PAN Card", "Aadhaar Card", "Driving License", "Passport"],
      income: {
        salaried: ["Last 3 months salary slips", "Last 2 years Form 16", "Bank statements"],
        selfEmployed: ["Last 2 years ITR", "Business proof", "Bank statements for 6 months"]
      },
      vehicle: ["Vehicle proforma invoice", "RC copy (for used vehicles)", "Insurance documents"],
      others: ["Application form", "Passport photos", "Processing fee payment"]
    },
    applicationSteps: [
      "Select your preferred vehicle and dealer",
      "Check loan eligibility and required documents",
      "Submit application with necessary paperwork",
      "Vehicle valuation and document verification",
      "Loan approval and sanction letter",
    ],
    importantPoints: [
      "Compare interest rates from multiple lenders",
      "Factor in insurance and maintenance costs",
      "Check for hidden charges and processing fees",
      "Consider tenure vs. total interest outflow",
      "Ensure proper vehicle insurance coverage",
      "Read loan terms and conditions carefully"
    ]
  },

  education: {
    title: "Education Loan",
    heroTitle: "Education Loan",
    heroSubtitle: "Finance your studies effortlessly. Check education loan options with flexible repayment plans.",
    keyStats: [
      { icon: GraduationCap, title: "Up to ₹1.5 Crores", subtitle: "Loan Amount" },
      { icon: Clock, title: "15 Days", subtitle: "Quick Processing" },
      { icon: Shield, title: "8.5% p.a.", subtitle: "Starting Rate" }
    ],
    keyHighlights: [
      "Competitive interest rates starting from 8.5% per annum",
      "Loan amount up to ₹1.5 crores for international studies",
      "Covers tuition fees, living expenses, and related costs",
      "Moratorium period available during study tenure",
      "Tax benefits available under Section 80E",
      "Collateral-free loans up to ₹7.5 lakhs",
      "Covers undergraduate, postgraduate, and professional courses"
    ],
    bestBanks: [
      {
        bank: "SBI",
        logo: "/assets/banks/sbi.svg",
        loanAmount: "Up to ₹1.5Cr",
        interestRate: "8.5% - 11.5%",
        processingFee: "₹10,000 + GST",
        maxTenure: "15 years"
      },
      {
        bank: "HDFC",
        logo: "/assets/banks/hdfc.svg",
        loanAmount: "Up to ₹1.5Cr",
        interestRate: "9% - 13.5%",
        processingFee: "1% + GST",
        maxTenure: "15 years"
      },
      {
        bank: "ICICI Bank",
        logo: "/assets/banks/icici.svg",
        loanAmount: "Up to ₹1Cr",
        interestRate: "9.5% - 13.25%",
        processingFee: "1% + GST",
        maxTenure: "15 years"
      },
      {
        bank: "Axis Bank",
        logo: "/assets/banks/axis.svg",
        loanAmount: "Up to ₹75L",
        interestRate: "10% - 14%",
        processingFee: "1% + GST",
        maxTenure: "15 years"
      },
      {
        bank: "Bank of Baroda",
        logo: "/assets/banks/bob.svg",
        loanAmount: "Up to ₹1.5Cr",
        interestRate: "8.85% - 12%",
        processingFee: "₹7,500 + GST",
        maxTenure: "15 years"
      }
    ],
   features: [
  {
    title: "Interest Rate",
    description: "Competitive rates from 8.5% p.a. with special rates for premier institutions",
    icon: Percent
  },
  {
    title: "Loan Coverage",
    description: "100% financing for tuition fees plus additional amount for living expenses",
    icon: Package
  },
  {
    title: "Moratorium Period",
    description: "No EMI during course duration plus 6 months or until job starts",
    icon: Clock
  },
  {
    title: "Tax Benefits",
    description: "Complete interest paid is deductible under Section 80E without any limit",
    icon: FileText
  },
  {
    title: "Course Coverage",
    description: "Covers technical, medical, management, and other professional courses",
    icon: GraduationCap
  },
  {
    title: "Geography",
    description: "Covers studies in India and abroad in recognized institutions",
    icon: Globe
  }
],
    loanTypes: [
      {
        name: "Domestic Education Loan",
        description: "For pursuing higher education in India in recognized universities and institutions"
      },
      {
        name: "Overseas Education Loan",
        description: "For studying abroad in USA, UK, Canada, Australia, and other countries"
      },
      {
        name: "Professional Course Loan",
        description: "For medical, engineering, MBA, CA, and other professional courses"
      },
      {
        name: "Skill Development Loan",
        description: "For vocational training and skill development programs"
      },
      {
        name: "Career Education Loan",
        description: "For job-oriented courses and certification programs"
      },
      {
        name: "Parent Education Loan",
        description: "Loans taken by parents for their children's education"
      }
    ],
    eligibility: {
      age: "18 to 35 years for student applicants",
      income: "Co-applicant should have stable income",
      education: "Admission confirmed in recognized institution",
      creditScore: "Good credit history of co-applicant required",
      documents: "Academic records and admission proof required"
    },
    documents: {
      student: ["Admission letter", "Fee structure", "Academic transcripts", "Entrance exam scores", "Identity proof"],
      coApplicant: ["Income proof", "Bank statements", "Employment certificate", "ITR documents", "Identity proof"],
      collateral: ["Property documents", "Valuation certificate", "Title documents"],
      others: ["Application form", "Passport photos", "Statement of expenses"]
    },
    applicationSteps: [
      "Get admission confirmation from institution",
      "Gather all required documents and certificates",
      "Submit loan application with co-applicant details",
      "Document verification and income assessment",
      "Collateral evaluation (if applicable)",
    ],
    importantPoints: [
      "Apply early after getting admission confirmation",
      "Compare interest rates and loan terms",
      "Understand moratorium period and repayment terms",
      "Keep co-applicant's income documents ready",
      "Check for additional benefits like insurance coverage",
      "Plan repayment strategy before course completion"
    ]
  },

  medical: {
    title: "Medical Loan",
    heroTitle: "Medical Loan",
    heroSubtitle: "Cover medical expenses quickly with easy-to-get medical loans. Compare lenders and apply seamlessly.",
    keyStats: [
      { icon: Heart, title: "Up to ₹25 Lakhs", subtitle: "Loan Amount" },
      { icon: Clock, title: "2 Hours", subtitle: "Quick Approval" },
      { icon: Shield, title: "12% p.a.", subtitle: "Starting Rate" }
    ],
    keyHighlights: [
      "Quick approval within 2 hours for medical emergencies",
      "Loan amount up to ₹25 lakhs based on treatment cost",
      "Competitive interest rates starting from 12% per annum",
      "Flexible repayment options from 12 to 60 months",
      "No collateral required for loans up to ₹5 lakhs",
      "Covers all types of medical treatments and surgeries",
      "Digital application process with minimal documentation"
    ],
    bestBanks: [
      {
        bank: "HDFC Bank",
        logo: "/assets/banks/hdfc.svg",
        loanAmount: "₹50k - ₹25L",
        interestRate: "12% - 18%",
        processingFee: "Up to 2% + GST",
        maxTenure: "60 months"
      },
      {
        bank: "ICICI Bank",
        logo: "/assets/banks/icici.svg",
        loanAmount: "₹25k - ₹20L",
        interestRate: "12.5% - 19%",
        processingFee: "Up to 2.5% + GST",
        maxTenure: "60 months"
      },
      {
        bank: "Bajaj Finserv",
        logo: "/assets/banks/Bajaj_Finserv.svg",
        loanAmount: "₹1L - ₹25L",
        interestRate: "13% - 24%",
        processingFee: "Up to 4% + GST",
        maxTenure: "60 months"
      },
      {
        bank: "Tata Capital",
          logo: "/assets/banks/tata-1.jpg",
        loanAmount: "₹50k - ₹15L",
        interestRate: "14% - 22%",
        processingFee: "Up to 3% + GST",
        maxTenure: "48 months"
      },
      {
        bank: "Kotak Mahindra Bank",
        logo: "/assets/banks/kotak.svg",
        loanAmount: "₹30k - ₹20L",
        interestRate: "15% - 25%",
        processingFee: "Up to 5% + GST",
        maxTenure: "60 months"
      }
    ],
 features: [
      {
        title: "Emergency Processing",
        description: "Instant approval within 2 hours for medical emergencies",
        icon: Zap
      },
      {
        title: "Treatment Coverage",
        description: "Covers all medical treatments, surgeries, and hospitalization costs",
        icon: Heart
      },
      {
        title: "Flexible Repayment",
        description: "EMI tenure from 12 to 60 months based on loan amount",
        icon: Calendar
      },
      {
        title: "No Collateral",
        description: "Unsecured loans up to ₹5 lakhs without any collateral",
        icon: Lock
      },
      {
        title: "Digital Process",
        description: "Complete online application and approval process",
        icon: Package
      },
      {
        title: "Insurance Options",
        description: "Additional health insurance coverage available",
        icon: Shield
      }
    ],
    loanTypes: [
      {
        name: "Emergency Medical Loan",
        description: "Instant loans for medical emergencies, accidents, and urgent treatments"
      },
      {
        name: "Planned Surgery Loan",
        description: "Finance elective surgeries, cosmetic procedures, and planned treatments"
      },
      {
        name: "Cancer Treatment Loan",
        description: "Specialized loans for cancer treatment and related medical expenses"
      },
      {
        name: "Cardiac Care Loan",
        description: "Financing for heart surgeries, treatments, and cardiac care"
      },
      {
        name: "Fertility Treatment Loan",
        description: "Loans for IVF, fertility treatments, and related medical procedures"
      },
      {
        name: "Dental Treatment Loan",
        description: "Finance dental surgeries, implants, and cosmetic dental procedures"
      }
    ],
    eligibility: {
      age: "21 to 65 years",
      income: "₹15,000 per month minimum",
      employment: "Salaried/Self-employed with stable income",
      creditScore: "650 and above preferred",
      documents: "Medical treatment estimate and basic KYC documents"
    },
    documents: {
      identity: ["PAN Card", "Aadhaar Card", "Driving License", "Passport"],
      income: {
        salaried: ["Last 3 months salary slips", "Bank statements", "Employment certificate"],
        selfEmployed: ["Last 2 years ITR", "Bank statements", "Business proof"]
      },
      medical: ["Medical treatment estimate", "Doctor's prescription", "Hospital admission letter", "Previous medical records"],
      others: ["Application form", "Passport photos", "Processing fee payment"]
    },
    applicationSteps: [
      "Get medical treatment estimate from hospital",
      "Submit online application with required documents",
      "Quick verification and credit assessment",
      "Instant approval and sanction letter",
      "Direct payment to hospital or cash disbursement",
    ],
    importantPoints: [
      "Keep all medical documents and estimates ready",
      "Compare interest rates for better deals",
      "Understand repayment terms before signing",
      "Consider medical insurance for future protection",
      "Ensure hospital is in lender's approved network",
      "Plan EMI payments considering recovery period"
    ]
  },

  gold: {
    title: "Gold Loan",
    heroTitle: "Gold Loan",
    heroSubtitle: "Unlock instant cash by pledging your gold. Compare gold loan offers and get the best rate.",
    keyStats: [
      { icon: Coins, title: "Up to ₹1 Crore", subtitle: "Loan Amount" },
      { icon: Clock, title: "30 Minutes", subtitle: "Quick Processing" },
      { icon: Shield, title: "7% p.a.", subtitle: "Starting Rate" }
    ],
    keyHighlights: [
      "Attractive interest rates starting from 7% per annum",
      "Get up to 85% of gold value as loan amount",
      "Instant processing within 30 minutes",
      "Flexible repayment tenure from 6 to 36 months",
      "No income proof or credit score required",
      "Gold remains safe in bank lockers",
      "Minimal documentation with quick disbursement"
    ],
    bestBanks: [
      {
        bank: "SBI",
          logo: "/assets/banks/sbi.svg",
        loanAmount: "₹20k - ₹35L",
        interestRate: "7% - 9.6%",
        processingFee: "0.5% + GST",
        maxTenure: "36 months"
      },
      {
        bank: "HDFC Bank",
        logo: "/assets/banks/hdfc.svg",
        loanAmount: "₹25k - ₹1Cr",
        interestRate: "8.5% - 12%",
        processingFee: "0.5% + GST",
        maxTenure: "36 months"
      },
      {
        bank: "ICICI Bank",
        logo: "/assets/banks/icici.svg",
        loanAmount: "₹10k - ₹2Cr",
        interestRate: "9% - 13%",
        processingFee: "1% + GST",
        maxTenure: "36 months"
      },
      {
        bank: "Muthoot Finance",
        logo: "/assets/banks/muthoot.svg",
        loanAmount: "₹1k - ₹1Cr",
        interestRate: "12% - 26%",
        processingFee: "1% + GST",
        maxTenure: "36 months"
      },
      {
        bank: "Manappuram Finance",
        logo: "/assets/banks/Manappuram.png",
        loanAmount: "₹1.5k - ₹1Cr",
        interestRate: "12% - 24%",
        processingFee: "1% + GST",
        maxTenure: "36 months"
      }
    ],
   features: [
  {
    title: "Instant Processing",
    description: "Get loan approved and disbursed within 30 minutes",
    icon: Clock  
  },
  {
    title: "High Loan Value",
    description: "Get up to 85% of current gold market value",
    icon: TrendingUp
  },
  {
    title: "Secure Storage",
    description: "Gold jewelry stored safely in bank lockers with insurance",
    icon: Vault
  },
  {
    title: "No Credit Check",
    description: "No income proof or credit score verification required",
    icon: EyeOff
  },
  {
    title: "Flexible Tenure",
    description: "Choose repayment period from 6 to 36 months",
    icon: Layers
  },
  {
    title: "Part Payment",
    description: "Option for partial payment to reduce interest burden",
    icon: ArrowLeftRight
  }
],
    loanTypes: [
      {
        name: "Regular Gold Loan",
        description: "Standard gold loans against jewelry for personal and business needs"
      },
      {
        name: "Agricultural Gold Loan",
        description: "Special gold loans for farmers with lower interest rates and flexible terms"
      },
      {
        name: "Business Gold Loan",
        description: "Gold loans specifically designed for business working capital requirements"
      },
      {
        name: "Ornament Loan",
        description: "Loans against gold ornaments and jewelry with highest loan-to-value ratio"
      },
      {
        name: "Gold Coin Loan",
        description: "Loans against gold coins and bars purchased from banks"
      },
      {
        name: "NRI Gold Loan",
        description: "Special gold loan schemes for Non-Resident Indians"
      }
    ],
    eligibility: {
      age: "18 to 75 years",
      income: "No minimum income requirement",
      employment: "Any occupation accepted",
      creditScore: "Not required",
      documents: "Only basic identity proof required"
    },
    documents: {
      identity: ["PAN Card", "Aadhaar Card", "Driving License", "Passport", "Voter ID"],
      address: ["Utility bills", "Rent agreement", "Property documents"],
      gold: ["Purchase bills (if available)", "Previous loan discharge certificate"],
      others: ["Application form", "Passport photos"]
    },
    applicationSteps: [
      "Visit branch with gold jewelry and documents",
      "Gold purity testing and weight verification",
      "Loan amount calculation based on current rates",
      "Complete application form and documentation",
      "Instant approval and loan agreement signing",
    ],
    importantPoints: [
      "Carry original purchase bills for better rates",
      "Check current gold rates before applying",
      "Understand interest calculation method",
      "Ensure gold purity is 18 carats or above",
      "Keep loan documents safely for future reference",
      "Consider part-payment options to reduce interest"
    ]
  },

  property: {
    title: "Loan Against Property",
    heroTitle: "Loan Against Property",
    heroSubtitle: "Get high-value loans against your property. Check multiple lenders to secure the best deal.",
    keyStats: [
      { icon: Home, title: "Up to ₹5 Crores", subtitle: "Loan Amount" },
      { icon: Clock, title: "7 Days", subtitle: "Quick Processing" },
      { icon: Shield, title: "8.5% p.a.", subtitle: "Starting Rate" }
    ],
    keyHighlights: [
      "Competitive interest rates starting from 8.5% per annum",
      "Loan amount up to ₹5 crores or 70% of property value",
      "Extended repayment tenure up to 20 years",
      "Retain ownership and possession of your property",
      "Use funds for any personal or business purpose",
      "Lower interest rates compared to unsecured loans",
      "Tax benefits available on interest paid"
    ],
    bestBanks: [
      {
        bank: "HDFC Bank",
        logo: "/assets/banks/hdfc.svg",
        loanAmount: "₹10L - ₹5Cr",
        interestRate: "8.5% - 11.5%",
        processingFee: "Up to 1% + GST",
        maxTenure: "20 years"
      },
      {
        bank: "ICICI Bank",
        logo: "/assets/banks/icici.svg",
        loanAmount: "₹5L - ₹5Cr",
        interestRate: "8.75% - 12%",
        processingFee: "Up to 1% + GST",
        maxTenure: "20 years"
      },
      {
        bank: "Axis Bank",
        logo: "/assets/banks/axis.svg",
        loanAmount: "₹5L - ₹5Cr",
        interestRate: "9% - 12.5%",
        processingFee: "Up to 2% + GST",
        maxTenure: "20 years"
      },
      {
        bank: "SBI",
          logo: "/assets/banks/sbi.svg",
        loanAmount: "₹1L - ₹5Cr",
        interestRate: "8.65% - 11.15%",
        processingFee: "0.35% + GST",
        maxTenure: "15 years"
      },
      {
        bank: "Bajaj Housing Finance",
        logo: "/assets/banks/Bajaj_Finserv.svg",
        loanAmount: "₹10L - ₹5Cr",
        interestRate: "9% - 13%",
        processingFee: "Up to 3% + GST",
        maxTenure: "20 years"
      }
    ],
   features: [
    {
      title: "High Loan Amount",
      description: "Get up to 70% of property market value as loan amount",
      icon: Building
    },
    {
      title: "Retain Ownership",
      description: "Continue living in or using your property while repaying loan",
      icon: Key
    },
    {
      title: "Multipurpose Usage",
      description: "Use loan amount for any personal or business requirement",
      icon: Activity
    },
    {
      title: "Long Tenure",
      description: "Extended repayment period up to 20 years for lower EMIs",
      icon: Clock
    },
    {
      title: "Tax Benefits",
      description: "Interest paid is tax deductible for business purposes",
      icon: FileText
    },
    {
      title: "Balance Transfer",
      description: "Transfer existing property loans for better rates",
      icon: Shuffle
    }
  ],
    loanTypes: [
      {
        name: "Residential Property Loan",
        description: "Loans against residential properties including apartments and independent houses"
      },
      {
        name: "Commercial Property Loan",
        description: "Loans against commercial properties like shops, offices, and warehouses"
      },
      {
        name: "Plot Loan Against Property",
        description: "Loans against residential or commercial plots in prime locations"
      },
      {
        name: "Industrial Property Loan",
        description: "Loans against industrial properties and manufacturing units"
      },
      {
        name: "Rental Property Loan",
        description: "Loans against rental properties with rental income consideration"
      },
      {
        name: "Agricultural Land Loan",
        description: "Loans against agricultural land and farm properties"
      }
    ],
    eligibility: {
      age: "21 to 65 years at loan maturity",
      income: "₹25,000 per month minimum",
      employment: "Salaried/Self-employed/Business owner",
      creditScore: "700 and above preferred",
      documents: "Property papers and income proof required"
    },
    documents: {
      identity: ["PAN Card", "Aadhaar Card", "Passport", "Driving License"],
      income: {
        salaried: ["Last 6 months salary slips", "Form 16", "Bank statements"],
        selfEmployed: ["Last 3 years ITR", "Audited financials", "Bank statements"]
      },
      property: ["Sale deed", "Property card", "Approved building plan", "NOC certificates", "Property tax receipts"],
      others: ["Application form", "Property valuation report", "Legal opinion"]
    },
    applicationSteps: [
      "Property evaluation and documentation check",
      "Submit loan application with required documents",
      "Property valuation by approved valuers",
      "Legal verification and title clearance",
      "Loan approval and sanction letter",
      "Property mortgage and loan disbursement"
    ],
    importantPoints: [
      "Ensure property has clear and marketable title",
      "Get property valued by certified valuers",
      "Compare interest rates from multiple lenders",
      "Understand prepayment and foreclosure charges",
      "Keep property insurance updated",
      "Plan loan utilization for maximum benefit"
    ]
  },

  car: {
    title: "Loan Against Car",
    heroTitle: "Loan Against Car",
    heroSubtitle: "Get quick loans using your car as collateral. Compare rates from multiple lenders without hassle.",
    keyStats: [
      { icon: Car, title: "Up to ₹50 Lakhs", subtitle: "Loan Amount" },
      { icon: Clock, title: "Same Day", subtitle: "Quick Processing" },
      { icon: Shield, title: "9% p.a.", subtitle: "Starting Rate" }
    ],
    keyHighlights: [
      "Competitive interest rates starting from 9% per annum",
      "Get up to 70% of car's current market value",
      "Continue using your car while repaying the loan",
      "Quick processing and same-day disbursement",
      "Flexible repayment tenure from 12 to 60 months",
      "No end-use restrictions for loan amount",
      "Minimal documentation with digital processing"
    ],
    bestBanks: [
      {
        bank: "HDFC Bank",
        logo: "/assets/banks/hdfc.svg",
        loanAmount: "₹1L - ₹50L",
        interestRate: "9% - 16%",
        processingFee: "Up to 2% + GST",
        maxTenure: "60 months"
      },
      {
        bank: "ICICI Bank",
        logo: "/assets/banks/icici.svg",
        loanAmount: "₹50k - ₹40L",
        interestRate: "9.5% - 17%",
        processingFee: "Up to 2.5% + GST",
        maxTenure: "60 months"
      },
      {
        bank: "Bajaj Finserv",
        logo: "/assets/banks/Bajaj_Finserv.svg",
        loanAmount: "₹25k - ₹25L",
        interestRate: "11% - 20%",
        processingFee: "Up to 4% + GST",
        maxTenure: "60 months"
      },
      {
        bank: "Tata Capital",
          logo: "/assets/banks/tata-1.jpg",
        loanAmount: "₹30k - ₹30L",
        interestRate: "12% - 18%",
        processingFee: "Up to 3% + GST",
        maxTenure: "48 months"
      },
      {
        bank: "Mahindra Finance",
          logo: "/assets/banks/mahindra.svg",
        loanAmount: "₹50k - ₹35L",
        interestRate: "10% - 19%",
        processingFee: "Up to 3% + GST",
        maxTenure: "60 months"
      }
    ],
   features: [
  {
    title: "Keep Using Car",
    description: "Continue driving your car while the loan is active",
    icon: Car
  },
  {
    title: "Quick Valuation",
    description: "Fast car valuation and instant loan amount calculation",
    icon: Gauge
  },
  {
    title: "High Loan Value",
    description: "Get up to 70% of current market value of your car",
    icon: TrendingUp
  },
  {
    title: "Flexible Usage",
    description: "Use loan amount for any personal or business purpose",
    icon: Shuffle
  },
  {
    title: "Digital Process",
    description: "Complete online application and approval process",
    icon: Laptop
  },
  {
    title: "Insurance Protected",
    description: "Car insurance ensures protection during loan tenure",
    icon: ShieldCheck
  }
],
    loanTypes: [
      {
        name: "Personal Car Loan",
        description: "Loans against personal cars for individual financial needs"
      },
      {
        name: "Commercial Vehicle Loan",
        description: "Loans against commercial vehicles for business requirements"
      },
      {
        name: "Luxury Car Loan",
        description: "Special loans against luxury and premium cars with higher loan amounts"
      },
      {
        name: "Used Car Loan Against",
        description: "Loans against used cars with proper valuation and verification"
      },
      {
        name: "Fleet Vehicle Loan",
        description: "Loans against multiple vehicles for business fleet owners"
      },
      {
        name: "Emergency Car Loan",
        description: "Quick loans against car for emergency financial requirements"
      }
    ],
    eligibility: {
      age: "21 to 65 years",
      income: "₹20,000 per month minimum",
      employment: "Salaried/Self-employed with stable income",
      creditScore: "650 and above preferred",
      documents: "Car papers and income proof required"
    },
    documents: {
      identity: ["PAN Card", "Aadhaar Card", "Driving License", "Passport"],
      income: {
        salaried: ["Last 3 months salary slips", "Bank statements", "Employment certificate"],
        selfEmployed: ["Last 2 years ITR", "Bank statements", "Business proof"]
      },
      vehicle: ["RC (Registration Certificate)", "Insurance policy", "Pollution certificate", "Car loan closure certificate"],
      others: ["Application form", "Car valuation report", "Passport photos"]
    },
    applicationSteps: [
      "Car inspection and market valuation",
      "Submit application with required documents",
      "Document verification and credit check",
      "Loan approval and amount confirmation",
      "Car hypothecation and agreement signing",
    ],
    importantPoints: [
      "Ensure car insurance is valid and updated",
      "Get proper market valuation before applying",
      "Understand hypothecation process and implications",
      "Compare offers from multiple lenders",
      "Check for prepayment and foreclosure charges",
      "Maintain car in good condition during loan tenure"
    ]
  },
  transferHomeLoan: {
  title: "Transfer Home Loan",
  heroTitle: "Transfer Home Loan",
  heroSubtitle: "Switch your existing home loan to a better deal with lower EMIs and improved terms. Save more without hassle.",
  keyStats: [
    { icon: RefreshCw, title: "Up to ₹10 Crores", subtitle: "Transfer Amount" },
    { icon: Clock, title: "5-7 Days", subtitle: "Quick Processing" },
    { icon: Shield, title: "8.4% p.a.", subtitle: "Starting Rate" }
  ],
  keyHighlights: [
    "Lower interest rates starting from 8.4% per annum",
    "Transfer your existing home loan balance up to ₹10 crores",
    "Flexible repayment tenure up to 30 years",
    "Top-up loan facility available with transfer",
    "Minimal documentation and quick approval process",
    "Save on EMIs by moving to better terms",
    "No impact on property ownership or title"
  ],
  bestBanks: [
    {
      bank: "SBI",
      logo: "/assets/banks/sbi.svg",
      loanAmount: "₹1L - ₹10Cr",
      interestRate: "8.4% - 9.5%",
      processingFee: "0.25% - 0.35% + GST",
      maxTenure: "30 years"
    },
    {
      bank: "HDFC Bank",
      logo: "/assets/banks/hdfc.svg",
      loanAmount: "₹1L - ₹10Cr",
      interestRate: "8.5% - 9.4%",
      processingFee: "Up to ₹3,000 + GST",
      maxTenure: "30 years"
    },
    {
      bank: "ICICI Bank",
      logo: "/assets/banks/icici.svg",
      loanAmount: "₹1L - ₹10Cr",
      interestRate: "8.6% - 9.7%",
      processingFee: "0.5% + GST",
      maxTenure: "30 years"
    },
    {
      bank: "Axis Bank",
      logo: "/assets/banks/axis.svg",
      loanAmount: "₹5L - ₹5Cr",
      interestRate: "8.7% - 9.6%",
      processingFee: "Up to ₹10,000 + GST",
      maxTenure: "30 years"
    },
    {
      bank: "LIC Housing Finance",
      logo: "/assets/banks/lic.svg",
      loanAmount: "₹1L - ₹10Cr",
      interestRate: "8.5% - 9.3%",
      processingFee: "0.25% + GST",
      maxTenure: "30 years"
    }
  ],
  features: [
    {
      title: "Lower Interest Rate",
      description: "Save on EMIs by switching to a lower interest rate with floating/fixed options",
      icon: Percent
    },
    {
      title: "Top-Up Facility",
      description: "Option to avail additional top-up loan along with transfer for personal/renovation needs",
      icon: PlusCircle
    },
    {
      title: "Flexible Tenure",
      description: "Extend or reduce your repayment tenure up to 30 years for convenient EMIs",
      icon: Calendar
    },
    {
      title: "Minimal Documentation",
      description: "Simplified paperwork for transferring your existing loan balance",
      icon: FileText
    },
    {
      title: "Fast Approval",
      description: "Quick disbursal and processing within 5-7 working days",
      icon: Zap
    },
    {
      title: "Tax Benefits",
      description: "Continue to avail deductions on principal and interest payments",
      icon: Receipt
    }
  ],
  loanTypes: [
    {
      name: "Standard Balance Transfer",
      description: "Switch your existing home loan from one bank/NBFC to another for lower interest rates and better terms"
    },
    {
      name: "Balance Transfer with Top-Up Loan",
      description: "Transfer your loan and avail additional funds for renovation, furnishing, or personal needs"
    },
    {
      name: "Balance Transfer for Under-Construction Property",
      description: "Move your ongoing loan for an under-construction property to another lender for better terms"
    },
    {
      name: "Balance Transfer for Completed Property",
      description: "Shift your loan for ready-to-move or completed homes and reduce EMI burden"
    },
    {
      name: "Balance Transfer with EMI Restructuring",
      description: "Choose to extend or reduce tenure while transferring your loan to suit your monthly budget"
    },
  ],
  eligibility: {
    age: "21 to 65 years (at loan maturity)",
    income: "₹25,000 per month minimum",
    employment: "Salaried/Self-employed/Professional with stable income",
    creditScore: "750 and above preferred",
    documents: "Existing loan account statement and property documents required"
  },
  documents: {
    identity: ["PAN Card", "Aadhaar Card", "Passport", "Driving License"],
    income: {
      salaried: ["Last 6 months salary slips", "Form 16 for 2 years", "Bank statements"],
      selfEmployed: ["ITR for 3 years", "Audited financials", "Bank statements", "Business proof documents"]
    },
    property: ["Sale deed", "Property papers", "Previous bank loan documents", "NOC from existing lender"],
    others: ["Application form", "Passport size photos", "Processing fee payment"]
  },
  applicationSteps: [
    "Check eligibility and compare transfer offers",
    "Apply for balance transfer with chosen bank",
    "Submit existing loan documents and property details",
    "Verification by new lender (legal & technical check)",
    "Loan sanction and balance transfer approval",
  ],
  importantPoints: [
    "Ensure no hidden charges while transferring loan",
    "Compare interest savings vs processing fees",
    "Maintain good repayment history for smooth transfer",
    "Check foreclosure terms of your existing loan",
    "Opt for top-up if additional funds are required",
    "Choose floating or fixed rates depending on market outlook"
  ]
}
  
};

export default loanContent;