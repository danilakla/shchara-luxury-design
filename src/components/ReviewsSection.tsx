import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Анна К.",
    text: "Очень чистые номера, хороший сервис. Расположение в центре — огромный плюс!",
    rating: 5,
  },
  {
    name: "Михаил П.",
    text: "Уютная гостиница с приветливым персоналом. Завтраки отличные. Рекомендую!",
    rating: 5,
  },
  {
    name: "Елена С.",
    text: "Останавливались семьёй, всё понравилось. Номер просторный и чистый.",
    rating: 4,
  },
  {
    name: "Дмитрий В.",
    text: "Отличное соотношение цены и качества. Wi-Fi работает стабильно. Вернёмся снова!",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">
            Отзывы
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-4">
            Что говорят <span className="text-gold-gradient">гости</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass rounded-xl p-6 hover:gold-glow transition-shadow duration-500"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={16}
                    className={s < review.rating ? "text-primary fill-primary" : "text-muted-foreground"}
                  />
                ))}
              </div>
              <p className="text-foreground/80 text-sm font-body leading-relaxed mb-4">
                «{review.text}»
              </p>
              <span className="text-primary text-sm font-display">{review.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
