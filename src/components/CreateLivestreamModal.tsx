import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  X, 
  Video, 
  Tag, 
  DollarSign, 
  Image as ImageIcon,
  Sparkles,
  Camera,
  ShoppingBag
} from "lucide-react";

interface CreateLivestreamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  "Fashion", "Tech", "Beauty", "Home", "Sports", "Jewelry", "Kids", "Food"
];

export const CreateLivestreamModal = ({ isOpen, onClose }: CreateLivestreamModalProps) => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [discount, setDiscount] = useState("");

  const handleStart = () => {
    // For now just show success state
    setStep(3);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 z-50 m-auto flex max-h-[90vh] max-w-lg flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-deal">
                  <Video className="h-5 w-5 text-deal-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground">
                    Go Live
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Start selling to thousands of shoppers
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  {/* Stream Title */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Stream Title
                    </label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., Flash Sale - Designer Bags 70% OFF!"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Category
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setCategory(cat)}
                          className={`rounded-lg border px-3 py-2 text-sm transition-all ${
                            category === cat
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-secondary/50 text-muted-foreground hover:border-primary/50"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Max Discount */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Max Discount You'll Offer
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        placeholder="e.g., 50%"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <Button 
                    variant="deal" 
                    className="w-full" 
                    size="lg"
                    onClick={() => setStep(2)}
                    disabled={!title || !category}
                  >
                    Continue
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  {/* Thumbnail Upload */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Stream Thumbnail
                    </label>
                    <div className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-secondary/30 transition-colors hover:border-primary/50">
                      <ImageIcon className="mb-2 h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag & drop
                      </p>
                      <p className="text-xs text-muted-foreground/60">
                        PNG, JPG up to 5MB
                      </p>
                    </div>
                  </div>

                  {/* Camera Preview */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Camera Preview
                    </label>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-secondary">
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Camera className="mb-2 h-12 w-12 text-muted-foreground/50" />
                        <p className="text-sm text-muted-foreground">
                          Camera preview will appear here
                        </p>
                      </div>
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-live animate-pulse" />
                        <span className="text-xs text-muted-foreground">Ready to go live</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="ghost" 
                      className="flex-1" 
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button 
                      variant="deal" 
                      className="flex-1" 
                      size="lg"
                      onClick={handleStart}
                    >
                      <Video className="h-4 w-4" />
                      Go Live Now
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full gradient-deal">
                    <Sparkles className="h-10 w-10 text-deal-foreground" />
                  </div>
                  <h3 className="mb-2 font-display text-2xl font-bold text-foreground">
                    You're Live!
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Shoppers are being notified about your stream. Start showcasing your products!
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-live animate-pulse" />
                      <span>0 viewers</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShoppingBag className="h-4 w-4" />
                      <span>0 sales</span>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="mt-6" 
                    onClick={() => {
                      setStep(1);
                      setTitle("");
                      setCategory("");
                      setDiscount("");
                      onClose();
                    }}
                  >
                    End Stream (Demo)
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
