import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const ClinicSection = () => {
  return (
    <section className="py-12 bg-background relative overflow-hidden">
      {/* Blue area - full width on mobile, partial on desktop */}
      <div 
        className="absolute inset-0 bg-primary lg:mr-64"
        style={{
          zIndex: 1
        }}
      ></div>
      
      {/* Pattern image at bottom right of blue area - hidden on mobile */}
      <div 
        className="hidden lg:block absolute bottom-[55px] right-0"
        style={{
          width: '326px',
          height: '218px',
          marginRight: '68px',
          backgroundImage: `url(/lovable-uploads/eceaa431-4dfd-4a79-a98a-2db2a005d741.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          zIndex: 5
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              No nosso centro clínico
            </h2>
            <p className="text-base mb-8 opacity-90 leading-relaxed">
              Dedicamo-nos a fornecer cuidados de saúde de alta qualidade a todos os nossos pacientes. As nossas instalações de última geração e pessoal experiente asseguram-lhe que receberá os melhores cuidados possíveis. Para marcar uma consulta, basta telefonar-nos ou preencher o formulário no nosso website para marcar uma hora que seja conveniente para si.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="text-sm font-medium">PRECISA DE AJUDA?</span>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">+(351) 912 258 575</div>
                <div className="text-2xl font-bold">+(351) 289 889 560</div>
                <div className="text-sm opacity-80">*Valor de uma chamada local</div>
              </div>
            </div>
          </div>

          {/* CTA Button - responsive positioning */}
          <div className="mt-8 lg:absolute lg:right-0 lg:mr-80">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 shadow-lg w-full lg:w-auto"
              asChild
            >
              <a href="#marcacao" className="inline-flex items-center gap-2 justify-center">
                <Calendar className="w-5 h-5" />
                Fazer Marcação
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;