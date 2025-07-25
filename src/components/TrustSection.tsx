import { Shield, Clock, Award, Users } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-20 bg-medicarmo-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            A sua clínica de confiança
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos cuidados de saúde personalizados com a máxima qualidade e dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Segurança</h3>
            <p className="text-muted-foreground text-sm">
              Protocolos rigorosos de higiene e segurança
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Rapidez</h3>
            <p className="text-muted-foreground text-sm">
              Marcações rápidas e tempos de espera reduzidos
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Qualidade</h3>
            <p className="text-muted-foreground text-sm">
              Profissionais especializados e equipamentos modernos
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Cuidado</h3>
            <p className="text-muted-foreground text-sm">
              Atendimento personalizado e humanizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;