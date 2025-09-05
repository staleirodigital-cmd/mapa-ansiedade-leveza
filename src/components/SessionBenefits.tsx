import { CheckCircle } from "lucide-react";

export default function SessionBenefits() {
  const benefits = [
    "Um mapa emocional do que está te bloqueando",
    "Clareza sobre os gatilhos da sua ansiedade",
    "Um direcionamento prático pra sair do ciclo da autocobrança",
    "A oportunidade de conhecer o caminho completo — caso queira continuar"
  ];

  return (
    <section className="bg-straw py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-chocolate text-center mb-12">
            O que você leva da sessão:
          </h2>
          
          <div className="space-y-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl shadow-sm"
              >
                <CheckCircle className="w-8 h-8 text-brown-medium flex-shrink-0" />
                <p className="text-lg text-chocolate font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/80 p-8 rounded-2xl shadow-lg text-center">
            <p className="text-lg text-brown-medium">
              💡 A sessão é gratuita. O acompanhamento completo será apresentado apenas se fizer sentido pra você. 
              <span className="font-semibold text-chocolate"> Sem pressão.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}