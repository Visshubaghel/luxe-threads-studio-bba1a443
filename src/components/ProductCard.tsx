import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const { wishlist, toggleWishlist } = useCart();
  const isWished = wishlist.includes(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.2, 0, 0, 1] }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative overflow-hidden mb-4">
          <motion.img
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
            src={product.image}
            alt={product.name}
            className="w-full aspect-[3/4] object-cover"
            loading="lazy"
          />
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
            }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Add to wishlist"
          >
            <Heart
              strokeWidth={1}
              size={20}
              className={`transition-all duration-300 ${isWished ? "fill-foreground scale-110" : ""}`}
            />
          </motion.button>
          {product.isNew && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.08 }}
              className="absolute top-4 left-4 heading-ui text-[10px] bg-background/90 backdrop-blur-sm px-2 py-1"
            >
              New
            </motion.span>
          )}
        </div>
        <div className="space-y-1">
          <p className="heading-ui text-[11px] group-hover:translate-x-0.5 transition-transform duration-300">{product.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm">₹{product.price.toLocaleString("en-IN")}</p>
            {product.originalPrice && (
              <p className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
