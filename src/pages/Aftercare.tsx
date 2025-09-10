import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Aftercare = () => {
  const healingStages = [
    {
      stage: "Days 1-3",
      title: "Initial Healing",
      description: "Your tattoo will be covered with a bandage or plastic wrap",
      steps: [
        "Remove bandage after 2-4 hours",
        "Wash gently with antibacterial soap",
        "Pat dry with clean paper towel",
        "Apply thin layer of recommended ointment",
        "No rebandaging unless instructed"
      ]
    },
    {
      stage: "Days 4-14",
      title: "Peeling Phase",
      description: "Your tattoo will start to peel and may feel itchy",
      steps: [
        "Continue washing 2-3 times daily",
        "Switch to fragrance-free moisturizer",
        "Do not pick or scratch peeling skin",
        "Avoid soaking in water (baths, pools)",
        "Keep tattoo out of direct sunlight"
      ]
    },
    {
      stage: "Days 15-30",
      title: "Final Healing",
      description: "The outer layer of skin will be fully healed",
      steps: [
        "Continue moisturizing daily",
        "Tattoo may look slightly dull - this is normal",
        "Can resume normal activities",
        "Still avoid excessive sun exposure",
        "Use sunscreen (SPF 30+) when outdoors"
      ]
    }
  ];

  const dosDonts = {
    dos: [
      "Keep it clean and dry",
      "Use recommended aftercare products",
      "Wear loose, breathable clothing",
      "Get adequate sleep for healing",
      "Stay hydrated",
      "Follow up with us if concerned"
    ],
    donts: [
      "Don't pick or scratch your tattoo",
      "Avoid swimming pools and hot tubs",
      "No direct sunlight for 2-3 weeks",
      "Don't use petroleum-based products",
      "Avoid tight clothing over the tattoo",
      "No excessive exercising for first week"
    ]
  };

  const products = [
    {
      name: "Gentle Soap",
      description: "Antibacterial, fragrance-free soap for cleaning",
      recommendations: "Dove Sensitive, Cetaphil Gentle Cleanser"
    },
    {
      name: "Healing Ointment",
      description: "For the first 3-5 days of healing",
      recommendations: "Aquaphor, A&D Ointment (thin layers only)"
    },
    {
      name: "Moisturizer",
      description: "Fragrance-free lotion for ongoing care",
      recommendations: "Cetaphil Daily Moisturizer, Aveeno Unscented"
    },
    {
      name: "Sunscreen",
      description: "SPF 30+ for long-term tattoo protection",
      recommendations: "Any broad-spectrum, water-resistant formula"
    }
  ];

  const warningSigns = [
    "Excessive redness or swelling after day 3",
    "Pus or unusual discharge",
    "Red streaking from the tattoo",
    "Fever or feeling unwell",
    "Severe pain that worsens over time",
    "Signs of allergic reaction"
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
                Tattoo Aftercare Guide
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Proper aftercare is essential for optimal healing and long-lasting results. Follow these steps for the best outcome.
              </p>
            </div>
          </div>
        </section>

        {/* Important Alert */}
        <section className="py-8 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Alert className="border-primary/50 bg-primary/10">
                <AlertDescription className="text-foreground">
                  <strong>Important:</strong> Every tattoo heals differently. These are general guidelines. Always follow the specific instructions provided by your artist and contact us with any concerns.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Healing Stages */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Healing Timeline
            </h2>
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {healingStages.map((stage, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-primary mb-2">{stage.stage}</div>
                      <CardTitle className="text-xl text-foreground">{stage.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground text-center">{stage.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {stage.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Do's and Don'ts */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Do's and Don'ts</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="border-green-500/50 bg-green-500/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-400 flex items-center">
                    <span className="text-3xl mr-3">✅</span>
                    Do's
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {dosDonts.dos.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-500/50 bg-red-500/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-400 flex items-center">
                    <span className="text-3xl mr-3">❌</span>
                    Don'ts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {dosDonts.donts.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Recommended Products</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {products.map((product, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-3">{product.description}</p>
                    <div className="text-sm text-primary font-medium">
                      Recommended: {product.recommendations}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-foreground">When to Contact Us</h2>
              <p className="text-xl text-muted-foreground text-center mb-12">
                Contact us immediately if you experience any of these warning signs:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {warningSigns.map((sign, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <div className="text-red-500 text-xl">⚠️</div>
                    <span className="text-foreground">{sign}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button asChild size="lg" className="cta-gradient">
                  <Link to="/contact">Contact Us for Help</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Long-term Care */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Long-term Tattoo Care</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Keep your tattoo looking vibrant for years to come with proper long-term care. Use sunscreen, moisturize regularly, and avoid excessive sun exposure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cta-gradient text-lg px-8 py-3">
                <Link to="/services">Book Touch-up Session</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/gallery">View Healed Work</Link>
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

export default Aftercare;