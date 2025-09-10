import { Button } from "@/components/ui/button";
import heroImage from "@/assets/maria-antunes-hero.jpg";

export default function HeroSection() {
  return (
    <section className="bg-beige-light min-h-screen flex items-center py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-chocolate leading-tight mb-6">
              Descubra o que está por trás da sua ansiedade — e onde está o ponto de virada.
            </h1>
            <p className="text-lg lg:text-xl text-brown-medium mb-8 leading-relaxed">
              Na sessão gratuita Mapa da Ansiedade, você recebe um diagnóstico emocional e um plano inicial de ação, feito sob medida pra sua realidade.
            </p>
            <div className="text-brown-medium mb-8 space-y-2">
              <p className="flex items-center justify-center lg:justify-start text-lg">
                🔍 30 minutos. Online. Direto ao ponto. Gratuito.
              </p>
            </div>
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full lg:w-auto whitespace-normal text-center leading-snug"
              onClick={() => window.open('https://www.typeform.com/templates/product-recommendation-quiz-template', '_blank')}
            >
              👉 Quero meu Mapa da Ansiedade gratuito
            </Button>
          </div>

          {/* Imagem */}
          <div className="order-first lg:order-last">
            <div className="relative">
              <img 
                src="https://healthyodyssey.com/wp-content/uploads/2025/09/Untitled-design-28.png" 
                alt="Psicóloga Maria Antunes em ambiente acolhedor" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold-soft rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-chocolate rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
