import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How much does a tattoo cost?",
      answer: "Tattoo pricing varies based on size, complexity, placement, and time required. We provide custom quotes after consultation. Small tattoos start from ₦25,000, while larger pieces are priced based on hourly rates. We offer free consultations to discuss your design and provide accurate pricing."
    },
    {
      question: "Does getting a tattoo hurt?",
      answer: "Pain levels vary depending on placement, your pain tolerance, and tattoo size. Areas with more fat and muscle (like arms and thighs) tend to be less painful than bony areas (ribs, ankles). Most clients describe it as manageable discomfort. We use techniques to minimize pain and can take breaks as needed."
    },
    {
      question: "How long does a tattoo take to heal?",
      answer: "Initial healing takes 2-3 weeks, while complete healing takes 3-6 months. During the first week, your tattoo will peel and scab. Following proper aftercare instructions is crucial for optimal healing and color retention. We provide detailed aftercare guidance and are available for questions."
    },
    {
      question: "What should I do before my tattoo appointment?",
      answer: "Get a good night's sleep and eat a substantial meal before your appointment. Avoid alcohol for 24 hours prior. Wear comfortable clothing that provides easy access to the tattoo area. Bring a valid ID and any reference images. Stay hydrated and avoid blood-thinning medications unless prescribed."
    },
    {
      question: "Can I bring my own design?",
      answer: "Absolutely! We encourage clients to bring reference images, ideas, or existing designs. Our artists can work with your design or modify it to better suit tattoo application and your body's contours. We also create completely custom designs based on your ideas and preferences."
    },
    {
      question: "Do you require a deposit?",
      answer: "Yes, we require a ₦10,000 deposit to secure your appointment for custom work. This deposit goes toward your final tattoo cost. Deposits are non-refundable but can be transferred to a new appointment with 48-hour notice. Walk-in simple tattoos may not require deposits."
    },
    {
      question: "What aftercare products do you recommend?",
      answer: "We recommend gentle, fragrance-free moisturizers and antibacterial soap. Specific product recommendations include Cetaphil moisturizer and Dove sensitive soap. Avoid petroleum-based products initially. We provide an aftercare kit with your tattoo and detailed instructions for optimal healing."
    },
    {
      question: "Can you cover up or fix old tattoos?",
      answer: "Yes, we specialize in cover-ups and tattoo corrections. The possibilities depend on the size, color, and age of your existing tattoo. Darker tattoos may require lightening sessions first. We offer free consultations to assess your tattoo and discuss cover-up options and expected results."
    },
    {
      question: "What are your hygiene and safety standards?",
      answer: "We exceed industry safety standards with hospital-grade sterilization, single-use needles and equipment, and regular health department inspections. All surfaces are sanitized between clients, and we follow strict protocols for equipment handling. Our artists are bloodborne pathogen certified."
    },
    {
      question: "Do you offer piercing services?",
      answer: "Yes, we offer professional piercing services for ears, nose, and other body areas. We use sterile, single-use needles and high-quality jewelry. All piercings include aftercare instructions and follow-up support. Piercing prices start from ₦8,000 depending on placement and jewelry choice."
    },
    {
      question: "Can I get a tattoo if I'm pregnant or breastfeeding?",
      answer: "We recommend waiting until after pregnancy and breastfeeding for safety reasons. While there's no proven risk, it's better to be cautious. The healing process may also be affected by hormonal changes. We're happy to do consultations and design work in preparation for when you're ready."
    },
    {
      question: "What if I don't like my tattoo design?",
      answer: "We work closely with you during the design process to ensure you love your tattoo before we start. We offer unlimited revisions during the consultation phase. Once we begin tattooing, changes become limited, so we ensure you're 100% satisfied with the design first."
    }
  ];

  const quickTips = [
    {
      icon: "🩹",
      title: "Healing Process",
      description: "Keep it clean, moisturized, and avoid sun exposure"
    },
    {
      icon: "💧",
      title: "Stay Hydrated",
      description: "Drink plenty of water before and after your session"
    },
    {
      icon: "🍎",
      title: "Eat Well",
      description: "Have a good meal before your appointment"
    },
    {
      icon: "😴",
      title: "Rest Up",
      description: "Get adequate sleep the night before"
    }
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Everything you need to know about getting a tattoo or piercing at Tattoo Lagos.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Quick Tips</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickTips.map((tip, index) => (
                <div key={index} className="text-center p-6 bg-background/50 rounded-lg border border-border/50">
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're here to help! Contact us for personalized answers to your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="cta-gradient text-lg px-8 py-3">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/services">View Services</Link>
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
            <p>&copy; 2024 Tattoo Lagos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;