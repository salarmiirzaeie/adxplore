export type CarouselSlide = {
  heading: string;
  sub?: string;
};

export type CarouselSet = {
  slug: string;
  title: string;
  slides: CarouselSlide[];
};

/** Instagram square carousel sets — open /social/carousel/[slug]/[1-5] after deploy or locally. */
export const carouselSets: CarouselSet[] = [
  {
    slug: "intro",
    title: "معرفی ادکسپلور",
    slides: [
      { heading: "سلام، ما ادکسپلور هستیم" },
      {
        heading: "پلتفرم بی‌واسطه",
        sub: "تبلیغات اینستاگرام و بازاریابی اینفلوئنسر",
      },
      {
        heading: "برای برندها",
        sub: "پیدا کردن بلاگر · کمپین · پرداخت امن",
      },
      {
        heading: "برای بلاگرها",
        sub: "همکاری مستقیم با برند · بدون واسطه سنگین",
      },
      {
        heading: "شروع رایگان",
        sub: "adxplore.ir",
      },
    ],
  },
  {
    slug: "hazine-follower",
    title: "هزینه بر اساس فالوور",
    slides: [
      {
        heading: "هزینه تبلیغات",
        sub: "بر اساس تعداد فالوور",
      },
      { heading: "نانو ۱–۱۰K", sub: "از ~۵۰۰ هزار تومان" },
      { heading: "میکرو ۱۰–۱۰۰K", sub: "~۱ تا ۱۵ میلیون تومان" },
      {
        heading: "فالوور زیاد",
        sub: "≠ نتیجه بهتر",
      },
      {
        heading: "جدول کامل 👇",
        sub: "adxplore.ir",
      },
    ],
  },
];

export function getCarouselSet(slug: string) {
  return carouselSets.find((s) => s.slug === slug);
}
