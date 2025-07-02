
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const projectImages = [
  {
    id: 1,
    src: '/lovable-uploads/c280e790-d980-4387-a159-aac69b9b88ec.png',
    title: 'Piso Laminado - Projeto Comercial',
    description: 'Instalação de piso laminado em ambiente comercial'
  },
  {
    id: 2,
    src: '/lovable-uploads/44266b7c-8428-4ec6-b73a-7d322bb98a77.png',
    title: 'Móveis Planejados - Ambiente Moderno',
    description: 'Projeto completo de móveis planejados'
  },
  {
    id: 3,
    src: '/lovable-uploads/187382a6-658d-4117-bfca-39c2fc8e827c.png',
    title: 'Acabamento em Drywall',
    description: 'Trabalho de drywall com acabamento impecável'
  },
  {
    id: 4,
    src: '/lovable-uploads/0fb4d106-24a3-4ab3-9e1f-8ba5b56a88c9.png',
    title: 'Piso Laminado Residencial',
    description: 'Instalação de piso laminado residencial'
  },
  {
    id: 5,
    src: '/lovable-uploads/be168738-c70f-4f28-8a4e-bb02fb040ccb.png',
    title: 'Piso Vinílico - Cozinha Moderna',
    description: 'Piso vinílico em cozinha planejada'
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? projectImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === projectImages.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-4">
            Nossos Trabalhos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Galeria de <span className="text-blue-600">Projetos Realizados</span>
          </h2>
          <p className="text-lg text-gray-600">
            Conheça alguns dos nossos trabalhos mais recentes e se inspire para seu próximo projeto.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main carousel container */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
            {projectImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="p-6 md:p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{image.title}</h3>
                    <p className="text-lg opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-gray-800 transition-all duration-200 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-gray-800 transition-all duration-200 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {projectImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/nossos-projetos"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            <Eye className="w-5 h-5 mr-2" />
            Ver Todos os Projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
