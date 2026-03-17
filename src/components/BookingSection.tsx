import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Минимум 2 символа").max(100),
  phone: z.string().trim().min(7, "Введите корректный номер телефона").max(20),
  email: z.string().trim().email("Введите корректный email").max(255),
  checkin: z.string().min(1, "Выберите дату заезда"),
  checkout: z.string().min(1, "Выберите дату выезда"),
  comment: z.string().max(1000).optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

const BookingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      checkin: "",
      checkout: "",
      comment: "",
    },
  });

  const onSubmit = async (data: BookingForm) => {
    setIsSubmitting(true);

    // Формируем mailto ссылку
    const subject = encodeURIComponent(`Бронирование от ${data.name}`);
    const body = encodeURIComponent(
      `Имя: ${data.name}\nТелефон: ${data.phone}\nEmail: ${data.email}\nДата заезда: ${data.checkin}\nДата выезда: ${data.checkout}\nКомментарий: ${data.comment || "—"}`
    );
    window.open(`mailto:shchara19@slonimgkh.by?subject=${subject}&body=${body}`, "_self");

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами для подтверждения бронирования.",
      });
      form.reset();
    }, 1000);
  };

  return (
    <section id="booking" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">
            Бронирование
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-4">
            Забронировать <span className="text-gold-gradient">номер</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto glass rounded-2xl p-8"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-sm text-foreground/80">Имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Ваше имя" className="bg-secondary/50 border-border font-body" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-sm text-foreground/80">Телефон</FormLabel>
                      <FormControl>
                        <Input placeholder="+375..." className="bg-secondary/50 border-border font-body" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body text-sm text-foreground/80">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email@example.com" className="bg-secondary/50 border-border font-body" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="checkin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-sm text-foreground/80">Дата заезда</FormLabel>
                      <FormControl>
                        <Input type="date" className="bg-secondary/50 border-border font-body" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="checkout"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-sm text-foreground/80">Дата выезда</FormLabel>
                      <FormControl>
                        <Input type="date" className="bg-secondary/50 border-border font-body" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body text-sm text-foreground/80">Комментарий</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Пожелания к бронированию..." className="bg-secondary/50 border-border font-body" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 gold-gradient text-primary-foreground px-8 py-3.5 rounded font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send size={16} />
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
