import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Ada",
      location: "Lagos",
      rating: 5,
      text: "Absolutely amazing! The artist took time to understand my design idea and brought it to life beautifully. The studio is clean and professional — I'll definitely be back.",
      service: "Custom Tattoo"
    },
    {
      name: "Chidi", 
      location: "Lekki",
      rating: 5,
      text: "My piercing experience was quick and painless. The staff made me feel comfortable, and the aftercare guidance was so helpful.",
      service: "Ear Piercing"
    },
    {
      name: "Kemi",
      location: "Victoria Island", 
      rating: 5,
      text: "The detail on my tattoo is unbelievable! Everyone keeps complimenting me. Tattoo Lagos is definitely the best in town.",
      service: "Realism Tattoo"
    },
    {
      name: "Tunde",
      location: "Lagos",
      rating: 5, 
      text: "I had an old tattoo I didn't like, and they covered it up perfectly. Now it looks like brand-new art. Highly recommend their creativity!",
      service: "Cover-up"
    },
    {
      name: "Sarah",
      location: "Ikoyi",
      rating: 5,
      text: "The consultation process was thorough and professional. They helped me refine my design idea and the final result exceeded my expectations.",
      service: "Custom Design"
    },
    {
      name: "Michael",
      location: "Lekki",
      rating: 5,
      text: "First-time tattoo experience and they made me feel so comfortable. The hygiene standards are impressive and the artistry is top-notch.",
      service: "Minimalist Tattoo"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-400" : "text-muted-foreground/30"
        }`}
      >
        ⭐
      </span>
    ));
  };

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "4.9", label: "Average Rating" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "4+", label: "Years Experience" }
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
                Client Reviews
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Don't just take our word for it. See what our satisfied clients have to say about their experience at Tattoo Lagos.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {reviews.map((review, index) => (
                <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif">
                      "
                    </div>
                    
                    <div className="flex items-center mb-4 relative z-10">
                      <div className="flex mr-3">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    
                    <blockquote className="text-foreground mb-6 relative z-10 leading-relaxed flex-grow">
                      {review.text}
                    </blockquote>
                    
                    <div className="mt-auto">
                      <div className="flex items-center relative z-10 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-semibold text-lg mr-4">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{review.name}</div>
                          <div className="text-sm text-muted-foreground">{review.location}</div>
                        </div>
                      </div>
                      <div className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full inline-block">
                        {review.service}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Share Your Experience</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Help others discover our quality work by sharing your experience with Tattoo Lagos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="cta-gradient text-lg px-8 py-3 hover:scale-105 transition-transform duration-200"
              >
                <a 
                  href="https://www.google.com/search?q=tattoo+lagos+reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Leave a Review on Google
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/contact">Book Your Session</Link>
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
                <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
                <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Lekki Phase 1, Lagos</p>
                <p>+234 (0) 123 456 7890</p>
                <p>hello@tattoolagos.com</p>
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

export default Reviews;