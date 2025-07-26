import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "João Rodrigues",
    text: "Fiquei impressionado com o profissionalismo e os cuidados que recebi na clínica. O pessoal era simpático e conhecedor, e as instalações eram limpas e modernas. Recomendaria vivamente a qualquer pessoa que necessitasse de serviços médicos.",
    avatar: "/lovable-uploads/485330c7-a200-4fb9-b801-c6b5fd065657.png"
  },
  {
    name: "Carlos Pereira",
    text: "Estou agradavelmente surpreendido com o nível de compaixão e empatia demonstrado pelo pessoal da vossa clínica. Ouviram atentamente as minhas preocupações e fizeram-me sentir confortável e à vontade.",
    avatar: "/lovable-uploads/2dae802f-fd62-4131-a70a-6a4fad6113b6.png"
  },
  {
    name: "Maria da Silva",
    text: "Os médicos e enfermeiros foram capazes de diagnosticar e tratar o meu estado de forma rápida e eficaz graças às ferramentas avançadas à sua disposição.",
    avatar: "/lovable-uploads/0a7671c7-a662-44d7-b5ed-fd7ba4f9e8f2.png"
  },
  {
    name: "José Gonçalves",
    text: "Muito satisfeito com a variedade de serviços oferecidos na vossa clínica. Desde check-ups de rotina a tratamentos especializados, a vossa clínica tem isso tudo!",
    avatar: "/lovable-uploads/c5469269-13ba-4f5a-8578-8f41cc5e2b48.png"
  },
  {
    name: "Sofia Martins",
    text: "Extremamente satisfeita com a rapidez e eficiência do serviço na vossa clínica. Fui vista rapidamente, e o pessoal foi capaz de diagnosticar tudo rapidamente!",
    avatar: "/lovable-uploads/4d83ed72-916f-406d-a25a-6938f1c1c3f4.png"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(/lovable-uploads/a036febb-9103-4037-b195-5517a7c73458.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "216px 216px",
          backgroundPosition: "calc(0% + 100px) calc(60% - 50px)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Primeira linha: Título + 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Título na primeira coluna */}
          <div className="flex flex-col justify-start mt-5">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Testemunhos
            </h2>
            <p className="text-muted-foreground text-lg">
              Ajudar as pessoas é sempre a nossa maior prioridade
            </p>
          </div>

          {/* Primeiros 2 testemunhos */}
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

        {/* Segunda linha: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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