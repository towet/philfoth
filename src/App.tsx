import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Topics from "./pages/Topics";
import Sessions from "./pages/Sessions";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Donate from "./pages/Donate";
import TopicDetail from "./pages/TopicDetail";
import FloatingContactButton from "./components/FloatingContactButton";
import "./components/MobileResponsive.css"; // Import global mobile responsive styles

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FloatingContactButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topicSlug" element={<TopicDetail />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
