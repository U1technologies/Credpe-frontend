"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Search, Zap, Shield, Calculator, Users, CheckCircle } from "lucide-react";
import underline from '../../public/assets/under-1.svg'

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
    <section className="pb-20 max-md:pb-14 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="section-heading text-center">
                   <div className="inline-block">
              <h3 className="font-bold text-gray-800">
                Why Compare with <span className="inline-block text-primary">CredPe.in?
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
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-soft">
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
