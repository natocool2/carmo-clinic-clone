import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Clínica Geral",
    description: "Consultas de medicina geral e familiar para toda a família",
    image: "🩺"
  },
  {
    title: "Cardiologia",
    description: "Especialistas em saúde cardiovascular e prevenção",
    image: "❤️"
  },
  {
    title: "Dermatologia",
    description: "Cuidados especializados para a saúde da sua pele",
    image: "🌟"
  },
  {
    title: "Ginecologia",
    description: "Saúde feminina com o máximo cuidado e privacidade",
    image: "🌸"
  },
  {
    title: "Oftalmologia",
    description: "Exames e tratamentos para a saúde dos seus olhos",
    image: "👁️"
  },
  {
    title: "Ortopedia",
    description: "Tratamento de lesões e problemas músculo-esqueléticos",
    image: "🦴"
  },
  {
    title: "Pediatria",
    description: "Cuidados especializados para crianças e adolescentes",
    image: "👶"
  },
  {
    title: "Psicologia",
    description: "Apoio psicológico e terapias para o bem-estar mental",
    image: "🧠"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Serviços médicos especializados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma ampla gama de especialidades médicas ao seu dispor, com profissionais qualificados e equipamentos modernos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{service.image}</div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;