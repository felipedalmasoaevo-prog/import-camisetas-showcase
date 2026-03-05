const CLIENTS = [
  { name: "Nestlé", logo: "/clients/Nestle_textlogo_blue.svg" },
  { name: "Vale", logo: "/clients/ValeLogoUnit.png" },
];

const ClientsSection = () => {
  const loop = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-4">

        {/* Título igual ao padrão do site */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Empresas que confiam em nós
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            Marcas que já atendemos com uniformes e camisetas personalizadas
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative">

          {/* fade esquerda */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />

          {/* fade direita */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex gap-8 animate-clients-marquee hover:[animation-play-state:paused]">

            {loop.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center shrink-0 rounded-xl border bg-background px-10 py-6 shadow-sm"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

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
