
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Dialog, DialogContent, DialogHeader, DialogFooter } from "@/components/ui/dialog";


const queryClient = new QueryClient();

const App = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  // Persist dismiss in localStorage
  useEffect(() => {
    const dismissed = localStorage.getItem('welcomeDismissed');
    if (!dismissed) setShowWelcome(true);
  }, []);

  function dismiss() {
    localStorage.setItem('welcomeDismissed', '1');
    setShowWelcome(false);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Dialog open={showWelcome} onOpenChange={(val) => { if (!val) dismiss(); }}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <h2 className="text-xl font-bold mb-2">👋 Welcome!</h2>
              <p className="mb-2">This portfolio is evolving—thanks for visiting!</p>
              <p className="mb-4">Reach me at <a href="mailto:vaibhavrp614@gmail.com" className="text-primary underline">vaibhavrp614@gmail.com</a>.</p>
            </DialogHeader>
            <DialogFooter>
              <button
                className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition"
                onClick={dismiss}
                autoFocus
              >
                Continue
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
