"use client";

import { Card, CardContent } from "./ui/card";
import { Search, Zap, Shield, Calculator, Users, CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Search,
      title: "Wide Comparison",
      description: "Compare top banks and NBFCs in one place."
    },
    {
      icon: Calculator,
      title: "Instant Results",
      description: "Get EMI, interest rates, and offers instantly."
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your data stays private and fully encrypted."
    },
    {
      icon: Zap,
      title: "Smart Insights",
      description: "Transparent view of charges and repayment options."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Helpful tips to choose the right loan for you."
    },
    {
      icon: CheckCircle,
      title: "No Extra Cost",
      description: "Free loan comparison, no hidden fees."
    }
  ];

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="section-heading text-center">
          <h3 className="font-bold text-gray-800 mb-2">
            Why Compare with CredPe.in?
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
           Save time and money with our instant loan comparison.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
                
                <h4 className="font-semibold text-foreground">
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
