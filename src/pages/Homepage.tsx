import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <h1 className="hero-text mb-6 leading-tight">
              Tattoo Lagos
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Best Tattoo & Piercing Studio in Lekki
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
              Where art meets skin perfection. Experience premium tattoo artistry and professional piercing services in Lagos's most trusted studio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="cta-gradient text-lg px-8 py-3">
                <Link to="/contact">Book Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-primary/50 hover:bg-primary/10">
                <Link to="/services">View Services</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-3">
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Studio Intro */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Premium Tattoo Studio in Lekki
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            At Tattoo Lagos, we combine artistic excellence with world-class hygiene standards. Our award-winning artists create custom tattoos and provide professional piercing services in a premium, comfortable environment. Every piece of art we create tells your unique story.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Custom Artistry</h3>
              <p className="text-muted-foreground">Unique designs tailored to your vision and story</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Award-Winning Artists</h3>
              <p className="text-muted-foreground">Recognized expertise in multiple tattoo styles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Premium Experience</h3>
              <p className="text-muted-foreground">World-class hygiene and comfortable studio environment</p>
            </div>
          </div>

          <div className="mt-12">
            <Button asChild size="lg" className="cta-gradient text-lg px-8 py-3">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

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
              <div className="flex space-x-4">
                <div className="text-2xl">📱</div>
                <div className="text-2xl">📧</div>
                <div className="text-2xl">📍</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
                <li><Link to="/reviews" className="hover:text-primary transition-colors">Reviews</Link></li>
                <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link to="/aftercare" className="hover:text-primary transition-colors">Aftercare</Link></li>
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
            <p>&copy; 2024 Tattoo Lagos. All rights reserved. | Premium tattoo studio in Lekki, Lagos, Nigeria</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;