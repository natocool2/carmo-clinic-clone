import { Button } from "@/components/ui/button";
import { useState } from "react";
const medicarmoLogo = "/lovable-uploads/27452384-a7dd-4f2a-bd60-8169eeaad545.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src={medicarmoLogo}
                alt="Medicarmo"
                className="h-12 w-12"
              />
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#sobre"
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Serviços
            </a>
            <a
              href="#marcacao"
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Ver no Mapa
            </a>
            <a
              href="#contact"
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Contactar-nos
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary-variant text-white font-semibold" asChild>
              <a href="tel:00351912258575">
                Marcações: (+351) 912 258 575
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur border-t border-border">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <a
                href="#sobre"
                className="block text-white hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#servicos"
                className="block text-white hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#marcacao"
                className="block text-white hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ver no Mapa
              </a>
              <a
                href="#contact"
                className="block text-white hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contactar-nos
              </a>
              <Button className="w-full bg-primary hover:bg-primary-variant text-white font-semibold mt-4" asChild>
                <a href="tel:00351912258575">
                  Marcações: (+351) 912 258 575
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;