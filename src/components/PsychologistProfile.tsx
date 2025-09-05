import profileImage from "@/assets/maria-antunes-profile.jpg";

export default function PsychologistProfile() {
  return (
    <section className="bg-beige-light py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Maria Antunes - Psicóloga especialista em ansiedade" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gold-soft rounded-full opacity-30"></div>
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-chocolate rounded-full opacity-20"></div>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-chocolate mb-6">
                Maria Antunes
              </h2>
              <div className="space-y-6 text-brown-medium leading-relaxed">
                <p className="text-lg">
                  Psicóloga especialista em <span className="font-semibold text-chocolate">Terapia Cognitivo-Comportamental</span>, com foco no tratamento da ansiedade em mulheres.
                </p>
                <p className="text-lg">
                  Já ajudei centenas de mulheres a saírem do ciclo da autocobrança, do medo e da mente acelerada — com escuta verdadeira, clareza emocional e ferramentas práticas.
                </p>
                <p className="text-lg">
                  Criei o <span className="font-semibold text-chocolate">Mapa da Ansiedade</span> como um primeiro passo simples, acessível e transformador.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}