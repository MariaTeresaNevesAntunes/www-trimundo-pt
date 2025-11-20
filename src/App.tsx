import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Conceitos from "./pages/Conceitos";
import AngulosNotaveis from "./pages/AngulosNotaveis";
import Identidades from "./pages/Identidades";
import Exercicios from "./pages/Exercicios";
import Aplicacoes from "./pages/Aplicacoes";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/conceitos" element={<Conceitos />} />
          <Route path="/angulos-notaveis" element={<AngulosNotaveis />} />
          <Route path="/identidades" element={<Identidades />} />
          <Route path="/exercicios" element={<Exercicios />} />
          <Route path="/aplicacoes" element={<Aplicacoes />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
