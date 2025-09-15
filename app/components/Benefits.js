"use client";

import { Card, CardContent } from "./ui/card";
import { CheckCircle, Clock, Shield, Calculator, Users, CreditCard } from "lucide-react";

const Benefits = () => {
const benefits = [
  {
    icon: Clock,
    title: "Fast Approval",
    description: "Loan approval in just 30 seconds."
  },
  {
    icon: Calculator,
    title: "Flexible EMIs",
    description: "Pick EMIs that suit your budget."
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Bank-grade security, fully encrypted."
  },
  {
    icon: CreditCard,
    title: "Low Interest Rates",
    description: "Rates starting from 8.5% p.a."
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Get help from dedicated managers."
  },
  {
    icon: CheckCircle,
    title: "No Hidden Charges",
    description: "Clear pricing, no hidden fees."
  }
];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="section-heading">
          <h3 className="font-bold text-gray-800 mb-2">
            Why Choose CredPe.in?
          </h3>
         <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
  We&apos;re committed to providing you with the best loan experience. 
  Here&apos;s what makes us different from traditional lenders.
</p>

        </div>

        <div className="bg-primary mb-8 rounded-2xl p-8 md:p-12 animate-fade-in">
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

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={benefit.title} 
                className="card p-4 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Container */}
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <IconComponent 
                    className="w-6 h-6 text-accent-foreground" 
                    strokeWidth={2}
                  />
                </div>
                
                <h4 className="font-semibold text-foreground ">
                  {benefit.title}
                </h4>
                
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Benefits;