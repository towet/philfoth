import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import JoinSessionDialog from "@/components/JoinSessionDialog";
import { sendCustomSessionRequestEmail } from "@/utils/email";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScriptureQuote from "@/components/ScriptureQuote";
import { Calendar, Users, Clock, BookOpen, MapPin, ChevronRight } from "lucide-react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Sessions = () => {
  const [sessionFormat, setSessionFormat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSession, setSelectedSession] = useState<any>(null);
  const [joinDialogOpen, setJoinDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    format: "",
    topic: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  
  const sessions = [
    {
      title: "Foundations of Biblical Interpretation",
      description: "Learn the essential principles for accurately understanding and applying Scripture in this introductory session.",
      date: "May 15, 2023",
      time: "7:00 PM - 8:30 PM EST",
      format: "online",
      participants: 24,
      host: "Dr. Michael Thomas",
      topics: ["hermeneutics", "biblical-foundations"],
      difficulty: "beginner",
      slug: "foundations-biblical-interpretation"
    },
    {
      title: "The Parables of Jesus",
      description: "Explore the rich meanings and applications of Jesus's parables in this interactive study session.",
      date: "May 18, 2023",
      time: "6:30 PM - 8:00 PM EST",
      format: "hybrid",
      location: "Grace Community Church",
      participants: 18,
      host: "Pastor Rebecca Johnson",
      topics: ["new-testament", "jesus-teachings"],
      difficulty: "intermediate",
      slug: "parables-of-jesus"
    },
    {
      title: "Old Testament Prophecy and Fulfillment",
      description: "Discover how New Testament events fulfill Old Testament prophecies in this detailed examination.",
      date: "May 22, 2023",
      time: "7:30 PM - 9:00 PM EST",
      format: "in-person",
      location: "Bethel Seminary",
      participants: 15,
      host: "Dr. James Wilson",
      topics: ["prophecy", "old-testament"],
      difficulty: "advanced",
      slug: "old-testament-prophecy"
    },
    {
      title: "Biblical Hebrew for Beginners",
      description: "Start learning the basics of Biblical Hebrew to enhance your understanding of Old Testament texts.",
      date: "May 25, 2023",
      time: "6:00 PM - 7:30 PM EST",
      format: "online",
      participants: 12,
      host: "Prof. Sarah Cohen",
      topics: ["languages", "old-testament"],
      difficulty: "beginner",
      slug: "biblical-hebrew-beginners"
    },
    {
      title: "The Letters of Paul",
      description: "Examine the theological themes and historical context of Paul's epistles in this comprehensive study.",
      date: "May 29, 2023",
      time: "7:00 PM - 8:30 PM EST",
      format: "hybrid",
      location: "Faith Community Center",
      participants: 20,
      host: "Dr. Robert Anderson",
      topics: ["new-testament", "pauline-theology"],
      difficulty: "intermediate",
      slug: "letters-of-paul"
    },
    {
      title: "The Book of Revelation",
      description: "Navigate the complex imagery and messages of Revelation in this guided debriefing session.",
      date: "June 1, 2023",
      time: "7:00 PM - 9:00 PM EST",
      format: "in-person",
      location: "Hope Biblical Institute",
      participants: 22,
      host: "Dr. Elizabeth Miller",
      topics: ["apocalyptic", "new-testament"],
      difficulty: "advanced",
      slug: "book-of-revelation"
    }
  ];
  
  const filteredSessions = sessions.filter(session => 
    (sessionFormat === "all" || session.format === sessionFormat) &&
    (session.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     session.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-28 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              Join Our <span className="text-scripture">Biblical</span> Sessions
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto text-lg mb-10">
              Engage in interactive biblical debriefing sessions led by experienced teachers and scholars, designed to deepen your understanding of Scripture.
            </p>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Search sessions..." 
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
            text="And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching."
            reference="Hebrews 10:24-25"
          />
        </section>
        
        {/* Session Filtering */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-center mb-8">Upcoming Sessions</h2>
            
            <div className="max-w-4xl mx-auto mb-10">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Filter Sessions</h3>
                
                <RadioGroup 
                  defaultValue="all" 
                  className="flex flex-wrap gap-4"
                  value={sessionFormat}
                  onValueChange={setSessionFormat}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all">All Formats</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online">Online</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="in-person" id="in-person" />
                    <Label htmlFor="in-person">In-Person</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hybrid" id="hybrid" />
                    <Label htmlFor="hybrid">Hybrid</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSessions.map((session, index) => (
                <Card key={session.slug} className={`overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 opacity-0 animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={`
                        ${session.format === 'online' ? 'bg-blue-100 text-blue-800' : 
                          session.format === 'in-person' ? 'bg-green-100 text-green-800' : 
                          'bg-purple-100 text-purple-800'} 
                        dark:bg-opacity-20 font-medium text-xs py-1`}>
                        {session.format === 'online' ? 'Online' : 
                          session.format === 'in-person' ? 'In-Person' : 'Hybrid'}
                      </Badge>
                      <Badge className={`
                        ${session.difficulty === 'beginner' ? 'bg-green-100 text-green-800' : 
                          session.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'} 
                        dark:bg-opacity-20 font-medium text-xs py-1`}>
                        {session.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="font-playfair text-xl">{session.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{session.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{session.time}</span>
                    </div>
                    {session.location && (
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{session.location}</span>
                      </div>
                    )}
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{session.participants} participants</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0 flex justify-between items-center">
                    <Button 
                      variant="outline" 
                      className="text-scripture border-scripture hover:bg-scripture/10 bg-scripture/5"
                      onClick={() => {
                        setSelectedSession(session);
                        setJoinDialogOpen(true);
                      }}
                    >
                      Join Session
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {filteredSessions.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">No sessions found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your filters or search criteria.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSessionFormat("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Host Information */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl font-bold text-center mb-12">Meet Our Session Hosts</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700 mr-4 overflow-hidden">
                      <img 
                        src="https://media.istockphoto.com/id/165928218/photo/confident-business-man-smiling.jpg?s=612x612&w=0&k=20&c=BnLd6UUENYW8wqE3bc6i3_e1LAITiKNkXNBy4pULd8E=" 
                        alt="Dr. Michael Thomas" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-medium">Dr. Michael Thomas</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Biblical Scholar & Theologian</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Dr. Thomas has over 15 years of experience teaching biblical interpretation and theology. He holds a PhD in Biblical Studies and is passionate about making complex scriptural concepts accessible to everyone.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-500">3 upcoming sessions</span>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700 mr-4 overflow-hidden">
                      <img 
                        src="https://i.pinimg.com/236x/fd/ab/e7/fdabe740df5935acb6cf59a40dcf1bbe.jpg" 
                        alt="Pastor Rebecca Johnson" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-medium">Pastor Rebecca Johnson</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Pastor & Biblical Counselor</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Pastor Rebecca specializes in applying biblical truths to daily life. With a Master's in Divinity and extensive pastoral experience, she brings practical insights to her interactive biblical sessions.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-500">2 upcoming sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Request Session */}
        <section className="py-16 bg-scripture/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-center mb-6">
                Request a Custom Session
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-8 max-w-2xl mx-auto">
                Don't see a session on the topic you're interested in? Request a custom session and our biblical teachers will work with you to create a tailored learning experience.
              </p>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto" onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                try {
                  const result = await sendCustomSessionRequestEmail(formData);
                  if (result.success) {
                    toast.toast({
                      title: "Success!",
                      description: "Your custom session request has been sent. We'll be in touch soon!",
                      variant: "default",
                    });
                    setFormData({
                      name: "",
                      email: "",
                      format: "",
                      topic: "",
                      message: ""
                    });
                  } else {
                    toast.toast({
                      title: "Error",
                      description: "There was a problem sending your request. Please try again later.",
                      variant: "destructive",
                    });
                  }
                } catch (error) {
                  toast.toast({
                    title: "Error",
                    description: "There was a problem sending your request. Please try again later.",
                    variant: "destructive",
                  });
                } finally {
                  setIsSubmitting(false);
                }
              }}>
                <Input 
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
                <Input 
                  placeholder="Your email" 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
                <Input 
                  placeholder="Preferred session format" 
                  className="md:col-span-2"
                  value={formData.format}
                  onChange={(e) => setFormData(prev => ({ ...prev, format: e.target.value }))}
                  required
                />
                <div className="md:col-span-2">
                  <Input 
                    placeholder="Topic of interest" 
                    value={formData.topic}
                    onChange={(e) => setFormData(prev => ({ ...prev, topic: e.target.value }))}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <textarea 
                    placeholder="Tell us more about what you'd like to learn..."
                    className="w-full px-4 py-2 text-sm rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-scripture min-h-[100px]"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                  ></textarea>
                </div>
                <div className="md:col-span-2 flex justify-center mt-4">
                  <Button 
                    type="submit" 
                    className="bg-scripture hover:bg-scripture-dark px-8" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Join Session Dialog */}
      {selectedSession && (
        <JoinSessionDialog 
          isOpen={joinDialogOpen}
          onClose={() => setJoinDialogOpen(false)}
          sessionTitle={selectedSession.title}
        />
      )}
    </div>
  );
};

export default Sessions;
