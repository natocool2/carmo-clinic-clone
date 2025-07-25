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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Empty space on the left */}
          <div></div>
          
          {/* Content aligned to the right */}
          <div className="text-center lg:text-left">
            <p className="text-base mb-4 opacity-90">
              Invista na sua saúde hoje!
            </p>
            <h2 className="text-xl md:text-2xl font-bold mb-8">
              Cuidados abrangentes e serviços médicos especializados para o manter no seu melhor
            </h2>
            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <a href="#marcacao" className="inline-flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Fazer Marcação
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;