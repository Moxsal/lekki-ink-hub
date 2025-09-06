import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Tattoos",
      description: "Unique, personalized tattoo designs created just for you",
      price: "From ₦15,000",
      features: ["Custom Design", "Multiple Sessions", "Touch-ups Included", "Aftercare Guide"]
    },
    {
      title: "Traditional Tattoos",
      description: "Classic tattoo styles with modern execution",
      price: "From ₦8,000",
      features: ["Flash Designs", "Same Day Service", "Classic Styles", "Quick Healing"]
    },
    {
      title: "Body Piercing",
      description: "Professional piercing services with premium jewelry",
      price: "From ₦5,000",
      features: ["Sterile Process", "Premium Jewelry", "Aftercare Kit", "Quick Service"]
    },
    {
      title: "Tattoo Cover-ups",
      description: "Transform old tattoos into stunning new artwork",
      price: "From ₦20,000",
      features: ["Design Consultation", "Color Matching", "Multiple Options", "Guaranteed Results"]
    },
    {
      title: "Consultation",
      description: "Professional advice on design, placement, and pricing",
      price: "Free",
      features: ["Design Discussion", "Placement Advice", "Price Estimate", "Booking Assistance"]
    },
    {
      title: "Aftercare Services",
      description: "Complete aftercare support for optimal healing",
      price: "From ₦2,000",
      features: ["Healing Products", "Follow-up Check", "24/7 Support", "Healing Guarantee"]
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
                <div className="text-2xl font-bold text-primary mt-2">{service.price}</div>
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