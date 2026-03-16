import { Phone, MapPin, Navigation } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacts" className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-primary mb-4">SHCHARA</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Гостиница «Щара» — уютное место для отдыха и деловых поездок в самом
              центре города Слоним.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-display text-lg mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground text-sm font-body">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>Слоним, ул. Первомайская, 19</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm font-body">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+375156266303" className="hover:text-primary transition-colors">
                  +375 15 626-63-03
                </a>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div>
            <h4 className="font-display text-lg mb-4">Быстрые действия</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+375156266303"
                className="inline-flex items-center gap-2 gold-gradient text-primary-foreground px-6 py-3 rounded text-sm font-body tracking-wider justify-center hover:opacity-90 transition-opacity"
              >
                <Phone size={16} />
                Позвонить
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=53.095857,25.321737"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary/30 text-primary px-6 py-3 rounded text-sm font-body tracking-wider justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Navigation size={16} />
                Построить маршрут
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-xs font-body">
            © {new Date().getFullYear()} Гостиница «Щара». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
