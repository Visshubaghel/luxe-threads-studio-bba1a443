import Layout from "@/components/Layout";
import ParallaxImage from "@/components/ParallaxImage";
import RevealText from "@/components/RevealText";
import collection2 from "@/assets/collection-2.jpg";
import hero1 from "@/assets/hero-1.jpg";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.2, 0, 0, 1];

export default function About() {
  return (
    <Layout>
      <div className="pt-28 lg:pt-36 pb-24">
        {/* Hero */}
        <div className="container mx-auto px-6 lg:px-12 mb-24">
          <RevealText>
            <h1 className="heading-display text-5xl md:text-7xl max-w-2xl mb-8">Our Story</h1>
          </RevealText>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Vāstra was born from a reverence for India's textile heritage and a desire to present it through a contemporary lens — without compromise.
          </motion.p>
        </div>

        {/* Parallax Image */}
        <div className="container mx-auto px-6 lg:px-12 mb-24">
          <ParallaxImage src={collection2} alt="Vāstra artisans at work" className="aspect-[21/9]" speed={0.1} />
        </div>

        {/* Vision / Mission */}
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <h2 className="heading-ui text-[11px] mb-6 text-muted-foreground">Vision</h2>
              <RevealText>
                <p className="heading-display text-2xl md:text-3xl leading-snug">
                  To become the definitive destination for modern Indian fashion — where every thread carries intention, and every silhouette speaks to both ancestry and aspiration.
                </p>
              </RevealText>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
            >
              <h2 className="heading-ui text-[11px] mb-6 text-muted-foreground">Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We partner with master artisans across India — from the handloom weavers of Varanasi to the block printers of Jaipur — ensuring fair wages and preserving techniques that have been handed down for centuries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every Vāstra piece is made with organic or sustainably sourced materials, minimal waste processes, and a commitment to quality that defies the speed of fast fashion.
              </p>
            </motion.div>
          </div>

          {/* Values with staggered counter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24">
            {[
              { title: "Craft", desc: "Each piece is a collaboration between heritage artisans and modern design, taking weeks—sometimes months—to complete." },
              { title: "Quality", desc: "We source only the finest natural fibres: Banarasi silk, organic cotton, pure pashmina. No shortcuts, no substitutes." },
              { title: "Intent", desc: "Fashion with purpose. Every decision, from dye to drape, is made with the earth and its people in mind." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease }}
                className="group"
              >
                <span className="heading-ui text-[11px] text-muted-foreground block mb-2">0{i + 1}</span>
                <h3 className="heading-display text-xl mb-3 group-hover:translate-x-1 transition-transform duration-300">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Parallax Image */}
        <div className="container mx-auto px-6 lg:px-12">
          <ParallaxImage src={hero1} alt="Vāstra collection" className="aspect-[16/7]" speed={0.1} />
        </div>
      </div>
    </Layout>
  );
}
