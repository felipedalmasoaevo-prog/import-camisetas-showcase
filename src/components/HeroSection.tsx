import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-uniforms.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Camisetas Personalizadas
              <span className="block text-secondary-foreground">do Seu Jeito!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              Qualidade sem igual, entrega super rápida e preço justo para você{" "}
              <strong>renovar a aparência da sua equipe!</strong>
            </p>
            <p className="text-lg mb-8 text-white/80">
              Clique no botão abaixo para falar conosco!
            </p>
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              onClick={() => window.open("https://wa.me/5527981194278?text=Olá! Gostaria de fazer um orçamento", "_blank")}
            >
              Fazer um orçamento
            </Button>
            <p className="mt-6 text-white/70">
              Nossos consultores irão lhe orientar a encontrar o produto ideal para sua finalidade.
            </p>
          </div>
          <div className="animate-slide-in">
            <img
              src={heroImage}
              alt="Profissionais vestindo uniformes personalizados da Import Camisetas"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
