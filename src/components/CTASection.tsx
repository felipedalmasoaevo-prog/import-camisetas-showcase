import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 accent-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para renovar os uniformes da sua equipe?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Entre em contato agora e receba um orçamento personalizado sem compromisso!
          </p>
          <Button
            variant="hero"
            size="lg"
            className="text-lg px-8 py-6 h-auto bg-white text-secondary hover:bg-white/90"
            onClick={() => window.open("https://wa.me/5527981194278?text=Olá! Gostaria de fazer um orçamento", "_blank")}
          >
            <MessageCircle className="mr-2" />
            Falar com especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
