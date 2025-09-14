"use client";

import { Card, CardContent } from "./ui/card";
import { CheckCircle, Clock, Shield, Calculator, Users, CreditCard } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Fast Approval",
      description: "Get loan approval in as fast as 30 seconds with our AI-powered assessment system."
    },
    {
      icon: Calculator,
      title: "Flexible EMIs",
      description: "Choose from various EMI options that fit your budget and repayment capacity."
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Bank-grade security with end-to-end encryption for all your financial data."
    },
    {
      icon: CreditCard,
      title: "Low Interest Rates",
      description: "Competitive interest rates starting from 8.5% p.a. for eligible customers."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated relationship managers to guide you through your loan journey."
    },
    {
      icon: CheckCircle,
      title: "No Hidden Charges",
      description: "Transparent pricing with no processing fees or hidden charges."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="section-heading">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose CredPe.in?
          </h2>
         <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
  We&apos;re committed to providing you with the best loan experience. 
  Here&apos;s what makes us different from traditional lenders.
</p>

        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={benefit.title} 
                className="card p-8 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Container */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <IconComponent 
                    className="w-8 h-8 text-accent-foreground" 
                    strokeWidth={2}
                  />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-primary rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2 group-hover:scale-105 transition-transform">
                10,000+
              </div>
              <div className="text-primary-foreground opacity-90 font-medium">
                Crores Disbursed
              </div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2 group-hover:scale-105 transition-transform">
                5L+
              </div>
              <div className="text-primary-foreground opacity-90 font-medium">
                Happy Customers
              </div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2 group-hover:scale-105 transition-transform">
                30 Sec
              </div>
              <div className="text-primary-foreground opacity-90 font-medium">
                Quick Approval
              </div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2 group-hover:scale-105 transition-transform">
                8.5%
              </div>
              <div className="text-primary-foreground opacity-90 font-medium">
                Interest Rate*
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;