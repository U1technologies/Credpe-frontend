

"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      content: "+91 82929 43921",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email Support",
      content: "support@credpe.in",
      description: "Email us your queries",
    },
    {
      icon: MapPin,
      title: "Head Office",
      content:
        "B-11, Noida Sector-4, UP, 201301",
      description: "Visit our main office",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Sat: 10:00 AM - 7:00 PM",
    },
  ];

  const offices = [
    {
      city: "Noida, Uttar Pradesh",
      address: "B-11, Noida Sector-4, UP, 201301",
      phone: "+91 82929 43921",
    },
    {
      city: "Siwan, Bihar",
      address: "Hakma, Tarwara, Bihar, 841506",
      phone: "+91 82929 43921",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
              <div className="w-full bg-primary h-[25vh] flex flex-col items-center justify-center text-center px-4">
  <h2 className="max-md:hidden text-white font-bold">
    Contact Us
  </h2>
    <span className="md:hidden text-[34px] text-white font-bold">
    Contact Us
  </span>
  <p className="text-white mx-auto text-sm md:text-base">
   Get in touch with our team. We&apos;re here to help you with all your loan and financial needs.
  </p>
</div>
      {/* </section> */}

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    {/* <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div> */}
                  </div>
                  <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, subject: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="loan-inquiry">Loan Inquiry</SelectItem>
                        <SelectItem value="application-status">
                          Application Status
                        </SelectItem>
                        <SelectItem value="technical-support">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" variant="cta">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info + Quick Actions */}
            <div className="space-y-6">
              <div>
                {/* <h3 className="font-bold mb-6">Get in Touch</h3> */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="pt-3">
                        <div className="flex items-start gap-4">
                          <info.icon className="h-4 w-4 text-primary mt-2" />
                          <div>
                            <h4 className="font-semibold mb-1">{info.title}</h4>
                            <p className="text-muted-foreground text-sm mb-1">
                              {info.content}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

<Card className="bg-primary/5">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <MessageCircle className="h-4 w-4" />
      <span className="font-semibold">Need Immediate Help?</span>
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground mb-4">
      For urgent queries or application support, reach out to us directly:
    </p>
    <div className="space-y-2">
      <Button
        variant="outline"
        className="w-full justify-start"
        onClick={() => window.open("tel:+918292943921")}
      >
        <Phone className="h-4 w-4 mr-2" />
        Call +91 82929 43921
      </Button>

      <Button
        variant="outline"
        className="w-full justify-start"
        onClick={() =>
          window.open(
            "https://wa.me/918292943921?text=Hi%20Credpe%20Team%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20financial%20services."
          )
        }
      >
        <MessageCircle className="h-4 w-4 mr-2" />
        WhatsApp Support
      </Button>
    </div>
  </CardContent>
</Card>


            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
<section className="pt-2 pb-14">
  <div className="container mx-auto px-4 flex flex-col items-center">
    <div className="text-center mb-10">
      <h2 className="font-semibold mb-2">Our Offices</h2>
      <p className="text-muted-foreground mx-auto">
        Visit us at any of our office locations.
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-8 w-[80%]">
      {offices.map((office, index) => (
        <div
          key={index}
          className="flex-1 min-w-[280px] bg-white rounded-xl border-primary border shadow-md p-6"
        >
          <h3 className="text-center text-lg font-semibold text-primary mb-4">
            {office.city}
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">{office.address}</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <p className="text-sm font-medium">{office.phone}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      <Footer />
    </div>
  );
}


