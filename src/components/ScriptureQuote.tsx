import { useState, useEffect, useRef } from "react";
import { Quote } from "lucide-react";

interface ScriptureQuoteProps {
  text: string;
  reference: string;
}

const ScriptureQuote = ({ text, reference }: ScriptureQuoteProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`relative py-12 px-6 md:px-12 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Quote className="absolute top-4 left-6 h-8 w-8 text-yellow-400" />
      <blockquote className="max-w-3xl mx-auto font-playfair text-xl md:text-2xl lg:text-3xl text-center italic">
        {text}
      </blockquote>
      <footer className="text-center mt-6 text-gray-600 dark:text-gray-400">
        <cite className="font-playfair not-italic text-yellow-400 dark:text-yellow-400">{reference}</cite>
      </footer>
    </div>
  );
};

export default ScriptureQuote;
