
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';
import { Eye, ArrowLeft } from 'lucide-react';

const projectImages = [
  {
    id: 1,
    src: '/lovable-uploads/c280e790-d980-4387-a159-aac69b9b88ec.png',
    title: 'Piso Laminado - Projeto Comercial',
    description: 'Instalação de piso laminado em ambiente comercial com acabamento perfeito'
  },
  {
    id: 2,
    src: '/lovable-uploads/44266b7c-8428-4ec6-b73a-7d322bb98a77.png',
    title: 'Móveis Planejados - Ambiente Moderno',
    description: 'Projeto completo de móveis planejados com design contemporâneo'
  },
  {
    id: 3,
    src: '/lovable-uploads/187382a6-658d-4117-bfca-39c2fc8e827c.png',
    title: 'Acabamento em Drywall',
    description: 'Trabalho de drywall com acabamento impecável e iluminação integrada'
  },
  {
    id: 4,
    src: '/lovable-uploads/0fb4d106-24a3-4ab3-9e1f-8ba5b56a88c9.png',
    title: 'Piso Laminado Residencial',
    description: 'Instalação de piso laminado em ambiente residencial'
  },
  {
    id: 5,
    src: '/lovable-uploads/be168738-c70f-4f28-8a4e-bb02fb040ccb.png',
    title: 'Piso Vinílico - Cozinha Moderna',
    description: 'Piso vinílico instalado em cozinha com móveis planejados'
  },
  {
    id: 6,
    src: '/lovable-uploads/021f5c43-ca44-494d-924d-4e1dd7d6199a.png',
    title: 'Piso Laminado - Sala de Estar',
    description: 'Piso laminado premium em sala de estar residencial'
  },
  {
    id: 7,
    src: '/lovable-uploads/a0b3fdfd-afdf-490c-a524-18222c01a608.png',
    title: 'Piso Laminado Comercial - Salão',
    description: 'Instalação profissional em salão comercial'
  },
  {
    id: 8,
    src: '/lovable-uploads/22d3d09d-1053-4867-a86d-b40a82d60907.png',
    title: 'Piso Laminado - Closet',
    description: 'Piso laminado instalado em closet com móveis planejados'
  },
  {
    id: 9,
    src: '/lovable-uploads/eb273332-ca10-43bc-bac7-47f5451bd023.png',
    title: 'Gesso - Acabamento de Teto',
    description: 'Trabalho em gesso com molduras e iluminação embutida'
  },
  {
    id: 10,
    src: '/lovable-uploads/16f6660e-474d-47b4-8d6e-848e27472af4.png',
    title: 'Piso Laminado - Hall de Entrada',
    description: 'Piso laminado instalado em hall de entrada com acabamento perfeito'
  },
  {
    id: 11,
    src: '/lovable-uploads/9ffbd456-7b53-474e-8038-a643db81b6a5.png',
    title: 'Piso Laminado - Ambiente Integrado',
    description: 'Piso laminado em sala com divisória de madeira e acabamento premium'
  },
  {
    id: 12,
    src: '/lovable-uploads/a16395a8-8623-43c9-86b6-918e41ba05df.png',
    title: 'Piso Laminado - Cozinha Integrada',
    description: 'Piso laminado em cozinha americana com sala integrada'
  },
  {
    id: 13,
    src: '/lovable-uploads/5288e791-d2c0-42f5-98d9-b9198b4c7be5.png',
    title: 'Piso Laminado - Área Social',
    description: 'Instalação de piso laminado em área social com teto em madeira'
  },
  {
    id: 14,
    src: '/lovable-uploads/80412679-9ceb-47e0-bfd0-d60faa5eaedb.png',
    title: 'Piso Laminado - Corredor',
    description: 'Piso laminado com acabamento impecável em corredor residencial'
  },
  {
    id: 15,
    src: '/lovable-uploads/a2e76476-8ee6-406a-acd3-316e299c8d6f.png',
    title: 'Piso Laminado - Quarto Infantil',
    description: 'Piso laminado em quarto infantil com móveis planejados'
  },
  {
    id: 16,
    src: '/lovable-uploads/d6367df3-eba7-4ecb-93da-64a016405953.png',
    title: 'Piso Laminado - Hall Residencial',
    description: 'Instalação profissional de piso laminado em hall de apartamento'
  },
  {
    id: 17,
    src: '/lovable-uploads/2818e784-64c0-45ba-b57d-1cd997f94ce9.png',
    title: 'Piso Laminado - Área de Serviço',
    description: 'Piso laminado em área de serviço integrada com acabamento perfeito'
  },
  {
    id: 18,
    src: '/lovable-uploads/3428f6e4-2da2-4c35-b079-411ec4b91472.png',
    title: 'Acabamento em Gesso - Teto',
    description: 'Trabalho especializado em gesso com iluminação LED embutida'
  },
  {
    id: 19,
    src: '/lovable-uploads/91667576-3f0f-4ca0-bece-a84607233e6f.png',
    title: 'Piso Laminado - Corredor Moderno',
    description: 'Piso laminado premium com acabamento profissional em corredor'
  }
];

const NossosProjetos = () => {
  const [selectedImage, setSelectedImage] = useState<{id: number, src: string, title: string} | null>(null);

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Nossos Projetos - Dicerto Acabamentos e Instalações</title>
        <meta name="description" content="Conheça nossos projetos realizados em pisos laminados, vinílicos, drywall e móveis planejados. Mais de 10 anos de experiência em Treze Tílias." />
        <meta name="keywords" content="projetos, pisos laminados, pisos vinílicos, drywall, móveis planejados, Treze Tílias" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-[#242b38]">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <div className="mb-6">
                  <a 
                    href="/"
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-4"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar ao Início
                  </a>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Nossos <span className="text-yellow-500">Projetos</span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Conheça alguns dos nossos trabalhos realizados com excelência e dedicação. 
                  Cada projeto é executado com o máximo cuidado, garantindo a satisfação total de nossos clientes.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Gallery */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectImages.map((project) => (
                  <div
                    key={project.id}
                    className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        onClick={() => handleImageClick(project)}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button 
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                            onClick={() => handleImageClick(project)}
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-[#242b38]">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Gostou dos nossos trabalhos?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e transforme seu ambiente com a qualidade Dicerto!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/5549999163785?text=Olá,%20vi%20os%20projetos%20e%20gostaria%20de%20um%20orçamento" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-lg"
                >
                  <img 
                    src="/lovable-uploads/69ec1fdc-b8aa-4dc6-9dff-d0670370a5cc.png" 
                    alt="WhatsApp" 
                    className="w-5 h-5 mr-2"
                  />
                  Solicitar Orçamento
                </a>
                
                <a 
                  href="tel:+5549999163785"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-semibold rounded-lg transition-colors"
                >
                  Ligar Agora: (49) 99916-3785
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <FloatingButton />
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="relative w-full h-full max-w-4xl max-h-full flex items-center justify-center">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-all duration-200"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white text-xl font-bold bg-black bg-opacity-50 rounded-lg py-2 px-4 inline-block">
                {selectedImage.title}
              </h3>
            </div>
          </div>
          <div 
            className="absolute inset-0 -z-10"
            onClick={handleCloseModal}
          />
        </div>
      )}
    </>
  );
};

export default NossosProjetos;
