import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const HealthCTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/15dc769c-c1c2-4c70-8d83-141a9ee0c1cc.png"
          alt="Profissional de saúde"
          className="w-full h-full object-cover"
        />
        {/* Blue/Purple Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-500/85 to-purple-600/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg md:text-xl opacity-90">Invista na sua saúde hoje!</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Cuidados abrangentes e serviços médicos especializados para o manter no seu melhor
            </h2>
          </div>
          
          <div className="pt-6">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover-scale"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Fazer Marcação
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCTASection;