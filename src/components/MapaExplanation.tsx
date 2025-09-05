import { Search, Brain, Compass } from "lucide-react";

export default function MapaExplanation() {
  const benefits = [
    {
      icon: Search,
      text: "Identificar os pensamentos que estão travando sua mente"
    },
    {
      icon: Brain,
      text: "Entender como eles afetam sua vida emocional, profissional e familiar"
    },
    {
      icon: Compass,
      text: "Descobrir seu ponto de bloqueio central — e por onde começar a mudar"
    }
  ];

  return (
    <section className="bg-beige-light py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-chocolate mb-8">
            O que é o Mapa da Ansiedade?
          </h2>
          
          <p className="text-xl text-brown-medium mb-12 leading-relaxed">
            Nada de conselhos genéricos ou conversa superficial.
            <br />
            A sessão estratégica de 30 minutos comigo te ajuda a:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white/60 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gold-soft rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-chocolate" />
                </div>
                <p className="text-chocolate font-medium text-lg">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}