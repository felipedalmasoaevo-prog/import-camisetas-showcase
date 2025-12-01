import { Award, Shirt, Truck, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Award,
    title: "Qualidade Sem Igual",
    description: "Tecidos premium e acabamento impecável em todos os nossos produtos",
  },
  {
    icon: Shirt,
    title: "Personalize do Seu Jeito",
    description: "Total liberdade para criar o uniforme perfeito para sua equipe",
  },
  {
    icon: Truck,
    title: "Entregamos Rapidamente",
    description: "Prazos cumpridos e entrega expressa para todo o Brasil",
  },
  {
    icon: DollarSign,
    title: "Preço Justo",
    description: "O melhor custo-benefício do mercado sem comprometer a qualidade",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Por que escolher a <span className="text-primary">Import Camisetas</span>?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                  <benefit.icon className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
