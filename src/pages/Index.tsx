import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import ProductCard from "@/components/ProductCard";
import RevealText from "@/components/RevealText";
import MagneticButton from "@/components/MagneticButton";
import { products } from "@/data/products";
import Layout from "@/components/Layout";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

const stagger = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease },
};

export default function Index() {
  const featured = products.slice(0, 4);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: bannerScroll } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });
  const bannerY = useTransform(bannerScroll, [0, 1], ["-10%", "10%"]);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease }}
          style={{ y: heroY }}
          src={hero1}
          alt="The Monsoon Collection by Vāstra"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />
        <motion.div style={{ opacity: heroOpacity }} className="relative h-full flex flex-col justify-end pb-16 lg:pb-24 container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <RevealText delay={0.3}>
              <h1 className="heading-display text-background text-5xl md:text-7xl lg:text-8xl max-w-3xl mb-6">
                The Monsoon Collection
              </h1>
            </RevealText>
            <motion.p
              variants={fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.6 }}
              className="text-background/80 text-lg mb-8 max-w-md"
            >
              Heritage in Motion. Handcrafted pieces that honour tradition while embracing the contemporary.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ ...fadeUp.transition, delay: 0.8 }}>
              <MagneticButton>
                <Link
                  to="/shop"
                  className="inline-flex items-center bg-background text-foreground h-12 px-8 text-sm tracking-wider uppercase transition-all hover:opacity-90 active:scale-[0.97] hover:shadow-lg"
                >
                  Explore the Edit
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-background/40"
          />
        </motion.div>
      </section>

      {/* Marquee Banner */}
      <section className="py-6 border-y border-border overflow-hidden">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {Array(3).fill(null).map((_, i) => (
            <span key={i} className="heading-ui text-[11px] text-muted-foreground flex items-center gap-12">
              <span>Handcrafted with Care</span>
              <span className="w-1 h-1 bg-muted-foreground rounded-full" />
              <span>Free Shipping Above ₹5,000</span>
              <span className="w-1 h-1 bg-muted-foreground rounded-full" />
              <span>Sustainably Sourced</span>
              <span className="w-1 h-1 bg-muted-foreground rounded-full" />
              <span>Heritage Craftsmanship</span>
              <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            </span>
          ))}
        </motion.div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 container mx-auto px-6 lg:px-12">
        <RevealText className="text-center mb-12">
          <h2 className="heading-ui text-[11px]">Curated Collections</h2>
        </RevealText>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { img: collection1, label: "Women's Edit", link: "/shop" },
            { img: collection2, label: "Festive Heirlooms", link: "/shop" },
            { img: collection3, label: "Men's Tailoring", link: "/shop" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease }}
            >
              <Link to={item.link} className="group block relative overflow-hidden">
                <div className="overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease }}
                    src={item.img}
                    alt={item.label}
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.span
                    className="heading-ui text-[11px] text-background inline-block"
                  >
                    {item.label}
                  </motion.span>
                  <div className="h-[1px] bg-background/60 mt-3 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.2,0,0,1)" }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-12">
          <RevealText>
            <h2 className="heading-ui text-[11px]">New Arrivals</h2>
          </RevealText>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <Link to="/shop" className="nav-link heading-ui text-[11px]">View All</Link>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Editorial Banner with Parallax */}
      <section ref={bannerRef} className="relative h-[70vh] overflow-hidden">
        <motion.img
          style={{ y: bannerY }}
          src={hero2}
          alt="Vāstra menswear editorial"
          className="absolute inset-0 w-full h-[120%] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 to-transparent" />
        <div className="relative h-full flex flex-col justify-center container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-lg"
          >
            <RevealText delay={0.1}>
              <h2 className="heading-display text-background text-4xl md:text-6xl mb-4">
                The Art of Draping
              </h2>
            </RevealText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="text-background/80 mb-8"
            >
              Six yards of history, reimagined for the modern wardrobe.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
            >
              <MagneticButton>
                <Link
                  to="/shop"
                  className="inline-flex items-center border border-background text-background h-12 px-8 text-sm tracking-wider uppercase transition-all hover:bg-background hover:text-foreground"
                >
                  Discover
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Spacer before footer */}
      <div className="py-24" />
    </Layout>
  );
}
