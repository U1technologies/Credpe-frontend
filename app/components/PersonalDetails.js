"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  employmentType: z.string().min(1, 'Please select employment type'),
  monthlyIncome: z.string().min(1, 'Monthly income is required'),
  city: z.string().min(2, 'City is required'),
  pincode: z.string().regex(/^\d{6}$/, 'Please enter a valid 6-digit pincode'),
  loanAmount: z.string().min(1, 'Required loan amount is required'),
});

const PersonalDetailsForm = ({ onSubmit, onBack }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      dateOfBirth: '',
      employmentType: '',
      monthlyIncome: '',
      city: '',
      pincode: '',
      loanAmount: '',
    },
  });

  return (
    <div className="min-h-[80vh] max-md:min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className = ''>
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
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-8 max-md:gap-4">
                  <FormField 
                    control={form.control} 
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField 
                    control={form.control} 
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-md:gap-4">
                  <FormField 
                    control={form.control} 
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Birth *</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField 
                    control={form.control} 
                    name="employmentType"
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

                <div className="grid md:grid-cols-2 gap-8 max-md:gap-4">
                  <FormField 
                    control={form.control} 
                    name="monthlyIncome"
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
                    control={form.control} 
                    name="loanAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Required Loan Amount *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select loan amount" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="50000-100000">₹50,000 - ₹1,00,000</SelectItem>
                            <SelectItem value="100000-200000">₹1,00,000 - ₹2,00,000</SelectItem>
                            <SelectItem value="200000-300000">₹2,00,000 - ₹3,00,000</SelectItem>
                            <SelectItem value="300000-500000">₹3,00,000 - ₹5,00,000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Add the missing city and pincode fields */}
                <div className="grid md:grid-cols-2 gap-8 max-md:gap-4">
                  <FormField 
                    control={form.control} 
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your city" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField 
                    control={form.control} 
                    name="pincode"
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

                <div className="flex flex-col sm:flex-row pt-2 gap-8 max-md:gap-4">
                  <Button type="button" variant="outline" onClick={onBack} className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" className="flex-1">
                    Submit Application
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;