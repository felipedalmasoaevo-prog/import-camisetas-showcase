import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import product images
import camisaPoloAzul from "@/assets/products/camisa-polo-azul.jpg";
import camisetaPreta from "@/assets/products/camiseta-preta.jpg";
import camisetaRosa from "@/assets/products/camiseta-rosa.jpg";
import camisetaAzulRoyal from "@/assets/products/camiseta-azul-royal.jpg";
import poloBranca from "@/assets/products/polo-branca.jpg";
import camisetaAzulMasc from "@/assets/products/camiseta-azul-masc.jpg";
import poloAzulFem from "@/assets/products/polo-azul-fem.jpg";
import poloCinza from "@/assets/products/polo-cinza.jpg";
import poloVerde from "@/assets/products/polo-verde.jpg";

const products = [
  {
    title: "Camisas Personalizadas",
    description: "Camisas de alta qualidade com estampas exclusivas para eventos, promoções e uso casual.",
    images: [
      camisetaPreta,
      camisetaRosa,
      camisetaAzulRoyal,
      camisetaAzulMasc,
    ],
  },
  {
    title: "Uniformes Corporativos",
    description: "Uniformes elegantes e profissionais para empresas, estabelecimentos e equipes de trabalho.",
    images: [
      camisaPoloAzul,
      poloBranca,
      poloAzulFem,
      poloCinza,
      poloVerde,
    ],
  },
];

const ImageCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative group overflow-hidden rounded-xl">
      <div className="relative h-72 md:h-80 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              index === currentIndex 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            }`}
          />
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-white w-6" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 section-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/3 to-secondary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Nossos <span className="text-secondary">Produtos</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Especializados em dois segmentos para atender você com excelência
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ImageCarousel images={product.images} title={product.title} />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                <Button
                  className="w-full"
                  onClick={() => window.open("https://wa.me/5527981194278?text=Olá! Gostaria de saber mais sobre " + product.title, "_blank")}
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
