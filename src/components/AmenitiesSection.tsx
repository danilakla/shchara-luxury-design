import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wifi, Tv, ShowerHead, Refrigerator, CupSoda, Car } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Tv, label: "Телевизор" },
  { icon: ShowerHead, label: "Душ / Ванна" },
  { icon: Refrigerator, label: "Холодильник" },
  { icon: CupSoda, label: "Чайник" },
  { icon: Car, label: "Парковка" },
];

const AmenitiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">
            Удобства
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-4">
            Всё для вашего <span className="text-gold-gradient">комфорта</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {amenities.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center group-hover:gold-glow transition-shadow duration-500">
                <item.icon className="text-primary" size={26} />
              </div>
              <span className="text-sm font-body text-muted-foreground group-hover:text-foreground transition-colors">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
