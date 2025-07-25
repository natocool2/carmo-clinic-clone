import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
const ctaBg = "/lovable-uploads/f58dcb1a-10de-44a9-bcf2-80ad8af06f01.png";

const CTASection = () => {
  return (
    <section
      className="py-20 text-white relative"
      style={{
        backgroundImage: `url(${ctaBg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cuidados abrangentes e serviços médicos
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Marque já a sua consulta e tenha acesso aos melhores cuidados de saúde do Algarve. 
            A nossa equipa está pronta para cuidar de si e da sua família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-primary hover:bg-gray-100"
            >
              <a href="tel:00351912258575" className="inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Ligar Agora
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <a href="#marcacao" className="inline-flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Marcar Consulta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;