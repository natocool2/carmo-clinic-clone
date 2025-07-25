import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
const heroBg = "/lovable-uploads/22451cb8-29a8-4573-9848-bcdc48d2c43a.png";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Header dentro do hero */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img
                  src="/lovable-uploads/d36dd2e3-18fb-4842-9274-c053baf16eea.png"
                  alt="Medicarmo"
                  className="h-16 w-16"
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
              <Button className="bg-primary hover:bg-primary-variant text-white font-semibold px-6 py-3" asChild>
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
      </div>
      
      {/* Curved bottom divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,96.77C268.21,96.77,0.41,19.77,0,0V120H1200V1C1200,19.17,931.79,96.77,600,96.77Z"
            className="fill-background"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Medicarmo - Centro Clínico do Algarve
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto">
          Prestamos serviços de saúde diferenciados e de qualidade
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary-variant text-white font-semibold px-8 py-4"
          asChild
        >
          <a href="#marcacao" className="inline-flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Fazer Marcação
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;