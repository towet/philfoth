
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScriptureQuote from "@/components/ScriptureQuote";
import { FileText, Download, BookOpen, Video, Headphones, Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [resourceType, setResourceType] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  
  const resources = [
    {
      title: "Understanding Biblical Context",
      description: "A comprehensive guide to interpreting Scripture within its historical and cultural context.",
      type: "guide",
      format: "PDF",
      pages: 45,
      author: "Dr. Michael Thomas",
      date: "April 12, 2023",
      downloadCount: 1240,
      tags: ["hermeneutics", "context", "interpretation"],
      slug: "understanding-biblical-context"
    },
    {
      title: "The Parables Explained",
      description: "In-depth analysis of Jesus's parables with cultural insights and modern applications.",
      type: "study",
      format: "PDF",
      pages: 68,
      author: "Pastor Rebecca Johnson",
      date: "March 23, 2023",
      downloadCount: 890,
      tags: ["parables", "jesus", "new-testament"],
      slug: "parables-explained"
    },
    {
      title: "Introduction to Biblical Hebrew",
      description: "Basic principles and vocabulary for understanding Old Testament Hebrew texts.",
      type: "course",
      format: "Video Series",
      lessons: 12,
      author: "Prof. Sarah Cohen",
      date: "February 15, 2023",
      views: 3450,
      tags: ["hebrew", "language", "old-testament"],
      slug: "intro-biblical-hebrew"
    },
    {
      title: "The Gospel of John Verse by Verse",
      description: "Detailed commentary and insights on the Gospel of John.",
      type: "commentary",
      format: "PDF",
      pages: 156,
      author: "Dr. James Wilson",
      date: "January 28, 2023",
      downloadCount: 2100,
      tags: ["gospel", "john", "new-testament"],
      slug: "gospel-john-verse"
    },
    {
      title: "Biblical Leadership Principles",
      description: "Discover leadership principles from key biblical figures and how to apply them today.",
      type: "guide",
      format: "Audio Series",
      episodes: 8,
      author: "Dr. Robert Anderson",
      date: "May 2, 2023",
      listens: 1680,
      tags: ["leadership", "application", "principles"],
      slug: "biblical-leadership"
    },
    {
      title: "Prayer in Scripture",
      description: "Examine models of prayer throughout the Bible and develop your own prayer practice.",
      type: "study",
      format: "PDF",
      pages: 52,
      author: "Pastor Rebecca Johnson",
      date: "December 10, 2022",
      downloadCount: 1950,
      tags: ["prayer", "spiritual-disciplines", "worship"],
      slug: "prayer-in-scripture"
    }
  ];
  
  const filteredResources = resources.filter(resource => 
    (resourceType === "all" || resource.type === resourceType) &&
    (resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
     resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  ).sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOrder === "popular") {
      const aPopularity = a.downloadCount || a.views || a.listens || 0;
      const bPopularity = b.downloadCount || b.views || b.listens || 0;
      return bPopularity - aPopularity;
    }
    return 0;
  });
  
  const getResourceIcon = (type) => {
    switch(type) {
      case "guide":
        return <FileText className="h-6 w-6 text-blue-600" />;
      case "study":
        return <FileText className="h-6 w-6 text-emerald-600" />;
      case "commentary":
        return <BookOpen className="h-6 w-6 text-purple-600" />;
      case "course":
        return <Video className="h-6 w-6 text-amber-600" />;
      case "audio":
        return <Headphones className="h-6 w-6 text-rose-600" />;
      default:
        return <BookOpen className="h-6 w-6 text-scripture" />;
    }
  };
  
  const getResourceBgColor = (type) => {
    switch(type) {
      case "guide":
        return "bg-blue-100 dark:bg-blue-900/30";
      case "study":
        return "bg-emerald-100 dark:bg-emerald-900/30";
      case "commentary":
        return "bg-purple-100 dark:bg-purple-900/30";
      case "course":
        return "bg-amber-100 dark:bg-amber-900/30";
      case "audio":
        return "bg-rose-100 dark:bg-rose-900/30";
      default:
        return "bg-scripture/10";
    }
  };
  
  const getFormatColor = (format) => {
    switch(format) {
      case "PDF":
        return "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/60";
      case "Video Series":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/60";
      case "Audio Series":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/60";
      default:
        return "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/60";
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-28 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              Biblical <span className="text-scripture">Resources</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto text-lg mb-10">
              Deepen your understanding of Scripture with our library of guides, studies, commentaries, and courses designed for spiritual growth.
            </p>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Search resources..." 
                  className="pl-10 py-6"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Removed duplicate featured resource banner */}

        {/* Scripture Quote */}
        <section className="py-10 bg-gray-50 dark:bg-gray-900">
          <ScriptureQuote 
            text="Your word is a lamp for my feet, a light on my path."
            reference="Psalm 119:105"
          />
        </section>
        
        {/* Resource Library */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">Resource Library</h2>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar and Mobile Filter */}
              <div className="lg:w-1/4">
                {/* Mobile Filters Toggle */}
                <div className="block lg:hidden mb-4">
                  <div 
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm cursor-pointer flex items-center justify-between"
                    onClick={() => {
                      const mobileFilters = document.getElementById('mobileFilters');
                      if (mobileFilters) {
                        mobileFilters.classList.toggle('hidden');
                      }
                    }}
                  >
                    <span className="font-medium">Filters & Sort</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {/* Filter Content - Hidden on mobile by default */}
                <div id="mobileFilters" className="hidden lg:block">
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6 shadow-sm">
                    <h3 className="font-medium text-lg mb-4">Resource Type</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="all" 
                          checked={resourceType === "all"} 
                          onCheckedChange={() => setResourceType("all")}
                        />
                        <Label htmlFor="all">All Resources</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="guide" 
                          checked={resourceType === "guide"} 
                          onCheckedChange={() => setResourceType("guide")}
                        />
                        <Label htmlFor="guide">Guides</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="study" 
                          checked={resourceType === "study"} 
                          onCheckedChange={() => setResourceType("study")}
                        />
                        <Label htmlFor="study">Bible Studies</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="commentary" 
                          checked={resourceType === "commentary"} 
                          onCheckedChange={() => setResourceType("commentary")}
                        />
                        <Label htmlFor="commentary">Commentaries</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="course" 
                          checked={resourceType === "course"} 
                          onCheckedChange={() => setResourceType("course")}
                        />
                        <Label htmlFor="course">Courses</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                    <h3 className="font-medium text-lg mb-4">Sort By</h3>
                    
                    <Select value={sortOrder} onValueChange={setSortOrder}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sort order" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="popular">Most Popular</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {filteredResources.map((resource, index) => (
                    <Card key={resource.slug} className={`overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 opacity-0 animate-fade-in hover:shadow-md`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start mb-3">
                          <div className={`${getResourceBgColor(resource.type)} p-2 rounded-md`}>
                            {getResourceIcon(resource.type)}
                          </div>
                          <Badge className={getFormatColor(resource.format)}>
                            {resource.format}
                          </Badge>
                        </div>
                        <CardTitle className="font-playfair text-xl">{resource.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pb-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <span>By {resource.author}</span>
                          <span className="mx-2">•</span>
                          <span>{resource.date}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {resource.tags.map((tag, tagIndex) => {
                            const tagColors = [
                              "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300",
                              "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-300",
                              "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-300",
                              "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-300",
                              "bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-300"
                            ];
                            const colorIndex = tagIndex % tagColors.length;
                            return (
                              <span 
                                key={tag} 
                                className={`text-xs ${tagColors[colorIndex]} px-2 py-1 rounded-full hover:scale-105 transition-transform cursor-pointer`}
                              >
                                #{tag}
                              </span>
                            );
                          })}
                        </div>
                      </CardContent>
                      
                      <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {/* Download count removed */}
                          {resource.views && (
                            <span className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> {resource.views} views</span>
                          )}
                          {/* Listens count removed */}
                        </div>
                        {/* Download button removed */}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                {filteredResources.length === 0 && (
                  <div className="text-center py-12">
                    <BookOpen className="h-12 w-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">No resources found</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Try adjusting your filters or search criteria.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchQuery("");
                        setResourceType("all");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Resources */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">Featured Resources</h2>
            
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/40 rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-5 sm:p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                  <Badge className="bg-amber-200 text-amber-800 dark:bg-amber-800/60 dark:text-amber-200 hover:bg-amber-300 dark:hover:bg-amber-700 mb-4 w-fit animate-pulse">New Release</Badge>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-3 text-amber-900 dark:text-amber-100">Understanding the Sermon on the Mount</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                    A comprehensive guide to Jesus's teachings in Matthew 5-7, with historical context, verse-by-verse analysis, and practical applications for today's believers.
                  </p>
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 gap-y-2">
                    <span className="flex items-center mr-2 sm:mr-0"><FileText className="h-3.5 w-3.5 mr-1 text-amber-700 dark:text-amber-400" /> By Dr. Elizabeth Miller</span>
                    <span className="mx-2 text-amber-400 hidden sm:inline">•</span>
                    <span className="flex items-center mr-2 sm:mr-0"><BookOpen className="h-3.5 w-3.5 mr-1 text-amber-700 dark:text-amber-400" /> 156 pages</span>
                    <span className="mx-2 text-amber-400 hidden sm:inline">•</span>
                    <span className="flex items-center"><Download className="h-3.5 w-3.5 mr-1 text-amber-700 dark:text-amber-400" /> PDF & Print</span>
                  </div>
                  <Button 
                    className="bg-amber-600 hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-600 w-full sm:w-fit shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                    onClick={() => window.open('https://executableoutlines.com/pdf/mt_so.pdf', '_blank')}
                  >
                    <Download className="h-4 w-4 mr-2" /> Download Now
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-amber-200 to-amber-300 dark:from-amber-800 dark:to-amber-700 h-48 sm:h-64 md:h-auto flex items-center justify-center relative overflow-hidden order-1 md:order-2">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501450636657-389bf563ae21?q=80&w=200')] opacity-20 bg-cover bg-center"></div>
                  <div className="z-10 bg-white dark:bg-gray-800 rounded-full h-24 w-24 sm:h-36 sm:w-36 flex items-center justify-center shadow-xl">
                    <BookOpen className="h-16 w-16 sm:h-24 sm:w-24 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resource Collections */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">Resource Collections</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 sm:p-6 rounded-lg text-center hover:shadow-md transition-all transform hover:-translate-y-1 cursor-pointer">
                <div className="bg-blue-100 dark:bg-blue-800/40 h-12 w-12 sm:h-16 sm:w-16 rounded-full mx-auto flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="font-playfair text-lg sm:text-xl font-medium mb-2 text-blue-800 dark:text-blue-300">Foundations Series</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  Essential resources for those new to biblical study or seeking to strengthen their basic understanding.
                </p>
                <span className="text-xs bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">12 resources</span>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 sm:p-6 rounded-lg text-center hover:shadow-md transition-all transform hover:-translate-y-1 cursor-pointer">
                <div className="bg-purple-100 dark:bg-purple-800/40 h-12 w-12 sm:h-16 sm:w-16 rounded-full mx-auto flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="font-playfair text-lg sm:text-xl font-medium mb-2 text-purple-800 dark:text-purple-300">Life Application</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  Practical resources focused on applying biblical wisdom to daily life and contemporary challenges.
                </p>
                <span className="text-xs bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">18 resources</span>
              </div>
              
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 sm:p-6 rounded-lg text-center hover:shadow-md transition-all transform hover:-translate-y-1 cursor-pointer sm:col-span-2 md:col-span-1 mx-auto sm:mx-0 w-full sm:w-auto">
                <div className="bg-emerald-100 dark:bg-emerald-800/40 h-12 w-12 sm:h-16 sm:w-16 rounded-full mx-auto flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600 dark:text-emerald-300" />
                </div>
                <h3 className="font-playfair text-lg sm:text-xl font-medium mb-2 text-emerald-800 dark:text-emerald-300">Deep Dive Studies</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  Advanced resources for in-depth exploration of complex theological concepts and biblical texts.
                </p>
                <span className="text-xs bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full">9 resources</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resource Request */}
        <section className="py-16 bg-scripture/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-2xl shadow-xl p-5 sm:p-8 md:p-12">
              <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6">
                Request a Resource
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Can't find what you're looking for? Let us know what resource would help your biblical studies, and our team will consider creating it.
              </p>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
                <Input placeholder="Your name" className="text-sm h-10 sm:h-auto" />
                <Input placeholder="Your email" type="email" className="text-sm h-10 sm:h-auto" />
                <div className="md:col-span-2">
                  <Input placeholder="Resource topic or title" className="text-sm h-10 sm:h-auto" />
                </div>
                <div className="md:col-span-2">
                  <Select>
                    <SelectTrigger className="text-sm h-10 sm:h-auto">
                      <SelectValue placeholder="Preferred format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF Guide</SelectItem>
                      <SelectItem value="video">Video Course</SelectItem>
                      <SelectItem value="audio">Audio Series</SelectItem>
                      <SelectItem value="study">Bible Study</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <textarea 
                    placeholder="Tell us more about what you're looking for..."
                    className="w-full px-4 py-2 text-sm rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-scripture min-h-[80px] sm:min-h-[100px]"
                  ></textarea>
                </div>
                <div className="md:col-span-2 flex justify-center mt-3 sm:mt-4">
                  <Button className="bg-scripture hover:bg-scripture-dark px-6 sm:px-8 w-full sm:w-auto text-sm sm:text-base">
                    Submit Request
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
