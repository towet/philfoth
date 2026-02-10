import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, GraduationCap, Sprout, HandHeart, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import React from 'react';

const Donate = () => {
  const [donationType, setDonationType] = useState("one-time");
  const [donationAmount, setDonationAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  
  const handleDonationAmountChange = (value) => {
    setDonationAmount(value);
    if (value !== "custom") {
      setCustomAmount("");
    }
  };

  const handlePayPalDonation = (options?: { amount?: string | number; type?: 'one-time' | 'monthly'; isGeneric?: boolean }) => {
    const payPalBusinessId = 'Estherwangi374@gmail.com';
    let finalAmountStr: string = "";
    let finalType: 'one-time' | 'monthly' = 'one-time'; // Default type
    let itemName: string = "Donation to SanctumGrace"; // Default item name

    if (options?.isGeneric) {
        // Generic donation, amount will be entered on PayPal's side.
        finalType = 'one-time'; // Generic donations usually use _donations command
        itemName = "General Donation to SanctumGrace";
    } else if (options?.amount !== undefined && options?.type) {
        // Specific donation from tier card or explicit call with amount/type
        finalAmountStr = String(options.amount);
        finalType = options.type;
        if (!finalAmountStr || parseFloat(finalAmountStr) <= 0) {
            alert("Please enter a valid amount."); // General for any custom amount passed
            return;
        }
        itemName = `${finalType === 'monthly' ? 'Monthly S' : 'S'}upport: $${parseFloat(finalAmountStr).toFixed(2)} to SanctumGrace`;
    } else {
        // Donation from the main form using component state
        finalType = donationType as 'one-time' | 'monthly';
        if (donationAmount === "custom") {
            finalAmountStr = customAmount;
        } else {
            finalAmountStr = donationAmount;
        }

        if (!finalAmountStr || parseFloat(finalAmountStr) <= 0) {
            alert("Please select or enter a valid donation amount before proceeding.");
            return;
        }
        itemName = `${finalType === 'monthly' ? 'Monthly D' : 'D'}onation: $${parseFloat(finalAmountStr).toFixed(2)} to SanctumGrace`;
    }

    let payPalUrl = "";

    if (finalType === 'monthly') {
        payPalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick-subscriptions&business=${payPalBusinessId}&currency_code=USD`;
        payPalUrl += `&item_name=${encodeURIComponent(itemName)}`;
        if (finalAmountStr && parseFloat(finalAmountStr) > 0) {
            payPalUrl += `&a3=${parseFloat(finalAmountStr).toFixed(2)}`; // Subscription amount
            payPalUrl += `&p3=1`;      // Subscription duration (e.g., 1 for 1 unit of t3)
            payPalUrl += `&t3=M`;      // Subscription unit (M for Month)
            payPalUrl += `&src=1`;     // Make subscription recurring
            payPalUrl += `&no_shipping=1`; // No shipping address needed
        } else if (!options?.isGeneric) { // Only alert if not generic and amount is invalid for monthly
             alert("A valid amount is required for monthly subscriptions.");
             return;
        }
    } else { // One-time donation or generic (which defaults to one-time cmd=_donations)
        payPalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=${payPalBusinessId}&currency_code=USD`;
        payPalUrl += `&item_name=${encodeURIComponent(itemName)}`;
        if (!options?.isGeneric && finalAmountStr && parseFloat(finalAmountStr) > 0) {
            payPalUrl += `&amount=${parseFloat(finalAmountStr).toFixed(2)}`;
        }
    }
    window.open(payPalUrl, '_blank', 'noopener,noreferrer');
  };
  
  // Calculate display amounts for buttons
  let currentDisplayAmount = "";
  if (donationAmount === "custom") {
    currentDisplayAmount = parseFloat(customAmount) > 0 ? parseFloat(customAmount).toFixed(2) : "";
  } else if (donationAmount && donationAmount !== "custom") {
    currentDisplayAmount = parseFloat(donationAmount).toFixed(2);
  }

  const oneTimeButtonText = currentDisplayAmount ? `Donate $${currentDisplayAmount} with PayPal` : "Donate with PayPal";
  const monthlyButtonText = currentDisplayAmount ? `Support Monthly $${currentDisplayAmount} with PayPal` : "Support Monthly with PayPal";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 pt-28 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Support <span className="text-green-600 dark:text-green-400">Our Work</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg mb-10">
              Your generosity enables us to provide food security, education support, economic empowerment, and care for vulnerable community members in Bahati and Nakuru County.
            </p>
            <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto flex items-center justify-center">
              <Heart className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </section>
        
        {/* Scripture Quote */}
        <section className="py-10 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-2">
              "It is more blessed to give than to receive."
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Acts 20:35</p>
          </div>
        </section>
        
        {/* Donation Form */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl font-bold text-center mb-12">Make a Donation</h2>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
                <Tabs defaultValue="donate" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6 max-w-sm mx-auto">
                    <TabsTrigger value="donate">Donate</TabsTrigger>
                    <TabsTrigger value="monthly">Become a Supporter</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="donate">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Select Donation Type</h3>
                        <RadioGroup 
                          defaultValue="one-time" 
                          value={donationType}
                          onValueChange={setDonationType}
                          className="flex space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="one-time" id="one-time" />
                            <Label htmlFor="one-time">One-time</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="monthly" id="monthly" />
                            <Label htmlFor="monthly">Monthly</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Select Amount</h3>
                        <RadioGroup
                          value={donationAmount}
                          onValueChange={handleDonationAmountChange}
                          className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {["25", "50", "100", "250"].map((amount) => (
                            <React.Fragment key={amount}>
                              <RadioGroupItem
                                value={amount}
                                id={`amount-${amount}`}
                                className="sr-only"
                              />
                              <Label
                                htmlFor={`amount-${amount}`}
                                className={`cursor-pointer rounded-md border-2 p-3 text-center font-medium transition-all duration-200 ease-in-out 
                                  ${donationAmount === amount 
                                    ? 'bg-green-600 text-white border-green-600 shadow-md ring-2 ring-green-600 ring-offset-2 dark:ring-offset-gray-900'
                                    : 'border-gray-300 hover:border-green-600 dark:border-gray-700 dark:hover:border-green-400 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20'}`}
                              >
                                ${amount}
                              </Label>
                            </React.Fragment>
                          ))}
                        </RadioGroup>
                        
                        {/* Custom Amount Radio Option - needs to be part of a RadioGroup if it's a radio item */}
                        {/* For now, let's make it visually distinct but still connected logically */}
                        <div 
                          className={`mt-3 flex items-center space-x-2 rounded-md border-2 p-3 transition-all duration-200 ease-in-out ${donationAmount === "custom" 
                            ? 'border-green-600 shadow-md ring-2 ring-green-600 ring-offset-2 dark:ring-offset-gray-900 bg-green-50 dark:bg-green-900/20'
                            : 'border-gray-300 hover:border-green-600 dark:border-gray-700 dark:hover:border-green-400'}`}
                          onClick={() => handleDonationAmountChange("custom")}
                        >
                          {/* We'll use a custom styled div that acts like a radio, or remove RadioGroupItem if it's just a trigger */}
                          <div 
                            className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${donationAmount === "custom" ? 'border-green-600 bg-green-600' : 'border-gray-400'}`}
                          >
                            {donationAmount === "custom" && <div className="h-2.5 w-2.5 rounded-full bg-white" />} 
                          </div>
                          <Label htmlFor="custom-amount-input" className="flex-grow cursor-pointer">
                            <div className="flex items-center">
                              <span className="mr-2 text-gray-700 dark:text-gray-300">Custom amount:</span>
                              <Input 
                                id="custom-amount-input"
                                type="text"
                                placeholder="$ Enter amount"
                                value={customAmount}
                                onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to parent div
                                onChange={(e) => {
                                  setCustomAmount(e.target.value);
                                  if (donationAmount !== "custom") {
                                    handleDonationAmountChange("custom");
                                  }
                                }}
                                className="max-w-[150px] md:max-w-[200px] min-h-[44px] dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500"
                              />
                            </div>
                          </Label>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => handlePayPalDonation()} // Use default behavior (component state)
                        className="w-full bg-green-600 hover:bg-green-700 py-6 md:py-7 text-base md:text-lg min-h-[50px] font-medium"
                      >
                        {oneTimeButtonText}
                      </Button>
                      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                        You will be redirected to PayPal. <br/> For inquiries: 0762 586626
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="monthly">
                    <div className="space-y-8">
                      <p className="text-center text-gray-600 dark:text-gray-400">
                        Join our community of monthly supporters who make our ongoing work possible through regular contributions.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
                        <Card className="border-2 hover:border-green-600 transition-all duration-300">
                          <CardHeader>
                            <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-3 flex items-center justify-center">
                              <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
                            </div>
                            <CardTitle>Friend</CardTitle>
                            <CardDescription>Basic monthly support</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="mb-4">
                              <span className="text-3xl font-bold">$10</span>
                              <span className="text-gray-600 dark:text-gray-400"> /month</span>
                            </div>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 mr-2 shrink-0" />
                                <span>Impact updates newsletter</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 mr-2 shrink-0" />
                                <span>Recognition on our website</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 mr-2 shrink-0" />
                                <span>Program updates</span>
                              </li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <Button 
                              onClick={() => handlePayPalDonation({ amount: 10, type: 'monthly' })}
                              className="w-full bg-green-600 hover:bg-green-700"
                            >
                              Support Monthly $10
                            </Button>
                          </CardFooter>
                        </Card>
                        
                        <Card className="border-2 border-green-600 shadow-md relative">
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-yellow-600 hover:bg-yellow-700">Most Popular</Badge>
                          </div>
                          <CardHeader>
                            <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-3 flex items-center justify-center">
                              <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                            </div>
                            <CardTitle>Partner</CardTitle>
                            <CardDescription>Dedicated monthly support</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="mb-4">
                              <span className="text-3xl font-bold">$25</span>
                              <span className="text-gray-600 dark:text-gray-400"> /month</span>
                            </div>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 mr-2 shrink-0" />
                                <span>All Friend level benefits</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 mr-2 shrink-0" />
                                <span>Quarterly impact reports</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 mr-2 shrink-0" />
                                <span>Program highlights</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 mr-2 shrink-0" />
                                <span>Donor recognition events</span>
                              </li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <Button 
                              onClick={() => handlePayPalDonation({ amount: 25, type: 'monthly' })}
                              className="w-full bg-green-600 hover:bg-green-700"
                            >
                              Support Monthly $25
                            </Button>
                          </CardFooter>
                        </Card>
                        
                        <Card className="border-2 hover:border-green-600 transition-all duration-300">
                          <CardHeader>
                            <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-3 flex items-center justify-center">
                              <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
                            </div>
                            <CardTitle>Sustainer</CardTitle>
                            <CardDescription>Leadership monthly support</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="mb-4">
                              <span className="text-3xl font-bold">$50</span>
                              <span className="text-gray-600 dark:text-gray-400"> /month</span>
                            </div>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 mr-2 shrink-0" />
                                <span>All Partner level benefits</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 mr-2 shrink-0" />
                                <span>Annual donor gathering</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 mr-2 shrink-0" />
                                <span>Program visit opportunities</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 mr-2 shrink-0" />
                                <span>Leadership recognition</span>
                              </li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <Button 
                              onClick={() => handlePayPalDonation({ amount: 50, type: 'monthly' })}
                              className="w-full bg-green-600 hover:bg-green-700"
                            >
                              Support Monthly $50
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                      
                      <div className="text-center">
                        <p className="mb-4 text-gray-600 dark:text-gray-400">
                          Prefer to make a custom monthly donation?
                        </p>
                        <Button 
                          onClick={() => handlePayPalDonation({ amount: customAmount, type: 'monthly' })}
                          variant="outline" 
                          className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400"
                        >
                          Custom Monthly Amount
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
        
        {/* Other Ways to Support */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">Other Ways to Support</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-playfair text-xl font-medium text-center mb-3">Volunteer</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Share your skills and time to help us deliver programs and support vulnerable community members.
                </p>
                <div className="text-center mt-6">
                  <Button variant="link" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-playfair text-xl font-medium text-center mb-3">Partner With Us</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Organizations and foundations can partner with us to expand our reach and impact in the community.
                </p>
                <div className="text-center mt-6">
                  <Button variant="link" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-playfair text-xl font-medium text-center mb-3">Contact Us</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Have questions about donating? Call us at +254735410300 or email info@philfothcbo.org
                </p>
                <div className="text-center mt-6">
                  <Button variant="link" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Impact Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">Your Donation's Impact</h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-playfair text-xl font-medium mb-3">Creating Biblical Resources</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your support helps us create guides, studies, and educational materials that make Scripture more accessible and meaningful for believers worldwide.
                    </p>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-4">
                      <div className="bg-scripture h-full rounded-full w-3/5" style={{ width: "35%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>35% of donations</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-playfair text-xl font-medium mb-3">Hosting Educational Sessions</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Funding enables us to organize and host debriefing sessions, workshops, and educational events both online and in-person.
                    </p>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-4">
                      <div className="bg-scripture h-full rounded-full" style={{ width: "30%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>30% of donations</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-playfair text-xl font-medium mb-3">Scholarships & Accessibility</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We use donations to provide scholarships and free resources to those who couldn't otherwise access biblical education.
                    </p>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-4">
                      <div className="bg-scripture h-full rounded-full" style={{ width: "20%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>20% of donations</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-playfair text-xl font-medium mb-3">Technology & Operations</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your support helps maintain our digital platforms and operations that make our ministry accessible globally.
                    </p>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-4">
                      <div className="bg-scripture h-full rounded-full" style={{ width: "15%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>15% of donations</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                    <h3 className="font-playfair text-xl font-medium mb-4">2023 Impact</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">People Served</span>
                        <span className="text-lg font-bold text-scripture">12,400+</span>
                      </div>
                      <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
                      
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Sessions Hosted</span>
                        <span className="text-lg font-bold text-scripture">245</span>
                      </div>
                      <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
                      
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Resources Created</span>
                        <span className="text-lg font-bold text-scripture">76</span>
                      </div>
                      <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
                      
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Scholarships Awarded</span>
                        <span className="text-lg font-bold text-scripture">110</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-scripture/10 p-6 rounded-lg">
                    <div className="flex items-start">
                      <div className="mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-scripture" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">We're a registered 501(c)(3) nonprofit</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Your donations are tax-deductible to the extent allowed by law. Our EIN: 12-3456789
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">Donation FAQs</h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Is my donation tax-deductible?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Yes, SanctumGrace is a registered 501(c)(3) nonprofit organization, and donations are tax-deductible to the extent allowed by law. You will receive a receipt for your donation that can be used for tax purposes.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Can I make a donation by check?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Yes, you can send donations by check made payable to "SanctumGrace" and mail to our address: 123 Faith Avenue, Grace City, GC 12345. Please include your email address for a receipt.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How do I cancel or modify my monthly donation?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    You can modify or cancel your monthly donation at any time by logging into your account on our website or by contacting us directly at donations@sanctumgrace.com. Changes will be applied to your next scheduled donation.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Is my payment information secure?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Yes, we use industry-standard encryption and security protocols to protect your payment information. We partner with trusted payment processors and never store your complete card information on our servers.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Can I donate to a specific project or initiative?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Yes, we welcome designated gifts for specific projects or initiatives. When making your donation, simply include a note specifying your preference, or contact us directly to discuss your giving goals.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* Donation Appeal */}
        <section className="py-16 bg-scripture/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-center">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-6">
                Your Support Makes a Difference
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Every donation, regardless of size, helps us continue our mission of making Scripture accessible, understandable, and transformative. Join us in this important work.
              </p>
              <Button 
                onClick={() => handlePayPalDonation({ isGeneric: true })}
                className="bg-scripture hover:bg-scripture-dark px-12 py-6 text-lg"
              >
                Donate with PayPal
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
