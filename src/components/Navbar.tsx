import { Link } from "react-router-dom";
import { Search, ShoppingBag, Heart, Menu, X, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left */}
            <div className="flex items-center gap-8">
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu strokeWidth={1} size={22} />
              </button>
              <nav className="hidden lg:flex items-center gap-8">
                <Link to="/shop" className="nav-link heading-ui text-[11px]">Shop</Link>
                <Link to="/about" className="nav-link heading-ui text-[11px]">About</Link>
              </nav>
            </div>

            {/* Center - Logo */}
            <Link to="/" className="heading-display text-2xl lg:text-3xl">
              Vāstra
            </Link>

            {/* Right */}
            <div className="flex items-center gap-5">
              <Link to="/shop" className="hidden lg:block" aria-label="Search">
                <Search strokeWidth={1} size={20} />
              </Link>
              <Link to="/login" className="hidden lg:block" aria-label="Account">
                <User strokeWidth={1} size={20} />
              </Link>
              <Link to="/shop" aria-label="Wishlist">
                <Heart strokeWidth={1} size={20} />
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="relative"
                aria-label="Cart"
              >
                <ShoppingBag strokeWidth={1} size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-foreground text-background text-[10px] w-4 h-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/20 z-50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
              className="fixed left-0 top-0 bottom-0 w-[300px] bg-background z-50 p-8 flex flex-col"
            >
              <button onClick={() => setMobileOpen(false)} className="self-end mb-12">
                <X strokeWidth={1} size={22} />
              </button>
              <nav className="flex flex-col gap-6">
                {[
                  { to: "/", label: "Home" },
                  { to: "/shop", label: "Shop" },
                  { to: "/about", label: "About" },
                  { to: "/contact", label: "Contact" },
                  { to: "/login", label: "Account" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="heading-display text-3xl"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
