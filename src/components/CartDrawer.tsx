import { useCart } from "@/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/20 z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-[420px] bg-background z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 lg:p-8">
              <h2 className="heading-ui text-[11px]">Your Bag ({items.length})</h2>
              <button onClick={() => setIsOpen(false)}>
                <X strokeWidth={1} size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 lg:px-8">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="heading-display text-2xl mb-2">Your bag is empty</p>
                  <p className="text-muted-foreground text-sm mb-8">
                    Discover pieces crafted with heritage and intent.
                  </p>
                  <Link
                    to="/shop"
                    onClick={() => setIsOpen(false)}
                    className="bg-foreground text-background px-8 h-12 inline-flex items-center text-sm tracking-wider uppercase"
                  >
                    Explore the Edit
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-28 object-cover"
                      />
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <p className="text-sm font-medium">{item.product.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">Size: {item.size}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}>
                              <Minus strokeWidth={1} size={14} />
                            </button>
                            <span className="text-sm w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}>
                              <Plus strokeWidth={1} size={14} />
                            </button>
                          </div>
                          <p className="text-sm">₹{(item.product.price * item.quantity).toLocaleString("en-IN")}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="self-start pt-1"
                      >
                        <X strokeWidth={1} size={14} className="text-muted-foreground" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 lg:p-8 border-t border-border">
                <div className="flex items-center justify-between mb-6">
                  <span className="heading-ui text-[11px]">Subtotal</span>
                  <span className="text-base font-medium">₹{totalPrice.toLocaleString("en-IN")}</span>
                </div>
                <button className="w-full bg-foreground text-background h-12 text-sm tracking-wider uppercase transition-opacity hover:opacity-90 active:scale-[0.98]">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
