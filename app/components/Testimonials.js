

"use client";

import { Card, CardContent } from "./ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const Testimonials = () => {
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Business Owner",
    location: "Mumbai",
    rating: 5,
    text: "CredPe.in made my loan approval smooth and quick. Got funds in just 2 days at great rates.",
    loanType: "Business Loan",
  },
  {
    name: "Rajesh Kumar",
    role: "Software Engineer",
    location: "Bangalore",
    rating: 5,
    text: "Needed urgent funds for a family emergency. The process was hassle-free and money came fast.",
    loanType: "Personal Loan",
  },
  {
    name: "Sneha Patel",
    role: "Teacher",
    location: "Pune",
    rating: 5,
    text: "CredPe helped me buy my dream home. The process was smooth with the excellent support.",
    loanType: "Home Loan",
  },
  {
    name: "Amit Singh",
    role: "Student",
    location: "Delhi",
    rating: 5,
    text: "My MBA loan got approved easily with low rates. The entire process was quick and stress-free.",
    loanType: "Education Loan",
  },
];


  const scrollRef = useRef(null);

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

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // adjust card width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-background relative w-[85%] mx-auto pb-12">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-7">
          <h3 className="font-bold text-gray-800 mb-2">
            What Our Customers Say
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            See how CredPe.in has helped users make better loan choices.
          </p>
        </div>

        {/* Scrollable Testimonials */}
        <div className="relative">
          {/* Cards Row */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="w-[280px] md:w-[300px] h-[280px] max-md:h-[300px] flex-shrink-0 group hover:shadow-medium transition-all duration-300 gradient-card border border-black relative"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-40">
                    <Quote className="w-6 h-6 text-primary" />
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

          {/* Scroll Buttons at Bottom */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => scroll("left")}
              className="bg-white border border-[#1b3a6a] rounded-full p-2 hover:bg-gray-100 shadow"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-white border border-[#1b3a6a] rounded-full p-2 hover:bg-gray-100 shadow"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

