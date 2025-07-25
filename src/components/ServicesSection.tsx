import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const services = [
  {
    number: "01.",
    title: "Análises Clínicas",
    description: "Serviço de testes diagnósticos e análises abrangentes.",
    image: "/lovable-uploads/661c1721-991d-4564-816a-c9ec46ab18b6.png"
  },
  {
    number: "02.",
    title: "Clínica Geral",
    description: "Diagnóstico e tratamento de diversos tipos de doença, com prevenção e encaminhamento.",
    image: "/lovable-uploads/e7ccd59a-ac93-480e-a806-49bd23e0116f.png"
  },
  {
    number: "03.",
    title: "Dermatologia",
    description: "Diagnóstico e tratamento de doenças de pele, cabelo, unhas e doenças venéreas.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    number: "04.",
    title: "Endocrinologia",
    description: "Diagnóstico e tratamento de desequilíbrios hormonais, incluindo diabetes e tiroide, hipófise, e disfunção adrenal.",
    image: "https://images.unsplash.com/premium_photo-1661779717978-d7937fa08250"
  },
  {
    number: "05.",
    title: "Gastroenterologia",
    description: "Diagnóstico e tratamento de doenças do esófago, estômago, fígado, intestino, pâncreas.",
    image: "/lovable-uploads/f2a789b8-bf65-494c-a1a3-832e9deb9751.png"
  },
  {
    number: "06.",
    title: "Ginecologia e Obstetrícia",
    description: "Diagnóstico e tratamento de doenças do sistema reprodutor feminino e cuidados relacionados com a gravidez.",
    image: "/lovable-uploads/b556f0d2-3c80-489a-8c1b-d2eb35956a15.png"
  },
  {
    number: "07.",
    title: "Medicina Dentária",
    description: "Diagnóstico, tratamento e prevenção de doenças dos dentes, boca e estruturas associadas.",
    image: "/lovable-uploads/da031c62-b48d-444c-bb5d-f2eb47d58b16.png"
  },
  {
    number: "08.",
    title: "Medicina Interna",
    description: "Diagnóstico e tratamento de doenças dos órgãos internos. Avaliação do paciente como um todo.",
    image: "/lovable-uploads/f39da0a1-a4da-4dae-8a13-07a716341c7c.png"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(/lovable-uploads/36279678-d9bc-4a4a-ac7a-b9994a66f05a.png)`,
          backgroundRepeat: "repeat",
          backgroundSize: "50px 50px"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* 3 rows x 4 columns grid */}
        <div className="grid grid-cols-4 gap-4">
          {/* First row - Header text (2 cols) + 2 cards */}
          <div className="col-span-2 space-y-6 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Serviços médicos especializados
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cuidados compassivos para todas as suas necessidades médicas
            </p>
          </div>
          
          {/* First two service cards */}
          {services.slice(0, 2).map((service, index) => (
            <div 
              key={index}
              className="relative h-48 rounded-lg overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors"></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                <div className="space-y-2">
                  <div className="text-sm font-medium opacity-80">{service.number}</div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Second row - 4 cards */}
          {services.slice(2, 6).map((service, index) => (
            <div 
              key={index + 2}
              className="relative h-48 rounded-lg overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors"></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                <div className="space-y-2">
                  <div className="text-sm font-medium opacity-80">{service.number}</div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Third row - 2 cards + contact card spanning 2 columns */}
          {services.slice(6, 8).map((service, index) => (
            <div 
              key={index + 6}
              className="relative h-48 rounded-lg overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors"></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                <div className="space-y-2">
                  <div className="text-sm font-medium opacity-80">{service.number}</div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Contact Card spanning 2 columns */}
          <div className="col-span-2 relative h-48 rounded-lg rounded-r-[60px] overflow-hidden bg-primary text-white p-6 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-medium">Ver todos os nossos serviços</span>
              </div>
              <div className="space-y-2">
                <div className="text-xl font-bold">+(351) 912 258 575</div>
                <div className="text-xl font-bold">+(351) 289 889 560</div>
                <div className="text-xs opacity-80">*Valor de uma chamada local</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;