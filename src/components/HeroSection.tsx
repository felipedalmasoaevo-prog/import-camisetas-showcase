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
        py-12
        md:py-20
      "
    >
      {/* Layout container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center md:items-start">
        
        {/* Texto */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
            Camisetas Personalizadas<br />Do Seu Jeito!
          </h1>

          <p className="text-base md:text-lg text-white/90 mb-6">
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
              text-white text-base md:text-lg font-semibold
              py-3 px-6 rounded-lg
              transition
            "
          >
            Fazer um orçamento
          </a>
        </div>

        {/* Imagens das pessoas */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end gap-0 md:gap-0 mt-8 md:mt-0">
          <img
            src={heroWoman}
            alt="Mulher vestindo uniforme polo azul"
            className="w-40 md:w-auto max-w-full h-auto max-h-[250px] md:max-h-[350px] object-contain"
          />
          <img
            src={heroMan}
            alt="Homem vestindo uniforme polo branca"
            className="w-40 md:w-auto max-w-full h-auto max-h-[250px] md:max-h-[350px] object-contain -mt-4 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
}
