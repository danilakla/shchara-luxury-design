import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacts" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">
            Контакты
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-4">
            Свяжитесь <span className="text-gold-gradient">с нами</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-xl p-6 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-body">Ресепшен</p>
                  <a href="tel:+375156266303" className="font-body text-foreground hover:text-primary transition-colors">
                    +375 156 266 303
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-body">Viber</p>
                  <a href="viber://chat?number=%2B375447722536" className="font-body text-foreground hover:text-primary transition-colors">
                    +375 44 772 25 36
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-body">Email</p>
                  <a href="mailto:shchara19@slonimgkh.by" className="font-body text-foreground hover:text-primary transition-colors">
                    shchara19@slonimgkh.by
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-body">Адрес</p>
                  <span className="font-body text-foreground text-sm">
                    Беларусь, г. Слоним, ул. Первомайская, 19
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+375156266303"
                className="flex-1 flex items-center justify-center gap-2 gold-gradient text-primary-foreground px-6 py-3.5 rounded font-body text-sm tracking-wider hover:opacity-90 transition-opacity"
              >
                <Phone size={16} />
                Позвонить
              </a>
              <a
                href="viber://chat?number=%2B375447722536"
                className="flex-1 flex items-center justify-center gap-2 border border-primary/30 text-primary px-6 py-3.5 rounded font-body text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageCircle size={16} />
                Написать в Viber
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-border min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380!2d25.321737!3d53.095857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDA1JzQ1LjEiTiAyNcKwMTknMTguMyJF!5e0!3m2!1sru!2sby!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9)", minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Расположение гостиницы Щара"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
