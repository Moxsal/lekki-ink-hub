import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Tattoos",
      description: "We design and create unique tattoos tailored to your personality, story, or artistic vision. From small minimal pieces to full sleeves, we bring your ideas to life with precision and creativity.",
      features: ["Personalized Design Process", "Unlimited Revisions", "Artist Collaboration", "Lifetime Touch-up Policy"]
    },
    {
      title: "Black & Grey Realism",
      description: "Detailed, shaded designs that give a lifelike, dramatic effect. Perfect for portraits, animals, or spiritual themes with stunning depth and dimension.",
      features: ["Photorealistic Results", "Advanced Shading Techniques", "Portrait Specialization", "Fine Detail Work"]
    },
    {
      title: "Color Tattoos",
      description: "Bright, vivid tattoos that pop with personality. From watercolor effects to bold traditional colors, we make your artwork stand out beautifully.",
      features: ["Premium Ink Quality", "Vibrant Color Matching", "Watercolor Effects", "Long-lasting Brilliance"]
    },
    {
      title: "Minimalist & Line Art",
      description: "Simple, elegant tattoos with clean lines and subtle designs. Ideal for first-time tattoos or those who prefer a sleek, sophisticated style.",
      features: ["Clean Line Work", "Geometric Precision", "Delicate Details", "Timeless Elegance"]
    },
    {
      title: "Tribal & Traditional",
      description: "Bold, timeless patterns inspired by cultural art forms. These tattoos make a strong statement and carry deep meaning with authentic styling.",
      features: ["Cultural Authenticity", "Bold Line Work", "Traditional Techniques", "Meaningful Symbolism"]
    },
    {
      title: "Piercing Services", 
      description: "Professional body piercing in a safe, hygienic environment. We offer ear, nose, and other piercing options with proper aftercare guidance.",
      features: ["Medical-Grade Sterilization", "Premium Jewelry Selection", "Expert Placement", "Comprehensive Aftercare"]
    },
    {
      title: "Tattoo Cover-Ups & Redesigns",
      description: "Transform old or unwanted tattoos into new works of art. Our artists specialize in creative solutions that give your skin a fresh start.",
      features: ["Creative Problem Solving", "Color Correction Mastery", "Design Innovation", "Complete Transformation"]
    },
    {
      title: "Consultations",
      description: "Not sure what design to choose? We provide one-on-one consultations to help you explore styles, placements, and custom designs before booking your session.",
      features: ["Expert Style Guidance", "Placement Optimization", "Design Exploration", "Personalized Recommendations"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Premium Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From custom tattoos to professional piercing, we offer comprehensive services with unmatched quality and hygiene standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-premium hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full cta-gradient">
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-lg border border-primary/20">
            <span className="text-primary font-semibold mr-2">🔥 Special Offer:</span>
            <span className="text-foreground">10% off your first tattoo - Book now!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;