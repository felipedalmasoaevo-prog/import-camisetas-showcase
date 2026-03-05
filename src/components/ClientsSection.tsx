const ClientsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10">
          Empresas que confiam em nós
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">

          <img src="/clients/Nestle_textlogo_blue.svg" alt="Nestlé" className="mx-auto h-12" />

          <img src="/clients/ValeLogoUnit.png" alt="Vale" className="mx-auto h-12" />

        </div>

      </div>
    </section>
  );
};

export default ClientsSection;
