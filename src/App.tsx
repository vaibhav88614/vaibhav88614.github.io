
import { useState } from "react";
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
  const [open, setOpen] = useState(true);
  console.log('DEBUG: App rendered, open state =', open);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {/* Friendly pop-up dialog */}
          <Dialog open={open} onOpenChange={(val) => { console.log('DEBUG: Dialog onOpenChange', val); setOpen(val); }}>
            <DialogContent>
              <DialogHeader>
                <h2 className="text-xl font-bold mb-2">👋 Welcome!</h2>
                <p className="mb-2">This portfolio website is still in progress. Please don't judge! 😊</p>
                <p className="mb-4">You can contact me at <a href="mailto:vaibhavrp614@gmail.com" className="text-primary underline">vaibhavrp614@gmail.com</a>.</p>
              </DialogHeader>
              <DialogFooter>
                <button
                  className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition"
                  onClick={() => { console.log('DEBUG: OK button clicked, closing dialog'); setOpen(false); }}
                  autoFocus
                >
                  OK
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {/* Main app content */}
          {!open && (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          )}
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
