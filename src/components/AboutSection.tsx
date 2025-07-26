import { Button } from "@/components/ui/button";
import { Home, Briefcase, MapPin } from "lucide-react";
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
                <div className="bg-primary rounded-lg p-3 flex-shrink-0">
                  <Home className="w-6 h-6 text-white" />
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
                <div className="bg-primary rounded-lg p-3 flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
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

            <Button variant="outline" asChild className="w-fit border-primary text-primary hover:bg-primary hover:text-white">
              <a
                href="https://www.google.com/maps?ll=37.019211,-7.934308&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=11404537850832180447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Ver No Mapa
              </a>
            </Button>
          </div>

          {/* Image with decorative effect */}
          <div className="relative flex justify-center">
            <div className="card-container">
              {/* Decorative blue squares */}
              <div className="decoracao-quadrados"></div>
              
              {/* Main medical image */}
              <img
                src={doctorPortrait}
                alt="Dra. Rita - Medicarmo"
                className="imagem-medica"
              />
              
              {/* Logo at bottom */}
              <div className="logo-medicarmo">
                <img
                  src="/lovable-uploads/652052fc-1be2-49e7-8448-c2ee2fc6135a.png"
                  alt="Medicarmo Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;