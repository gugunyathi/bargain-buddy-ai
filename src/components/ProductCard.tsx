import { ShoppingBag, Star, TrendingDown, Plus, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  image: string;
  originalPrice: number;
  dealPrice: number;
  rating: number;
  reviews: number;
  matchScore?: number;
  seller: string;
  inStock?: boolean;
}

export function ProductCard({
  name,
  image,
  originalPrice,
  dealPrice,
  rating,
  reviews,
  matchScore,
  seller,
  inStock = true,
}: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const discount = Math.round(((originalPrice - dealPrice) / originalPrice) * 100);

  return (
    <div className="group relative overflow-hidden rounded-xl glass transition-all duration-300 hover:scale-[1.02] hover:shadow-card">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Match score */}
        {matchScore && (
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full gradient-ai px-2.5 py-1 text-xs font-bold text-ai-foreground shadow-ai">
            <Star className="h-3 w-3 fill-current" />
            {matchScore}% Match
          </div>
        )}
        
        {/* Discount badge */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full gradient-deal px-2.5 py-1 text-xs font-bold text-deal-foreground shadow-deal">
          <TrendingDown className="h-3 w-3" />
          {discount}%
        </div>
        
        {/* Quick add button */}
        <button
          onClick={() => setAdded(!added)}
          className={cn(
            "absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300",
            added
              ? "bg-success text-foreground scale-110"
              : "glass text-foreground opacity-0 group-hover:opacity-100 hover:gradient-deal hover:shadow-deal"
          )}
        >
          {added ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </button>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <p className="mb-1 text-xs text-muted-foreground">{seller}</p>
        
        <h3 className="mb-2 font-display text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="mb-2 flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3 w-3",
                  i < Math.floor(rating)
                    ? "fill-warning text-warning"
                    : "text-muted"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({reviews.toLocaleString()})
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-end gap-2">
          <span className="font-display text-lg font-bold text-primary">
            ${dealPrice.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
        
        {/* Stock status */}
        <p className={cn(
          "mt-2 text-xs",
          inStock ? "text-success" : "text-destructive"
        )}>
          {inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </div>
  );
}
