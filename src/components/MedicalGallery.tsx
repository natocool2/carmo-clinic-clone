const MedicalGallery = () => {
  const medicalImages = [
    {
      src: "/lovable-uploads/fe70c985-49cb-434c-ae2b-aa3203bd2395.png",
      alt: "Equipamento dentário moderno",
      title: "Tecnologia Avançada"
    },
    {
      src: "/lovable-uploads/a620d0e5-8168-42c7-99e7-3e614d0b9bb1.png",
      alt: "Médica com estetoscópio",
      title: "Cuidados Especializados"
    },
    {
      src: "/lovable-uploads/1d2761f2-1e5f-424c-a8cd-0cc07109b4de.png",
      alt: "Exame de ultrassom",
      title: "Diagnóstico Preciso"
    },
    {
      src: "/lovable-uploads/ee4a5a8a-f851-403a-8d92-d101fee75300.png",
      alt: "Procedimento dentário",
      title: "Odontologia Profissional"
    },
    {
      src: "/lovable-uploads/1f216190-c2db-458f-aad3-c47c02a5a4cc.png",
      alt: "Medição de pressão arterial",
      title: "Monitorização Cardíaca"
    },
    {
      src: "/lovable-uploads/f0c48ff2-03d9-4be6-ba1d-0b4713d57894.png",
      alt: "Tratamento de bem-estar",
      title: "Medicina Estética"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            As nossas instalações
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça o nosso espaço moderno e equipado com tecnologia de ponta para oferecer os melhores cuidados de saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicalImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-medium hover:shadow-large transition-shadow">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalGallery;