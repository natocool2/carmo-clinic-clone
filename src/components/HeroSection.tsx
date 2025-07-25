import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
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
          asChild
          className="bg-primary hover:bg-primary-variant text-primary-foreground font-semibold"
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