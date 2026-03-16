import { useParams, Link } from "react-router-dom";
import { rooms } from "@/data/rooms";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Users, Maximize, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const RoomDetail = () => {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!room) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Номер не найден</h1>
          <Link to="/" className="text-primary hover:underline font-body">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Герой номера */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${room.gallery[activeImage]}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/#rooms"
              className="inline-flex items-center gap-2 text-primary text-sm font-body tracking-wider mb-6 hover:opacity-80 transition-opacity"
            >
              <ArrowLeft size={16} />
              Назад к номерам
            </Link>
            <h1 className="font-display text-4xl md:text-6xl mb-3">
              {room.title}
            </h1>
            <p className="text-primary font-display text-2xl">{room.price}</p>
          </motion.div>
        </div>
      </section>

      {/* Миниатюры галереи */}
      <section className="py-6 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {room.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === i ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`${room.title} фото ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Детали */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Описание */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display text-2xl md:text-3xl mb-6">
                О номере
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg mb-8">
                {room.fullDesc}
              </p>

              {/* Удобства */}
              <h3 className="font-display text-xl mb-4">Удобства в номере</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {room.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-sm font-body text-foreground/80">
                    <Check size={16} className="text-primary shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Боковая карточка */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass rounded-2xl p-6 h-fit"
            >
              <h3 className="font-display text-xl mb-6 text-center">Забронировать</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-sm font-body text-muted-foreground">
                  <Users size={18} className="text-primary" />
                  <span>{room.capacity}</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-body text-muted-foreground">
                  <Maximize size={18} className="text-primary" />
                  <span>{room.area}</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm font-body">Цена за ночь</span>
                  <span className="text-primary font-display text-xl">{room.price}</span>
                </div>
              </div>

              <a
                href="tel:+375156266303"
                className="flex items-center justify-center gap-2 w-full gold-gradient text-primary-foreground px-6 py-3.5 rounded font-body text-sm tracking-wider hover:opacity-90 transition-opacity mb-3"
              >
                <Phone size={16} />
                Позвонить для брони
              </a>

              <Link
                to="/#rooms"
                className="block text-center text-sm font-body text-muted-foreground hover:text-primary transition-colors"
              >
                Смотреть другие номера
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Другие номера */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-center mb-10">
            Другие <span className="text-gold-gradient">номера</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {rooms
              .filter((r) => r.id !== room.id)
              .map((r) => (
                <Link
                  key={r.id}
                  to={`/room/${r.id}`}
                  className="glass rounded-xl overflow-hidden group hover:gold-glow transition-all duration-500"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <span className="absolute bottom-3 left-3 font-display text-lg">{r.title}</span>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <span className="text-primary font-display">{r.price}</span>
                    <span className="text-xs font-body text-muted-foreground">Подробнее →</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoomDetail;
