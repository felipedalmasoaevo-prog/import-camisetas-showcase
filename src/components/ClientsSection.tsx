const CLIENTS = [
  { name: "Nestlé", logo: "/clients/Nestle_textlogo_blue.svg" },
  { name: "Vale", logo: "/clients/ValeLogoUnit.png" },
];

const ClientsSection = () => {
  // duplica para dar efeito “infinito”
  const loop = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="py-14 md:py-20 bg-muted/30 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Empresas que confiam em nós
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            Marcas que já atendemos com uniformes e camisetas personalizadas.
          </p>
        </div>

        {/* Área do carrossel */}
        <div className="relative mt-10">
          {/* Fade nas laterais (fica “premium”) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex gap-6 animate-clients-marquee hover:[animation-play-state:paused]">
            {loop.map((c, idx) => (
              <div
                key={`${c.name}-${idx}`}
                className="flex items-center justify-center shrink-0 rounded-xl border bg-background px-8 py-5 shadow-sm"
                title={c.name}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-10 md:h-12 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS local do marquee */}
      <style>{`
        @keyframes clients-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-clients-marquee {
          width: max-content;
          animation: clients-marquee 18s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
