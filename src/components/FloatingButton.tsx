
import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-4 animate-fadeIn border border-gray-100 min-w-[280px]">
          <div className="text-center mb-4">
            <h3 className="font-bold text-gray-900 mb-1">Dicerto Acabamentos</h3>
            <p className="text-sm text-gray-600">Como podemos ajudar você?</p>
          </div>
          
          <div className="space-y-3">
            <a 
              href="https://wa.me/5549999163785?text=Olá,%20gostaria%20de%20um%20orçamento%20gratuito" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-3 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-sm">Orçamento Grátis</div>
                <div className="text-xs opacity-90">Via WhatsApp</div>
              </div>
            </a>
            
            <a 
              href="tel:+5549999163785"
              className="flex items-center bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-sm">Ligar Agora</div>
                <div className="text-xs opacity-90">(49) 99916-3785</div>
              </div>
            </a>
            
            <a 
              href="https://wa.me/5549999163785?text=Gostaria%20de%20agendar%20uma%20visita%20gratuita" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-yellow-500 text-gray-900 p-3 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              <div className="w-5 h-5 mr-3 flex-shrink-0 bg-gray-900 rounded-full flex items-center justify-center">
                📅
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">Visita Grátis</div>
                <div className="text-xs opacity-75">Sem compromisso</div>
              </div>
            </a>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              ⭐ Mais de 10 anos de experiência<br />
              💯 Orçamento e visita gratuitos
            </p>
          </div>
        </div>
      )}
      
      <button
        onClick={toggleOpen}
        className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700 rotate-45' 
            : 'bg-green-500 hover:bg-green-600 animate-pulse hover:animate-none'
        }`}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu de contato"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
