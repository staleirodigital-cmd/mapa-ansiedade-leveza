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
             <img src="https://healthyodyssey.com/wp-content/uploads/2025/09/54fb458b-deb6-4c01-8734-53ff501ae2af.jpeg" alt="" />
        <img src="https://healthyodyssey.com/wp-content/uploads/2025/09/af14daa9-c59a-4c4c-bc3b-99ece69d7f61.jpeg" alt="" />
        <img src="https://healthyodyssey.com/wp-content/uploads/2025/09/Captura-de-tela-2025-09-05-111910.png" alt="" />
        <img src="https://healthyodyssey.com/wp-content/uploads/2025/09/Captura-de-tela-2025-09-05-111955.png" alt="" />
        <img src="https://healthyodyssey.com/wp-content/uploads/2025/09/f772bdad-eb35-4f45-a3c4-2ec1ebdce5e9.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
