import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { LiveStreamCard } from "@/components/LiveStreamCard";
import { ProductCard } from "@/components/ProductCard";
import { AIShoppingAgent } from "@/components/AIShoppingAgent";
import { LiveChat } from "@/components/LiveChat";
import { CreateLivestreamModal } from "@/components/CreateLivestreamModal";
import { 
  Play, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Users, 
  ChevronRight,
  Video,
  Plus
} from "lucide-react";

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
    isLive: true,
    discount: 35,
    category: "Home",
  },
  {
    id: 5,
    title: "Sneaker Drop - Limited Edition",
    host: "SneakerHead HQ",
    viewers: 9876,
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
    isLive: true,
    discount: 40,
    category: "Fashion",
  },
  {
    id: 6,
    title: "Kitchen Gadgets That Actually Work",
    host: "Chef's Corner",
    viewers: 4532,
    thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    isLive: true,
    discount: 55,
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
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenAgent={() => setIsAgentOpen(true)} />

      {/* Live Shopping Hero - Primary Focus */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 py-6">
          {/* Header with Go Live Button */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex h-4 w-4 items-center justify-center">
                <span className="absolute h-full w-full animate-ping rounded-full bg-live opacity-75" />
                <span className="h-3 w-3 rounded-full bg-live" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  Live Shopping
                </h1>
                <p className="text-sm text-muted-foreground">
                  {liveStreams.filter(s => s.isLive).length} streams live now • {liveStreams.reduce((acc, s) => acc + s.viewers, 0).toLocaleString()} shoppers watching
                </p>
              </div>
            </div>
            <Button 
              variant="deal" 
              size="lg" 
              onClick={() => setIsCreateOpen(true)}
              className="w-full sm:w-auto"
            >
              <Plus className="h-5 w-5" />
              Go Live & Sell
            </Button>
          </div>

          {/* Featured Stream + Live Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Featured Stream */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop"
                  alt="Featured Stream"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
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
                  <div className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                    Fashion • Up to 80% OFF
                  </div>
                  <h3 className="mb-1 font-display text-xl font-bold text-foreground md:text-2xl">
                    Luxury Accessories Mega Sale - Live Now!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    by Fashion Forward
                  </p>
                </div>
              </div>
            </div>

            {/* Live Chat */}
            <div className="lg:col-span-1">
              <LiveChat className="h-full min-h-[400px]" />
            </div>
          </div>
        </div>
      </section>

      {/* More Live Streams */}
      <section className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-xl font-bold text-foreground">
            More Live Streams
          </h2>
          <Button variant="ghost" className="text-muted-foreground">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {liveStreams.map((stream, i) => (
            <motion.div
              key={stream.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <LiveStreamCard {...stream} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Start Your Stream CTA */}
      <section className="container mx-auto px-4 py-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-r from-primary/10 via-secondary to-ai/10 p-6 md:p-8">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-ai/10 blur-3xl" />
          
          <div className="relative flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-sm text-primary">
                <Video className="h-4 w-4" />
                Become a Seller
              </div>
              <h3 className="mb-2 font-display text-2xl font-bold text-foreground">
                Start Your Own Livestream
              </h3>
              <p className="max-w-md text-muted-foreground">
                Join thousands of sellers reaching millions of shoppers. Go live and start selling in minutes.
              </p>
            </div>
            <Button 
              variant="deal" 
              size="xl" 
              onClick={() => setIsCreateOpen(true)}
            >
              <Plus className="h-5 w-5" />
              Create Livestream
            </Button>
          </div>
        </div>
      </section>

      {/* AI Picks Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-ai shadow-ai">
              <Sparkles className="h-4 w-4 text-ai-foreground" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                AI Picks For You
              </h2>
              <p className="text-sm text-muted-foreground">
                Deals matched to your taste
              </p>
            </div>
          </div>
          <Button variant="ghost" className="text-muted-foreground">
            See More <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trendingDeals.map((deal, i) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <ProductCard {...deal} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-t border-border bg-secondary/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { label: "Active Shoppers", value: "2.4M+", icon: Users },
              { label: "Live Sellers", value: "12K+", icon: Video },
              { label: "Deals Today", value: "500K+", icon: TrendingUp },
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

      {/* Create Livestream Modal */}
      <CreateLivestreamModal 
        isOpen={isCreateOpen} 
        onClose={() => setIsCreateOpen(false)} 
      />

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
