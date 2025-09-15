"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const loanTypes = [
    { name: "Personal Loan", href: "/loans/personal" },
    { name: "Business Loan", href: "/loans/business" },
    { name: "Education Loan", href: "/loans/education" },
    { name: "Home Loan", href: "/loans/home" },
    { name: "Vehicle Loan", href: "/loans/vehicle" },
    { name: "Medical Loan", href: "/loans/medical" },
  ];

  const resources = [
    { name: "Blog", href: "/resources/blog" },
    { name: "FAQs", href: "/resources/faqs" },
    { name: "Customer Stories", href: "/resources/stories" },
    { name: "Financial Tips", href: "/resources/tips" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Calculators", href: "/calculators" },
  ];

  return (
    <footer className="bg-primary text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">CREDPE</span>
            </div>
            <div className="text-white ">
              Your trusted partner for all loan needs. We provide quick, secure, and affordable
              loan solutions with transparent terms and exceptional customer service.
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-background/90">+91 8292943921</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-background/90">support@credpe.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-background/90">Noida, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Types */}
          <div>
            <h3 className="text-lg font-bold mb-6">Loan Products</h3>
            <ul className="space-y-3">
              {loanTypes.map((loan) => (
                <li key={loan.name}>
                  <Link
                    href={loan.href}
                    className="text-background/80 hover:text-accent transition-smooth"
                  >
                    {loan.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-background/80 hover:text-accent transition-smooth"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70 text-sm">
              © {currentYear} CredPe.in. All rights reserved.
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-background/70 hover:text-accent transition-smooth"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-background/70 hover:text-accent transition-smooth"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/disclaimer"
                className="text-background/70 hover:text-accent transition-smooth"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


