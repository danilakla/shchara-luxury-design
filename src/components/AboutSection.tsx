import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Bed, Wifi, Coffee, Clock } from "lucide-react";

const advantages = [
  { icon: MapPin, title: "Центр города", desc: "Рядом с достопримечательностями" },
  { icon: Bed, title: "Уютные номера", desc: "Комфорт для каждого гостя" },
  { icon: Wifi, title: "Wi-Fi", desc: "Бесплатный высокоскоростной" },
  { icon: Coffee, title: "Кафе", desc: "Завтраки и ужины" },
  { icon: Clock, title: "24/7", desc: "Круглосуточная стойка регистрации" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">
            О гостинице
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-4 mb-6">
            Ваш <span className="text-gold-gradient">идеальный</span> отдых
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 space-y-5"
        >
          <p className="text-muted-foreground text-base md:text-lg font-body leading-relaxed">
            Гостиница «Щара» начала своё существование в 1963 году, расположена в центре города Слонима рядом со сквером, Спасо-Преображенским Собором, костёлом Святого Андрея. Рядом находится краеведческий музей им. Стабровского, драматический театр. Последняя реконструкция гостиницы состоялась в 2019 году.
          </p>
          <p className="text-muted-foreground text-base md:text-lg font-body leading-relaxed">
            Рады вам представить одноместные и двухместные номера, различные по уровню комфорта и цене. В номерах имеется всё необходимое для спокойного отдыха и полноценной работы. В гостинице имеется бесплатный Wi-Fi.
          </p>
          <p className="text-muted-foreground text-base md:text-lg font-body leading-relaxed">
            Наш доброжелательный и вежливый персонал создаст для вас атмосферу уюта и комфорта. Мы сделаем все возможное, чтобы пребывание в нашей гостинице стало для Вас приятным.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center group hover:gold-glow transition-shadow duration-500"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display text-sm md:text-base mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs font-body">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
