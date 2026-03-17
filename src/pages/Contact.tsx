import Layout from "@/components/Layout";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you. Our concierge team will respond within 24 hours.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className="pt-28 lg:pt-36 pb-24 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="heading-display text-4xl md:text-5xl mb-4"
          >
            Contact
          </motion.h1>
          <p className="text-muted-foreground mb-16">Our concierge team is here to assist you with any enquiry.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { label: "Email", value: "hello@vastra.in" },
              { label: "Phone", value: "+91 98765 43210" },
              { label: "Studio", value: "Mumbai, Maharashtra" },
            ].map((item) => (
              <div key={item.label}>
                <span className="heading-ui text-[11px] text-muted-foreground block mb-1">{item.label}</span>
                <p className="text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {[
              { name: "name" as const, label: "Name", type: "text" },
              { name: "email" as const, label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="heading-ui text-[11px] text-muted-foreground block mb-2">{field.label}</label>
                <input
                  type={field.type}
                  required
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="heading-ui text-[11px] text-muted-foreground block mb-2">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-foreground text-background h-12 px-8 text-sm tracking-wider uppercase transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
