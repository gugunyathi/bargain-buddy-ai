import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { LiveStreamCard } from "@/components/LiveStreamCard";
import { ProductCard } from "@/components/ProductCard";
import { AIShoppingAgent } from "@/components/AIShoppingAgent";
import { LiveChat } from "@/components/LiveChat";
import { 
  Play, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Users, 
  ArrowRight,
  ChevronRight 
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

// Sample data
const liveStreams = [
  {
    id: 1,
    title: "Designer Bags Flash Sale - Up to 70% OFF!",
    host: "Fashion Studio NYC",
    viewers: 12453,
    thumbnail: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=400&fit=crop",
    isLive: true,
    discount: 70,
    category: "Fashion",
  },
  {
    id: 2,
    title: "Tech Gadgets Unboxing & Deals",
    host: "TechDeals Pro",
    viewers: 8921,
    thumbnail: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop",
    isLive: true,
    discount: 50,
    category: "Tech",
  },
  {
    id: 3,
    title: "Beauty Secrets - K-Beauty Collection",
    host: "GlowUp Studio",
    viewers: 6234,
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
    isLive: true,
    discount: 45,
    category: "Beauty",
  },
  {
    id: 4,
    title: "Home Decor Treasures",
    host: "Interior Magic",
    viewers: 3421,
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    isLive: false,
    duration: "45:23",
    discount: 35,
    category: "Home",
  },
];

const trendingDeals = [
  {
    id: 1,
    name: "Wireless Pro Earbuds with ANC",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    originalPrice: 199.99,
    dealPrice: 79.99,
    rating: 4.8,
    reviews: 2341,
    matchScore: 95,
    seller: "AudioTech Official",
  },
  {
    id: 2,
    name: "Smart Watch Ultra - Health Edition",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
    originalPrice: 449.99,
    dealPrice: 269.99,
    rating: 4.9,
    reviews: 5672,
    matchScore: 92,
    seller: "SmartLife Store",
  },
  {
    id: 3,
    name: "Premium Leather Crossbody Bag",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    originalPrice: 289.99,
    dealPrice: 119.99,
    rating: 4.7,
    reviews: 1893,
    matchScore: 88,
    seller: "Luxe Fashion",
  },
  {
    id: 4,
    name: "Designer Polarized Sunglasses",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    originalPrice: 159.99,
    dealPrice: 59.99,
    rating: 4.6,
    reviews: 3421,
    matchScore: 85,
    seller: "EyeStyle Co.",
  },
];

const Index = () => {
  const [isAgentOpen, setIsAgentOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenAgent={() => setIsAgentOpen(true)} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Live Shopping"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm text-primary"
            >
              <Zap className="h-4 w-4" />
              AI-Powered Deal Finding
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 font-display text-4xl font-bold leading-tight text-foreground md:text-6xl"
            >
              Shop Smarter with
              <span className="text-gradient-deal"> AI Agents</span> That Know
              Your Style
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-lg text-muted-foreground"
            >
              Your personal AI shopping assistant finds the best deals from live
              streams and e-commerce, tailored to your unique taste.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="deal" size="xl" onClick={() => setIsAgentOpen(true)}>
                <Sparkles className="h-5 w-5" />
                Start AI Shopping
              </Button>
              <Button variant="glass" size="xl">
                <Play className="h-5 w-5" />
                Watch Live
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              {[
                { label: "Active Shoppers", value: "2.4M+", icon: Users },
                { label: "Deals Found", value: "500K+", icon: TrendingUp },
                { label: "Avg. Savings", value: "47%", icon: Zap },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Now Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-3 w-3 items-center justify-center">
              <span className="h-full w-full animate-ping rounded-full bg-live opacity-75" />
              <span className="absolute h-2 w-2 rounded-full bg-live" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Live Now
            </h2>
          </div>
          <Button variant="ghost" className="text-muted-foreground">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {liveStreams.map((stream, i) => (
            <motion.div
              key={stream.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <LiveStreamCard {...stream} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Picks Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-ai shadow-ai">
              <Sparkles className="h-4 w-4 text-ai-foreground" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                AI Picks For You
              </h2>
              <p className="text-sm text-muted-foreground">
                Based on your shopping preferences
              </p>
            </div>
          </div>
          <Button variant="ghost" className="text-muted-foreground">
            See More <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingDeals.map((deal, i) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProductCard {...deal} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Stream with Chat */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Featured Stream
          </h2>
          <p className="text-muted-foreground">
            Join thousands watching live deals unfold
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl glass">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop"
                alt="Featured Stream"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Live badge */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-live px-3 py-1.5 text-sm font-semibold text-foreground animate-pulse-deal">
                <span className="h-2 w-2 rounded-full bg-foreground" />
                LIVE
              </div>

              {/* Viewers */}
              <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-sm text-foreground backdrop-blur-sm">
                <Users className="h-4 w-4" />
                15.2K watching
              </div>

              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-20 w-20 items-center justify-center rounded-full gradient-deal shadow-deal transition-transform hover:scale-110">
                  <Play className="h-8 w-8 fill-deal-foreground text-deal-foreground" />
                </button>
              </div>

              {/* Stream info */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="mb-1 font-display text-xl font-bold text-foreground">
                  Luxury Accessories Mega Sale - Live Now!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fashion Forward • Up to 80% Off Designer Items
                </p>
              </div>
            </div>
          </div>

          {/* Live Chat */}
          <div className="lg:col-span-1">
            <LiveChat className="h-full" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-12">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-ai/20 blur-3xl" />

          <div className="relative text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Ready to Shop Smarter?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Let your personal AI agent find incredible deals tailored to your
              style. Start saving today!
            </p>
            <Button variant="deal" size="xl" onClick={() => setIsAgentOpen(true)}>
              <Sparkles className="h-5 w-5" />
              Launch AI Agent
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-deal">
                <Sparkles className="h-4 w-4 text-deal-foreground" />
              </div>
              <span className="font-display font-bold text-foreground">
                BargainAI
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 BargainAI. Shop smarter with AI.
            </p>
          </div>
        </div>
      </footer>

      {/* AI Shopping Agent */}
      <AnimatePresence>
        {isAgentOpen && (
          <AIShoppingAgent isOpen={isAgentOpen} onClose={() => setIsAgentOpen(false)} />
        )}
      </AnimatePresence>

      {/* Floating AI Button (Mobile) */}
      <button
        onClick={() => setIsAgentOpen(true)}
        className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full gradient-ai shadow-ai transition-transform hover:scale-110 sm:hidden"
      >
        <Sparkles className="h-6 w-6 text-ai-foreground" />
      </button>
    </div>
  );
};

export default Index;
