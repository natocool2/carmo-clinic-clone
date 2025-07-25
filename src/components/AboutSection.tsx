import { Button } from "@/components/ui/button";
import { Heart, Stethoscope, MapPin } from "lucide-react";
const doctorPortrait = "/lovable-uploads/2beb9e0b-ea73-4e93-a4de-664be6c48314.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Bem-vindo à Medicarmo!
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Prestamos serviços de saúde diferenciados e de qualidade, colocando à sua disposição uma oferta integrada que permite reduzir o seu tempo de espera na marcação de consultas de clínica geral, de consultas de especialidade ou no recurso a meios complementares de diagnóstico.
            </p>
            
            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full p-3 flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">
                    Sabemos cuidar de si
                  </h5>
                  <p className="text-muted-foreground">
                    O cliente está sempre no centro da nossa atenção.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full p-3 flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">
                    Fácil marcação e atendimento
                  </h5>
                  <p className="text-muted-foreground">
                    Cada cliente é atendido com a maior qualidade e atenção.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="outline" asChild className="w-fit">
              <a
                href="https://www.google.com/maps?ll=37.019211,-7.934308&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=11404537850832180447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Ver no mapa
              </a>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-medicarmo-light-blue rounded-full absolute top-8 right-8 w-32 h-32 z-0"></div>
            <div className="relative z-10">
              <img
                src={doctorPortrait}
                alt="Doutora"
                className="rounded-lg shadow-large w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;