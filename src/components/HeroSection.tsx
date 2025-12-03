import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-uniforms.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Diagonal decorative stripes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] border border-white/10 rounded-full" />
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/10 to-transparent" />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-[10%] w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-1/4 right-[15%] w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-[30%] w-24 h-24 bg-secondary/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
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
