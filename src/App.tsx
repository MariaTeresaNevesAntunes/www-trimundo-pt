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
import FuncoesTrigonometricas from "./pages/FuncoesTrigonometricas";
import AngulosNotaveis from "./pages/AngulosNotaveis";
import Identidades from "./pages/Identidades";
import Exercicios from "./pages/Exercicios";
import LimitesTrigonometricos from "./pages/LimitesTrigonometricos";
import Aplicacoes from "./pages/Aplicacoes";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import SobreNos from "./pages/SobreNos";
import Contacto from "./pages/Contacto";
import TesteContraste from "./pages/TesteContraste";
import Artigos from "./pages/Artigos";
import ArtigoDetalhe from "./pages/ArtigoDetalhe";
import Glossario from "./pages/Glossario";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";

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
          <Route path="/funcoes-trigonometricas" element={<FuncoesTrigonometricas />} />
          <Route path="/angulos-notaveis" element={<AngulosNotaveis />} />
          <Route path="/identidades" element={<Identidades />} />
          <Route path="/exercicios" element={<Exercicios />} />
          <Route path="/limites-trigonometricos" element={<LimitesTrigonometricos />} />
          <Route path="/aplicacoes" element={<Aplicacoes />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-uso" element={<TermosUso />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/teste-contraste" element={<TesteContraste />} />
          <Route path="/artigos" element={<Artigos />} />
          <Route path="/artigos/:slug" element={<ArtigoDetalhe />} />
          <Route path="/glossario" element={<Glossario />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
