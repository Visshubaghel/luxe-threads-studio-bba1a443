import Layout from "@/components/Layout";
import RevealText from "@/components/RevealText";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you. Our concierge team will respond within 24 hours.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className="pt-28 lg:pt-36 pb-24 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <RevealText>
            <h1 className="heading-display text-4xl md:text-5xl mb-4">Contact</h1>
          </RevealText>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground mb-16"
          >
            Our concierge team is here to assist you with any enquiry.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { label: "Email", value: "hello@vastra.in" },
              { label: "Phone", value: "+91 98765 43210" },
              { label: "Studio", value: "Mumbai, Maharashtra" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, ease }}
              >
                <span className="heading-ui text-[11px] text-muted-foreground block mb-1">{item.label}</span>
                <p className="text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, ease }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {[
              { name: "name" as const, label: "Name", type: "text" },
              { name: "email" as const, label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <label className={`heading-ui text-[11px] block mb-2 transition-colors duration-300 ${focused === field.name ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm transition-colors duration-300"
                />
              </div>
            ))}
            <div className="relative">
              <label className={`heading-ui text-[11px] block mb-2 transition-colors duration-300 ${focused === 'message' ? 'text-foreground' : 'text-muted-foreground'}`}>
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm transition-colors duration-300 resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="bg-foreground text-background h-12 px-8 text-sm tracking-wider uppercase transition-opacity hover:opacity-90"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </Layout>
  );
}
