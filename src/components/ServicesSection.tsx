
import { Hammer, Home, Layers, CheckCircle, MessageCircle } from 'lucide-react';

const services = [
  {
    title: "Pisos Laminados",
    description: "Instalação profissional de pisos laminados de alta qualidade. Diversos padrões e cores disponíveis com acabamento perfeito.",
    icon: Layers,
    features: ["Instalação profissional", "Diversos padrões", "Garantia de qualidade", "Preço justo"],
    color: "bg-blue-500",
    price: "A partir de R$ 59,90 instalado"
  },
  {
    title: "Pisos Vinílicos",
    description: "Pisos vinílicos modernos e resistentes, ideais para ambientes residenciais e comerciais. Fácil manutenção e durabilidade.",
    icon: Home,
    features: ["Resistente à água", "Fácil manutenção", "Conforto térmico", "Várias opções"],
    color: "bg-green-500",
    price: "A partir de R$ 98,90 instalado"
  },
  {
    title: "Drywall (Gesso)",
    description: "Instalação completa de drywall com acabamento profissional. Divisórias, forros e sancas com preços acessíveis.",
    icon: Hammer,
    features: ["Divisórias", "Forros e sancas", "Isolamento acústico", "Acabamento perfeito"],
    color: "bg-purple-500"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-[#242b38]" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 rounded-full text-sm font-semibold mb-6">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Soluções Completas em <span className="text-yellow-500">Acabamentos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Oferecemos serviços especializados em pisos e drywall com preços que cabem no seu orçamento. 
            Qualidade garantida e experiência comprovada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 border border-gray-600 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              
              {service.price && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-yellow-500 text-gray-900 rounded-full text-sm font-semibold">
                    {service.price}
                  </span>
                </div>
              )}
              
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Special offer section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Orçamento e Visita <span className="text-yellow-500">100% Gratuitos</span>
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Pisos laminados e vinílicos instalados na obra. Gesso drywall instalado na obra com preços 
            que cabem no seu orçamento. Faça uma consulta ou agenda uma visita sem custo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/5549999163785?text=Olá,%20gostaria%20de%20agendar%20uma%20visita%20gratuita" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar Visita Grátis
            </a>
            
            <div className="text-center">
              <p className="text-sm opacity-75 mb-1">Ligue agora:</p>
              <a href="tel:+5549999163785" className="text-2xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors">
                (49) 99916-3785
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
