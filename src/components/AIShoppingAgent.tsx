import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Loader2, ShoppingBag, TrendingDown, X } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  products?: {
    name: string;
    price: number;
    discount: number;
    image: string;
  }[];
}

interface AIShoppingAgentProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hey! I'm your AI shopping assistant. Tell me what you're looking for, and I'll find the best deals that match your taste! 🛍️✨",
  },
];

const sampleProducts = [
  {
    name: "Wireless Earbuds Pro",
    price: 49.99,
    discount: 60,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&h=200&fit=crop",
  },
  {
    name: "Smart Watch Series X",
    price: 189.99,
    discount: 40,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200&h=200&fit=crop",
  },
  {
    name: "Designer Sunglasses",
    price: 79.99,
    discount: 55,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop",
  },
];

export function AIShoppingAgent({ isOpen, onClose }: AIShoppingAgentProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Great choice! Based on your interest in "${input}", I found these amazing deals that match your taste:`,
        products: sampleProducts,
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-4 bottom-4 z-50 flex h-[600px] w-[380px] flex-col overflow-hidden rounded-2xl glass shadow-ai animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border p-4 gradient-ai">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ai-foreground/20">
            <Sparkles className="h-5 w-5 text-ai-foreground" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-ai-foreground">AI Shopping Agent</h3>
            <p className="text-xs text-ai-foreground/80">Finding your perfect deals</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="rounded-full p-2 text-ai-foreground/80 transition-colors hover:bg-ai-foreground/20"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex animate-fade-in",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[85%] rounded-2xl px-4 py-3",
                message.role === "user"
                  ? "gradient-deal text-deal-foreground rounded-br-sm"
                  : "bg-secondary text-foreground rounded-bl-sm"
              )}
            >
              <p className="text-sm">{message.content}</p>

              {/* Product recommendations */}
              {message.products && (
                <div className="mt-3 space-y-2">
                  {message.products.map((product, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-lg bg-background/50 p-2 cursor-pointer transition-all hover:bg-background/80"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground truncate">
                          {product.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-primary">
                            ${product.price}
                          </span>
                          <span className="flex items-center gap-0.5 text-xs text-success">
                            <TrendingDown className="h-3 w-3" />
                            {product.discount}%
                          </span>
                        </div>
                      </div>
                      <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start animate-fade-in">
            <div className="rounded-2xl rounded-bl-sm bg-secondary px-4 py-3">
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-ai" />
                <span className="text-sm text-muted-foreground">
                  Finding best deals...
                </span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="What are you looking for?"
            className="flex-1 rounded-xl bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ai"
          />
          <Button
            variant="ai"
            size="icon"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="h-11 w-11 rounded-xl"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Powered by AI • Finds deals matching your taste
        </p>
      </div>
    </div>
  );
}
