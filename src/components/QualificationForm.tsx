import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Heart, Calendar } from "lucide-react";

export default function QualificationForm() {
  return (
    <section className="bg-beige-light py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-chocolate mb-4">
              Agende sua sessão gratuita
            </h2>
            <p className="text-lg text-brown-medium">
              Preencha com carinho. Vai me ajudar a personalizar sua sessão para o que você realmente precisa.
            </p>
          </div>

          <form className="bg-white/80 p-8 rounded-2xl shadow-lg space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center text-chocolate">
                <User className="w-4 h-4 mr-2" />
                Nome completo
              </Label>
              <Input 
                id="name" 
                placeholder="Como você gostaria de ser chamada?"
                className="border-brown-medium/30 focus:border-brown-medium"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center text-chocolate">
                <Mail className="w-4 h-4 mr-2" />
                E-mail
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="seu@email.com"
                className="border-brown-medium/30 focus:border-brown-medium"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center text-chocolate">
                📱 WhatsApp
              </Label>
              <Input 
                id="phone" 
                placeholder="(11) 99999-9999"
                className="border-brown-medium/30 focus:border-brown-medium"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="symptoms" className="flex items-center text-chocolate">
                <Heart className="w-4 h-4 mr-2" />
                Qual sintoma mais te incomoda hoje?
              </Label>
              <Textarea 
                id="symptoms" 
                placeholder="Me conte um pouco sobre o que você está sentindo..."
                className="border-brown-medium/30 focus:border-brown-medium min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="availability" className="flex items-center text-chocolate">
                <Calendar className="w-4 h-4 mr-2" />
                Melhor horário para você
              </Label>
              <Select>
                <SelectTrigger className="border-brown-medium/30 focus:border-brown-medium">
                  <SelectValue placeholder="Selecione seu horário preferido" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Manhã (9h às 12h)</SelectItem>
                  <SelectItem value="afternoon">Tarde (13h às 17h)</SelectItem>
                  <SelectItem value="evening">Noite (18h às 21h)</SelectItem>
                  <SelectItem value="flexible">Horário flexível</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="cta" size="xl" className="w-full">
              👉 Quero reservar minha sessão gratuita agora
            </Button>

            <p className="text-center text-sm text-brown-medium">
              Seus dados estão protegidos. Sessão 100% gratuita.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}