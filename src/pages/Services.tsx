import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Custom Tattoos",
      description: "We design and create unique tattoos tailored to your personality, story, or artistic vision. From small minimal pieces to full sleeves, we bring your ideas to life with precision and creativity.",
      features: [
        "Personalized design consultation",
        "Unlimited revisions until perfect",
        "All sizes from small to large pieces",
        "Original artwork created just for you"
      ],
      icon: "🎨"
    },
    {
      title: "Black & Grey Realism",
      description: "Detailed, shaded designs that give a lifelike, dramatic effect. Perfect for portraits, animals, or spiritual themes with incredible depth and dimension.",
      features: [
        "Photorealistic portrait work",
        "Animal and nature scenes",
        "Memorial and tribute pieces",
        "Fine line detail work"
      ],
      icon: "🖤"
    },
    {
      title: "Color Tattoos",
      description: "Bright, vivid tattoos that pop with personality. From watercolor effects to bold traditional colors, we make your artwork stand out beautifully.",
      features: [
        "Vibrant color palettes",
        "Watercolor and abstract styles",
        "Traditional color work",
        "Color correction and enhancement"
      ],
      icon: "🌈"
    },
    {
      title: "Minimalist & Line Art",
      description: "Simple, elegant tattoos with clean lines and subtle designs. Ideal for first-time tattoos or those who prefer a sleek, understated style.",
      features: [
        "Clean, precise line work",
        "Geometric patterns",
        "Small symbolic designs",
        "Perfect for beginners"
      ],
      icon: "✨"
    },
    {
      title: "Tribal & Traditional Tattoos",
      description: "Bold, timeless patterns inspired by cultural art forms. These tattoos make a strong statement and carry deep meaning rooted in tradition.",
      features: [
        "Authentic tribal patterns",
        "Cultural significance research",
        "Bold, striking designs",
        "Traditional techniques"
      ],
      icon: "🔥"
    },
    {
      title: "Piercing Services",
      description: "Professional body piercing in a safe, hygienic environment. We offer ear, nose, and other piercing options with proper aftercare guidance.",
      features: [
        "Sterile single-use needles",
        "High-quality jewelry options",
        "Professional aftercare guidance",
        "Safe, comfortable environment"
      ],
      icon: "💎"
    },
    {
      title: "Tattoo Cover-Ups & Redesigns",
      description: "Transform old or unwanted tattoos into new works of art. Our artists specialize in creative solutions that give your skin a fresh start.",
      features: [
        "Expert cover-up design",
        "Color correction techniques",
        "Creative transformation solutions",
        "Free consultation for assessment"
      ],
      icon: "🔄"
    },
    {
      title: "Consultations",
      description: "Not sure what design to choose? We provide one-on-one consultations to help you explore styles, placements, and custom designs before booking your session.",
      features: [
        "Personalized design advice",
        "Style and placement guidance",
        "Sizing and timeline discussion",
        "No-pressure environment"
      ],
      icon: "💬"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional tattoo and piercing services crafted with artistic excellence and the highest safety standards.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full cta-gradient group-hover:scale-105 transition-transform duration-200">
                      <Link to="/contact" className="w-full h-full flex items-center justify-center">
                        Book This Service
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a free consultation to discuss your ideas and get a custom quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cta-gradient text-lg px-8 py-3">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/gallery">View Our Work</Link>
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
                <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
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

export default Services;