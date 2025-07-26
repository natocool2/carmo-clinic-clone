import { Button } from "@/components/ui/button";
const medicarmoLogo = "/lovable-uploads/27452384-a7dd-4f2a-bd60-8169eeaad545.png";

const Header = () => {
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
                className="h-10 w-10"
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
              href="/lista-de-servicos"
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
          <button className="md:hidden p-2 text-white">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;