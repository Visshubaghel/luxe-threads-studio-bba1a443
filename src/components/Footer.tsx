import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl mb-4">Vāstra</h3>
            <p className="text-sm opacity-60 leading-relaxed max-w-[280px]">
              Heritage craftsmanship, modern sensibility. Each piece tells a story woven through generations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 opacity-40">Navigate</h4>
            <nav className="flex flex-col gap-3">
              {[
                { to: "/shop", label: "Shop All" },
                { to: "/about", label: "Our Story" },
                { to: "/contact", label: "Concierge" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 opacity-40">Information</h4>
            <nav className="flex flex-col gap-3">
              {[
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms & Conditions" },
                { to: "/contact", label: "Shipping & Returns" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 opacity-40">Join the Edit</h4>
            <p className="text-sm opacity-60 mb-4">Receive curated stories and early access.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-transparent border-b border-background/20 focus:border-background/60 outline-none text-sm py-2 placeholder:opacity-40 transition-colors"
              />
              <button type="submit" className="text-xs tracking-widest uppercase ml-4 opacity-60 hover:opacity-100 transition-opacity">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-40">© 2026 Vāstra. All rights reserved.</p>
          <div className="flex gap-6">
            {["Instagram", "Pinterest", "Twitter"].map((s) => (
              <a key={s} href="#" className="text-xs opacity-40 hover:opacity-100 transition-opacity">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
