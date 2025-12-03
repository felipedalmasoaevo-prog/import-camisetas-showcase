const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              
              <span className="font-bold text-xl">Import Camisetas</span>
            </div>
            <p className="text-primary-foreground/80">
              Uniformes personalizados de qualidade para sua equipe.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button onClick={() => document.getElementById("produtos")?.scrollIntoView({
                behavior: "smooth"
              })} className="hover:text-primary-foreground transition-colors">
                  Produtos
                </button>
              </li>
              
              <li>
                <button onClick={() => document.getElementById("duvidas")?.scrollIntoView({
                behavior: "smooth"
              })} className="hover:text-primary-foreground transition-colors">
                  Dúvidas
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>WhatsApp: (27) 98119-4278</li>
              <li>Email: contato@importcamisetas.com.br</li>
              <li>Atendimento: Seg à Sex, 8h às 18h</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Import Camisetas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;