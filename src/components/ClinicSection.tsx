import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const ClinicSection = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background pattern - dots on the right side */}
      <div 
        className="absolute right-0 top-0 w-96 h-full opacity-30"
        style={{
          backgroundImage: `url(/lovable-uploads/6f731a91-6390-49dd-8daa-0cec690c4166.png)`,
          backgroundRepeat: "repeat",
          backgroundSize: "40px 40px"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
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

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-end">
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