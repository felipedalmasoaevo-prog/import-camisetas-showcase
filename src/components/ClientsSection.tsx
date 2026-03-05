const CLIENTS = [
  { name: "Nestlé", logo: "/clients/Nestle_textlogo_blue.svg" },
  { name: "Vale", logo: "/clients/ValeLogoUnit.png" },
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto text-center">

        <h2 className="text-3xl font-bold mb-4">
          Empresas que confiam em nós
        </h2>

        <p className="text-muted-foreground mb-10">
          Algumas empresas que já utilizam nossos uniformes.
        </p>

        <div className="flex justify-center items-center gap-16 flex-wrap">

          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-16 opacity-70 hover:opacity-100 transition"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
