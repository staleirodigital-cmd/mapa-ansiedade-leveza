import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "A sessão me ajudou a entender que minha ansiedade tinha um padrão. Pela primeira vez consegui ver de onde vinham meus medos e o que fazer com eles.",
      name: "Ana Carolina, 34 anos"
    },
    {
      text: "Maria me mostrou que não era 'frescura' nem 'coisa da minha cabeça'. Saí da sessão com clareza sobre meus gatilhos e um plano real de ação.",
      name: "Juliana Santos, 28 anos"
    },
    {
      text: "Finalmente alguém que me escutou de verdade. Em 30 minutos consegui mais direcionamento do que em meses tentando sozinha.",
      name: "Patrícia Lima, 41 anos"
    }
  ];

  return (
    <section className="bg-beige-light py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-chocolate text-center mb-12">
            O que dizem as mulheres que já passaram pela sessão:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/70 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Quote className="w-8 h-8 text-gold-soft mb-4" />
                <p className="text-chocolate mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-brown-medium">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}