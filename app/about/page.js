"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Target, Eye, Users, Award, TrendingUp, Shield, Clock, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "5 Lakh+", label: "Happy Customers" },
    { icon: TrendingUp, value: "₹10,000 Cr+", label: "Loans Disbursed" },
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

      {/* Hero Section */}
      <section className="py-16">
         <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <h1 className=" font-bold text-foreground mb-4 ">
            About <span className="text-primary">CredPe.in</span>
          </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We&apos;re on a mission to make financial services accessible, transparent, and hassle-free for every Indian.
            </p>

          </div>
        </div>


        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent-light/20 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary-light/30 rounded-full blur-3xl" />
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent>
                  <stat.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/10 relative">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" /> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to financial services by providing quick, transparent, and affordable loan solutions. 
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="h-6 w-6 text-primary" /> Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To become India&apos;s most trusted and preferred digital lending platform, empowering millions to achieve financial goals.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Decorative */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-accent-light/20 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary-light/30 rounded-full blur-3xl" />
      </section>

      {/* Core Values */}
      <section className="py-16 relative bg-muted/20">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do at CredPe.in
          </p>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6">
              <CardHeader>
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}

          {/* Decorative */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-accent-light/20 rounded-full blur-2xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary-light/30 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Team */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals committed to your financial success
          </p>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {team.map((member, index) => (
            <Card key={index} className="text-center p-6">
              <CardHeader>
                <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <Badge variant="secondary">{member.role}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </CardContent>
            </Card>
          ))}

          {/* Decorative */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent-light/20 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary-light/30 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Milestones / Journey */}
      <section className="py-16 bg-muted/10 relative">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
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

          {/* Decorative */}
          <div className="absolute top-10 left-0 w-32 h-32 bg-accent-light/20 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-0 w-48 h-48 bg-primary-light/30 rounded-full blur-3xl" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
