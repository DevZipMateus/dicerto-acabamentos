
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['inicio', 'sobre', 'servicos', 'depoimentos', 'contato'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top <= 300 && rect.bottom >= 300;
          if (isInViewport) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'nossos-projetos', label: 'Nossos Projetos', route: '/nossos-projetos' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'contato', label: 'Contato' }
  ];

  const getLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    const baseClasses = 'text-sm font-medium transition-colors duration-300 cursor-pointer';
    
    if (isActive) {
      return `${baseClasses} text-yellow-400`;
    }
    
    return `${baseClasses} text-white hover:text-yellow-300`;
  };

  const handleNavClick = (item: any) => {
    if (item.route) {
      window.location.href = item.route;
    } else {
      scrollToSection(item.id);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#242b38] shadow-lg py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('inicio')}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <img 
                src="/lovable-uploads/8e01c698-22d6-43e3-a008-5133f4e19948.png" 
                alt="Dicerto Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-xl font-bold text-yellow-400">Dicerto</div>
              <div className="text-sm text-yellow-200">
                Acabamentos e Instalações
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <span
                    onClick={() => handleNavClick(item)}
                    className={getLinkClasses(item.id)}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Contact */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="tel:+5549999163785"
                className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">(49) 99916-3785</span>
              </a>
              
              <a 
                href="https://wa.me/5549999163785?text=Olá,%20gostaria%20de%20mais%20informações" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <img 
                  src="/lovable-uploads/69ec1fdc-b8aa-4dc6-9dff-d0670370a5cc.png" 
                  alt="WhatsApp" 
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white hover:text-yellow-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white shadow-lg`}>
        <div className="container mx-auto px-4 py-6">
          <nav className="mb-6">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <span
                    onClick={() => handleNavClick(item)}
                    className="text-lg font-medium text-gray-700 hover:text-yellow-600 transition-colors cursor-pointer block py-2"
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="border-t pt-6 space-y-4">
            <a 
              href="tel:+5549999163785"
              className="flex items-center space-x-3 text-gray-700 hover:text-yellow-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(49) 99916-3785</span>
            </a>
            
            <a 
              href="https://wa.me/5549999163785?text=Olá,%20gostaria%20de%20mais%20informações" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              <img 
                src="/lovable-uploads/69ec1fdc-b8aa-4dc6-9dff-d0670370a5cc.png" 
                alt="WhatsApp" 
                className="w-5 h-5"
              />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
