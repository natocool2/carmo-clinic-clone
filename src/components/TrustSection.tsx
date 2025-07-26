const TrustSection = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with overlapping circles */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main oval image container */}
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-large relative">
                <img
                  src="/lovable-uploads/a620d0e5-8168-42c7-99e7-3e614d0b9bb1.png"
                  alt="Médica com estetoscópio"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlapping image - bottom right */}
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="/lovable-uploads/fe70c985-49cb-434c-ae2b-aa3203bd2395.png"
                  alt="Equipamento dentário"
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              A sua clínica de confiança
            </h2>
            <h3 className="text-xl font-medium text-muted-foreground">
              Experimente os cuidados de saúde excepcionais
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Os nossos médicos são altamente treinados e experientes nas suas áreas, e utilizam a mais recente tecnologia e técnicas para assegurar que recebe o tratamento mais eficaz.
              </p>
              <p>
                Temos também um pessoal simpático e conhecedor que está sempre disponível para ajudar e responder a quaisquer perguntas que possa ter.
              </p>
            </div>
            
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-foreground">
                Venha conhecer-nos!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;