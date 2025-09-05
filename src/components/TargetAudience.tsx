export default function TargetAudience() {
  const targetPoints = [
    {
      emoji: "🧠",
      text: "Sentir que a ansiedade está influenciando suas decisões"
    },
    {
      emoji: "💼",
      text: "Estar exausta de tentar sozinha e não ver mudança real"
    },
    {
      emoji: "😓",
      text: "Ter dificuldade em dormir ou relaxar"
    },
    {
      emoji: "⚡",
      text: "Sofrer com autocobrança, medo constante e mente acelerada"
    }
  ];

  return (
    <section className="bg-beige-light py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-chocolate text-center mb-12">
            Essa sessão é pra você se...
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetPoints.map((point, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 p-6 bg-white/60 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl flex-shrink-0">{point.emoji}</span>
                <p className="text-lg text-chocolate font-medium">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}