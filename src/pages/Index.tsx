import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Layout from "@/components/Layout";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];
const fadeUp = {
  initial: { opacity: 0, y: 20 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.8, ease },
};

export default function Index() {
  const featured = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.2, 0, 0, 1] }}
          src={hero1}
          alt="The Monsoon Collection by Vāstra"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
        <div className="relative h-full flex flex-col justify-end pb-16 lg:pb-24 container mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
            <h1 className="heading-display text-background text-5xl md:text-7xl lg:text-8xl max-w-3xl mb-6">
              The Monsoon Collection
            </h1>
            <p className="text-background/80 text-lg mb-8 max-w-md">
              Heritage in Motion. Handcrafted pieces that honour tradition while embracing the contemporary.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center bg-background text-foreground h-12 px-8 text-sm tracking-wider uppercase transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              Explore the Edit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 container mx-auto px-6 lg:px-12">
        <motion.h2
          {...fadeUp}
          viewport={{ once: true }}
          whileInView="animate"
          initial="initial"
          className="heading-ui text-[11px] mb-12 text-center"
        >
          Curated Collections
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { img: collection1, label: "Women's Edit", link: "/shop" },
            { img: collection2, label: "Festive Heirlooms", link: "/shop" },
            { img: collection3, label: "Men's Tailoring", link: "/shop" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.2, 0, 0, 1] }}
            >
              <Link to={item.link} className="group block relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="heading-ui text-[11px] text-background">{item.label}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-12">
          <h2 className="heading-ui text-[11px]">New Arrivals</h2>
          <Link to="/shop" className="nav-link heading-ui text-[11px]">View All</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Editorial Banner */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={hero2}
          alt="Vāstra menswear editorial"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-center container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="max-w-lg"
          >
            <h2 className="heading-display text-background text-4xl md:text-6xl mb-4">
              The Art of Draping
            </h2>
            <p className="text-background/80 mb-8">
              Six yards of history, reimagined for the modern wardrobe.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center border border-background text-background h-12 px-8 text-sm tracking-wider uppercase transition-colors hover:bg-background hover:text-foreground"
            >
              Discover
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Spacer before footer */}
      <div className="py-24" />
    </Layout>
  );
}
