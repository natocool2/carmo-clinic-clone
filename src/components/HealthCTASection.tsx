import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const HealthCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img 
              src="/lovable-uploads/15dc769c-c1c2-4c70-8d83-141a9ee0c1cc.png"
              alt="Profissional de saúde"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          
          {/* Content Section */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <p className="text-lg opacity-90">Invista na sua saúde hoje!</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Cuidados abrangentes e serviços médicos especializados para o manter no seu melhor
              </h2>
            </div>
            
            <div className="pt-6">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Fazer Marcação
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCTASection;