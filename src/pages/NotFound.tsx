
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <div className="mb-6 flex justify-center">
            <div className="h-24 w-24 rounded-full bg-scripture/10 flex items-center justify-center">
              <BookOpen className="h-12 w-12 text-scripture" />
            </div>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            404
          </h1>
          
          <p className="text-2xl font-playfair text-gray-600 dark:text-gray-400 mb-8">
            This page has gone on a spiritual journey
          </p>
          
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
            We can't seem to find the page you're looking for. Perhaps you might find inspiration elsewhere on our site.
          </p>
          
          <Button 
            className="bg-scripture hover:bg-scripture-dark text-white"
            asChild
          >
            <Link to="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
