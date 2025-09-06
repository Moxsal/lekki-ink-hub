import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import portfolioImage from "@/assets/portfolio-1.jpg";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "traditional", label: "Traditional" },
    { id: "realistic", label: "Realistic" },
    { id: "geometric", label: "Geometric" },
    { id: "blackwork", label: "Blackwork" }
  ];

  // Mock portfolio items - in real app, these would come from a database
  const portfolioItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1].id,
    image: portfolioImage,
    title: `Artwork ${i + 1}`,
    description: "Premium tattoo artwork"
  }));

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Masterpiece Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of stunning tattoos and see the artistry that sets us apart
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={activeCategory === category.id ? "cta-gradient" : "border-primary text-primary hover:bg-primary hover:text-white"}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item) => (
            <Card key={item.id} className="card-premium group overflow-hidden cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button className="cta-gradient px-8 py-4 text-lg">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;