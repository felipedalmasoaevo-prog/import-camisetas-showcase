import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Camisetas Personalizadas",
    description: "Camisetas de alta qualidade com sua marca ou design exclusivo",
    features: ["100% algodão", "Diversos tamanhos", "Impressão durável", "Cores variadas"],
  },
  {
    title: "Uniformes Esportivos",
    description: "Uniformes profissionais para times e academias",
    features: ["Tecido respirável", "Secagem rápida", "Anti-suor", "Design exclusivo"],
  },
  {
    title: "Abadás Personalizados",
    description: "Perfeitos para eventos, festas e promoções",
    features: ["Confortáveis", "Cores vibrantes", "Qualidade garantida", "Entrega rápida"],
  },
  {
    title: "Uniformes Corporativos",
    description: "Uniformes elegantes para empresas e estabelecimentos",
    features: ["Visual profissional", "Várias opções", "Bordado incluso", "Durabilidade"],
  },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Nossos <span className="text-secondary">Produtos</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Oferecemos uma linha completa de produtos personalizados para atender todas as suas necessidades
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open("https://wa.me/5527981194278?text=Olá! Gostaria de saber mais sobre " + product.title, "_blank")}
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
