import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
  },
  {
    id: 6,
    src: '/lovable-uploads/16f6660e-474d-47b4-8d6e-848e27472af4.png',
    title: 'Piso Laminado - Hall de Entrada',
    description: 'Piso laminado instalado em hall de entrada'
  },
  {
    id: 7,
    src: '/lovable-uploads/9ffbd456-7b53-474e-8038-a643db81b6a5.png',
    title: 'Piso Laminado - Ambiente Integrado',
    description: 'Piso laminado em sala com acabamento perfeito'
  },
  {
    id: 8,
    src: '/lovable-uploads/a16395a8-8623-43c9-86b6-918e41ba05df.png',
    title: 'Piso Laminado - Cozinha Integrada',
    description: 'Piso laminado em cozinha com sala integrada'
  },
  {
    id: 9,
    src: '/lovable-uploads/5288e791-d2c0-42f5-98d9-b9198b4c7be5.png',
    title: 'Piso Laminado - Área Social',
    description: 'Instalação de piso laminado em área social'
  },
  {
    id: 10,
    src: '/lovable-uploads/80412679-9ceb-47e0-bfd0-d60faa5eaedb.png',
    title: 'Piso Laminado - Corredor',
    description: 'Piso laminado aplicado em corredor residencial'
  },
  {
    id: 11,
    src: '/lovable-uploads/a2e76476-8ee6-406a-acd3-316e299c8d6f.png',
    title: 'Piso Laminado - Quarto Infantil',
    description: 'Piso laminado em quarto com móveis planejados'
  },
  {
    id: 12,
    src: '/lovable-uploads/d6367df3-eba7-4ecb-93da-64a016405953.png',
    title: 'Piso Laminado - Hall Residencial',
    description: 'Instalação profissional em corredor de apartamento'
  },
  {
    id: 13,
    src: '/lovable-uploads/2818e784-64c0-45ba-b57d-1cd997f94ce9.png',
    title: 'Piso Laminado - Área de Serviço',
    description: 'Piso laminado em área de serviço integrada'
  },
  {
    id: 14,
    src: '/lovable-uploads/3428f6e4-2da2-4c35-b079-411ec4b91472.png',
    title: 'Acabamento em Gesso - Teto',
    description: 'Trabalho em gesso com iluminação embutida'
  },
  {
    id: 15,
    src: '/lovable-uploads/91667576-3f0f-4ca0-bece-a84607233e6f.png',
    title: 'Piso Laminado - Corredor Moderno',
    description: 'Piso laminado com acabamento impecável'
  },
  {
    id: 16,
    src: '/lovable-uploads/627ccb34-e94d-4647-acea-caaa9259f211.png',
    title: 'Piso Laminado - Cozinha Planejada',
    description: 'Instalação de piso laminado em cozinha com móveis planejados'
  },
  {
    id: 17,
    src: '/lovable-uploads/4ee9b7f2-bd1f-44a4-a324-7f1627ad650a.png',
    title: 'Piso Laminado - Escritório Executivo',
    description: 'Piso laminado em escritório com acabamento premium'
  },
  {
    id: 18,
    src: '/lovable-uploads/48717f54-b4a3-4903-b778-858d7bdb28a5.png',
    title: 'Piso Laminado - Sala com Escada',
    description: 'Piso laminado em ambiente residencial com escada'
  },
  {
    id: 19,
    src: '/lovable-uploads/477b1f4d-d095-4023-9b79-ab47d382cdf8.png',
    title: 'Piso Laminado - Corredor Residencial',
    description: 'Instalação de piso laminado em corredor de casa'
  },
  {
    id: 20,
    src: '/lovable-uploads/7c9e1630-0c9c-437b-a4db-832a2124700e.png',
    title: 'Acabamento em Banheiro',
    description: 'Trabalho de acabamento em banheiro com revestimentos'
  },
  {
    id: 21,
    src: '/lovable-uploads/37358d3a-e10c-4929-b4c1-ca045eb6bbe1.png',
    title: 'Gesso - Teto Comercial',
    description: 'Acabamento em gesso com iluminação LED comercial'
  },
  {
    id: 22,
    src: '/lovable-uploads/c39e49c7-8723-4b3e-8fd7-9cae658dd780.png',
    title: 'Drywall - Ambiente Comercial',
    description: 'Trabalho em drywall para ambiente comercial'
  },
  {
    id: 23,
    src: '/lovable-uploads/b0f3098a-9a64-46a9-a3c6-c79ba8d880ec.png',
    title: 'Piso Laminado - Escada e Hall',
    description: 'Piso laminado em escada e hall de entrada'
  },
  {
    id: 24,
    src: '/lovable-uploads/d0d53140-fa7a-4cd1-b3eb-4bd43694e970.png',
    title: 'Piso Laminado - Corredor Claro',
    description: 'Piso laminado claro em corredor residencial'
  },
  {
    id: 25,
    src: '/lovable-uploads/2e75a74d-489b-4f0b-90cf-a72fbedb4898.png',
    title: 'Piso Laminado - Quarto com Armário',
    description: 'Piso laminado em quarto com armário embutido'
  },
  {
    id: 26,
    src: '/lovable-uploads/82c7ea14-7980-42a2-99a9-f1750adc54f6.png',
    title: 'Piso Laminado com Móveis Planejados',
    description: 'Instalação de piso laminado com marcenaria personalizada'
  },
  {
    id: 27,
    src: '/lovable-uploads/cc01e21d-b9bc-4186-a976-8218e2538e4a.png',
    title: 'Piso Laminado - Quarto Premium',
    description: 'Piso laminado em quarto com acabamento de alta qualidade'
  },
  {
    id: 28,
    src: '/lovable-uploads/ba64573a-034d-4598-952a-75633e99381d.png',
    title: 'Acabamento em Gesso - Rebaixamento',
    description: 'Trabalho de gesso com rebaixamento de teto'
  },
  {
    id: 29,
    src: '/lovable-uploads/8e9da79c-c9f6-4c42-873c-dc73738f81da.png',
    title: 'Piso Laminado - Quarto Compacto',
    description: 'Piso laminado em quarto com aproveitamento de espaço'
  },
  {
    id: 30,
    src: '/lovable-uploads/02cc6d88-d384-4675-ab5e-45dcea225d91.png',
    title: 'Estrutura Drywall - Base',
    description: 'Estrutura metálica para drywall em construção'
  },
  {
    id: 31,
    src: '/lovable-uploads/0253ad5a-efc9-4aa4-b3fa-5c95ff49cc0f.png',
    title: 'Piso Laminado - Corredor com Móveis',
    description: 'Piso laminado em corredor com móveis planejados'
  },
  {
    id: 32,
    src: '/lovable-uploads/67ab0774-9c19-4d2c-8939-a43228352637.png',
    title: 'Acabamento em Banheiro Premium',
    description: 'Box de vidro e acabamentos de primeira qualidade'
  },
  {
    id: 33,
    src: '/lovable-uploads/4bc7d467-89eb-4cfc-a75b-dbba0152df60.png',
    title: 'Acabamento em Gesso - Sala',
    description: 'Trabalho em gesso com design moderno em sala de estar'
  },
  {
    id: 34,
    src: '/lovable-uploads/930e44c0-c714-4bcc-88d8-17bddf602fc4.png',
    title: 'Trabalho em Altura - Revestimento',
    description: 'Aplicação de revestimento em parede com acabamento especial'
  },
  {
    id: 35,
    src: '/lovable-uploads/4d9a58de-0530-4cfa-a848-0ba38bcc4809.png',
    title: 'Piso Laminado - Cozinha Integrada Premium',
    description: 'Piso laminado em cozinha com móveis planejados de alta qualidade'
  },
  {
    id: 36,
    src: '/lovable-uploads/7333391a-e692-4160-8e86-fe61aa2437b1.png',
    title: 'Piso Laminado - Cozinha Moderna',
    description: 'Piso laminado em cozinha com móveis planejados e acabamento impecável'
  },
  {
    id: 37,
    src: '/lovable-uploads/9165aa2e-9f95-466a-8295-2c32df10c174.png',
    title: 'Piso Laminado - Loja Comercial',
    description: 'Instalação de piso laminado em ambiente comercial com acabamento profissional'
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Slightly slower for better UX

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
    <section className="py-8 sm:py-12 lg:py-16 bg-[#242b38]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-4">
            Nossos Trabalhos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Galeria de <span className="text-yellow-500">Projetos Realizados</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Conheça alguns dos nossos trabalhos mais recentes e se inspire para seu próximo projeto.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main carousel container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            <AspectRatio ratio={16/9} className="md:aspect-[16/10] lg:aspect-[16/9]">
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
                    className="w-full h-full object-contain bg-gray-50"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                    <div className="p-4 sm:p-6 lg:p-8 text-white w-full">
                      <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 line-clamp-2">
                        {image.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg opacity-90 line-clamp-2 sm:line-clamp-3">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </AspectRatio>
          </div>

          {/* Navigation arrows - Desktop */}
          <button
            onClick={goToPrevious}
            className="hidden sm:flex absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full items-center justify-center text-gray-800 transition-all duration-200 shadow-lg z-10"
            aria-label="Projeto anterior"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="hidden sm:flex absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full items-center justify-center text-gray-800 transition-all duration-200 shadow-lg z-10"
            aria-label="Próximo projeto"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Navigation arrows - Mobile */}
          <div className="flex sm:hidden justify-between items-center mt-4 px-4">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-gray-800 transition-all duration-200 shadow-lg"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="text-white text-sm font-medium">
              {currentIndex + 1} / {projectImages.length}
            </div>
            
            <button
              onClick={goToNext}
              className="w-10 h-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center text-gray-800 transition-all duration-200 shadow-lg"
              aria-label="Próximo projeto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots indicator - Hidden on mobile, shown on larger screens */}
          <div className="hidden sm:flex justify-center mt-6 space-x-2 max-w-full overflow-hidden">
            <div className="flex space-x-2 max-w-xs lg:max-w-md overflow-x-auto pb-2 scrollbar-hide">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-yellow-500 w-6 lg:w-8' 
                      : 'bg-gray-400 hover:bg-gray-300'
                  }`}
                  aria-label={`Ir para projeto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="/nossos-projetos"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg text-sm sm:text-base"
          >
            <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Ver Todos os Projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
