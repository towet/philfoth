
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScriptureQuote from "@/components/ScriptureQuote";
import { BookOpen, Users, Heart, Mail, MapPin } from "lucide-react";
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
      quote: "SanctumGrace has transformed my understanding of Scripture. The debriefing sessions helped me see connections and meanings I had never recognized before.",
      author: "Sarah M.",
      role: "Bible Study Leader"
    },
    {
      quote: "The depth of insight and practical application in SanctumGrace's resources has been invaluable for my spiritual growth and ministry.",
      author: "Pastor James W.",
      role: "Community Church Pastor"
    },
    {
      quote: "As someone new to Bible study, I found SanctumGrace's approach welcoming, clear, and profound. I've grown so much in my understanding.",
      author: "David K.",
      role: "New Believer"
    }
  ];
  
  const team = [
    {
      name: "Dr. Michael chege",
      role: "Founder & Biblical Studies Director",
      bio: "Dr. Thomas founded SanctumGrace with a vision to make deep biblical understanding accessible to everyone. With over 15 years in biblical scholarship and teaching, he leads our biblical debriefing approach.",
      initial: "MT"
    },
    {
      name: "Rebecca muthoni",
      role: "Pastoral Care & Practical Application",
      bio: "Rebecca brings 10 years of pastoral experience to our team, specializing in helping people apply biblical truths to everyday challenges and spiritual growth.",
      initial: "RJ"
    },
    {
      name: "Dr. James langat",
      role: "Theological Research & Content",
      bio: "With a PhD in Biblical Theology, Dr. Wilson ensures our resources are theologically sound while remaining accessible and relevant to contemporary believers.",
      initial: "JW"
    },
    {
      name: "Sarah kwamboka",
      role: "Languages & Historical Context",
      bio: "Sarah's expertise in biblical languages and ancient Near Eastern culture provides crucial insights for understanding Scripture in its original context.",
      initial: "SC"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-28 pb-16 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-48 bg-scripture/5 dark:bg-scripture/10 rounded-full blur-3xl -z-10 transform rotate-12"></div>
            
            <div className="relative animate-fade-in">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block">
                About <span className="text-scripture relative"
                >Philfoth
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold-dark/30 rounded-full"></span>
                </span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg mb-10 animate-fade-in animate-delay-100">
              There comes a certain time in life where we experience good and bad memories in our life journey, most of the experiences way us down to a point that we have no one to share with,here I am to help you walk through the painful moments and even the joyful moments.philfoth is here to help you unload the baggages and and also give you more strength to soldier on through the word of God and the help of the holy spirit 🕊.feel free to contact us for spiritual nourishment in your life journey.
              </p>
              <div className="h-16 w-16 rounded-full bg-scripture/10 mx-auto flex items-center justify-center hover-scale animate-bounce-subtle">
                <BookOpen className="h-8 w-8 text-scripture" />
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
                    SanctumGrace exists to guide believers into deeper understanding of God's Word through thoughtful biblical debriefing, contextual insights, and practical application.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    We believe that Scripture is transformative when properly understood and applied. Our mission is to equip individuals and communities with the tools and knowledge needed for meaningful biblical engagement that leads to spiritual growth and godly living.
                  </p>
                </div>
                <div>
                  <h2 className="font-playfair text-3xl font-bold mb-6">Our Vision</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    We envision communities of believers who are deeply rooted in Scripture, applying its timeless wisdom to contemporary challenges with confidence and discernment.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our vision is to create accessible pathways to biblical literacy that bridge scholarly insights with everyday application, fostering spiritual formation that impacts individuals, families, churches, and society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Scripture Quote */}
        <section className="py-10 bg-gray-50 dark:bg-gray-900">
          <ScriptureQuote 
            text="Do your best to present yourself to God as one approved, a worker who does not need to be ashamed and who correctly handles the word of truth."
            reference="2 Timothy 2:15"
          />
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl font-bold text-center mb-12">Our Story</h2>
              
              <div className="prose dark:prose-invert max-w-none">
                <p>
                    Philfoth began in 2024 when Dr. Michael, after years of teaching biblical studies at the university level, recognized a growing disconnect between academic biblical scholarship and everyday believers' understanding of Scripture.
                </p>
                
                <p>
                  Seeing how many Christians struggled to bridge the gap between ancient texts and modern application, Dr. Thomas gathered a team of scholars, pastors, and educators with a shared vision: to create accessible, meaningful resources for biblical understanding that would foster genuine spiritual growth.
                </p>
                
                <p>
                  What started as a small group meeting for biblical debriefing sessions has grown into a comprehensive ministry offering a wide range of resources, online sessions, and training programs. Throughout our growth, we've remained committed to our founding principles:
                </p>
                
                <ul>
                  <li><strong>Scholarly Integrity</strong> - We maintain rigorous academic standards while making content accessible.</li>
                  <li><strong>Practical Application</strong> - Every teaching connects to real-life application and spiritual formation.</li>
                  <li><strong>Inclusive Community</strong> - We welcome learners at all stages of their spiritual journey.</li>
                  <li><strong>Transformative Engagement</strong> - We aim not just for knowledge, but for life transformation through God's Word.</li>
                </ul>
                
                <p>
                  Today, SanctumGrace serves thousands of individuals, small groups, and churches worldwide, providing resources that help people engage meaningfully with Scripture and grow in their faith.
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
        
        {/* Values */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-scripture/10 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-scripture" />
                </div>
                <h3 className="font-playfair text-xl font-medium mb-3">Biblical Integrity</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We uphold the authority and sufficiency of Scripture, approaching texts with careful attention to their historical and literary context.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-scripture/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-scripture" />
                </div>
                <h3 className="font-playfair text-xl font-medium mb-3">Relational Learning</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We believe that the deepest understanding comes through dialogue, questions, and shared insights within a supportive community.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-scripture/10 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-scripture" />
                </div>
                <h3 className="font-playfair text-xl font-medium mb-3">Transformative Application</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We aim not just for intellectual understanding, but for Scripture to transform hearts, minds, and actions in everyday life.
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
                    What is biblical debriefing?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Biblical debriefing is our approach to studying Scripture that combines historical context, literary analysis, theological reflection, and practical application. Rather than simply reading passages, we "debrief" them—examining their original context, exploring their meaning, and discovering their relevance for today in a guided, conversational format.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Do I need prior biblical knowledge to use your resources?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    Not at all. We design our resources and sessions for people at all levels of biblical knowledge. Whether you're new to Bible study or have years of experience, our content is accessible while still offering depth for more advanced students.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How can I participate in your sessions?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    We offer sessions in multiple formats: online, in-person, and hybrid. You can browse our upcoming sessions on the Sessions page and register for those that interest you. Many sessions are recorded and available for later access as well.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Do you align with a specific theological tradition?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    SanctumGrace takes an ecumenical approach that focuses on core Christian teachings while respecting denominational differences. Our team includes scholars and teachers from various theological backgrounds who share a commitment to faithful biblical interpretation and spiritual formation.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    How can I support SanctumGrace's ministry?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    There are several ways to support our work: through financial donations, by volunteering your time and skills, by sharing our resources with others, and through prayer. Visit our Donate page to learn more about supporting options.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* Contact */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">Contact Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
                <div className="h-12 w-12 rounded-full bg-scripture/10 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-scripture" />
                </div>
                <h3 className="font-medium mb-2">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  <a href="mailto:contact@sanctumgrace.com" className="hover:text-scripture transition-colors">
                    contact@philfoth.com
                  </a>
                </p>
              </div>
              
              
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
                <div className="h-12 w-12 rounded-full bg-scripture/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-5 w-5 text-scripture" />
                </div>
                <h3 className="font-medium mb-2">Follow Us</h3>
                <div className="flex justify-center space-x-4 text-gray-600 dark:text-gray-400">
                  <a href="#" className="hover:text-scripture transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-scripture transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-scripture transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
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
