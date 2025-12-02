
"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Target, Eye, Users, Award, TrendingUp, Shield, Clock, Heart } from "lucide-react";
import underline from '../../public/assets/under-1.svg'

const About = () => {
  const stats = [
    { icon: Users, value: "1 Lakh+", label: "Happy Customers" },
    { icon: TrendingUp, value: "₹1,000 Cr+", label: "Loans Disbursed" },
    { icon: Award, value: "99.2%", label: "Approval Rate" },
    { icon: Clock, value: "2 Hours", label: "Fastest Approval" },
  ];

  const values = [
    { icon: Shield, title: "Trust & Security", description: "Your data and financial information are completely secure with us. We follow industry-best security practices." },
    { icon: Clock, title: "Speed & Efficiency", description: "Quick loan processing with minimal documentation. Get approved in as little as 2 hours." },
    { icon: Heart, title: "Customer First", description: "We put our customers at the center of everything we do. Your success is our success." },
    { icon: TrendingUp, title: "Transparency", description: "No hidden charges, clear terms, and honest communication throughout your loan journey." },
  ];

  const team = [
    { name: "Amit Sharma", role: "CEO & Founder", experience: "15+ years in fintech" },
    { name: "Priya Gupta", role: "CTO", experience: "12+ years in technology" },
    { name: "Rajesh Kumar", role: "Head of Operations", experience: "10+ years in banking" },
    { name: "Sneha Patel", role: "Head of Customer Success", experience: "8+ years in customer service" },
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to simplify loan processes" },
    { year: "2021", title: "First 1000 Customers", description: "Reached our first major milestone" },
    { year: "2022", title: "₹100 Cr Disbursed", description: "Crossed the 100 crore disbursement mark" },
    { year: "2023", title: "Pan-India Expansion", description: "Expanded services across all major cities" },
    { year: "2024", title: "5 Lakh+ Customers", description: "Serving over 5 lakh happy customers" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="w-full bg-primary h-[25vh] flex flex-col items-center justify-center text-center px-4">
  <h2 className="max-md:hidden text-white font-bold">
    About CredPe.in
  </h2>
    <span className="md:hidden text-[34px] text-white font-bold">
    About CredPe.in
  </span>
  <p className="text-white mx-auto text-sm md:text-base">
    We&apos;re on a mission to make financial services accessible, transparent, and hassle-free for every Indian.
  </p>
</div>

      {/* Stats Section */}
      <section className="pt-10 relative">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center pt-4">
                <CardContent>
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-primary mb-1">{stat.value}</h3>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pt-10 bg-muted/10 relative">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <Card className="p-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" /> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed -mt-3">
                To democratize access to financial services by providing quick, transparent, and affordable loan solutions. 
              </p>
            </CardContent>
          </Card>

          <Card className="p-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="h-8 w-8 text-primary" /> Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed -mt-3">
                To become India&apos;s most trusted and preferred digital lending platform, empowering millions to achieve financial goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="pt-12 relative bg-muted/20 pb-12">
        <div className="container mx-auto px-4 text-center mb-12">
          <div className="inline-block">
    <h3 className="font-bold text-gray-800">
      Our Core<span className="inline-block text-primary">Values
        <Image 
          src={underline} 
          alt="" 
          width={80}
          height={10}
          className="-mt-1"
        />
      </span>
    </h3>
  </div>
          <p className="text-muted-foreground mx-auto">
            The principles that guide everything we do at CredPe.in
          </p>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-1">
              <CardHeader>
                <value.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <span className="text-xl font-semibold">{value.title}</span>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground ">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team 
      <section className="py-12 relative">
        <div className="container mx-auto px-4 text-center mb-12">
                <div className="inline-block">
    <h3 className="font-bold text-gray-800">
      Meet <span className="inline-block text-primary">Our Team
        <Image 
          src={underline} 
          alt="" 
          width={110}
          height={10}
          className="-mt-1"
        />
      </span>
    </h3>
  </div>
          <p className="text-muted-foreground mx-auto">
            Experienced professionals committed to your financial success
          </p>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {team.map((member, index) => (
            <Card key={index} className="text-center p-2">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div className="text-xl font-semibold text-primary mt-1 mb-3">{member.name}</div>
                <Badge variant="secondary">{member.role}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Milestones / Journey */}
      {/* <section className="pt-12 bg-muted/10 relative">
        <div className="container mx-auto px-4 text-center mb-12">
                <div className="inline-block">
    <h3 className="font-bold text-gray-800">
      Our <span className="inline-block text-primary">Journey
        <Image 
          src={underline} 
          alt="" 
          width={80}
          height={10}
          className="-mt-1"
        />
      </span>
    </h3>
  </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key milestones in our mission to transform lending in India
          </p>
        </div>

        <div className="container mx-auto px-4 flex flex-col gap-6 relative">
          {milestones.map((milestone, index) => (
            <Card key={index} className="p-6 flex flex-col md:flex-row items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {milestone.year.slice(-2)}
              </div>
              <div>
                <Badge variant="outline">{milestone.year}</Badge>
                <CardTitle className="text-lg">{milestone.title}</CardTitle>
                <CardContent>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default About;
