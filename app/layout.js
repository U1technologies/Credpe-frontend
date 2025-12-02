import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CredPe – Check Eligibility, Compare Loans & Get Your Credit Score Free",
  description:
    "Compare loan options from leading banks, check your eligibility instantly, access your FREE credit score, calculate EMIs, and apply for loans effortlessly using CredPe’s all-in-one loan platform.",
  metadataBase: new URL("https://credpe.in"),
  keywords: [
    "free credit score check",
    "loan comparison",
    "instant loan eligibility",
    "personal loan",
    "business loan",
    "education loan",
    "home loan",
    "vehicle loan",
    "EMI calculator",
    "CredPe",
  ],
  icons: {
    icon: "/credpe-favicon.svg", 
  },
  openGraph: {
    title: "CredPe – Check Eligibility, Compare Loans & Get Your Credit Score Free",
    description:
      "Check your credit score FREE, compare loan offers, calculate EMIs, and get instant eligibility with CredPe’s smart loan tools.",
    url: "https://credpe.in",
    siteName: "CredPe",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CredPe – Fast Loan Comparison & Free Credit Score Check",
    description:
      "Compare loans, calculate EMIs, and get your credit score FREE with CredPe.",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
