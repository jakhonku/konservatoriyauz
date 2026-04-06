import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      saytTest: "SAYT TEST REJIMIDA ISHLAYABDI",
      // Rektorat
      rektorat: {
        title: "Rektorat",
        subtitle: "O‘zbekiston davlat konservatoriyasi rahbariyati",
        desc: "Qabul vaqtlari, aloqa raqamlari va manzillari",
        prorectors: "Prorektorlar",
        reception: "Qabul vaqti",
        phone: "Telefon",
        email: "E-mail",
        degreeLabel: "Ilmiy darajasi",
        unavailable: "Mavjud emas",
        days: {
          monFri: "Dushanba-Juma",
          wed: "Chorshanba 14:00-17:00",
          monFriRange: "Dushanba-Juma, 9:00-12:00"
        },
        positions: {
          rektor: "Rektor",
          firstProrektor: "Yoshlar masalalari va ma’naviy-ma’rifiy ishlar boʻyicha birinchi prorektor",
          eduProrektor: "Oʻquv ishlari boʻyicha prorektor",
          sciProrektor: "Ilmiy va ijodiy ishlar boʻyicha prorektor"
        }
      },
      // Header
      nav: {
        konservatoriya: "Konservatoriya",
        odobAhloq: "Odob-ahloq qoidalari",
        davlatRamzlari: "Davlat ramzlari",
        tuzilma: "Tuzilma",
        rektorat: "Rektorat",
        fakultetlar: "Fakultetlar",
        kafedralar: "Kafedralar",
        markazVaBolimlar: "Markaz va bo'limlar",
        kafedra: "Kafedra",
        filial: "Filial",
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
        virtualTour: "3D Virtual Sayohat",
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
        eventsTitle: "Konsert va",
        eventsSubtitle: "Afishalar",
        eventsDesc: "Yaqin kunlarda bo'lib o'tadigan konsertlar, mahorat darslari va madaniy tadbirlar jadvali.",
        allEvents: "Barcha afishalar",
        noEvents: "Afishalar hozircha mavjud emas.",
        readTime: "min o'qiladi",
        more: "Batafsil",
        virtualTour: "Sayohatni boshlash"
      },
      // Footer
      footer: {
        title: "Konservatoriya",
        desc: "O'zbekiston Davlat Konservatoriyasi veb-sayti. Barcha huquqlar himoyalangan.",
        contact: "Bog'lanish",
        addressTitle: "Manzil",
        address: "Toshkent shahri, Olmazor ko’chasi, 1-uy",
        siteMap: "Sayt xaritasi",
        usefulLinks: "Foydali havolalar",
        socials: "Biz ijtimoiy tarmoqlarda"
      }
    }
  },
  ru: {
    translation: {
      saytTest: "САЙТ РАБОТАЕТ В ТЕСТОВОМ РЕЖИМЕ",
      // Rektorat
      rektorat: {
        title: "Ректорат",
        subtitle: "Руководство Государственной консерватории Узбекистана",
        desc: "Часы приема, контактные телефоны и адреса",
        prorectors: "Проректоры",
        reception: "Часы приема",
        phone: "Телефон",
        email: "E-mail",
        degreeLabel: "Ученая степень",
        unavailable: "Недоступно",
        days: {
          monFri: "Понедельник-Пятница",
          wed: "Среда 14:00-17:00",
          monFriRange: "Понедельник-Пятница, 9:00-12:00"
        },
        positions: {
          rektor: "Ректор",
          firstProrektor: "Первый проректор по вопросам молодежи и духовно-просветительской работе",
          eduProrektor: "Проректор по учебной работе",
          sciProrektor: "Проректор по научной и творческой работе"
        }
      },
      nav: {
        konservatoriya: "Консерватория",
        odobAhloq: "Правила этикета",
        davlatRamzlari: "Государственные символы",
        tuzilma: "Структура",
        rektorat: "Ректорат",
        fakultetlar: "Факультеты",
        kafedralar: "Кафедры",
        markazVaBolimlar: "Центры и отделы",
        kafedra: "Кафедра",
        filial: "Филиал",
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
        virtualTour: "3D Виртуальное путешествие",
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
        eventsTitle: "Концерты и",
        eventsSubtitle: "Афиши",
        eventsDesc: "Расписание предстоящих концертов, мастер-классов и культурных мероприятий.",
        allEvents: "Все афиши",
        noEvents: "Афиш пока нет.",
        readTime: "мин чтения",
        more: "Подробнее",
        virtualTour: "Начать путешествие"
      },
      footer: {
        title: "Консерватория",
        desc: "Веб-сайт Государственной консерватории Узбекистана. Все права защищены.",
        contact: "Контакты",
        addressTitle: "Адрес",
        address: "город Ташкент, улица Олмазор, 1",
        siteMap: "Карта сайта",
        usefulLinks: "Полезные ссылки",
        socials: "Мы в соцсетях"
      }
    }
  },
  en: {
    translation: {
      saytTest: "SITE IS WORKING IN TEST MODE",
      // Rektorat
      rektorat: {
        title: "Rectorate",
        subtitle: "Leadership of the State Conservatory of Uzbekistan",
        desc: "Admission hours, contact numbers and addresses",
        prorectors: "Vice-Rectors",
        reception: "Reception Hours",
        phone: "Phone",
        email: "E-mail",
        degreeLabel: "Academic Degree",
        unavailable: "Unavailable",
        days: {
          monFri: "Monday-Friday",
          wed: "Wednesday 14:00-17:00",
          monFriRange: "Monday-Friday, 9:00-12:00"
        },
        positions: {
          rektor: "Rector",
          firstProrektor: "First Vice-Rector for Youth Issues and Spiritual and Educational Work",
          eduProrektor: "Vice-Rector for Academic Affairs",
          sciProrektor: "Vice-Rector for Scientific and Creative Work"
        }
      },
      nav: {
        konservatoriya: "Conservatory",
        odobAhloq: "Code of Conduct",
        davlatRamzlari: "State Symbols",
        tuzilma: "Structure",
        rektorat: "Rectorate",
        fakultetlar: "Faculties",
        kafedralar: "Departments",
        markazVaBolimlar: "Centers and Divisions",
        kafedra: "Department",
        filial: "Branch",
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
        virtualTour: "3D Virtual Tour",
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
        eventsTitle: "Concerts and",
        eventsSubtitle: "Events",
        eventsDesc: "Schedule of upcoming concerts, master classes and cultural events.",
        allEvents: "All events",
        noEvents: "No events available yet.",
        readTime: "min read",
        more: "Details",
        virtualTour: "Start Tour"
      },
      footer: {
        title: "Conservatory",
        desc: "Website of the State Conservatory of Uzbekistan. All rights reserved.",
        contact: "Contact",
        addressTitle: "Address",
        address: "1 Olmazor Street, Tashkent City",
        siteMap: "Site Map",
        usefulLinks: "Useful Links",
        socials: "Social Media"
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
