import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Ada",
      location: "Lagos",
      rating: 5,
      text: "Absolutely amazing! The artist took time to understand my design idea and brought it to life beautifully. The studio is clean and professional — I'll definitely be back."
    },
    {
      name: "Chidi", 
      location: "Lekki",
      rating: 5,
      text: "My piercing experience was quick and painless. The staff made me feel comfortable, and the aftercare guidance was so helpful."
    },
    {
      name: "Kemi",
      location: "Victoria Island", 
      rating: 5,
      text: "The detail on my tattoo is unbelievable! Everyone keeps complimenting me. Tattoo Lagos is definitely the best in town."
    },
    {
      name: "Tunde",
      location: "Lagos",
      rating: 5, 
      text: "I had an old tattoo I didn't like, and they covered it up perfectly. Now it looks like brand-new art. Highly recommend their creativity!"
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

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Client Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied clients have to say about their experience at Tattoo Lagos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif">
                  "
                </div>
                
                <div className="flex items-center mb-4 relative z-10">
                  <div className="flex mr-3">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <blockquote className="text-foreground mb-6 relative z-10 leading-relaxed">
                  {review.text}
                </blockquote>
                
                <div className="flex items-center relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-semibold text-lg mr-4">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
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
          <p className="text-sm text-muted-foreground mt-4">
            Help others discover our quality work by sharing your experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;