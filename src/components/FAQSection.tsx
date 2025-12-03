import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual o prazo de entrega?",
    answer: "O prazo varia de acordo com a quantidade e complexidade do pedido, mas geralmente trabalhamos com 7 a 15 dias úteis após aprovação do layout. Para pedidos urgentes, consulte disponibilidade de entrega expressa.",
  },
  {
    question: "Qual a quantidade mínima de peças?",
    answer: "Trabalhamos com pedidos a partir de 10 unidades. Quanto maior a quantidade, melhor o preço unitário. Entre em contato para receber uma proposta personalizada.",
  },
  {
    question: "Como funciona a personalização?",
    answer: "Você envia sua arte ou ideia, nossa equipe desenvolve o layout para aprovação. Após aprovado, iniciamos a produção. Aceitamos logos, textos, números e designs personalizados.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos PIX, cartão de crédito, boleto bancário e transferência. Para pedidos maiores, oferecemos condições especiais de parcelamento.",
  },
  {
    question: "Vocês fazem entregas em todo o Brasil?",
    answer: "Sim! Entregamos para todo o território nacional através de transportadoras parceiras confiáveis. O frete é calculado de acordo com o CEP de destino.",
  },
];

const FAQSection = () => {
  return (
    <section id="duvidas" className="py-20 section-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s' }} />
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Dúvidas <span className="text-primary">Frequentes</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Tire suas dúvidas sobre nossos produtos e serviços
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border-2 rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
