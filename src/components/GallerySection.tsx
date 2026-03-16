import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const images = [
  { src: "/images/hotel-1.png", alt: "Фасад гостиницы" },
  { src: "/images/hotel-2.png", alt: "Интерьер" },
  { src: "/images/hotel-3.png", alt: "Номер Standard" },
  { src: "/images/hotel-4.png", alt: "Номер Double" },
  { src: "/images/hotel-5.png", alt: "Номер Family" },
  { src: "/images/hotel-6.png", alt: "Кафе" },
  { src: "/images/hotel-7.png", alt: "Ванная комната" },
  { src: "/images/hotel-8.png", alt: "Город Слоним" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="py-24 md:py-32" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">
              Галерея
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-4">
              Атмосфера <span className="text-gold-gradient">уюта</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {images.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                  i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-foreground font-body text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground/60 hover:text-foreground"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </div>
      )}
    </>
  );
};

export default GallerySection;
