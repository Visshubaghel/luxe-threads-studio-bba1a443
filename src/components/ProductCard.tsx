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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.2, 0, 0, 1] }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative overflow-hidden mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-[3/4] object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-[1.02]"
            loading="lazy"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
            }}
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Add to wishlist"
          >
            <Heart
              strokeWidth={1}
              size={20}
              className={isWished ? "fill-foreground" : ""}
            />
          </button>
          {product.isNew && (
            <span className="absolute top-4 left-4 heading-ui text-[10px] bg-background/90 px-2 py-1">
              New
            </span>
          )}
        </div>
        <div className="space-y-1">
          <p className="heading-ui text-[11px]">{product.name}</p>
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
