import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScriptureQuote from "@/components/ScriptureQuote";
import { Heart, BookOpen, Users, ChevronRight } from "lucide-react";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

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
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-28 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Support <span className="text-scripture">Our Ministry</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg mb-10">
              Your generosity enables us to create biblical resources, host sessions, and make deep scriptural understanding accessible to all.
            </p>
            <div className="h-16 w-16 rounded-full bg-scripture/10 mx-auto flex items-center justify-center">
              <Heart className="h-8 w-8 text-scripture" />
            </div>
          </div>
        </section>
        
        {/* Scripture Quote */}
        <section className="py-10 bg-gray-50 dark:bg-gray-900">
          <ScriptureQuote 
            text="Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
            reference="2 Corinthians 9:7"
          />
        </section>
        
        {/* Donation Form */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl font-bold text-center mb-12">Make a Donation</h2>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
                <Tabs defaultValue="donate" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
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
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {["25", "50", "100", "250"].map((amount) => (
                            <Button
                              key={amount}
                              type="button"
                              variant={donationAmount === amount ? "default" : "outline"}
                              className={donationAmount === amount ? "bg-scripture hover:bg-scripture-dark" : "border-scripture text-scripture hover:bg-scripture/10"}
                              onClick={() => handleDonationAmountChange(amount)}
                            >
                              ${amount}
                            </Button>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-2 mt-3">
                          <RadioGroupItem 
                            value="custom" 
                            id="custom" 
                            checked={donationAmount === "custom"}
                            onClick={() => handleDonationAmountChange("custom")}
                          />
                          <Label htmlFor="custom" className="flex-grow">
                            <div className="flex items-center">
                              <span className="mr-2">Custom amount:</span>
                              <Input 
                                type="text"
                                placeholder="$ Enter amount"
                                value={customAmount}
                                onChange={(e) => {
                                  setCustomAmount(e.target.value);
                                  setDonationAmount("custom");
                                }}
                                className="max-w-[150px]"
                              />
                            </div>
                          </Label>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Your Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input placeholder="First Name" />
                          <Input placeholder="Last Name" />
                        </div>
                        <Input placeholder="Email Address" type="email" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Payment Information</h3>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-md">
                          <div className="space-y-4">
                            <Input placeholder="Card Number" />
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                              <Input placeholder="MM / YY" />
                              <Input placeholder="CVV" />
                              {donationType === "monthly" && (
                                <div className="md:col-span-1">
                                  <Input placeholder="Billing Zip Code" />
                                </div>
                              )}
                            </div>
                            
                            {donationType === "one-time" && (
                              <Input placeholder="Billing Zip Code" />
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-scripture hover:bg-scripture-dark py-6 text-lg">
                        {donationType === "one-time" ? "Complete Donation" : "Start Monthly Giving"}
                      </Button>
                      
                      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        Your donation is secure. We never store your full card information.
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="monthly">
                    <div className="space-y-8">
                      <p className="text-center text-gray-600 dark:text-gray-400">
                        Join our community of monthly supporters who make our ongoing work possible through regular contributions.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card className="border-2 hover:border-scripture transition-all duration-300">
                          <CardHeader>
                            <div className="h-12 w-12 rounded-full bg-scripture/10 flex items-center justify-center mb-3">
                              <BookOpen className="h-6 w-6 text-scripture" />
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
                                <ChevronRight className="h-4 w-4 text-scripture mt-0.5 mr-2 shrink-0" />
                                <span>Access to monthly newsletter</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-scripture mt-0.5 mr-2 shrink-0" />
                                <span>Recognition on our website</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-scripture mt-0.5 mr-2 shrink-0" />
                                <span>Early access to new resources</span>
                              </li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full bg-scripture hover:bg-scripture-dark">
                              Select
                            </Button>
                          </CardFooter>
                        </Card>
                        
                        <Card className="border-2 border-scripture shadow-md relative">
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-gold-dark hover:bg-gold-dark">Most Popular</Badge>
                          </div>
                          <CardHeader>
                            <div className="h-12 w-12 rounded-full bg-scripture/10 flex items-center justify-center mb-3">
                              <Heart className="h-6 w-6 text-scripture" />
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
                                <ChevronRight className="h-4 w-4 text-scripture mt-0.5 mr-2 shrink-0" />
                                <span>All Friend level benefits</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-scripture mt-0.5 mr-2 shrink-0" />
                                <span>Quarterly digital Q&A sessions</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-scripture mt-0.5 mr-2 shrink-0" />
                                <span>Access to extended resources</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-scripture mt-0.5 mr-2 shrink-0" />
                                <span>Monthly prayer resources</span>
                              </li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full bg-scripture hover:bg-scripture-dark">
                              Select
                            </Button>
                          </CardFooter>
                        </Card>
                        
                        <Card className="border-2 hover:border-scripture transition-all duration-300">
                          <CardHeader>
                            <div className="h-12 w-12 rounded-full bg-scripture/10 flex items-center justify-center mb-3">
                              <Users className="h-6 w-6 text-scripture" />
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
                                <ChevronRight className="h-4 w-4 text-scripture mt-0.5 mr-2 shrink-0" />
                                <span>All Partner level benefits</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-scripture mt-0.5 mr-2 shrink-0" />
                                <span>Annual supporter gathering</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-scripture mt-0.5 mr-2 shrink-0" />
                                <span>Personal study consultation</span>
                              </li>
                              <li className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-scripture mt-0.5 mr-2 shrink-0" />
                                <span>Input on future resources</span>
                              </li>
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full bg-scripture hover:bg-scripture-dark">
                              Select
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                      
                      <div className="text-center">
                        <p className="mb-4 text-gray-600 dark:text-gray-400">
                          Prefer to make a custom monthly donation?
                        </p>
                        <Button variant="outline" className="border-scripture text-scripture hover:bg-scripture/10">
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
                <div className="h-16 w-16 rounded-full bg-scripture/10 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-scripture" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 00-4-4H8.8a4 4 0 00-3.6 2.3L4 7.3a2 2 0 01-1.8 1.1H2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-medium text-center mb-3">Volunteer</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Share your skills and time to help us create resources, facilitate sessions, and reach more people with biblical understanding.
                </p>
                <div className="text-center mt-6">
                  <Button variant="link" className="text-scripture hover:text-scripture-dark">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="h-16 w-16 rounded-full bg-scripture/10 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-scripture" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-medium text-center mb-3">Corporate Matching</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Many employers match charitable donations. Check if your company has a matching gift program to double your impact.
                </p>
                <div className="text-center mt-6">
                  <Button variant="link" className="text-scripture hover:text-scripture-dark">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="h-16 w-16 rounded-full bg-scripture/10 mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-scripture" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-medium text-center mb-3">Legacy Giving</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Include SanctumGrace in your estate planning to ensure the ongoing work of biblical debriefing for future generations.
                </p>
                <div className="text-center mt-6">
                  <Button variant="link" className="text-scripture hover:text-scripture-dark">
                    Learn More
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
              <Button className="bg-scripture hover:bg-scripture-dark px-12 py-6 text-lg">
                Donate Today
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
