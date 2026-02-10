
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, Target, HandHeart, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "Philfoth CBO has been a lifeline for my family. The food assistance and educational support for my children has given us hope for a better future.",
      author: "Mary Wanjiku",
      role: "Beneficiary, Bahati"
    },
    {
      quote: "Through the table banking program, I was able to start my small business. Today I employ three people and can support my family comfortably.",
      author: "Grace Kamau",
      role: "Entrepreneur, Nakuru"
    },
    {
      quote: "The vocational training gave me skills I never thought I'd have. I now work as a tailor and can provide for my elderly parents.",
      author: "David Njoroge",
      role: "Program Graduate"
    }
  ];
  
  const team = [
    {
      name: "Dr. Michael Chege",
      role: "Founder & Executive Director",
      bio: "Dr. Chege founded Philfoth CBO with a vision to uplift vulnerable communities. With over 15 years in community development, he leads our initiatives with passion and dedication.",
      initial: "MC"
    },
    {
      name: "Rebecca Muthoni",
      role: "Programs Coordinator",
      bio: "Rebecca coordinates all our programs, ensuring that food security, education, and economic empowerment initiatives reach those who need them most.",
      initial: "RM"
    },
    {
      name: "James Langat",
      role: "Community Outreach",
      bio: "James works directly with community members, identifying needs and ensuring our programs align with the real challenges faced by families in Bahati and Nakuru.",
      initial: "JL"
    },
    {
      name: "Sarah Kwamboka",
      role: "Volunteer Coordinator",
      bio: "Sarah manages our volunteer network, mobilizing community members to support our various programs and make a collective impact.",
      initial: "SK"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 pt-28 pb-16 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-48 bg-green-500/5 dark:bg-green-500/10 rounded-full blur-3xl -z-10 transform rotate-12"></div>
            
            <div className="relative animate-fade-in">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block">
                About <span className="text-green-600 dark:text-green-400 relative"
                >Philfoth
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500/30 rounded-full"></span>
                </span> CBO
              </h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg mb-10 animate-fade-in animate-delay-100">
              Philfoth CBO is a registered community-based organization (Reg. DSD/32/174/02/135378) working tirelessly to uplift the poor and vulnerable members of Bahati and Nakuru County. We address critical areas including food security, children's education, economic empowerment, and care for the elderly and persons with disabilities.
              </p>
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto flex items-center justify-center hover-scale animate-bounce-subtle">
                <Heart className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-playfair text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Philfoth CBO exists to uplift vulnerable members of our community through comprehensive support programs that address food security, education, economic empowerment, and care for the elderly and persons with disabilities.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    We believe in building resilient communities where every individual has access to basic needs, opportunities for growth, and the support they need to thrive. Our mission is to bridge the gap between need and available resources through community-driven initiatives.
                  </p>
                </div>
                <div>
                  <h2 className="font-playfair text-3xl font-bold mb-6">Our Vision</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    We envision a resilient, empowered, and hopeful community in Bahati and Nakuru County where vulnerable members have access to food, education, economic opportunities, and dignified care.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our vision is to create sustainable pathways to community development that transform lives, strengthen families, and build a future where no one is left behind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
                
        {/* Our Story */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl font-bold text-center mb-12">Our Story</h2>
              
              <div className="prose dark:prose-invert max-w-none">
                <p>
                    Philfoth CBO began in 2024 when Dr. Michael Chege, after witnessing the profound challenges faced by vulnerable members of Bahati and Nakuru County, rallied local volunteers to make a difference.
                </p>
                
                <p>
                  Seeing firsthand how orphaned children, elderly persons without care, persons with disabilities, and households grappling with food insecurity struggled daily, Dr. Chege gathered a team of dedicated volunteers with a shared vision: to create a community-based organization that addresses these critical needs.
                </p>
                
                <p>
                  What started as a small volunteer group making home visits and providing food assistance has grown into a comprehensive CBO offering structured programs including food security and nutrition, children's education support, economic empowerment through table banking and vocational training, and care for the elderly and persons with disabilities. Throughout our growth, we've remained committed to our founding principles:
                </p>
                
                <ul>
                  <li><strong>Community-Driven</strong> - We are composed of local volunteers who understand the challenges intimately and work from within the community.</li>
                  <li><strong>Holistic Support</strong> - We address multiple interconnected needs rather than single issues.</li>
                  <li><strong>Sustainable Solutions</strong> - We focus on long-term impact through capacity building and empowerment.</li>
                  <li><strong>Inclusive Care</strong> - We reach the most vulnerable, including orphaned children, the elderly, persons with disabilities, and marginalized youth.</li>
                </ul>
                
                <p>
                  Today, Philfoth CBO serves hundreds of families across Bahati and Nakuru County, providing transformative support that changes lives and builds hope for a better future.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm">
                  <div className="h-24 w-24 rounded-full bg-scripture/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-semibold text-scripture">{member.initial}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-scripture text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-playfair text-xl font-medium mb-3">Compassion</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We approach every individual with empathy and care, recognizing the dignity and worth of every person we serve.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-playfair text-xl font-medium mb-3">Community</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We believe in the power of collective action and community-driven solutions to address local challenges.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-playfair text-xl font-medium mb-3">Impact</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We focus on creating measurable, sustainable change that transforms lives and builds resilient communities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-scripture/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">What People Are Saying</h2>
            
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 md:p-12">
              <div className="mb-8">
                <blockquote className="text-xl italic text-center mb-6">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                <div className="text-center">
                  <p className="font-medium">{testimonials[activeTestimonial].author}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
              
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-3 w-3 rounded-full ${index === activeTestimonial ? 'bg-scripture' : 'bg-gray-300 dark:bg-gray-600'}`}
                    aria-label={`View testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    What is Philfoth CBO?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Philfoth CBO is a registered community-based organization (Reg. DSD/32/174/02/135378) working to uplift vulnerable members of Bahati and Nakuru County through food security, education support, economic empowerment, and care for the elderly and persons with disabilities.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    How can I get help from Philfoth CBO?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    If you or someone you know needs assistance, please contact us at +254735410300. Our team will assess your situation and connect you with the appropriate support programs based on availability and eligibility criteria.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How can I volunteer with Philfoth CBO?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    We welcome volunteers who are passionate about making a difference in our community. Whether you have skills to share or simply want to help, contact us at +254735410300 to learn about volunteer opportunities.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    How are donations used?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Donations support our core programs: food security and nutrition, children's education, economic empowerment initiatives, and care for the elderly and persons with disabilities. Visit our Donate page for detailed information on how funds are allocated.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Is Philfoth CBO registered?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Yes, Philfoth CBO is duly registered with the Department of Social Development (Reg No. DSD/32/174/02/135378) and compliant with all relevant community group regulations.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* Contact */}
        <section className="py-16 bg-green-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">Contact Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-medium mb-2">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  <a href="tel:+254735410300" className="hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium">
                    +254735410300
                  </a>
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-medium mb-2">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  <a href="mailto:info@philfothcbo.org" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    info@philfothcbo.org
                  </a>
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-medium mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Bahati, Nakuru County<br />Kenya
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
