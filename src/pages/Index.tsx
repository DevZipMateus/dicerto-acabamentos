
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dicerto Acabamentos e Instalações - Pisos Laminados e Vinílicos em Treze Tílias</title>
        <meta name="description" content="Especialista em instalação de pisos laminados, vinílicos e drywall há mais de 10 anos. Orçamento gratuito em Treze Tílias. Faça certo, pisos e reformas é na Dicerto!" />
        <meta name="keywords" content="pisos laminados, pisos vinílicos, drywall, instalação, Treze Tílias, acabamentos, reformas" />
        <meta property="og:title" content="Dicerto Acabamentos e Instalações - Especialista em Pisos" />
        <meta property="og:description" content="Mais de 10 anos instalando pisos laminados e vinílicos. Orçamento gratuito em Treze Tílias." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dicerto.com.br" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dicerto Acabamentos e Instalações" />
        <meta name="twitter:description" content="Especialista em pisos laminados, vinílicos e drywall" />
        <link rel="canonical" href="https://dicerto.com.br" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground w-full overflow-x-hidden">
        <Header />
        <main className="w-full">
          <section id="inicio" className="w-full">
            <HeroSection />
          </section>
          <section id="sobre" className="w-full">
            <AboutSection />
          </section>
          <section id="servicos" className="w-full">
            <ServicesSection />
          </section>
          <section id="depoimentos" className="w-full">
            <TestimonialsSection />
          </section>
          <section id="contato" className="w-full">
            <ContactForm />
          </section>
        </main>
        <Footer />
        <FloatingButton />
      </div>
    </>
  );
};

export default Index;
