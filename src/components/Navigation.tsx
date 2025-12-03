import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Import Camisetas" className="h-10 w-auto" />
            <span className="font-bold text-xl text-foreground">Import Camisetas</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("duvidas")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Dúvidas
            </button>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => window.open("https://wa.me/5527981194278?text=Olá! Gostaria de fazer um orçamento", "_blank")}
            >
              Fazer um orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("duvidas")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Dúvidas
            </button>
            <Button
              variant="whatsapp"
              size="lg"
              className="w-full"
              onClick={() => window.open("https://wa.me/5527981194278?text=Olá! Gostaria de fazer um orçamento", "_blank")}
            >
              Fazer um orçamento
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
