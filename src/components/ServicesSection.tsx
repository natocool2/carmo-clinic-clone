import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Smile, Handshake, Building2 } from "lucide-react";

const steps = [
  {
    title: "Contacte-nos",
    description: "Marque uma consulta e visite a nossa clínica numa altura oportuna para si.",
    icon: Phone
  },
  {
    title: "Cuide da sua saúde",
    description: "Os nossos médicos e enfermeiros irão avaliar a sua saúde e fornecer um diagnóstico",
    icon: Smile
  },
  {
    title: "Receba cuidados personalizados",
    description: "A nossa equipa trabalhará consigo para desenvolver um plano de tratamento adaptado às suas necessidades",
    icon: Handshake
  },
  {
    title: "Mantenha-se saudável",
    description: "Forneceremos apoio e educação contínuos para o ajudar a manter uma boa saúde.",
    icon: Building2
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A sua saúde em boas mãos
          </h2>
          <p className="text-muted-foreground text-lg">
            Cuidando da sua saúde, a um passo de cada vez
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;