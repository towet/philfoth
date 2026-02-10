
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Users, GraduationCap, Sprout, HandHeart, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateSection from "@/components/DonateSection";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programs = [
    {
      title: "Food Security & Nutrition",
      description: "Providing food assistance and nutrition programs to vulnerable households in Bahati and Nakuru County.",
      icon: <Heart className="h-6 w-6" />,
      slug: "food-security",
      delay: 100,
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
    },
    {
      title: "Children's Education",
      description: "Support for school fees, uniforms, and mentorship programs for orphaned and vulnerable children.",
      icon: <GraduationCap className="h-6 w-6" />,
      slug: "education",
      delay: 200,
      imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
    },
    {
      title: "Economic Empowerment",
      description: "Youth and women's table banking, vocational training, and agribusiness initiatives for sustainable livelihoods.",
      icon: <Users className="h-6 w-6" />,
      slug: "economic-empowerment",
      delay: 300,
      imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    },
    {
      title: "Elderly & Disability Care",
      description: "Care and support for the elderly and persons with disabilities in our community.",
      icon: <HandHeart className="h-6 w-6" />,
      slug: "care-support",
      delay: 400,
      imageUrl: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-20 relative overflow-hidden" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 pt-16 md:pt-20 pb-20 md:pb-32">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="font-playfair mb-6 md:mb-8 animate-fade-in">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                <span className="text-yellow-300 inline-block animate-pulse-subtle">Philfoth</span> CBO
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                Building <span className="text-green-300">Resilient</span> Communities
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto leading-relaxed">
              Empowering vulnerable members of Bahati and Nakuru County through food security, education, economic empowerment, and care for the elderly and persons with disabilities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-300">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-md min-h-[50px] font-medium w-full sm:w-auto"
                asChild
              >
                <Link to="/programs">
                  Our Programs
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-white/10 min-h-[50px] font-medium w-full sm:w-auto"
                asChild
              >
                <Link to="/donate">
                  Support Our Work
                </Link>
              </Button>
            </div>
            <div className="mt-8 animate-fade-in animate-delay-400">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <Phone className="h-5 w-5 mr-2" />
                <span className="font-medium">Contact: +254735410300</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Programs */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
              Our Core Programs
            </h2>
            <p className="text-gray-600 dark:text-gray-400 opacity-0 animate-fade-in animate-delay-100">
              Discover how Philfoth CBO is making a difference in the lives of vulnerable community members in Bahati and Nakuru County.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 xl:gap-8 px-4 sm:px-6 md:px-0">
            {programs.map((program) => (
              <div 
                key={program.slug}
                className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${program.delay}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={program.imageUrl} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                    {program.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-medium mb-3">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {program.description}
                  </p>
                  <Link 
                    to="/programs"
                    className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium text-sm"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 opacity-0 animate-fade-in animate-delay-500">
            <Button 
              variant="outline" 
              className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20" 
              asChild
            >
              <Link to="/programs" className="inline-flex items-center">
                View All Programs 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* How We Help */}
      <section className="py-20 bg-green-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
              How We Make a Difference
            </h2>
            <p className="text-gray-600 dark:text-gray-400 opacity-0 animate-fade-in animate-delay-100">
              Our structured approach addresses critical areas affecting the most vulnerable in our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 opacity-0 animate-fade-in animate-delay-100">
              <div className="h-16 w-16 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-playfair text-xl font-medium mb-3">Direct Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Providing food assistance, educational materials, and direct care to those in need.
              </p>
            </div>
            
            <div className="text-center p-6 opacity-0 animate-fade-in animate-delay-200">
              <div className="h-16 w-16 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-playfair text-xl font-medium mb-3">Community Empowerment</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building capacity through table banking, vocational training, and agribusiness initiatives.
              </p>
            </div>
            
            <div className="text-center p-6 opacity-0 animate-fade-in animate-delay-300">
              <div className="h-16 w-16 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto mb-4">
                <Sprout className="h-8 w-8" />
              </div>
              <h3 className="font-playfair text-xl font-medium mb-3">Sustainable Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating long-term impact through environmental conservation and livelihood programs.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12 opacity-0 animate-fade-in animate-delay-400">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              asChild
            >
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Impact Stories */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
              Lives We've Touched
            </h2>
            <p className="text-gray-600 dark:text-gray-400 opacity-0 animate-fade-in animate-delay-100">
              Real stories from community members whose lives have been transformed through Philfoth CBO's programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm opacity-0 animate-fade-in animate-delay-100">
              <p className="italic text-gray-600 dark:text-gray-400 mb-4">
                "Philfoth CBO helped me send my children to school through their education support program. Today, my daughter is in university pursuing nursing."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30"></div>
                <div className="ml-3">
                  <h4 className="font-medium">Mary W.</h4>
                  <p className="text-sm text-gray-500">Single parent, Bahati</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm opacity-0 animate-fade-in animate-delay-200">
              <p className="italic text-gray-600 dark:text-gray-400 mb-4">
                "The table banking program gave me the capital to start my small business. I now employ three people and can support my family comfortably."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30"></div>
                <div className="ml-3">
                  <h4 className="font-medium">Grace K.</h4>
                  <p className="text-sm text-gray-500">Entrepreneur, Nakuru</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm opacity-0 animate-fade-in animate-delay-300">
              <p className="italic text-gray-600 dark:text-gray-400 mb-4">
                "As an elderly person living alone, Philfoth's regular visits and food assistance have been a blessing. I feel cared for and valued."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30"></div>
                <div className="ml-3">
                  <h4 className="font-medium">John M.</h4>
                  <p className="text-sm text-gray-500">Elderly beneficiary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Donation Section */}
      <DonateSection />
      
      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden bg-green-600">
        <div className="absolute top-0 left-0 w-full h-6 bg-white dark:bg-gray-950 opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-10 shadow-xl border border-white/20 max-w-4xl mx-auto">
            <div className="text-center text-white">
              <div className="inline-block mb-6 p-3 rounded-full bg-white/20 animate-fade-in">
                <Heart className="h-8 w-8" />
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
                Ready to Make a <span className="text-yellow-300">Difference</span>?
              </h2>
              <p className="max-w-2xl mx-auto mb-8 text-white/90 text-lg animate-fade-in animate-delay-100">
                Join us in building a more resilient, empowered, and hopeful community in Bahati and Nakuru County. Your support changes lives.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 animate-fade-in animate-delay-300 px-4 sm:px-0">
                <Button 
                  className="bg-white text-green-700 hover:bg-yellow-50 shadow-lg hover:shadow-xl transition-all duration-300 text-base px-6 py-6 h-auto font-medium"
                  asChild
                >
                  <Link to="/donate" className="flex items-center">
                    <Heart className="h-5 w-5 mr-2" />
                    Donate Now
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300 text-base px-6 py-6 h-auto bg-white/10"
                  asChild
                >
                  <Link to="/programs" className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Our Programs
                  </Link>
                </Button>
              </div>
              <div className="mt-8 animate-fade-in animate-delay-400">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-medium">Contact us: +254735410300</span>
                </div>
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
