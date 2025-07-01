
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Award, Clock, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-100 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-200 rounded-full opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 rounded-full text-sm font-semibold mb-6">
                ✨ Mais de 10 anos de experiência
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pisos e Reformas
              <span className="block text-yellow-600">Feitos com Perfeição</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Especialista em instalação de <strong>pisos laminados</strong>, <strong>vinílicos</strong> e <strong>drywall</strong>. 
              Orçamento gratuito e preços que cabem no seu bolso.
            </p>

            <div className="mb-8">
              <p className="text-2xl font-bold text-yellow-600 mb-2">
                "Faça certo, pisos e reformas é na Dicerto!"
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="https://wa.me/5549999163785?text=Olá,%20gostaria%20de%20um%20orçamento%20gratuito" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Orçamento Grátis via WhatsApp
              </a>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg" 
                className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Agendar Visita
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">10+ Anos</p>
                <p className="text-xs text-gray-500">Experiência</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">Garantia</p>
                <p className="text-xs text-gray-500">Qualidade</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">Pontualidade</p>
                <p className="text-xs text-gray-500">Sempre</p>
              </div>
            </div>
          </div>

          {/* Right content - Image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-yellow-100 to-gray-100 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-gray-900">DC</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Dicerto</h3>
                <p className="text-gray-600">Acabamentos e Instalações</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4">
              <p className="text-sm font-semibold text-gray-700">Orçamento</p>
              <p className="text-xs text-green-600">100% Gratuito</p>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-yellow-500 rounded-lg shadow-lg p-4">
              <p className="text-sm font-semibold text-gray-900">Visita Grátis</p>
              <p className="text-xs text-gray-700">Sem compromisso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
