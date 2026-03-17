import Layout from "@/components/Layout";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only
  };

  return (
    <Layout>
      <div className="pt-28 lg:pt-36 pb-24 container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="max-w-sm mx-auto"
        >
          <h1 className="heading-display text-3xl md:text-4xl mb-2 text-center">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-muted-foreground text-sm text-center mb-12">
            {isLogin ? "Sign in to access your account" : "Join the Vāstra community"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="heading-ui text-[11px] text-muted-foreground block mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm transition-colors"
                />
              </div>
            )}
            <div>
              <label className="heading-ui text-[11px] text-muted-foreground block mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm transition-colors"
              />
            </div>
            <div>
              <label className="heading-ui text-[11px] text-muted-foreground block mb-2">Password</label>
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-foreground text-background h-12 text-sm tracking-wider uppercase transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <p className="text-sm text-center mt-8 text-muted-foreground">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-foreground underline underline-offset-4"
            >
              {isLogin ? "Create one" : "Sign in"}
            </button>
          </p>
        </motion.div>
      </div>
    </Layout>
  );
}
