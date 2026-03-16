import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hotel-1.png')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-sm md:text-base tracking-[0.4em] uppercase text-primary font-body">
            Добро пожаловать
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
        >
          Hotel <span className="text-gold-gradient">Shchara</span>
          <br />
          <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground/80">
            комфорт в сердце Слонима
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-muted-foreground text-base md:text-lg mb-10 max-w-2xl mx-auto font-body"
        >
          Уютная гостиница в самом центре города, рядом с историческими
          достопримечательностями
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:+375156266303"
            className="gold-gradient text-primary-foreground px-8 py-3.5 rounded font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Забронировать номер
          </a>
          <a
            href="#rooms"
            className="border border-foreground/20 text-foreground px-8 py-3.5 rounded font-body text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all"
          >
            Смотреть номера
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/40"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
