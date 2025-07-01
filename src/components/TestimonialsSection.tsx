
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Silva",
    location: "Treze Tílias",
    text: "Ficamos impressionados com a qualidade do trabalho da Dicerto. O piso laminado ficou perfeito e o preço foi muito justo. Recomendo!",
    rating: 5,
    service: "Piso Laminado"
  },
  {
    name: "João Santos",
    location: "Centro",
    text: "Profissionais muito competentes! Instalaram o piso vinílico na minha loja com agilidade e capricho. Resultado excelente!",
    rating: 5,
    service: "Piso Vinílico"
  },
  {
    name: "Ana Costa",
    location: "Treze Tílias",
    text: "O drywall ficou impecável! Dividiram meu apartamento exatamente como eu queria. Equipe pontual e trabalho de qualidade.",
    rating: 5,
    service: "Drywall"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 rounded-full text-sm font-semibold mb-6">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que nossos <span className="text-yellow-600">Clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é nossa maior recompensa. Veja o que eles têm a dizer 
            sobre nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-gray-300 mb-4" />
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust section */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Mais de 500 Projetos Realizados
          </h3>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Nossa experiência fala por si só. Centenas de clientes satisfeitos em Treze Tílias e região 
            confiam na qualidade dos nossos serviços.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-700">Anos no Mercado</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-700">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-700">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">24h</div>
              <div className="text-gray-700">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
