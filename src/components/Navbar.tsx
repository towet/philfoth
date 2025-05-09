
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, BookOpen, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-7 w-7 text-scripture" />
          <span className="font-playfair font-bold text-2xl">
            <span className="text-scripture">Phil</span>
            <span className="text-gold-dark">foth</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/topics" className="hover-link text-foreground/80 hover:text-foreground transition-colors relative group" aria-label="Topics">
            <span className="relative z-10">Topics</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-scripture transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/sessions" className="hover-link text-foreground/80 hover:text-foreground transition-colors relative group" aria-label="Sessions">
            <span className="relative z-10">Sessions</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-scripture transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/resources" className="hover-link text-foreground/80 hover:text-foreground transition-colors relative group" aria-label="Resources">
            <span className="relative z-10">Resources</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-scripture transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="hover-link text-foreground/80 hover:text-foreground transition-colors relative group" aria-label="About">
            <span className="relative z-10">About</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-scripture transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/donate" aria-label="Donate">
            <Button variant="outline" className="border-gold text-gold-dark hover:bg-gold/10 hover-scale-sm">
              Donate
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground hover:bg-foreground/5" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-background/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[400px] animate-slide-in-down shadow-lg' : 'max-h-0'}`}>
        <div className="flex flex-col space-y-2 px-4 py-4">
          {[
            { to: '/topics', label: 'Topics' },
            { to: '/sessions', label: 'Sessions' },
            { to: '/resources', label: 'Resources' },
            { to: '/about', label: 'About' }
          ].map((item, index) => (
            <Link 
              key={item.to}
              to={item.to} 
              className="text-lg font-medium hover:text-scripture transition-colors py-3 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
              aria-label={item.label}
            >
              {item.label}
              <span className="ml-2 text-scripture opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
            </Link>
          ))}
          
          <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Link 
              to="/donate" 
              className="text-lg font-medium text-gold-dark py-3 px-6 bg-gold/10 rounded-md hover:bg-gold/20 transition-colors flex-1 text-center"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Donate"
            >
              Donate
            </Link>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="ml-2 text-foreground/80 hover:text-foreground hover:bg-foreground/5"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
