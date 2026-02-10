
import { useState } from "react";
import { HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const DonateSection = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAmount = (value: number) => {
    setAmount(value);
  };
  
  const handlePayPalDonation = () => {
    if (!amount || amount <= 0) {
      toast({
        title: "Donation Error",
        description: "Please select or enter a valid donation amount.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Same PayPal business email used in the Donate page
    const payPalBusinessId = 'Estherwangi374@gmail.com';
    
    // Construct the PayPal URL
    let payPalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=${payPalBusinessId}&currency_code=USD`;
    
    // Add item name with donor name if provided
    let itemName = "Donation to SanctumGrace";
    if (name) {
      itemName += ` from ${name}`;
    }
    
    payPalUrl += `&item_name=${encodeURIComponent(itemName)}`;
    
    // Add amount
    if (amount && amount > 0) {
      payPalUrl += `&amount=${amount.toFixed(2)}`;
    }
    
    // Add return URL and note if email is provided
    if (email) {
      // Just for tracking purposes, not essential for donation
      payPalUrl += `&custom=${encodeURIComponent(email)}`;
    }
    
    // Open PayPal in a new window
    window.open(payPalUrl, '_blank', 'noopener,noreferrer');
    
    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setAmount(null);
      setName("");
      setEmail("");
      toast({
        title: "Thank you!",
        description: "You will be redirected to PayPal to complete your donation."
      });
    }, 1000);
  };

  const predefinedAmounts = [10, 25, 50, 100];

  return (
    <section className="py-16 bg-cream dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
            Support Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 opacity-0 animate-fade-in animate-delay-200">
            Your generous donation helps us continue providing biblical debriefing resources 
            and reaching more people with spiritual guidance.
          </p>
        </div>
        
        <Card className="max-w-xl mx-auto border border-gray-200 dark:border-gray-800 shadow-md opacity-0 animate-fade-in animate-delay-300">
          <CardHeader>
            <div className="flex items-center justify-center">
              <HandHeart className="h-10 w-10 text-gold" />
            </div>
            <CardTitle className="text-center font-playfair text-2xl mt-2">
              Make a Donation
            </CardTitle>
            <CardDescription className="text-center">
              Choose an amount to donate, or enter a custom amount
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {predefinedAmounts.map((value) => (
                <button
                  key={value}
                  onClick={() => handleAmount(value)}
                  className={`px-4 py-3 rounded-md transition-all ${
                    amount === value 
                      ? "bg-scripture text-white" 
                      : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                  }`}
                >
                  ${value}
                </button>
              ))}
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Custom Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full pl-8 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-scripture bg-white dark:bg-gray-800"
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-scripture bg-white dark:bg-gray-800"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-scripture bg-white dark:bg-gray-800"
              />
            </div>
          </CardContent>
          
          <CardFooter>
            <Button 
              className="w-full bg-gold hover:bg-gold-dark text-black font-semibold py-2"
              disabled={!amount || isSubmitting}
              onClick={handlePayPalDonation}
            >
              {isSubmitting ? 'Processing...' : `Donate $${amount?.toFixed(2) || '0.00'}`}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default DonateSection;
