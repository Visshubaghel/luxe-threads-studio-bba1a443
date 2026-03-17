import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Layout from "@/components/Layout";
import { Heart, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, setIsOpen, wishlist, toggleWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [addedState, setAddedState] = useState(false);

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
        <Link to="/shop" className="inline-flex items-center gap-2 heading-ui text-[11px] mb-8 text-muted-foreground hover:text-foreground transition-colors">
          <ChevronLeft strokeWidth={1} size={16} />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-[3/4] object-cover"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            {product.isNew && (
              <span className="heading-ui text-[10px] text-muted-foreground mb-4 block">New Arrival</span>
            )}
            <h1 className="heading-display text-3xl md:text-4xl mb-2">{product.name}</h1>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-lg">₹{product.price.toLocaleString("en-IN")}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            <div className="mb-2">
              <span className="heading-ui text-[11px] text-muted-foreground">Fabric</span>
              <p className="text-sm mt-1">{product.fabric}</p>
            </div>

            {/* Size Selection */}
            <div className="mt-8 mb-8">
              <span className="heading-ui text-[11px] text-muted-foreground block mb-3">Select Size</span>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 min-w-[44px] px-3 text-sm transition-colors ${
                      selectedSize === size
                        ? "bg-foreground text-background"
                        : "border border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`flex-1 h-12 text-sm tracking-wider uppercase transition-all active:scale-[0.98] ${
                  !selectedSize
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : addedState
                    ? "bg-foreground text-background"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                {addedState ? "Added" : "Add to Bag"}
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className="h-12 w-12 flex items-center justify-center border border-border hover:border-foreground transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart strokeWidth={1} size={18} className={isWished ? "fill-foreground" : ""} />
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-12 space-y-4 border-t border-border pt-8">
              {["Complimentary shipping on orders above ₹5,000", "Easy 14-day returns", "Handcrafted with care"].map((info) => (
                <p key={info} className="text-sm text-muted-foreground">{info}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
