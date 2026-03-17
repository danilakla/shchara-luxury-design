import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Banknote, Globe, FileText, CheckCircle, Mail } from "lucide-react";

const paymentMethods = [
  { icon: Banknote, title: "Наличные", desc: "Оплата на стойке регистрации" },
  { icon: CreditCard, title: "Банковский перевод", desc: "Безналичный расчёт" },
  { icon: Globe, title: "Онлайн оплата картой", desc: "Visa, Mastercard, БЕЛКАРТ" },
];

const steps = [
  { icon: FileText, step: "1", title: "Заполнить заявку", desc: "Заполните форму бронирования или свяжитесь по телефону" },
  { icon: CheckCircle, step: "2", title: "Получить подтверждение", desc: "Менеджер свяжется с вами для подтверждения" },
  { icon: Mail, step: "3", title: "Получить ссылку на оплату", desc: "Ссылка для онлайн-оплаты придёт на ваш email" },
];

const PaymentSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="payment" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">
            Оплата
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-4">
            Способы <span className="text-gold-gradient">оплаты</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {paymentMethods.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center group hover:gold-glow transition-shadow duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <method.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-base mb-1">{method.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{method.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="font-display text-2xl text-center mb-10">
            Как <span className="text-gold-gradient">оплатить</span>
          </h3>
          <div className="max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="flex items-start gap-5 mb-8 last:mb-0"
              >
                <div className="shrink-0 w-12 h-12 rounded-full gold-gradient flex items-center justify-center font-display text-primary-foreground text-lg">
                  {step.step}
                </div>
                <div>
                  <h4 className="font-display text-lg mb-1">{step.title}</h4>
                  <p className="text-muted-foreground text-sm font-body">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentSection;
