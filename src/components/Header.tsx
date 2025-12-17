import { Search, ShoppingBag, User, Bell, Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onOpenAgent: () => void;
}

const categories = [
  "All",
  "Fashion",
  "Tech",
  "Beauty",
  "Home",
  "Sports",
  "Food",
];

export function Header({ onOpenAgent }: HeaderProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-deal shadow-deal">
              <ShoppingBag className="h-5 w-5 text-deal-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              BargainAI
            </span>
          </div>

          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for deals, products, streams..."
                className="w-full rounded-xl bg-secondary py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* AI Agent Button */}
            <Button
              variant="ai"
              className="hidden sm:flex"
              onClick={onOpenAgent}
            >
              <Sparkles className="h-4 w-4" />
              AI Agent
            </Button>

            {/* Notifications */}
            <button className="relative rounded-lg p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
            </button>

            {/* Cart */}
            <button className="relative rounded-lg p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                3
              </span>
            </button>

            {/* Profile */}
            <button className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:text-foreground">
              <User className="h-5 w-5" />
            </button>

            {/* Mobile menu */}
            <button
              className="md:hidden rounded-lg p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "gradient-deal text-deal-foreground shadow-deal"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full glass border-t border-border p-4 md:hidden animate-slide-up">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for deals..."
              className="w-full rounded-xl bg-secondary py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button variant="ai" className="w-full" onClick={onOpenAgent}>
            <Sparkles className="h-4 w-4" />
            AI Shopping Agent
          </Button>
        </div>
      )}
    </header>
  );
}
