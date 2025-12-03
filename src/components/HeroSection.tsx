import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-uniforms.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        {/* Subtle geometric shapes */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-white/20 rounded-full" />
        <div className="absolute top-48 right-1/3 w-3 h-3 bg-secondary/30 rounded-full" />
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-white/15 rounded-full" />
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
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
