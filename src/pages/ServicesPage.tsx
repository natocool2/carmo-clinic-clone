import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const services = [
  {
    title: "Clínica Geral",
    description: "Consultas de medicina geral e familiar com médicos experientes. Cuidados de saúde abrangentes para toda a família.",
    price: "Desde 40€",
    duration: "30 min",
    image: "🩺"
  },
  {
    title: "Cardiologia",
    description: "Consultas especializadas em saúde cardiovascular, electrocardiogramas e ecocardiogramas.",
    price: "Desde 80€",
    duration: "45 min",
    image: "❤️"
  },
  {
    title: "Dermatologia",
    description: "Cuidados especializados para a saúde da pele, diagnóstico e tratamento de problemas dermatológicos.",
    price: "Desde 70€",
    duration: "30 min",
    image: "🌟"
  },
  {
    title: "Ginecologia",
    description: "Saúde feminina com cuidado especializado, consultas de rotina e acompanhamento ginecológico.",
    price: "Desde 75€",
    duration: "45 min",
    image: "🌸"
  },
  {
    title: "Oftalmologia",
    description: "Exames oftalmológicos completos, diagnóstico e tratamento de problemas de visão.",
    price: "Desde 65€",
    duration: "30 min",
    image: "👁️"
  },
  {
    title: "Ortopedia",
    description: "Tratamento especializado de lesões e problemas do sistema músculo-esquelético.",
    price: "Desde 85€",
    duration: "45 min",
    image: "🦴"
  },
  {
    title: "Pediatria",
    description: "Cuidados médicos especializados para bebés, crianças e adolescentes.",
    price: "Desde 50€",
    duration: "30 min",
    image: "👶"
  },
  {
    title: "Psicologia",
    description: "Apoio psicológico e terapias especializadas para o bem-estar mental e emocional.",
    price: "Desde 60€",
    duration: "50 min",
    image: "🧠"
  },
  {
    title: "Medicina Dentária",
    description: "Consultas de medicina dentária, limpezas, tratamentos e cirurgias orais.",
    price: "Desde 45€",
    duration: "45 min",
    image: "🦷"
  },
  {
    title: "Fisioterapia",
    description: "Reabilitação física e tratamentos de fisioterapia para recuperação e prevenção.",
    price: "Desde 35€",
    duration: "45 min",
    image: "🏃"
  },
  {
    title: "Nutrição",
    description: "Consultas de nutrição e dietética para uma alimentação saudável e equilibrada.",
    price: "Desde 55€",
    duration: "45 min",
    image: "🥗"
  },
  {
    title: "Análises Clínicas",
    description: "Laboratório com análises clínicas completas e resultados rápidos.",
    price: "Desde 25€",
    duration: "15 min",
    image: "🧪"
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Lista de Serviços
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Conheça todos os nossos serviços médicos especializados e encontre o cuidado de saúde que precisa.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-5xl mb-4">{service.image}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Duração: {service.duration}</span>
                    <span className="font-semibold text-primary">{service.price}</span>
                  </div>
                  <Button className="w-full" asChild>
                    <a href="tel:00351912258575" className="inline-flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Marcar Consulta
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;