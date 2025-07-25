import { Button } from "@/components/ui/button";

const ClinicSection = () => {
  return (
    <section className="py-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          No nosso centro clínico
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
          Dispomos de instalações modernas e equipamentos de última geração para 
          garantir o melhor atendimento e diagnóstico para os nossos pacientes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">+1000</div>
            <div className="text-sm opacity-80">Pacientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-sm opacity-80">Especialidades</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">24h</div>
            <div className="text-sm opacity-80">Suporte Telefónico</div>
          </div>
        </div>
        <Button variant="secondary" size="lg">
          Conhecer Especialidades
        </Button>
      </div>
    </section>
  );
};

export default ClinicSection;