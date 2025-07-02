
import { Phone, Mail, MapPin, MessageCircle, Clock, Award } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/8e01c698-22d6-43e3-a008-5133f4e19948.png" 
                  alt="Dicerto Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-yellow-500">Dicerto</div>
                <div className="text-sm text-gray-300">Acabamentos e Instalações</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Mais de 10 anos transformando ambientes com pisos laminados, vinílicos e drywall. 
              Qualidade, confiança e preços justos em Treze Tílias.
            </p>
            
            <div className="text-2xl font-bold text-yellow-500 mb-4">
              "Faça certo, pisos e reformas é na Dicerto!"
            </div>
            
            <div className="flex items-center space-x-4">
              <Award className="w-6 h-6 text-yellow-500" />
              <span className="text-gray-300">10+ anos de experiência comprovada</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-500">Navegação</h3>
            <ul className="space-y-3">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'sobre', label: 'Sobre Nós' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'depoimentos', label: 'Depoimentos' },
                { id: 'contato', label: 'Contato' }
              ].map(({ id, label }) => (
                <li key={id}>
                  <span
                    onClick={() => scrollToSection(id)}
                    className="text-gray-300 hover:text-yellow-500 transition-colors cursor-pointer flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-500">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Rua Videira, 65</p>
                  <p className="text-gray-300 text-sm">Centro, Treze Tílias - SC</p>
                </div>
              </li>
              
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a 
                  href="tel:+5549999163785" 
                  className="text-gray-300 hover:text-yellow-500 transition-colors text-sm"
                >
                  (49) 99916-3785
                </a>
              </li>
              
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a 
                  href="mailto:dicerto@outlook.com" 
                  className="text-gray-300 hover:text-yellow-500 transition-colors text-sm"
                >
                  dicerto@outlook.com
                </a>
              </li>
              
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Seg a Sex: 8h às 18h</p>
                  <p className="text-gray-300 text-sm">Sábado: 8h às 12h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Services highlight */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-6 md:p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Serviços Especializados
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-800">
              <div className="font-semibold">✨ Pisos Laminados</div>
              <div className="font-semibold">🏠 Pisos Vinílicos</div>
              <div className="font-semibold">🔨 Drywall (Gesso)</div>
            </div>
            <p className="mt-4 text-gray-800 font-medium">
              Orçamento e visita 100% gratuitos • Preços que cabem no seu bolso
            </p>
          </div>
        </div>
        
        {/* WhatsApp CTA */}
        <div className="text-center mb-8">
          <a 
            href="https://wa.me/5549999163785?text=Olá,%20gostaria%20de%20um%20orçamento%20gratuito" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Solicitar Orçamento via WhatsApp
          </a>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dicerto Acabamentos e Instalações. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={scrollToTop}
              className="bg-yellow-500 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
              aria-label="Voltar ao topo"
            >
              ↑
            </button>
            <span className="text-gray-400 text-sm">Feito com ❤️ em Treze Tílias</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
