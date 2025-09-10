import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Import portfolio images
import tattooRealism from "@/assets/tattoo-realism.jpg";
import tattooWatercolor from "@/assets/tattoo-watercolor.jpg";
import tattooMinimalist from "@/assets/tattoo-minimalist.jpg";
import tattooTribal from "@/assets/tattoo-tribal.jpg";
import tattooPortrait from "@/assets/tattoo-portrait.jpg";
import piercingEar from "@/assets/piercing-ear.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Realism", "Color", "Minimalist", "Tribal", "Portraits", "Piercings"];

  const portfolioItems = [
    {
      category: "Realism",
      image: tattooRealism,
      title: "Black & Grey Portrait",
      description: "Realistic portrait work with incredible detail and shading"
    },
    {
      category: "Color",
      image: tattooWatercolor,
      title: "Watercolor Design",
      description: "Vibrant watercolor-style tattoo with flowing colors"
    },
    {
      category: "Minimalist",
      image: tattooMinimalist,
      title: "Geometric Lines",
      description: "Clean, minimalist geometric design with precise line work"
    },
    {
      category: "Tribal",
      image: tattooTribal,
      title: "Traditional Tribal",
      description: "Bold tribal pattern with cultural significance"
    },
    {
      category: "Portraits",
      image: tattooPortrait,
      title: "Realistic Portrait",
      description: "Highly detailed portrait work showcasing technical skill"
    },
    {
      category: "Piercings",
      image: piercingEar,
      title: "Ear Piercing Setup",
      description: "Professional ear piercing with quality jewelry"
    },
    {
      category: "Color",
      image: portfolio1,
      title: "Colorful Sleeve",
      description: "Full sleeve tattoo with vibrant colors and intricate details"
    },
    {
      category: "Realism",
      image: tattooRealism,
      title: "Animal Portrait",
      description: "Lifelike animal portrait with stunning realism"
    }
  ];

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Gallery
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our portfolio of custom tattoos and professional piercing work. Each piece represents our commitment to artistic excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 transition-all duration-200 ${
                    activeCategory === category 
                      ? "cta-gradient text-white" 
                      : "border-border hover:bg-primary/10"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="relative aspect-square overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={`${item.title} - ${item.description}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                              <p className="text-sm text-white/80">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={`${item.title} - ${item.description}`}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6 rounded-b-lg">
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/80">{item.description}</p>
                        <div className="mt-4">
                          <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Create Your Masterpiece?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's bring your vision to life with a custom tattoo designed just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cta-gradient text-lg px-8 py-3">
                <Link to="/contact">Book Your Session</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 block">
                Tattoo Lagos
              </Link>
              <p className="text-muted-foreground mb-4">
                Lekki's premier tattoo and piercing studio. Where art meets skin perfection.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link to="/reviews" className="hover:text-primary transition-colors">Reviews</Link></li>
                <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Lekki Phase 1, Lagos</p>
                <p>+2348138068093</p>
                <p>Tattoolagos1@gmail.com</p>
                <p>Mon-Sat: 9AM-9PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2024 Tattoo Lagos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;