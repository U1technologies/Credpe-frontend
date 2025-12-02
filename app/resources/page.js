export const metadata = {
  title: "Financial Resources, Loan Guides, FAQs & Articles | CredPe",
  description:
    "Explore expert financial articles, credit score tips, loan guides, FAQs, and customer success stories. Stay informed and make smarter financial decisions with CredPe.",
  keywords: [
    "financial resources",
    "loan guides",
    "credit score tips",
    "personal finance articles",
    "loan FAQs",
    "CredPe blog",
    "financial education"
  ],
  openGraph: {
    title: "Financial Resources & Loan Knowledge Hub | CredPe",
    description:
      "Access loan guides, FAQs, financial articles, and success stories to understand loans and make informed financial decisions.",
    url: "https://credpe.in/resources",
    siteName: "CredPe",
    type: "website",
  },
  alternates: {
    canonical: "https://credpe.in/resources",
  },
};

"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { BookOpen, Users, HelpCircle, ArrowRight, Calendar, User, Star } from "lucide-react";

export default function Resources() {
  const blogPosts = [
    {
      title: "5 Tips to Improve Your Credit Score Quickly",
      excerpt: "Learn proven strategies to boost your credit score and get better loan terms.",
      category: "Credit Score",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      author: "Financial Expert",
    },
    {
      title: "Home Loan vs Rent: Making the Right Choice",
      excerpt: "Comprehensive guide to help you decide between buying and renting a home.",
      category: "Home Loans",
      readTime: "8 min read",
      date: "Dec 12, 2024",
      author: "Property Advisor",
    },
    {
      title: "Business Loan Documentation: Complete Checklist",
      excerpt: "Everything you need to know about business loan documents and requirements.",
      category: "Business Loans",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      author: "Business Consultant",
    },
    {
      title: "EMI vs Bullet Payments: Which is Better?",
      excerpt: "Compare different loan repayment options to find what works best for you.",
      category: "Loan Tips",
      readTime: "7 min read",
      date: "Dec 8, 2024",
      author: "Financial Planner",
    },
  ];

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is the minimum credit score required for a loan?",
          a: "Generally, a credit score of 650+ is preferred, but we consider applications with scores as low as 600 for certain loan types.",
        },
        {
          q: "How long does loan approval take?",
          a: "Most loans are approved within 24-48 hours. Personal loans can be approved in as little as 2 hours.",
        },
        {
          q: "Can I prepay my loan without penalties?",
          a: "Yes, we offer zero prepayment charges on most of our loan products.",
        },
      ],
    },
    {
      category: "Personal Loans",
      questions: [
        {
          q: "What is the maximum personal loan amount I can get?",
          a: "You can get up to ₹40 lakhs based on your income and credit profile.",
        },
        {
          q: "Do I need collateral for a personal loan?",
          a: "No, personal loans are unsecured and don't require any collateral.",
        },
      ],
    },
    {
      category: "Home Loans",
      questions: [
        {
          q: "What is the maximum tenure for a home loan?",
          a: "Home loans can be taken for up to 30 years, depending on your age and income.",
        },
        {
          q: "Can I get a home loan for a resale property?",
          a: "Yes, we provide home loans for both new and resale properties.",
        },
      ],
    },
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      loanType: "Personal Loan",
      amount: "₹5 Lakhs",
      story: "Got instant approval for my daughter's wedding expenses. The process was smooth and hassle-free.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      loanType: "Business Loan",
      amount: "₹15 Lakhs",
      story: "CredPe helped me expand my business with quick funding. Excellent customer service throughout.",
      rating: 5,
    },
    {
      name: "Anjali Mehta",
      location: "Bangalore",
      loanType: "Home Loan",
      amount: "₹45 Lakhs",
      story: "Competitive rates and transparent process. Finally bought my dream home with CredPe's support.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      location: "Pune",
      loanType: "Vehicle Loan",
      amount: "₹8 Lakhs",
      story: "Quick approval for my car loan. The documentation was minimal and the team was very helpful.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Resources</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about loans, financial planning, and making smart money decisions
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="blogs" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="blogs" className="text-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Blog Articles
              </TabsTrigger>
              <TabsTrigger value="faqs" className="text-center">
                <HelpCircle className="h-4 w-4 mr-2" />
                FAQs
              </TabsTrigger>
              <TabsTrigger value="stories" className="text-center">
                <Users className="h-4 w-4 mr-2" />
                Success Stories
              </TabsTrigger>
            </TabsList>

            {/* Blog Posts */}
            <TabsContent value="blogs" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-medium transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* FAQs */}
            <TabsContent value="faqs" className="mt-8">
              <div className="space-y-8">
                {faqs.map((section, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-bold mb-4">{section.category}</h3>
                    <div className="space-y-4">
                      {section.questions.map((faq, j) => (
                        <Card key={j}>
                          <CardHeader>
                            <CardTitle className="text-lg">{faq.q}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{faq.a}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Success Stories */}
            <TabsContent value="stories" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {successStories.map((story, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{story.name}</CardTitle>
                          <CardDescription>{story.location}</CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline">{story.loanType}</Badge>
                          <p className="text-sm font-semibold text-primary mt-1">{story.amount}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
               <p className="text-muted-foreground mb-5">{`"${story.story}"`}</p>
                      <div className="flex items-center">
                        {[...Array(story.rating)].map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">{story.rating}/5 Rating</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}


