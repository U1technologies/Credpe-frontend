"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import { useToast } from "@/app/hooks/useToast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  employmentType: z.string().min(1, "Please select employment type"),
  monthlyIncome: z.string().min(1, "Monthly income is required"),
  pincode: z.string().regex(/^\d{6}$/, "Please enter a valid 6-digit pincode"),
});

export default function PersonalDetailsForm({ onBack,onSubmit  }) {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();

  const loanTypeParam = params?.loanType || "personal";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      dateOfBirth: "",
      employmentType: "",
      monthlyIncome: "",
      pincode: "",
    },
  });

  const convertIncome = (value) => {
    if (!value) return "0.00";
    if (value.includes("below")) return "20000.00";
    if (value.includes("above")) return "200000.00";
    const parts = value.split("-");
    return ((Number(parts[0]) + Number(parts[1])) / 2).toFixed(2);
  };

  const loanTitles = {
    personal: "Personal Loan",
    business: "Business Loan",
    education: "Education Loan",
    home: "Home Loan",
    vehicle: "Vehicle Loan",
    medical: "Medical Loan",
    gold: "Gold Loan",
    property: "Loan Against Property",
    "transfer-home": "Transfer Home Loan",
    car: "Loan Against Car",
  };

const handleSubmit = async (values) => {
  const verificationData = JSON.parse(localStorage.getItem("mobileVerified") || "{}");

  if (!verificationData?.phoneNumber) {
    toast({
      title: "Verification Required",
      description: "Please verify your mobile number first.",
      variant: "destructive",
    });
    return;
  }

  const applicationId = `APP${Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0")}`;

  // 🔥 Exactly those fields backend demands!
  const body = {
    fullName: values.fullName,
    email: values.email,
    dateOfBirth: values.dateOfBirth,
    employmentType: values.employmentType,
    monthlyIncome: convertIncome(values.monthlyIncome),
    cityPincode: values.pincode,
    phoneNumber: verificationData?.phoneNumber,
    loanType: loanTitles[loanTypeParam],
    applicationId,

    // 🆗 Additional mapped fields
    Lead_Source: "Website",
    Lead_Status: "Qualified",
    Description: `Loan Application - ${loanTitles[loanTypeParam]}`,
    Application_Stage: "Form Completed",
  };

  console.log("🚀 FINAL PAYLOAD SENDING:", body);

  try {
    const res = await fetch("https://credpe-backend.vercel.app/api/auth/submit-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await res.json();
    console.log("📥 API Response:", result);

if (result.success) {
  toast({ title: "Success", description: "Application submitted successfully!" });

  // 🔥 Pass applicationId to parent
  onSubmit(applicationId);

  localStorage.removeItem("mobileVerified");
}


    else {
      throw new Error(result.message || "Submission failed");
    }
  } catch (error) {
    console.error("❌ Submit Application Error:", error);
    toast({
      title: "Error",
      description: "Failed to submit application. Please try again.",
      variant: "destructive",
    });
  }
};


  return (
    <div className="bg-background pt-10 pb-8 ">
      <div className=" max-md:w-[90%] w-[75%] mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">
              Personal Details
            </CardTitle>
            <p className="text-muted-foreground">
              Please fill in your details to complete the loan application
            </p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 px-4 pb-4">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-8 max-md:gap-4">
                  <FormField
                    name="fullName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter your full name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" placeholder="Enter your email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* DOB + Employment */}
                <div className="grid md:grid-cols-2 gap-8 max-md:gap-4">
                  <FormField
                    name="dateOfBirth"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Birth *</FormLabel>
                        <FormControl>
                          <Input {...field} type="date" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="employmentType"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employment Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select employment type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="salaried">Salaried</SelectItem>
                            <SelectItem value="self-employed">Self Employed</SelectItem>
                            <SelectItem value="business">Business Owner</SelectItem>
                            <SelectItem value="freelancer">Freelancer</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Income + Pincode */}
                <div className="grid md:grid-cols-2 gap-8 max-md:gap-4">
                  <FormField
                    name="monthlyIncome"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly Income *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select monthly income" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="below-25000">Below ₹25,000</SelectItem>
                            <SelectItem value="25000-50000">₹25,000 - ₹50,000</SelectItem>
                            <SelectItem value="50000-100000">₹50,000 - ₹1,00,000</SelectItem>
                            <SelectItem value="100000-200000">₹1,00,000 - ₹2,00,000</SelectItem>
                            <SelectItem value="above-200000">Above ₹2,00,000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="pincode"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pincode *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter 6-digit pincode" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="button" variant="outline" onClick={onBack}>
                    Back
                  </Button>
                  <Button type="submit">Submit Application</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
