import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      saytTest: "SAYT TEST REJIMIDA ISHLAYABDI",
      // Header
      nav: {
        konservatoriya: "Konservatoriya",
        davlatRamzlari: "Davlat ramzlari",
        tuzilma: "Tuzilma",
        faoliyat: "Faoliyat",
        ilmiyFaoliyat: "Ilmiy faoliyat",
        ilmiyUslubiy: "Ilmiy-uslubiy jurnal",
        korrupsiya: "Korrupsiyaga qarshi kurashish",
        xalqaro: "Xalqaro hamkorlik",
        yoshlar: "Yoshlar bilan ishlash",
        xalqaroXabarlar: "Xalqaro hamkorlik bo'limi xabarlari",
        ochiqMalumotlar: "Ochiq ma'lumotlar",
        yashilMakon: "Yashil makon",
        moliyaviy: "Moliyaviy faoliyat",
        oquvUslubiy: "O'quv-uslubiy faoliyat",
        talabalar: "Talabalar",
        grantAriza: "Grant uchun ariza",
        grantTest: "Grant test",
        yakuniyJarayon: "Yakuniy nazorat jarayonlarini onlayn kuzatish",
        darsBakalavr: "Dars jadvali «Bakalavr»",
        darsMagistratura: "Dars jadvali magistratura",
        talabaYutuqlari: "Talaba yutuqlari",
        ekofaol: "Ekofaol talabalar",
        qabul: "Qabul",
        qabulDasturlari: "Qabul dasturlari",
        ijodiyNatijalar: "Kasbiy ijodiy imtihon natijalari",
        festivallar: "Festivallar",
        onlaynKuzatish: "Ijodiy imtihonlar (Onlayn)",
        hemis: "HEMIS Tizimi"
      },
      // Hero
      hero: {
        quote: "Musiqa fani va san’ati har bir insonni, ",
        quoteHighlight: "ayniqsa, yoshlarimizni",
        quoteEnd: " yuksak axloq, go‘zallik va nafosat ruhida tarbiyalashda qudratli vositadir.",
        qabul: "Qabul jarayoni",
        bizHaqimizda: "Biz haqimizda"
      },
      // Home
      home: {
        title: "Konservatoriya",
        subtitle: "Yangiliklari",
        desc: "Akademik musiqa, tadbirlar va oliygoh hayotidagi eng so'nggi voqealar bilan tanishing.",
        allNews: "Barcha yangiliklar",
        noNews: "Yangiliklar hozircha mavjud emas.",
        readTime: "min o'qiladi"
      },
      // Footer
      footer: {
        title: "Konservatoriya",
        desc: "O'zbekiston Davlat Konservatoriyasi veb-sayti. Barcha huquqlar himoyalangan.",
        contact: "Bog'lanish",
        addressTitle: "Manzil",
        address: "Toshkent shahri"
      }
    }
  },
  ru: {
    translation: {
      saytTest: "САЙТ РАБОТАЕТ В ТЕСТОВОМ РЕЖИМЕ",
      nav: {
        konservatoriya: "Консерватория",
        davlatRamzlari: "Государственные символы",
        tuzilma: "Структура",
        faoliyat: "Деятельность",
        ilmiyFaoliyat: "Научная деятельность",
        ilmiyUslubiy: "Научно-методический журнал",
        korrupsiya: "Противодействие коррупции",
        xalqaro: "Международное сотрудничество",
        yoshlar: "Работа с молодежью",
        xalqaroXabarlar: "Новости международного отдела",
        ochiqMalumotlar: "Открытые данные",
        yashilMakon: "Зеленое пространство",
        moliyaviy: "Финансовая деятельность",
        oquvUslubiy: "Учебно-методическая деятельность",
        talabalar: "Студентам",
        grantAriza: "Заявка на грант",
        grantTest: "Грант тест",
        yakuniyJarayon: "Онлайн наблюдение за итоговым контролем",
        darsBakalavr: "Расписание «Бакалавр»",
        darsMagistratura: "Расписание магистратуры",
        talabaYutuqlari: "Достижения студентов",
        ekofaol: "Эко-активные студенты",
        qabul: "Поступление",
        qabulDasturlari: "Программы поступления",
        ijodiyNatijalar: "Результаты творческих экзаменов",
        festivallar: "Фестивали",
        onlaynKuzatish: "Творческие экзамены (Онлайн)",
        hemis: "Система HEMIS"
      },
      hero: {
        quote: "Музыкальная наука и искусство — мощное средство воспитания каждого человека, ",
        quoteHighlight: "особенно нашей молодежи,",
        quoteEnd: " в духе высокой морали, красоты и изящества.",
        qabul: "Процесс поступления",
        bizHaqimizda: "О нас"
      },
      home: {
        title: "Новости",
        subtitle: "Консерватории",
        desc: "Узнайте о последних событиях академической музыки, мероприятиях и жизни университета.",
        allNews: "Все новости",
        noNews: "Новостей пока нет.",
        readTime: "мин чтения"
      },
      footer: {
        title: "Консерватория",
        desc: "Веб-сайт Государственной консерватории Узбекистана. Все права защищены.",
        contact: "Контакты",
        addressTitle: "Адрес",
        address: "город Ташкент"
      }
    }
  },
  en: {
    translation: {
      saytTest: "SITE IS WORKING IN TEST MODE",
      nav: {
        konservatoriya: "Conservatory",
        davlatRamzlari: "State Symbols",
        tuzilma: "Structure (Rectorate, Faculties)",
        faoliyat: "Activity",
        ilmiyFaoliyat: "Scientific Activity",
        ilmiyUslubiy: "Scientific-methodological Journal",
        korrupsiya: "Anti-corruption",
        xalqaro: "International Cooperation",
        yoshlar: "Youth Work",
        xalqaroXabarlar: "International Department News",
        ochiqMalumotlar: "Open Data",
        yashilMakon: "Green Space",
        moliyaviy: "Financial Activity",
        oquvUslubiy: "Educational-methodological Activity",
        talabalar: "Students",
        grantAriza: "Grant Application",
        grantTest: "Grant Test",
        yakuniyJarayon: "Online Observation of Final Control",
        darsBakalavr: "Bachelor's Schedule",
        darsMagistratura: "Master's Schedule",
        talabaYutuqlari: "Student Achievements",
        ekofaol: "Eco-active Students",
        qabul: "Admission",
        qabulDasturlari: "Admission Programs",
        ijodiyNatijalar: "Creative Exam Results",
        festivallar: "Festivals",
        onlaynKuzatish: "Online Observation of Creative Exams",
        hemis: "HEMIS System"
      },
      hero: {
        quote: "Music science and art are a powerful means of educating everyone, ",
        quoteHighlight: "especially our youth,",
        quoteEnd: " in the spirit of high morality, beauty, and elegance.",
        qabul: "Admission Process",
        bizHaqimizda: "About Us"
      },
      home: {
        title: "Conservatory",
        subtitle: "News",
        desc: "Learn about the latest events in academic music, activities, and university life.",
        allNews: "All News",
        noNews: "No news available yet.",
        readTime: "min read"
      },
      footer: {
        title: "Conservatory",
        desc: "Website of the State Conservatory of Uzbekistan. All rights reserved.",
        contact: "Contact",
        addressTitle: "Address",
        address: "Tashkent city"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz", // default language
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
