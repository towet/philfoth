import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, GraduationCap, Users, HandHeart, Sprout, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const programs = [
    {
      id: "food-security",
      title: "Food Security & Nutrition",
      description: "Providing food assistance and nutrition programs to vulnerable households in Bahati and Nakuru County.",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
      details: [
        "Food distribution to vulnerable households",
        "Nutrition education and support",
        "Emergency food assistance during crises",
        "School feeding programs for children",
        "Support for households facing food insecurity"
      ],
      impact: "Over 500 households supported monthly",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop"
    },
    {
      id: "education",
      title: "Children's Education",
      description: "Support for school fees, uniforms, and mentorship programs for orphaned and vulnerable children.",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      details: [
        "School fees and uniform support",
        "Educational materials and supplies",
        "Mentorship and guidance programs",
        "After-school tutoring support",
        "Career guidance and counseling"
      ],
      impact: "200+ children supported annually",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop"
    },
    {
      id: "economic-empowerment",
      title: "Economic Empowerment",
      description: "Youth and women's table banking, vocational training, and agribusiness initiatives for sustainable livelihoods.",
      icon: <Users className="h-6 w-6" />,
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      details: [
        "Table banking for women and youth",
        "Vocational skills training",
        "Agribusiness and farming support",
        "Small business startup support",
        "Financial literacy training"
      ],
      impact: "150+ entrepreneurs supported",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
    },
    {
      id: "care-support",
      title: "Elderly & Disability Care",
      description: "Care and support for the elderly and persons with disabilities in our community.",
      icon: <HandHeart className="h-6 w-6" />,
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      details: [
        "Home visits and companionship",
        "Medical care coordination",
        "Disability support services",
        "Assistive devices provision",
        "Social activities and engagement"
      ],
      impact: "100+ elderly and PWDs served",
      image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&h=600&fit=crop"
    },
    {
      id: "environment",
      title: "Environmental Conservation",
      description: "Environmental conservation programs linked to community livelihoods and sustainable development.",
      icon: <Sprout className="h-6 w-6" />,
      color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
      details: [
        "Tree planting and reforestation",
        "Waste management and recycling",
        "Water conservation initiatives",
        "Sustainable farming practices",
        "Environmental education"
      ],
      impact: "10,000+ trees planted",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 pt-28 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              Our <span className="text-green-600 dark:text-green-400">Programs</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto text-lg mb-10">
              Discover how Philfoth CBO is transforming lives through comprehensive programs that address the critical needs of vulnerable community members in Bahati and Nakuru County.
            </p>
            
            <Tabs defaultValue="all" className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100 dark:bg-gray-800">
                  <TabsTrigger value="all">All Programs</TabsTrigger>
                  <TabsTrigger value="direct-support">Direct Support</TabsTrigger>
                  <TabsTrigger value="empowerment">Empowerment</TabsTrigger>
                  <TabsTrigger value="care">Care Services</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className={`h-14 w-14 rounded-full ${program.color} flex items-center justify-center mb-4`}>
                      {program.icon}
                    </div>
                    <h3 className="font-playfair text-2xl font-medium mb-3">{program.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {program.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-sm text-gray-500 dark:text-gray-400">Key Activities:</h4>
                      <ul className="space-y-1">
                        {program.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 mb-4">
                      <p className="text-sm font-medium text-green-700 dark:text-green-400">
                        {program.impact}
                      </p>
                    </div>
                    
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact to Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Involved */}
        <section className="py-20 bg-green-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                How to Get Involved
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Join us in making a difference in our community through various ways of engagement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center shadow-sm">
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-playfair text-xl font-medium mb-3">Donate</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Support our programs through financial contributions that directly impact vulnerable community members.
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400">
                  Donate Now
                </Button>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center shadow-sm">
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-playfair text-xl font-medium mb-3">Volunteer</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Share your time and skills to help us deliver our programs and make a meaningful impact.
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400">
                  Become a Volunteer
                </Button>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center shadow-sm">
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-playfair text-xl font-medium mb-3">Partner With Us</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Organizations and foundations can partner with us to expand our reach and impact.
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-green-600">
          <div className="container mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-10 shadow-xl border border-white/20 max-w-4xl mx-auto text-center text-white">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Ready to Make a <span className="text-yellow-300">Difference</span>?
              </h2>
              <p className="max-w-2xl mx-auto mb-8 text-white/90 text-lg">
                Join us in building a more resilient, empowered, and hopeful community. Your support changes lives.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-green-700 hover:bg-yellow-50 shadow-lg">
                  <Heart className="h-5 w-5 mr-2" />
                  Donate Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20 bg-white/10">
                  <Phone className="h-5 w-5 mr-2" />
                  +254735410300
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;
