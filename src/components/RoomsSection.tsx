import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { rooms } from "@/data/rooms";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const RoomsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
            Номера и цены
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-4">
            Выберите <span className="text-gold-gradient">свой</span> номер
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((room, i) => {
            const isExpanded = expandedId === room.id;
            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="glass rounded-2xl overflow-hidden group hover:gold-glow transition-all duration-500"
              >
                <Link to={`/room/${room.id}`} className="block">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <span className="absolute bottom-4 left-4 font-display text-lg leading-tight pr-4">
                      {room.title}
                    </span>
                  </div>
                </Link>

                <div className="p-6">
                  <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
                    {room.desc}
                  </p>

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : room.id)}
                    className="flex items-center gap-2 text-primary text-sm font-body tracking-wider mb-4 hover:opacity-80 transition-opacity"
                  >
                    {isExpanded ? "Скрыть" : "Подробнее"}
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mb-4"
                    >
                      <h4 className="text-sm font-display mb-2">Удобства:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs font-body text-foreground/80">
                            <Check size={14} className="text-primary shrink-0" />
                            {feat}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-primary font-display text-lg">{room.price}</span>
                    <Link
                      to={`/room/${room.id}`}
                      className="text-sm font-body tracking-wider text-primary border border-primary/30 px-4 py-2 rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
