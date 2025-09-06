import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="hero-text mb-6 animate-fade-in">
          Best Tattoo & Piercing Studio in Lekki
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
          Premium artistry, world-class hygiene standards, and exceptional service in the heart of Lagos
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="cta-gradient px-8 py-4 text-lg">
            Book Appointment
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg">
            View Portfolio
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">5★</div>
            <div className="text-sm">Google Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">3+</div>
            <div className="text-sm">Years Experience</div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="cta-gradient rounded-full h-16 w-16 shadow-lg">
          📱
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;