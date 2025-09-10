import { Shield, Heart, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-beige-light border-t border-gray-sand/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Nome */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-chocolate mb-2">
              Mapa da Ansiedade
            </h3>
            <p className="text-brown-medium">
              Sessões estratégicas para mulheres que querem clareza emocional
            </p>
          </div>

          {/* Selo de Privacidade */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="flex items-center text-gray-sand">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm">Dados protegidos</span>
            </div>
            <div className="flex items-center text-gray-sand">
              <Heart className="w-5 h-5 mr-2" />
              <span className="text-sm">Sessão gratuita</span>
            </div>
          </div>

          {/* Frase de reforço */}
          <div className="bg-white/50 p-6 rounded-xl shadow-sm">
            <p className="text-brown-medium text-lg">
              "Seus dados estão seguros. Sessão 100% gratuita, com escuta verdadeira e direcionamento real."
            </p>
          </div>

          {/* Instagram */}
          <div className="mt-8 flex justify-center">
            <a 
              href="https://www.instagram.com/psicologa.mariaantunes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-brown-medium hover:text-chocolate transition-colors duration-300 hover:scale-110 transform"
            >
              <Instagram className="w-6 h-6 mr-2" />
              <span className="text-lg">@psicologa.mariaantunes</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-sand/30">
            <p className="text-gray-sand text-sm">
              © {new Date().getFullYear()} Maria Antunes - Psicóloga CRP 09/14827. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}