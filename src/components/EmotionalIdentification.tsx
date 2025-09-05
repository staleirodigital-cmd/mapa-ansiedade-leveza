export default function EmotionalIdentification() {
  const symptoms = [
    {
      emoji: "🧠",
      text: "Sua mente vive acelerada, cheia de pensamentos negativos?"
    },
    {
      emoji: "😴", 
      text: "O sono não vem porque a cabeça não desliga?"
    },
    {
      emoji: "⚠️",
      text: "Parece que algo ruim está sempre prestes a acontecer?"
    },
    {
      emoji: "🌀",
      text: "Você se cobra demais e ainda sente que não é o suficiente?"
    }
  ];

  return (
    <section className="bg-straw py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-chocolate mb-12">
            Você sente que...
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {symptoms.map((symptom, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-white/50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-4xl flex-shrink-0">{symptom.emoji}</span>
                <p className="text-lg text-chocolate text-left font-medium">
                  {symptom.text}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/70 p-8 rounded-2xl shadow-lg">
            <p className="text-xl lg:text-2xl font-semibold text-chocolate">
              Se respondeu sim pra qualquer um desses pontos, essa sessão foi feita pra você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}