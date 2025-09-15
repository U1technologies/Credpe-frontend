"use client";

import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Business Owner",
      location: "Mumbai",
      rating: 5,
      text: "CredPe.in made my business loan approval incredibly smooth. Got approved in just 2 days with competitive rates. Highly recommended!",
      loanType: "Business Loan",
    },
    {
      name: "Rajesh Kumar",
      role: "Software Engineer",
      location: "Bangalore",
      rating: 5,
      text: "Needed urgent funds for a family emergency. The personal loan process was hassle-free and money was in my account within hours.",
      loanType: "Personal Loan",
    },
    {
      name: "Sneha Patel",
      role: "Teacher",
      location: "Pune",
      rating: 5,
      text: "Finally bought my dream home with CredPe's home loan. Their team guided me through every step. Excellent customer service!",
      loanType: "Home Loan",
    },
    {
      name: "Amit Singh",
      role: "Student",
      location: "Delhi",
      rating: 5,
      text: "Education loan for my MBA was approved without any hassle. The interest rates were the best I found in the market.",
      loanType: "Education Loan",
    },
  ];

  // ✅ Removed TS typing
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="bg-background">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-7">
          <h3 className="font-bold text-gray-800 mb-2">
            What Our Customers Say
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
  Don&apos;t just take our word for it. Here&apos;s what thousands of satisfied
  customers have to say about their loan experience with CredPe.in.
</p>

        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 gradient-card border-0 relative"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({testimonial.rating}.0)
                  </span>
                </div>

                {/* Testimonial Text */}
               <p className="text-card-foreground mb-6 leading-relaxed text-sm">
  {`"${testimonial.text}"`}
</p>


                {/* Customer Info */}
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </div>
                  <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-2">
                    {testimonial.loanType}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
              <div className="flex justify-center mt-2">{renderStars(5)}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15K+</div>
              <div className="text-muted-foreground">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
