import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const ClinicSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Blue area that doesn't go to the end */}
      <div 
        className="absolute inset-0 mr-32 bg-primary rounded-r-[100px]"
        style={{
          backgroundImage: `url(/lovable-uploads/36279678-d9bc-4a4a-ac7a-b9994a66f05a.png)`,
          backgroundRepeat: "repeat",
          backgroundSize: "50px 50px"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              No nosso centro clínico
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
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

          {/* CTA Button - positioned within blue area */}
          <div className="flex justify-center lg:justify-start lg:ml-20">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 shadow-lg"
              asChild
            >
              <a href="#marcacao" className="inline-flex items-center gap-2">
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