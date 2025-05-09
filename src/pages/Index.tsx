
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Book, BookOpen, MessageSquare, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScriptureQuote from "@/components/ScriptureQuote";
import TopicCard from "@/components/TopicCard";
import DonateSection from "@/components/DonateSection";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredTopics = [
    {
      title: "Understanding Scripture",
      description: "Dive deeper into biblical texts and understand their context and meaning.",
      icon: <BookOpen className="h-6 w-6" />,
      slug: "understanding-scripture",
      delay: 100,
      imageUrl: "https://lifehopeandtruth.com/cache/images/Understanding-the-Bible_833_460_80_c1.jpg",
    },
    {
      title: "Life Application",
      description: "Learn how to apply biblical teachings to your everyday life challenges.",
      icon: <GraduationCap className="h-6 w-6" />,
      slug: "life-application",
      delay: 200,
      imageUrl: "https://storage2.snappages.site/4HG8C8/assets/images/16950303_2048x1365_500.jpg",
    },
    {
      title: "Prayer & Meditation",
      description: "Discover techniques for meaningful prayer and meditation on scripture.",
      icon: <Book className="h-6 w-6" />,
      slug: "prayer-meditation",
      delay: 300,
      imageUrl: "https://media.swncdn.com/via/17431-gettyimages-1043965122-aaronamat.jpg",
    },
    {
      title: "Community Discussion",
      description: "Join the conversation with others on their biblical understanding journey.",
      icon: <MessageSquare className="h-6 w-6" />,
      slug: "community-discussion",
      delay: 400,
      imageUrl: "https://news.emory.edu/features/2019/10/black-health-matters/assets/xxcRf0OqaF/a-2560x1440.jpeg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-20 relative overflow-hidden" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 pt-16 md:pt-20 pb-20 md:pb-32">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="font-playfair mb-6 md:mb-8 animate-fade-in">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                <span className="text-yellow-300 inline-block animate-pulse-subtle">Illuminate</span> Your Faith Journey
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                Through <span className="text-scripture-light">Biblical Exploration</span>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto leading-relaxed">
              Discover profound biblical wisdom through guided reflection, expert commentary, 
              and a supportive community dedicated to authentic spiritual growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-300">
              <Button 
                className="bg-scripture hover:bg-scripture-dark text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-md min-h-[50px] font-medium w-full sm:w-auto"
                asChild
              >
                <Link to="/sessions">
                  Start Your Journey
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-white/10 min-h-[50px] font-medium w-full sm:w-auto"
                asChild
              >
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Scripture Quote */}
      <section className="py-16 bg-scripture/10">
        <ScriptureQuote 
          text="Your word is a lamp for my feet, a light on my path."
          reference="Psalm 119:105"
        />
      </section>
      
      {/* Featured Topics */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
              Explore Biblical Topics
            </h2>
            <p className="text-gray-600 dark:text-gray-400 opacity-0 animate-fade-in animate-delay-100">
              Discover our most popular biblical debriefing topics and start your journey of deeper understanding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 xl:gap-8 px-4 sm:px-6 md:px-0">
            {featuredTopics.map((topic) => (
              <TopicCard 
                key={topic.slug}
                {...topic}
              />
            ))}
          </div>
          
          <div className="text-center mt-12 opacity-0 animate-fade-in animate-delay-500">
            <Button 
              variant="outline" 
              className="border-scripture text-scripture hover:bg-scripture/10" 
              asChild
            >
              <Link to="/topics" className="inline-flex items-center">
                View All Topics 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 bg-cream dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
              How Biblical Debriefing Works
            </h2>
            <p className="text-gray-600 dark:text-gray-400 opacity-0 animate-fade-in animate-delay-100">
              Our guided process helps you understand scripture more deeply and apply it meaningfully to your life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 opacity-0 animate-fade-in animate-delay-100">
              <div className="h-16 w-16 rounded-full bg-scripture text-white flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="font-playfair text-xl font-medium mb-3">Explore Scripture</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Read and examine biblical passages with expert guidance and historical context.
              </p>
            </div>
            
            <div className="text-center p-6 opacity-0 animate-fade-in animate-delay-200">
              <div className="h-16 w-16 rounded-full bg-scripture text-white flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h3 className="font-playfair text-xl font-medium mb-3">Reflect & Discuss</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Engage in guided reflection questions and meaningful discussion with others.
              </p>
            </div>
            
            <div className="text-center p-6 opacity-0 animate-fade-in animate-delay-300">
              <div className="h-16 w-16 rounded-full bg-scripture text-white flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="font-playfair text-xl font-medium mb-3">Apply & Transform</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn practical applications of biblical wisdom for personal growth and life challenges.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12 opacity-0 animate-fade-in animate-delay-400">
            <Button 
              className="bg-scripture hover:bg-scripture-dark text-white"
              asChild
            >
              <Link to="/sessions">
                Join a Debriefing Session
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
              From Our Community
            </h2>
            <p className="text-gray-600 dark:text-gray-400 opacity-0 animate-fade-in animate-delay-100">
              Hear from people whose lives have been impacted by our biblical debriefing sessions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm opacity-0 animate-fade-in animate-delay-100">
              <p className="italic text-gray-600 dark:text-gray-400 mb-4">
                "The debriefing sessions have transformed my understanding of scripture. I now see how these ancient texts speak directly to my modern life challenges."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ml-3">
                  <h4 className="font-medium">Rebecca T.</h4>
                  <p className="text-sm text-gray-500">Member for 2 years</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm opacity-0 animate-fade-in animate-delay-200">
              <p className="italic text-gray-600 dark:text-gray-400 mb-4">
                "I've been studying the Bible for years, but these guided debriefing sessions have helped me discover new insights I never noticed before."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ml-3">
                  <h4 className="font-medium">James M.</h4>
                  <p className="text-sm text-gray-500">Member for 1 year</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm opacity-0 animate-fade-in animate-delay-300">
              <p className="italic text-gray-600 dark:text-gray-400 mb-4">
                "The community discussions have been invaluable. Hearing different perspectives has enriched my faith and deepened my connection to scripture."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ml-3">
                  <h4 className="font-medium">Sarah K.</h4>
                  <p className="text-sm text-gray-500">Member for 6 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Donation Section */}
      <DonateSection />
      
      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden bg-scripture">
        {/* Clean background with subtle accent */}
        <div className="absolute top-0 left-0 w-full h-6 bg-white dark:bg-gray-950 opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-10 shadow-xl border border-white/20 max-w-4xl mx-auto">
            <div className="text-center text-white">
              <div className="inline-block mb-6 p-3 rounded-full bg-white/20 animate-fade-in">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
                Ready to Deepen Your <span className="text-yellow-300">Biblical Understanding</span>?
              </h2>
              <p className="max-w-2xl mx-auto mb-8 text-white/90 text-lg animate-fade-in animate-delay-100">
                Join our community today and start your journey towards more meaningful 
                scripture engagement and spiritual growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 animate-fade-in animate-delay-300 px-4 sm:px-0">
                <Button 
                  className="bg-white text-indigo-700 hover:bg-yellow-50 shadow-lg hover:shadow-xl transition-all duration-300 text-base px-6 py-6 h-auto font-medium"
                  asChild
                >
                  <Link to="/sessions" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Browse Sessions
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300 text-base px-6 py-6 h-auto bg-white/10"
                  asChild
                >
                  <Link to="/topics" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Explore Topics
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
