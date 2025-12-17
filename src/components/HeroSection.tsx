import { useEffect, useState } from "react";

// Simulando as imagens com placeholders
const heroWoman = "/src/assets/hero-man.png";
const heroMan = "/src/assets/hero-woman.png";

export default function HeroSection() {
  const [frontImage, setFrontImage] = useState('woman'); // 'woman' ou 'man'
  const [autoSwitch, setAutoSwitch] = useState(true);

  // Auto-switch a cada 3 segundos
  useEffect(() => {
    if (!autoSwitch) return;
    
    const interval = setInterval(() => {
      setFrontImage(prev => prev === 'woman' ? 'man' : 'woman');
    }, 3000);

    return () => clearInterval(interval);
  }, [autoSwitch]);
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[500px] overflow-hidden bg-gradient-to-br from-[#1f3a8a] via-[#355fb3] to-[#0bb37b]">
      
      {/* CSS para animações customizadas */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideIn {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; transform: translateX(-100%); }
          50% { opacity: 1; transform: translateX(100%); }
        }
      `}</style>
      
      {/* Padrão decorativo de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border-4 border-white rounded-lg rotate-45"></div>
        <div className="absolute top-1/3 right-20 w-40 h-40 border-4 border-white rounded-full"></div>
      </div>

      {/* Container principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[600px] md:min-h-[500px] py-10 lg:py-20">
          
          {/* Conteúdo de texto */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 z-20">
            {/* Badge decorativo */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white text-sm font-medium">Entregas Rápidas</span>
            </div>

            <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 lg:mb-6">
              {/* Linha 1 - com efeito de máquina de escrever */}
              <span className="inline-block text-white relative">
                Camisetas
                {/* <span className="absolute -right-1 top-0 w-0.5 h-full bg-green-400 animate-pulse"></span> */}
              </span>
              <br />
              
              {/* Linha 2 - destaque principal com múltiplos efeitos */}
              <span className="relative inline-block group">
                {/* Sombra animada de fundo */}
                <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 opacity-50 animate-pulse"></span>
                
                {/* Texto com gradiente animado */}
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 animate-[gradient_3s_ease_infinite] font-extrabold" style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient 3s ease infinite'
                }}>
                  Personalizadas
                </span>
                
                {/* Sublinhado decorativo animado */}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-[shimmer_2s_ease-in-out_infinite]"></span>
                
              </span>
              <br />
              
              {/* Linha 3 - com estilo bold e outline */}
              <span className="relative inline-block">
                <span className="absolute inset-0 text-white/20 blur-sm scale-105" style={{WebkitTextStroke: '2px rgba(255,255,255,0.3)'}}>
                  Do Seu Jeito!
                </span>
                <span className="relative text-white font-black tracking-tight">
                  Do Seu Jeito!
                </span>

              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/90 mb-6 lg:mb-8 max-w-md mx-auto lg:mx-0">
              Qualidade sem igual, entrega super rápida e preço justo para você renovar a aparência da sua equipe!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/5527981194278?text=Olá! Gostaria de fazer um orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-base lg:text-lg font-semibold py-3 px-6 lg:px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Fazer Orçamento
              </a>
              
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-base lg:text-lg font-semibold py-3 px-6 lg:px-8 rounded-lg transition-all border-2 border-white/30"
              >
                Ver Catálogo
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="font-semibold">5.0</span>
                <span>• 500+ avaliações</span>
              </div>
            </div>
          </div>

          {/* Imagens - com animação e cards criativos */}
          <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-[500px] flex items-center justify-center lg:justify-end">
            
            {/* Container das imagens */}
            <div 
              className="relative w-full h-full max-w-[500px] lg:max-w-none"
              onMouseEnter={() => setAutoSwitch(false)}
              onMouseLeave={() => setAutoSwitch(true)}
            >
              
              {/* Imagem 1 - Mulher */}
              <div 
                className={`absolute left-[5%] lg:right-[15%] lg:left-auto bottom-0 h-[75%] lg:h-[85%] w-auto transition-all duration-700 ease-in-out cursor-pointer group ${
                  frontImage === 'woman' ? 'z-30 lg:scale-105' : 'z-20 lg:scale-95 lg:opacity-70'
                }`}
                onClick={() => setFrontImage('woman')}
                onMouseEnter={() => setFrontImage('woman')}
              >
                {/* Card decorativo atrás */}
                <div className={`absolute -inset-4 bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 -z-10 transform -rotate-3 transition-all duration-700 ${
                  frontImage === 'woman' ? 'lg:shadow-2xl lg:shadow-blue-500/50' : ''
                }`}></div>
                
                <img
                  src={heroWoman}
                  alt="Mulher vestindo uniforme polo azul"
                  className="h-full w-auto object-contain scale-110 md:scale-100 md:translate-y-3 drop-shadow-2xl relative z-10 transition-transform duration-700 -rotate-3"
                />
                
                {/* Badge flutuante */}
                <div className={`absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg transition-all duration-900 ${
                  frontImage === 'woman' ? 'animate-bounce' : 'opacity-50'
                }`}>
                  ⚡ Rápido
                </div>

                {/* Indicador de hover - apenas desktop */}
                {frontImage !== 'woman' && (
                  <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm font-semibold bg-blue-500/80 px-4 py-2 rounded-full backdrop-blur-sm">
                      Clique para ver
                    </div>
                  </div>
                )}
              </div>

              {/* Imagem 2 - Homem */}
              <div 
                className={`absolute right-[5%] lg:right-0 bottom-0 h-[70%] lg:h-[90%] w-auto transition-all duration-700 ease-in-out cursor-pointer group ${
                  frontImage === 'man' ? 'z-30 lg:scale-105' : 'z-20 lg:scale-95 lg:opacity-70'
                }`}
                onClick={() => setFrontImage('man')}
                onMouseEnter={() => setFrontImage('man')}
              >
                {/* Card decorativo atrás */}
                <div className={`absolute -inset-4 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-3xl border-2 border-white/20 -z-10 transform rotate-2 transition-all duration-700 ${
                  frontImage === 'man' ? 'lg:shadow-2xl lg:shadow-green-500/50' : ''
                }`}></div>
                
                <img
                  src={heroMan}
                  alt="Homem vestindo uniforme polo branca"
                  className="h-full w-auto object-contain scale-110 md:scale-100 md:translate-y-3 drop-shadow-2xl relative z-10 rotate-2 transition-transform duration-700"
                />
                
                {/* Badge flutuante */}
                <div className={`absolute -top-2 -left-2 bg-blue-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg transition-all duration-900 ${
                  frontImage === 'man' ? 'animate-pulse' : 'opacity-50'
                }`}>
                  ✨ Personalizado
                </div>

                {/* Indicador de hover - apenas desktop */}
                {frontImage !== 'man' && (
                  <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm font-semibold bg-green-500/80 px-4 py-2 rounded-full backdrop-blur-sm">
                      Clique para ver
                    </div>
                  </div>
                )}
              </div>

              {/* Indicadores de navegação - apenas desktop */}
              <div className="hidden lg:flex absolute -bottom-8 left-1/2 -translate-x-1/2 gap-3 z-40">
                <button
                  onClick={() => setFrontImage('woman')}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    frontImage === 'woman' ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label="Ver mulher"
                />
                <button
                  onClick={() => setFrontImage('man')}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    frontImage === 'man' ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label="Ver homem"
                />
              </div>

              {/* Elemento decorativo - círculo animado */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Elemento decorativo - estrelas flutuantes */}
              {/* <div className="absolute top-10 right-10 lg:right-20">
                <div className="relative">
                  <span className="absolute text-2xl animate-[ping_2s_ease-in-out_infinite]">✨</span>
                  <span className="text-2xl">✨</span>
                </div>
              </div> */}
              
              <div className="absolute bottom-20 left-10 lg:left-auto lg:right-32">
                <div className="relative">
                  <span className="absolute text-xl animate-[ping_3s_ease-in-out_infinite_1s]">⭐</span>
                  <span className="text-xl">⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Onda decorativa no rodapé */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 sm:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white" fillOpacity="0.1"></path>
        </svg>
      </div>
    </section>
  );
}