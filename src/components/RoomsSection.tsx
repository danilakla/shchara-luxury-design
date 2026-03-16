import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { rooms } from "@/data/rooms";

const RoomsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rooms" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">
            Номера
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-4">
            Выберите <span className="text-gold-gradient">свой</span> номер
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <Link
                to={`/room/${room.id}`}
                className="block glass rounded-2xl overflow-hidden group hover:gold-glow transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-display text-xl">
                    {room.title}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6">
                    {room.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-display text-lg">{room.price}</span>
                    <span className="text-sm font-body tracking-wider text-primary border border-primary/30 px-4 py-2 rounded group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      Подробнее
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
