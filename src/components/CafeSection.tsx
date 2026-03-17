import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UtensilsCrossed, Clock, Phone, Sparkles, Heart, Palette } from "lucide-react";

const highlights = [
  { icon: Heart, text: "Уютное место для отдыха и мероприятий" },
  { icon: Sparkles, text: "Индивидуальный подход" },
  { icon: Palette, text: "Современный интерьер" },
  { icon: UtensilsCrossed, text: "Меню на любой вкус" },
];

const menuCategories = [
  "Белорусская кухня",
  "Салаты",
  "Супы",
  "Горячие закуски",
  "Горячие блюда",
];

const CafeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cafe" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">
            Кафе
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-4">
            Наше <span className="text-gold-gradient">кафе</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <span className="text-foreground/80 font-body text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="glass rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3 text-sm font-body text-muted-foreground">
                <Clock size={18} className="text-primary shrink-0" />
                <div>
                  <span className="text-foreground">Вт–Сб:</span> 07:30 – 18:30
                  <br />
                  <span className="text-foreground">Вс, Пн:</span> выходной
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm font-body text-muted-foreground">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:47265" className="hover:text-primary transition-colors">47265</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="font-display text-xl mb-6 text-center">Категории меню</h3>
            <div className="space-y-3">
              {menuCategories.map((cat, i) => (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <UtensilsCrossed size={16} className="text-primary shrink-0" />
                  <span className="font-body text-sm text-foreground/80">{cat}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CafeSection;
