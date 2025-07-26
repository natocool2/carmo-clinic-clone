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
    image: "/lovable-uploads/731a8486-4546-4ea3-9cc1-beb089cfccc3.png"
  },
  {
    number: "04.",
    title: "Endocrinologia",
    description: "Diagnóstico e tratamento de desequilíbrios hormonais, incluindo diabetes e tiroide, hipófise, e disfunção adrenal.",
    image: "/lovable-uploads/b3f85eca-e6b5-49df-bee7-bf818de67118.png"
  },
  {
    number: "05.",
    title: "Gastroenterologia",
    description: "Diagnóstico e tratamento de doenças do esófago, estômago, fígado, intestino, pâncreas.",
    image: "/lovable-uploads/d3b66191-cdc1-4db1-9648-c9d2df561c7b.png"
  },
  {
    number: "06.",
    title: "Ginecologia e Obstetrícia",
    description: "Diagnóstico e tratamento de doenças do sistema reprodutor feminino e cuidados relacionados com a gravidez.",
    image: "/lovable-uploads/77fbe6f0-a76f-43b0-9f44-067356f56798.png"
  },
  {
    number: "07.",
    title: "Medicina Dentária",
    description: "Diagnóstico, tratamento e prevenção de doenças dos dentes, boca e estruturas associadas.",
    image: "/lovable-uploads/11232eb6-a8ea-443a-a641-b2fee79f4d33.png"
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
      
      {/* New pattern image */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(/lovable-uploads/22f0ca5f-8e43-4bd3-a05a-8c379a0e8d7f.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "259px 259px",
          backgroundPosition: "calc(50% - 10px) 77px"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* 3 rows x 4 columns grid */}
        <div className="grid grid-cols-4" style={{ gap: '3px' }}>
          {/* First row - Header text (2 cols) + 2 cards */}
          <div className="col-span-2 space-y-6 flex flex-col justify-center" style={{ transform: 'translateY(-20px)' }}>
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
              className="relative aspect-square overflow-hidden group cursor-pointer card-shadow"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors"></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-start text-white">
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
              className="relative aspect-square overflow-hidden group cursor-pointer card-shadow"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors"></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-start text-white">
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
              className="relative aspect-square overflow-hidden group cursor-pointer card-shadow"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors"></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-start text-white">
                <div className="space-y-2">
                  <div className="text-sm font-medium opacity-80">{service.number}</div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Contact Card spanning 2 columns */}
          <div className="col-span-2 relative aspect-[2:1] overflow-hidden caixa-servicos flex flex-col justify-start">
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