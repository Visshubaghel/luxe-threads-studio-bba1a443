import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Layout from "@/components/Layout";
import RevealText from "@/components/RevealText";
import { Heart, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, setIsOpen, wishlist, toggleWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [addedState, setAddedState] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="pt-36 pb-24 container mx-auto px-6 text-center">
          <p className="heading-display text-3xl">Piece not found</p>
          <Link to="/shop" className="nav-link heading-ui text-[11px] mt-4 inline-block">Return to Shop</Link>
        </div>
      </Layout>
    );
  }

  const isWished = wishlist.includes(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize);
    setAddedState(true);
    setIsOpen(true);
    setTimeout(() => setAddedState(false), 2000);
  };

  return (
    <Layout>
      <div className="pt-24 lg:pt-32 pb-24 container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <Link to="/shop" className="inline-flex items-center gap-2 heading-ui text-[11px] mb-8 text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft strokeWidth={1} size={16} />
            Back to Shop
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image with zoom on hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease }}
            className="overflow-hidden group cursor-crosshair"
          >
            <motion.img
              src={product.image}
              alt={product.name}
              onLoad={() => setImgLoaded(true)}
              className={`w-full aspect-[3/4] object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            {product.isNew && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="heading-ui text-[10px] text-muted-foreground mb-4 block"
              >
                New Arrival
              </motion.span>
            )}

            <RevealText delay={0.3}>
              <h1 className="heading-display text-3xl md:text-4xl mb-2">{product.name}</h1>
            </RevealText>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="text-lg">₹{product.price.toLocaleString("en-IN")}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              {product.description}
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mb-2">
              <span className="heading-ui text-[11px] text-muted-foreground">Fabric</span>
              <p className="text-sm mt-1">{product.fabric}</p>
            </motion.div>

            {/* Size Selection */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, ease }}
              className="mt-8 mb-8"
            >
              <span className="heading-ui text-[11px] text-muted-foreground block mb-3">Select Size</span>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 min-w-[44px] px-3 text-sm transition-colors ${
                      selectedSize === size
                        ? "bg-foreground text-background"
                        : "border border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, ease }}
              className="flex gap-3"
            >
              <motion.button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                whileHover={selectedSize ? { scale: 1.01 } : {}}
                whileTap={selectedSize ? { scale: 0.98 } : {}}
                className={`flex-1 h-12 text-sm tracking-wider uppercase transition-all ${
                  !selectedSize
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : addedState
                    ? "bg-foreground text-background"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={addedState ? "added" : "add"}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {addedState ? "Added ✓" : "Add to Bag"}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
              <motion.button
                onClick={() => toggleWishlist(product.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-12 w-12 flex items-center justify-center border border-border hover:border-foreground transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart strokeWidth={1} size={18} className={`transition-all ${isWished ? "fill-foreground scale-110" : ""}`} />
              </motion.button>
            </motion.div>

            {/* Additional Info */}
            <div className="mt-12 space-y-4 border-t border-border pt-8">
              {["Complimentary shipping on orders above ₹5,000", "Easy 14-day returns", "Handcrafted with care"].map((info, i) => (
                <motion.p
                  key={info}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.1, ease }}
                  className="text-sm text-muted-foreground"
                >
                  {info}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
