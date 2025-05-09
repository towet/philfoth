import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { sendSubscriptionEmail } from "@/utils/email";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopicCard from "@/components/TopicCard";
import ScriptureQuote from "@/components/ScriptureQuote";
import { BookOpen, Book, Heart, Lightbulb, Users, Scroll } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const Topics = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    try {
      const result = await sendSubscriptionEmail(email);
      if (result.success) {
        toast.toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter!",
          variant: "default",
        });
        setEmail("");
      } else {
        toast.toast({
          title: "Error",
          description: "There was a problem with your subscription. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast.toast({
        title: "Error",
        description: "There was a problem with your subscription. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const topics = [
    {
      title: "Biblical Foundations",
      description: "Explore the core principles and foundational teachings of Scripture.",
      icon: <Book className="h-6 w-6" />,
      slug: "biblical-foundations",
      categories: ["beginners", "theology"]
    },
    {
      title: "Scripture Interpretation",
      description: "Learn methods for accurately understanding and applying biblical texts.",
      icon: <BookOpen className="h-6 w-6" />,
      slug: "scripture-interpretation",
      categories: ["theology", "advanced"]
    },
    {
      title: "Spiritual Formation",
      description: "Develop habits and practices that foster spiritual growth and maturity.",
      icon: <Heart className="h-6 w-6" />,
      slug: "spiritual-formation",
      categories: ["beginners", "practical"]
    },
    {
      title: "Biblical Leadership",
      description: "Discover principles of godly leadership from Scripture's examples.",
      icon: <Users className="h-6 w-6" />,
      slug: "biblical-leadership",
      categories: ["practical", "advanced"]
    },
    {
      title: "Biblical Theology",
      description: "Study the progressive revelation of God's redemptive plan through Scripture.",
      icon: <Book className="h-6 w-6" />,
      slug: "biblical-theology",
      categories: ["theology", "advanced"]
    },
    {
      title: "Christian Apologetics",
      description: "Explore reasoned arguments for the Christian faith and worldview.",
      icon: <Lightbulb className="h-6 w-6" />,
      slug: "christian-apologetics",
      categories: ["theology", "advanced"]
    },
    {
      title: "Old Testament Studies",
      description: "Deep dive into the history, poetry, and prophecy of the Old Testament.",
      icon: <Scroll className="h-6 w-6" />,
      slug: "old-testament",
      categories: ["theology", "beginners"]
    },
    {
      title: "New Testament Studies",
      description: "Explore the gospels, epistles, and apocalyptic literature of the New Testament.",
      icon: <BookOpen className="h-6 w-6" />,
      slug: "new-testament",
      categories: ["theology", "beginners"]
    }
  ];
  
  const filteredTopics = topics.filter(topic => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-28 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              Explore <span className="text-scripture">Biblical</span> Topics
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto text-lg mb-10">
              Deepen your understanding of Scripture through our comprehensive collection of biblical topics, designed for spiritual growth and transformation.
            </p>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Search topics..." 
                  className="pl-10 py-6"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Scripture Quote */}
        <section className="py-10 bg-gray-50 dark:bg-gray-900">
          <ScriptureQuote 
            text="All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work."
            reference="2 Timothy 3:16-17"
          />
        </section>
        
        {/* Topic Categories */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">Explore By Category</h2>
            
            <Tabs defaultValue="all" className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100 dark:bg-gray-800">
                  <TabsTrigger value="all">All Topics</TabsTrigger>
                  <TabsTrigger value="beginners">Beginners</TabsTrigger>
                  <TabsTrigger value="theology">Theology</TabsTrigger>
                  <TabsTrigger value="practical">Practical</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredTopics.map((topic, index) => (
                    <TopicCard
                      key={topic.slug}
                      title={topic.title}
                      description={topic.description}
                      icon={topic.icon}
                      slug={topic.slug}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </TabsContent>
              
              {["beginners", "theology", "practical", "advanced"].map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTopics
                      .filter(topic => topic.categories.includes(category))
                      .map((topic, index) => (
                        <TopicCard
                          key={topic.slug}
                          title={topic.title}
                          description={topic.description}
                          icon={topic.icon}
                          slug={topic.slug}
                          delay={index * 100}
                        />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Study Resources */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="font-playfair text-3xl font-bold mb-6">Enhance Your Topic Study</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Our topic studies are designed to provide you with comprehensive resources for deeper understanding. Each topic includes:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-scripture/20 flex items-center justify-center text-scripture mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>In-depth Scripture references with contextual explanation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-scripture/20 flex items-center justify-center text-scripture mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Study questions for reflection and application</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-scripture/20 flex items-center justify-center text-scripture mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Recommended additional resources for further study</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-scripture/20 flex items-center justify-center text-scripture mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Guided prayer points related to the topic</span>
                  </li>
                </ul>
                <Button className="bg-scripture hover:bg-scripture-dark">
                  Browse All Resources
                </Button>
              </div>
              <div className="lg:w-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="font-playfair text-xl font-medium mb-4">Featured Topic Guide</h3>
                <h4 className="text-scripture text-lg font-medium mb-2">Understanding Biblical Covenants</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Explore God's progressive revelation through the major covenants of Scripture, from Adam to the New Covenant in Christ.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Comprehensiveness</span>
                    <span>Advanced</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div className="bg-scripture h-full rounded-full w-4/5"></div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Study Length</span>
                    <span>8 Weeks</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div className="bg-scripture h-full rounded-full w-3/4"></div>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-scripture text-scripture hover:bg-scripture/10 bg-scripture/5 font-medium shadow-sm">
                  View Topic Guide
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-scripture/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-3/5">
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">Get Weekly Topic Insights</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Sign up for our newsletter to receive weekly Scripture insights, study prompts, and resources directly to your inbox.
                  </p>
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <Input 
                      placeholder="Your email address" 
                      className="flex-grow" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button 
                      type="submit" 
                      className="bg-scripture hover:bg-scripture-dark whitespace-nowrap"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                    </Button>
                  </form>
                </div>
                <div className="md:w-2/5 flex justify-center">
                  <div className="h-32 w-32 rounded-full bg-scripture/10 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-scripture" />
                  </div>
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

export default Topics;
