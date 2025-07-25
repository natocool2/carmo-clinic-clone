import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Excelente atendimento e profissionalismo. Recomendo vivamente a Medicarmo!",
    rating: 5,
    service: "Consulta de Cardiologia"
  },
  {
    name: "João Santos",
    text: "Staff muito simpático e instalações modernas. Fiquei muito satisfeito.",
    rating: 5,
    service: "Clínica Geral"
  },
  {
    name: "Ana Costa",
    text: "Marcação rápida e atendimento de qualidade. Voltarei certamente!",
    rating: 5,
    service: "Dermatologia"
  },
  {
    name: "Pedro Oliveira",
    text: "Profissionais muito competentes. Senti-me sempre bem acompanhado.",
    rating: 5,
    service: "Ortopedia"
  },
  {
    name: "Carla Ferreira",
    text: "Ambiente acolhedor e cuidado personalizado. Muito obrigada!",
    rating: 5,
    service: "Ginecologia"
  },
  {
    name: "Rui Almeida",
    text: "Equipamentos modernos e diagnóstico preciso. Recomendo!",
    rating: 5,
    service: "Oftalmologia"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Testemunhos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O que os nossos pacientes dizem sobre nós
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.service}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;