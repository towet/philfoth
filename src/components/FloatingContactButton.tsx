import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  const whatsappNumber = '254757888117'; // Ensure no '+' or spaces
  const emailAddress = 'fothphil@gmail.com';

  const toggleOpen = () => setIsOpen(!isOpen);

  // Effect to handle scroll event for showing/hiding text
  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout> | null = null;
    
    const handleScroll = () => {
      // Only show the text when actively scrolling and past 300px
      if (window.scrollY > 300) {
        setShowText(true);
        
        // Clear any existing timer
        if (scrollTimer) {
          clearTimeout(scrollTimer);
        }
        
        // Set a new timer to hide the text after scrolling stops
        scrollTimer = setTimeout(() => {
          setShowText(false);
        }, 1500); // Hide after 1.5 seconds of no scrolling
      } else {
        setShowText(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Talk to Us Text - Appears on scroll */}
      <div 
        className={`
          mb-3 px-4 py-2 rounded-full bg-scripture text-white font-medium
          shadow-lg transition-all duration-500 ease-in-out transform
          flex items-center justify-center
          ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
      >
        <span className="mr-2">Talk to Us</span>
        <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
      </div>

      {/* Contact Options - Rendered above the FAB when open */}
      {isOpen && (
        <div className="mb-3 flex flex-col items-end space-y-3">
          {/* WhatsApp Link */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full bg-white p-3 text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-100 hover:scale-105"
            aria-label="Chat on WhatsApp"
          >
            <div className="flex items-center">
              <img 
                src="https://i.pinimg.com/474x/f7/1f/fb/f71ffb7ad7db43ccc7b1466de418f254.jpg" 
                alt="WhatsApp" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="ml-2 text-gray-800 font-medium hidden md:block">WhatsApp</span>
            </div>
          </a>

          {/* Email Link */}
          <a
            href={`mailto:${emailAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full bg-white p-3 text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-100 hover:scale-105"
            aria-label="Send an Email"
          >
            <div className="flex items-center">
              <img 
                src="https://img.icons8.com/color/512/gmail-new.png" 
                alt="Gmail" 
                className="w-8 h-8 object-contain"
              />
              <span className="ml-2 text-gray-800 font-medium hidden md:block">Email</span>
            </div>
          </a>
        </div>
      )}

      {/* Main Floating Action Button */}
      <button
        onClick={toggleOpen}
        className={`
          flex h-16 w-16 items-center justify-center rounded-full 
          bg-scripture text-white shadow-xl 
          transition-all duration-300 ease-in-out
          hover:bg-scripture-dark hover:scale-105 
          focus:outline-none focus:ring-2 focus:ring-scripture focus:ring-offset-2 
          dark:focus:ring-offset-gray-900
          ${isOpen ? 'rotate-90' : ''}
        `}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
      </button>
    </div>
  );
};

export default FloatingContactButton;
