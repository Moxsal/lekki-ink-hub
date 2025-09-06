import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Our Studio",
      details: ["Lekki Phase 1, Lagos State", "Nigeria"],
      action: "Get Directions"
    },
    {
      icon: "📱",
      title: "Call or WhatsApp",
      details: ["+234 (0) 123 456 7890", "Available 9AM - 9PM"],
      action: "Call Now"
    },
    {
      icon: "📧",
      title: "Email Us",
      details: ["hello@tattoolagos.com", "Response within 24 hours"],
      action: "Send Email"
    },
    {
      icon: "🕒",
      title: "Operating Hours",
      details: ["Mon-Sat: 9AM - 9PM", "Sunday: 12PM - 6PM"],
      action: "Book Appointment"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your tattoo journey? Contact us today for consultation and booking
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-premium hover:scale-105 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="text-3xl mb-2">{info.icon}</div>
                    <CardTitle className="text-lg text-foreground">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm mb-1">{detail}</p>
                    ))}
                    <Button className="mt-4 cta-gradient w-full">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button className="w-full cta-gradient py-6 text-lg">
                📱 WhatsApp Us Now - Fastest Response!
              </Button>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white py-6 text-lg">
                📞 Call for Immediate Booking
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Send Us a Message</h3>
            <Card className="card-premium">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Your Name" 
                      className="bg-background border-border focus:border-primary"
                    />
                    <Input 
                      placeholder="Phone Number" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <Input 
                    placeholder="Email Address" 
                    type="email"
                    className="bg-background border-border focus:border-primary"
                  />
                  <Input 
                    placeholder="Service Interested In" 
                    className="bg-background border-border focus:border-primary"
                  />
                  <Textarea 
                    placeholder="Tell us about your tattoo idea, preferred dates, or any questions..."
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                  <Button className="w-full cta-gradient py-4 text-lg">
                    Send Message & Request Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card className="card-premium overflow-hidden">
            <CardContent className="p-0">
              <div className="h-64 bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-2">🗺️</div>
                  <h4 className="text-lg font-semibold mb-2">Interactive Map Coming Soon</h4>
                  <p>Lekki Phase 1, Lagos State, Nigeria</p>
                  <Button className="mt-4 cta-gradient">
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;