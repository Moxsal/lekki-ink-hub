import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import artistPortrait from "@/assets/artist-portrait.jpg";
import studioInterior from "@/assets/studio-interior.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: "🏆",
      title: "Award-Winning Artists",
      description: "Our certified artists have years of experience and international recognition"
    },
    {
      icon: "🧼",
      title: "World-Class Hygiene",
      description: "Hospital-grade sterilization and single-use equipment for your safety"
    },
    {
      icon: "🎨",
      title: "Custom Artistry",
      description: "Every tattoo is a unique masterpiece designed specifically for you"
    },
    {
      icon: "💎",
      title: "Premium Studio",
      description: "Luxury environment with top-of-the-line equipment and comfortable spaces"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Tattoo Lagos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lekki's premier tattoo and piercing studio, setting the standard for artistic excellence and professional service
          </p>
        </div>

        {/* Studio Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Where Art Meets Skin Perfection
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Located in the heart of Lekki, Lagos, Tattoo Lagos has become the destination for discerning clients who demand nothing but the best. Our studio combines cutting-edge techniques with artistic vision to create tattoos that are not just beautiful, but meaningful and lasting.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every piece of art we create is backed by our commitment to safety, hygiene, and customer satisfaction. We believe that getting a tattoo should be an experience that exceeds your expectations from consultation to final touch-up.
            </p>
            <Button className="cta-gradient">
              Meet Our Artists
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src={artistPortrait} 
              alt="Professional tattoo artist" 
              className="w-full h-96 object-cover rounded-lg ink-border"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg glow-effect">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Satisfied Clients</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-premium text-center hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Studio */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Premium Studio</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Step into our world-class facility where artistry meets the highest standards of cleanliness and comfort
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg ink-border">
              <img 
                src={studioInterior} 
                alt="Tattoo Lagos premium studio interior with modern equipment and clean workspace" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏥</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Medical-Grade Environment</h4>
                  <p className="text-muted-foreground">Our studio maintains hospital-level cleanliness with advanced air filtration and sterilization systems.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">State-of-the-Art Equipment</h4>
                  <p className="text-muted-foreground">Professional-grade tattoo machines and piercing tools from industry-leading manufacturers.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🛋️</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Comfort First</h4>
                  <p className="text-muted-foreground">Ergonomic chairs, soothing ambiance, and a relaxing atmosphere for your complete comfort.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Standards */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Our Certifications & Standards</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Health Department Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Bloodborne Pathogen Training</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>First Aid Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>International Tattoo Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;