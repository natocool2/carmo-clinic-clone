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

      {/* Middle layer pattern - à frente da imagem de trás e atrás da imagem da frente */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(/lovable-uploads/ebfabf12-1ce3-477e-b5a1-a91845a69cf7.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "240px 240px",
          backgroundPosition: "calc(50% - 100px) calc(50% - 50px)",
          zIndex: 5
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with overlapping circles */}
          <div className="relative">
            <div className="image-container mx-auto">
              {/* Main image - esquerda */}
              <img
                src="/lovable-uploads/a620d0e5-8168-42c7-99e7-3e614d0b9bb1.png"
                alt="Médica com estetoscópio"
                className="imagem-esquerda card-shadow"
              />
              
              {/* Overlapping image - direita */}
              <img
                src="/lovable-uploads/fe70c985-49cb-434c-ae2b-aa3203bd2395.png"
                alt="Equipamento dentário"
                className="imagem-direita card-shadow"
              />
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