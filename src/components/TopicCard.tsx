
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TopicCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  delay: number;
  imageUrl?: string;
}

const TopicCard = ({ title, description, icon, slug, delay, imageUrl }: TopicCardProps) => {
  return (
    <Card 
      className={`overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in hover-scale group`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {imageUrl && (
        <div className="w-full h-40 sm:h-48 overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      <CardHeader className={`space-y-2 pb-3 ${imageUrl ? 'pt-4' : ''}`}>
        <div className="h-12 w-12 rounded-full bg-scripture/10 flex items-center justify-center text-scripture group-hover:bg-scripture/20 transition-colors duration-300 transform group-hover:scale-110">
          {icon}
        </div>
        <CardTitle className="font-playfair text-xl md:text-2xl group-hover:text-scripture transition-colors duration-300">{title}</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-0">
      </CardContent>
      
      <CardFooter className="pt-0 pb-4">
        <Link 
          to={`/topics/${slug}`}
          className="inline-flex items-center text-scripture hover:text-scripture-dark transition-all duration-300 text-sm md:text-base font-medium group-hover:font-semibold"
          aria-label={`Explore ${title} topic`}
        >
          Explore Topic
          <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TopicCard;
