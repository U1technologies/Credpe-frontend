"use client"; // needed since we are using useState

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoansDropdownOpen, setIsLoansDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const loanTypes = [
    { name: "Personal Loan", href: "/loans/personal" },
    { name: "Business Loan", href: "/loans/business" },
    { name: "Education Loan", href: "/loans/education" },
    { name: "Home Loan", href: "/loans/home" },
    { name: "Vehicle Loan", href: "/loans/vehicle" },
    { name: "Medical Loan", href: "/loans/medical" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-[90%] mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">CREDPE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-smooth">
              Home
            </Link>

            {/* Loans Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsLoansDropdownOpen(true)}
              onMouseLeave={() => setIsLoansDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth">
                <span>Loans</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isLoansDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-lg border bg-card shadow-medium">
                  <div className="py-2">
                    {loanTypes.map((loan) => (
                      <Link
                        key={loan.name}
                        href={loan.href}
                        className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-smooth"
                      >
                        {loan.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/calculators" className="text-foreground hover:text-primary transition-smooth">
              Calculators
            </Link>
            <Link href="/resources" className="text-foreground hover:text-primary transition-smooth">
              Resources
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-smooth">
              About Us
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Check Eligibility
            </Button>
            <Button variant="cta" size="sm">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t">
            <nav className="py-4 space-y-4">
              <Link
                href="/"
                className="block text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-2">
                <div className="font-medium text-foreground">Loans</div>
                {loanTypes.map((loan) => (
                  <Link
                    key={loan.name}
                    href={loan.href}
                    className="block pl-4 text-sm text-muted-foreground hover:text-primary transition-smooth"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {loan.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/calculators"
                className="block text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Calculators
              </Link>
              <Link
                href="/resources"
                className="block text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/about"
                className="block text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  Check Eligibility
                </Button>
                <Button variant="cta" size="sm">
                  Apply Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
