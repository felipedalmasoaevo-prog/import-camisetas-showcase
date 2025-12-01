import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <Button
      variant="whatsapp"
      size="icon"
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl z-50 animate-fade-in hover:scale-110 transition-transform"
      onClick={() => window.open("https://wa.me/5527981194278?text=Olá! Gostaria de fazer um orçamento", "_blank")}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};

export default WhatsAppButton;
