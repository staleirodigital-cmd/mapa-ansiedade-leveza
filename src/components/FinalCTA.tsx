import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-gold-soft py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-chocolate mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-chocolate">
              As vagas são limitadas por agenda.
            </h2>
          </div>
          
          <p className="text-xl text-chocolate mb-8 leading-relaxed">
            Reserve agora sua sessão gratuita e receba seu diagnóstico emocional.
          </p>

          <Button variant="cta-final" size="xl" className="w-full lg:w-auto">
            👉 Quero reservar minha sessão gratuita agora
          </Button>

          <p className="mt-6 text-sm text-chocolate/80">
            Vagas limitadas • Sessão 100% gratuita • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}