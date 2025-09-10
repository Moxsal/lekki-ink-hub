import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import artistPortrait from "@/assets/artist-portrait.jpg";
import studioInterior from "@/assets/studio-interior.jpg";

const About = () => {
  const features = [
    {
      icon: "🏆",
      title: "Award-Winning Artists",
      description: "Our team consists of internationally recognized tattoo artists with years of experience and multiple awards."
    },
    {
      icon: "🧼",
      title: "World-Class Hygiene",
      description: "We exceed industry standards with hospital-grade sterilization and single-use equipment for every session."
    },
    {
      icon: "🎨",  
      title: "Custom Artistry",
      description: "Every tattoo is a unique masterpiece designed specifically for you, reflecting your personality and story."
    },
    {
      icon: "✨",
      title: "Premium Studio",
      description: "State-of-the-art equipment in a comfortable, luxurious environment designed for your optimal experience."
    }
  ];

  const certifications = [
    "Lagos State Health Department Certified",
    "International Tattoo Safety Standards",
    "Bloodborne Pathogen Training",
    "First Aid & CPR Certified",
    "Autoclave Sterilization Certified"
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
                About Tattoo Lagos
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nigeria's premier tattoo and piercing studio, where artistic excellence meets uncompromising safety standards.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2020, Tattoo Lagos began with a simple mission: to bring world-class tattoo artistry to Nigeria while maintaining the highest standards of safety and professionalism.
                  </p>
                  <p>
                    What started as a passion project has grown into Lekki's most trusted tattoo studio, serving clients from across Lagos and beyond. Our commitment to excellence has earned us recognition as the premier destination for custom tattoos and professional piercing services.
                  </p>
                  <p>
                    We believe that every tattoo tells a story, and we're honored to be part of your journey. Our artists work closely with each client to create meaningful, beautiful artwork that you'll be proud to wear for life.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild size="lg" className="cta-gradient">
                    <Link to="/gallery">View Our Work</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={artistPortrait} 
                  alt="Professional tattoo artist at work in our premium Lagos studio"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Choose Tattoo Lagos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-5xl mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Environment */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={studioInterior} 
                  alt="Premium tattoo studio interior in Lekki Lagos showing clean, modern workspace"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">Premium Studio Environment</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Our state-of-the-art studio is designed with your comfort and safety in mind. Every detail, from our advanced air filtration system to our ergonomic furniture, is carefully chosen to create the optimal tattooing experience.
                  </p>
                  <p>
                    We maintain hospital-grade cleanliness standards, using autoclave sterilization for all reusable equipment and single-use disposables for everything else. Our workspace is regularly inspected and certified by health authorities.
                  </p>
                  <p>
                    The studio features comfortable consultation areas, private tattooing rooms, and a relaxing atmosphere that helps you feel at ease throughout your session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-foreground">Certifications & Standards</h2>
              <p className="text-xl text-muted-foreground mb-12">
                We are committed to maintaining the highest standards of safety and professionalism in the industry.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-border/50">
                    <div className="text-primary text-xl">✓</div>
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Button asChild size="lg" className="cta-gradient">
                  <Link to="/contact">Book Your Consultation</Link>
                </Button>
              </div>
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
                <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
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

export default About;