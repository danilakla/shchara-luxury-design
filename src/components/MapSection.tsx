import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MapSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">
            Расположение
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-4">
            Как нас <span className="text-gold-gradient">найти</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-border"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380!2d25.321737!3d53.095857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDA1JzQ1LjEiTiAyNcKwMTknMTguMyJF!5e0!3m2!1sru!2sby!4v1700000000000"
            width="100%"
            height="450"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Расположение гостиницы Щара"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
