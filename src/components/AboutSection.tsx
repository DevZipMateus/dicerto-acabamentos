
import { Users, Award, Clock, Shield, MapPin, Phone } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-[#242b38]" id="sobre">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 rounded-full text-sm font-semibold mb-6">
            Sobre a Dicerto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sua <span className="text-yellow-500">Especialista</span> em Pisos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Com mais de 10 anos como profissional de instalação e 5 anos como revenda de produtos, 
            somos referência em pisos laminados e vinílicos em Treze Tílias.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Nossa História e Compromisso
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              A <strong className="text-white">Dicerto Acabamentos e Instalações</strong> nasceu da paixão por transformar 
              ambientes através de pisos de alta qualidade. Começamos nossa jornada há mais de uma década, 
              sempre priorizando a excelência no atendimento e a satisfação dos nossos clientes.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Nosso diferencial está na combinação única de experiência técnica, produtos de qualidade 
              e preços justos. Cada projeto é executado com precisão e cuidado, garantindo resultados 
              que superam as expectativas.
            </p>

            {/* Contact info */}
            <div className="bg-gray-800 border border-gray-600 rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-white mb-4">Entre em Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Rua Videira, 65 - Centro, Treze Tílias</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">(49) 99916-3785</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 border border-gray-600 rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">10+</h4>
              <p className="text-gray-300">Anos de Experiência</p>
            </div>
            
            <div className="bg-gray-800 border border-gray-600 rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">500+</h4>
              <p className="text-gray-300">Projetos Realizados</p>
            </div>
            
            <div className="bg-gray-800 border border-gray-600 rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">24h</h4>
              <p className="text-gray-300">Resposta Rápida</p>
            </div>
            
            <div className="bg-gray-800 border border-gray-600 rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">100%</h4>
              <p className="text-gray-300">Garantia</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossa Missão
          </h3>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Proporcionar a nossos clientes pisos de alta qualidade com instalação profissional, 
            preços justos e atendimento personalizado, transformando cada ambiente em um espaço 
            único e acolhedor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
