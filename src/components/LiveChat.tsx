import { useState } from "react";
import { Send, Smile } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  user: string;
  avatar: string;
  message: string;
  timestamp: Date;
  isHost?: boolean;
}

const sampleMessages: ChatMessage[] = [
  {
    id: "1",
    user: "Sarah M.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    message: "OMG this bag is gorgeous! 😍",
    timestamp: new Date(),
  },
  {
    id: "2",
    user: "Mike T.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
    message: "Is this available in black?",
    timestamp: new Date(),
  },
  {
    id: "3",
    user: "Host",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop",
    message: "Yes! We have it in black, brown, and burgundy! 🎉",
    timestamp: new Date(),
    isHost: true,
  },
  {
    id: "4",
    user: "Emma L.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
    message: "Just bought the earrings! Can't wait 💖",
    timestamp: new Date(),
  },
  {
    id: "5",
    user: "Alex K.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
    message: "That discount is insane! 🔥",
    timestamp: new Date(),
  },
];

interface LiveChatProps {
  className?: string;
}

export function LiveChat({ className }: LiveChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(sampleMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      user: "You",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop",
      message: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <div className={cn("flex flex-col rounded-xl glass overflow-hidden", className)}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border p-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-live animate-pulse" />
          <h3 className="font-display font-semibold text-foreground">Live Chat</h3>
        </div>
        <span className="text-xs text-muted-foreground">
          {messages.length.toLocaleString()} messages
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[400px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "flex gap-2 animate-fade-in",
              msg.isHost && "bg-primary/10 -mx-4 px-4 py-2 rounded-lg"
            )}
          >
            <img
              src={msg.avatar}
              alt={msg.user}
              className="h-8 w-8 rounded-full object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "text-xs font-semibold",
                    msg.isHost ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {msg.user}
                </span>
                {msg.isHost && (
                  <span className="rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold text-primary-foreground">
                    HOST
                  </span>
                )}
              </div>
              <p className="text-sm text-foreground break-words">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-border p-3">
        <div className="flex items-center gap-2">
          <button className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <Smile className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Say something..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="rounded-lg p-2 text-primary transition-colors hover:bg-primary/20 disabled:opacity-50"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
