import { Play, Users, Clock, Heart, MessageCircle, Sparkles, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface LiveStreamCardProps {
  title: string;
  host: string;
  viewers: number;
  thumbnail: string;
  isLive?: boolean;
  discount?: number;
  category: string;
  duration?: string;
}

export function LiveStreamCard({
  title,
  host,
  viewers,
  thumbnail,
  isLive = false,
  discount,
  category,
  duration,
}: LiveStreamCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl glass cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-deal">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        
        {/* Live badge */}
        {isLive && (
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-live px-2.5 py-1 text-xs font-semibold text-foreground animate-pulse-deal">
            <span className="h-2 w-2 rounded-full bg-foreground" />
            LIVE
          </div>
        )}
        
        {/* Discount badge */}
        {discount && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full gradient-deal px-2.5 py-1 text-xs font-bold text-deal-foreground shadow-deal">
            <TrendingDown className="h-3 w-3" />
            {discount}% OFF
          </div>
        )}
        
        {/* Duration or viewers */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-md bg-background/80 px-2 py-1 text-xs text-foreground backdrop-blur-sm">
          {isLive ? (
            <>
              <Users className="h-3 w-3" />
              {viewers.toLocaleString()}
            </>
          ) : (
            <>
              <Clock className="h-3 w-3" />
              {duration}
            </>
          )}
        </div>
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full gradient-deal shadow-deal">
            <Play className="h-6 w-6 fill-deal-foreground text-deal-foreground" />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">
            {category}
          </span>
        </div>
        
        <h3 className="mb-1 font-display text-base font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground">{host}</p>
        
        {/* Quick actions */}
        <div className="mt-3 flex items-center gap-2">
          <button className="flex items-center gap-1 rounded-lg bg-secondary px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
            <Heart className="h-3 w-3" />
            Save
          </button>
          <button className="flex items-center gap-1 rounded-lg bg-secondary px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-ai hover:text-ai-foreground">
            <Sparkles className="h-3 w-3" />
            AI Match
          </button>
        </div>
      </div>
    </div>
  );
}
