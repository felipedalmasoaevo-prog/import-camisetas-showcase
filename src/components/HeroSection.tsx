import heroWoman from "@/assets/hero-woman.png";
import heroMan from "@/assets/hero-man.png";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[500px]
        overflow-hidden
        bg-gradient-to-br
        from-[#1f3a8a]
        via-[#355fb3]
        to-[#0bb37b]
        py-20
      "
    >
      {/* Pessoas sobre o fundo - sem wrapper, sem efeitos */}
      <img
        src={heroMan}
        alt="Homem vestindo uniforme polo branca"
        className="absolute right-0 bottom-0 h-[90%] w-auto object-contain object-bottom pointer-events-none"
      />
      <img
        src={heroWoman}
        alt="Mulher vestindo uniforme polo azul"
        className="absolute right-[15%] bottom-0 h-[85%] w-auto object-contain object-bottom pointer-events-none"
      />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 flex items-center">
        <div className="w-1/2 text-left">
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            Camisetas Personalizadas<br />Do Seu Jeito!
          </h1>

          <p className="text-lg text-white/90 mb-6">
            Qualidade sem igual, entrega super rápida e preço justo para você
            renovar a aparência da sua equipe!
          </p>

          <a
            href="https://wa.me/5527981194278?text=Olá! Gostaria de fazer um orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-green-600 hover:bg-green-700
              text-white text-lg font-semibold
              py-3 px-6 rounded-lg
              transition
            "
          >
            Fazer um orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
