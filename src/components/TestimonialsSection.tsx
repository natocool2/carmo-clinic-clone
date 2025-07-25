import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "João Rodrigues",
    text: "Fiquei impressionado com o profissionalismo e os cuidados que recebi na clínica. O pessoal era simpático e conhecedor, e as instalações eram limpas e modernas. Recomendaria vivamente a qualquer pessoa que necessitasse de serviços médicos.",
    avatar: "/lovable-uploads/b556f0d2-3c80-489a-8c1b-d2eb35956a15.png"
  },
  {
    name: "Carlos Pereira",
    text: "Estou agradavelmente surpreendido com o nível de compaixão e empatia demonstrado pelo pessoal da vossa clínica. Ouviram atentamente as minhas preocupações e fizeram-me sentir confortável e à vontade.",
    avatar: "/lovable-uploads/1669256d-610b-4c01-bc69-496673e925be.png"
  },
  {
    name: "Maria da Silva",
    text: "Os médicos e enfermeiros foram capazes de diagnosticar e tratar o meu estado de forma rápida e eficaz graças às ferramentas avançadas à sua disposição.",
    avatar: "/lovable-uploads/22451cb8-29a8-4573-9848-bcdc48d2c43a.png"
  },
  {
    name: "José Gonçalves",
    text: "Muito satisfeito com a variedade de serviços oferecidos na vossa clínica. Desde check-ups de rotina a tratamentos especializados, a vossa clínica tem isso tudo!",
    avatar: "/lovable-uploads/36279678-d9bc-4a4a-ac7a-b9994a66f05a.png"
  },
  {
    name: "Sofia Martins",
    text: "Extremamente satisfeita com a rapidez e eficiência do serviço na vossa clínica. Fui vista rapidamente, e o pessoal foi capaz de diagnosticar tudo rapidamente!",
    avatar: "/lovable-uploads/4a2f019d-fae8-405d-b727-80ba581fb605.png"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* First Row: Title + 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Title Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Testemunhos
            </h2>
            <p className="text-muted-foreground text-lg">
              Ajudar as pessoas é sempre a nossa maior prioridade
            </p>
          </div>

          {/* First Two Cards */}
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow relative">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(2, 5).map((testimonial, index) => (
            <Card key={index + 2} className="bg-white hover:shadow-lg transition-shadow relative">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
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