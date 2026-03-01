// Trámite Claro — Home Page
// Design: Warm Professionalism — landing page completa con todas las secciones
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CasosExito from "@/components/CasosExito";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CasosExito />
        <Blog />
        <Contact />
      </main>
      <Footer />
      {/* Floating buttons */}
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
}
