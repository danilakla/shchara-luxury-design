export interface Room {
  id: string;
  title: string;
  desc: string;
  fullDesc: string;
  price: string;
  image: string;
  gallery: string[];
  features: string[];
  capacity: string;
  area: string;
}

export const rooms: Room[] = [
  {
    id: "lux",
    title: "Люкс (двухкомнатный)",
    desc: "Просторный двухкомнатный люкс с кондиционером, телевизором и всеми удобствами для комфортного проживания.",
    fullDesc:
      "Двухкомнатный люкс — самый просторный и комфортабельный номер гостиницы «Щара». Включает гостиную с мягкой мебелью и спальню с удобной кроватью. Оснащён кондиционером, телевизором с кабельным ТВ, холодильником и телефоном. Идеален для длительного проживания и взыскательных гостей.",
    price: "150 BYN / сутки",
    image: "/images/room-lux-1.png",
    gallery: ["/images/room-lux-1.png", "/images/room-lux-2.png", "/images/room-detail-1.png"],
    features: ["Телефон", "Кабельное телевидение", "Холодильник", "Кондиционер", "Wi-Fi"],
    capacity: "1–2 гостя",
    area: "36 м²",
  },
  {
    id: "odnomestnyj",
    title: "Одноместный номер",
    desc: "Уютный одноместный номер с телевизором, холодильником и бесплатным Wi-Fi.",
    fullDesc:
      "Одноместный номер — уютное и функциональное пространство для одного гостя. В номере есть телефон, кабельное телевидение, холодильник и бесплатный Wi-Fi. Подходит для деловых поездок и коротких визитов в Слоним.",
    price: "65 BYN / сутки",
    image: "/images/room-single-1.png",
    gallery: ["/images/room-single-1.png", "/images/room-detail-2.png", "/images/room-bathroom.png"],
    features: ["Телефон", "Кабельное телевидение", "Холодильник", "Wi-Fi"],
    capacity: "1 гость",
    area: "18 м²",
  },
  {
    id: "odnomestnyj-dostupnyj",
    title: "Одноместный (для людей с ограниченными возможностями)",
    desc: "Адаптированный одноместный номер с удобным доступом и всеми необходимыми удобствами.",
    fullDesc:
      "Номер адаптирован для людей с ограниченными возможностями. Оснащён телефоном, телевидением, холодильником и бесплатным Wi-Fi. Удобный доступ и просторная планировка обеспечивают максимальный комфорт.",
    price: "60 BYN / сутки",
    image: "/images/room-detail-2.png",
    gallery: ["/images/room-detail-2.png", "/images/room-detail-3.png", "/images/room-bathroom.png"],
    features: ["Телефон", "Телевидение", "Холодильник", "Wi-Fi"],
    capacity: "1 гость",
    area: "20 м²",
  },
  {
    id: "dvuhmestnyj-1",
    title: "Двухместный номер (вариант 1)",
    desc: "Просторный двухместный номер с кондиционером, кабельным ТВ и Wi-Fi.",
    fullDesc:
      "Двухместный номер первого варианта — просторное и светлое пространство с кондиционером, кабельным телевидением, холодильником и телефоном. Бесплатный Wi-Fi. Идеален для пар и деловых путешественников.",
    price: "130 BYN / сутки",
    image: "/images/room-double-1.png",
    gallery: ["/images/room-double-1.png", "/images/room-family-1.png", "/images/room-detail-1.png"],
    features: ["Кондиционер", "Телефон", "Кабельное ТВ", "Холодильник", "Wi-Fi"],
    capacity: "2 гостя",
    area: "24 м²",
  },
  {
    id: "dvuhmestnyj-2",
    title: "Двухместный номер (вариант 2)",
    desc: "Комфортный двухместный номер с кабельным ТВ, холодильником и Wi-Fi.",
    fullDesc:
      "Двухместный номер второго варианта — комфортное пространство с телефоном, кабельным телевидением, холодильником и бесплатным Wi-Fi. Отличный выбор для пар, ценящих уют и удобство.",
    price: "120 BYN / сутки",
    image: "/images/room-family-2.png",
    gallery: ["/images/room-family-2.png", "/images/room-family-1.png", "/images/room-detail-2.png"],
    features: ["Телефон", "Кабельное ТВ", "Холодильник", "Wi-Fi"],
    capacity: "2 гостя",
    area: "22 м²",
  },
];
