import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Our Studio",
      details: ["Lekki Phase 1", "Lagos, Nigeria"],
      action: "Get Directions",
      href: "https://maps.google.com"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["+2348138068093"],
      action: "Call Now",
      href: "tel:+2348138068093"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: ["+2348138068093"],
      action: "Chat on WhatsApp",
      href: "https://wa.me/2348138068093"
    },
    {
      icon: "📧",
      title: "Email Us",
      details: ["Tattoolagos1@gmail.com"],
      action: "Send Email",
      href: "mailto:Tattoolagos1@gmail.com"
    }
  ];

  const studioHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 9:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "Closed" }
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
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to start your tattoo journey? Get in touch with us to book your consultation or ask any questions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{info.icon}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground mb-2">{detail}</p>
                    ))}
                    <Button asChild size="sm" className="mt-4 cta-gradient">
                      <a href={info.href} target="_blank" rel="noopener noreferrer">
                        {info.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="Your full name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" placeholder="+234 xxx xxx xxxx" className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="service">Service Interest</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="custom">Custom Tattoo</SelectItem>
                          <SelectItem value="realism">Black & Grey Realism</SelectItem>
                          <SelectItem value="color">Color Tattoo</SelectItem>
                          <SelectItem value="minimalist">Minimalist & Line Art</SelectItem>
                          <SelectItem value="tribal">Tribal & Traditional</SelectItem>
                          <SelectItem value="piercing">Piercing Services</SelectItem>
                          <SelectItem value="coverup">Cover-up & Redesign</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your tattoo ideas, preferred dates, or any questions you have..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full cta-gradient">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Studio Info */}
              <div className="space-y-8">
                {/* Hours */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Studio Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {studioHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="text-foreground font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button asChild size="lg" className="w-full cta-gradient">
                      <a href="https://wa.me/2348138068093" target="_blank" rel="noopener noreferrer">
                        💬 WhatsApp Us Now
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full">
                      <a href="tel:+2348138068093">
                        📞 Call Studio
                      </a>
                    </Button>
                    <Button asChild variant="secondary" size="lg" className="w-full">
                      <Link to="/faq">
                        ❓ View FAQ
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Location Note */}
                <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Finding Our Studio</h3>
                  <p className="text-muted-foreground text-sm">
                    We're located in the heart of Lekki Phase 1, easily accessible by car or public transport. 
                    Parking is available. Contact us for detailed directions or landmark references.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Visit Our Studio</h2>
              <div className="bg-muted/20 border border-border rounded-lg p-12 text-center">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map Coming Soon</h3>
                <p className="text-muted-foreground mb-6">
                  We're located in Lekki Phase 1, Lagos. Contact us for detailed directions.
                </p>
                <Button asChild size="lg" className="cta-gradient">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Get Directions on Google Maps
                  </a>
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
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
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

export default Contact;