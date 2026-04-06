import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import { Calendar, Tag, ChevronRight, PlayCircle, MapPin, Ticket, Clock, Music, Users, Award, X, Maximize, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home = () => {
    const [news, setNews] = useState([]);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isTourOpen, setIsTourOpen] = useState(false);
    const [currentScene, setCurrentScene] = useState(0);
    const { t } = useTranslation();

    const tourScenes = [
        {
            title: "Konservatoriya Binosi",
            image: "/images/tour/conservatory_exterior_1775475905807.png",
            desc: "O'zbekiston Davlat Konservatoriyasining muhtasham tashqi ko'rinishi."
        },
        {
            title: "Katta Organ Zali",
            image: "/images/tour/conservatory_organ_hall_1775475918782.png",
            desc: "Mahobatli organ va musiqiy sado beruvchi o'ziga xos muhtasham koshona."
        },
        {
            title: "Zamonaviy Konsert Zali",
            image: "/images/tour/conservatory_modern_hall_1775475932159.png",
            desc: "Yuqori akustikaga ega bo'lgan zamonaviy ijro sahnasi."
        }
    ];

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/news');
            const dataArr = Array.isArray(res.data) ? res.data : [];
            const allItems = dataArr.reverse();

            let filteredNews = allItems.filter(item => item.category === 'Yangiliklar' || !item.category || item.category === 'News');
            let filteredEvents = allItems.filter(item => item.category === 'Afisha' || item.category === 'Event' || item.category === 'Konsert');

            // FALLBACK DUMMY DATA FOR DEMONSTRATION
            if (filteredNews.length === 0) {
                filteredNews = [
                    {
                        id: 'd1',
                        title: "Konservatoriya talabalari xalqaro 'Musiqa to'lqinlari' tanlovida g'olib bo'lishdi",
                        content: "Parij shahrida bo'lib o'tgan nufuzli xalqaro tanlovda o'zbekistonlik yosh musiqachilar birinchi darajali diplom va Gran-pri sohibi bo'lishdi. Bu g'alaba yurtimiz akademik musiqa san'ati yutug'idir.",
                        date: "2026-04-05",
                        category: "Yangiliklar",
                        media: null
                    },
                    {
                        id: 'd2',
                        title: "Yangi o'quv laboratoriyasi va ovoz yozish studiyasi ochildi",
                        content: "Talabalar uchun zamonaviy raqamli texnologiyalar bilan jihozlangan yangi laboratoriya foydalanishga topshirildi. Endilikda talabalar o'z ijodiy ishlarini oliy sifatda yozib olishlari mumkin.",
                        date: "2026-04-02",
                        category: "Yangiliklar",
                        media: null
                    },
                    {
                        id: 'd3',
                        title: "Italiyalik mashhur dirijyor bilan mahorat darsi o'tkazildi",
                        content: "Konservatoriyaning Katta zalida Italiyaning Skala teatri dirijyori ishtirokida simfonik orkestr talabalari uchun maxsus amaliy darslar tashkil etildi. Bu tajriba almashinuvi yoshlar mahoratini oshiradi.",
                        date: "2026-03-29",
                        category: "Yangiliklar",
                        media: null
                    },
                    {
                        id: 'd4',
                        title: "Musiqiy ta'limda innovatsiyalar mavzusida ilmiy konferensiya",
                        content: "Respublika darajasidagi ilmiy-amaliy anjumanda musiqiy ta'limni raqamlashtirish va yangi pedagogik texnologiyalarni joriy etish masalalari mutaxassislar tomonidan muhokama qilindi.",
                        date: "2026-03-25",
                        category: "Yangiliklar",
                        media: null
                    }
                ];
            }

            if (filteredEvents.length === 0) {
                filteredEvents = [
                    {
                        id: 'e1',
                        title: "Simfonik orkestr: 'Bahoriy navolar' konsert dasturi",
                        content: "Dasturda dunyoga mashhur klassik kompozitorlar - Bax, Mosart va Betxoven asarlari bilan bir qatorda o'zbek kompozitorlarining sara asarlari ijro etiladi.",
                        date: "2026-04-12",
                        category: "Afisha",
                        time: "18:30",
                        location: "Katta ZAL",
                        media: null
                    },
                    {
                        id: 'e2',
                        title: "'Shashmaqom' mumtoz musiqa kechasi",
                        content: "O'zbek xalqining boy madaniy merosi bo'lgan maqom san'atining eng go'zal namunalaridan bahramand bo'ling. Konsertda ustoz san'atkorlar ishtirok etishadi.",
                        date: "2026-04-18",
                        category: "Afisha",
                        time: "17:00",
                        location: "Organ Zali",
                        media: null
                    },
                    {
                        id: 'e3',
                        title: "Fortepiano musiqasi festivali: 'Yosh virtuozlar'",
                        content: "Konservatoriya talabalari va qobiliyatli maktab o'quvchilari o'rtasidagi mahorat bellashuvi. Eng iqtidorli ijrochilarning yakkaxon chiqishlari.",
                        date: "2026-04-25",
                        category: "Afisha",
                        time: "15:00",
                        location: "Kichik ZAL",
                        media: null
                    },
                    {
                        id: 'e4',
                        title: "Opera studiyasi namoyishi: 'Muhabbat va sadoqat'",
                        content: "Vokal fakulteti talabalari tomonidan tayyorlangan mashhur opera parchalaridan iborat teatrlashtirilgan tomosha. Sahnalashtiruvchi rejissyorlar: ustoz san'atkorlar.",
                        date: "2026-05-02",
                        category: "Afisha",
                        time: "19:00",
                        location: "Katta ZAL",
                        media: null
                    }
                ];
            }

            setNews(filteredNews);
            setEvents(filteredEvents);
        } catch (err) {
            console.error("Data fetch error:", err);
            setNews([{ id: 'err', title: "Xatolik!", content: "Ma'lumotlar yuklanmadi.", date: "2026-04-06", category: "Tizim" }]);
        } finally {
            setLoading(false);
        }
    };

    const NewsCard = ({ item }) => (
        <article className="group cursor-pointer">
            <div className="relative h-[280px] bg-slate-50 rounded-3xl overflow-hidden mb-6 shadow-lg shadow-gray-200/30 group-hover:shadow-blue-100/50 transition-all duration-500 border border-slate-100">
                {item.media ? (
                    <img src={`http://localhost:5000${item.media}`} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
                ) : (
                    <div className="w-full h-full bg-slate-900 flex items-center justify-center p-8 text-center relative">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-10"></div>
                        <Music size={32} className="text-white/10" />
                    </div>
                )}
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-blue-900 text-[9px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                        {item.category || 'Yangiliklar'}
                    </span>
                </div>
            </div>

            <div className="px-2 space-y-3">
                <div className="flex items-center space-x-3 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    <Calendar size={12} className="text-blue-500" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors line-clamp-2">
                    {item.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {item.content}
                </p>

                <div className="flex items-center text-blue-600 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                    <span>Batafsil</span>
                    <ChevronRight size={14} className="ml-1" />
                </div>
            </div>
        </article>
    );

    const EventCard = ({ item }) => (
        <article className="group relative flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500">
            <div className="w-full sm:w-1/3 h-48 sm:h-auto relative overflow-hidden">
                {item.media ? (
                    <img src={`http://localhost:5000${item.media}`} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                ) : (
                    <div className="w-full h-full bg-slate-950 flex items-center justify-center relative">
                        <Music size={40} className="text-white/5" />
                    </div>
                )}
            </div>

            <div className="w-full sm:w-2/3 p-6 md:p-8 flex flex-col justify-between relative">
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                                {new Date(item.date).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })}
                            </div>
                            <div className="flex items-center space-x-2 text-slate-400 text-[10px] font-bold">
                                <Clock size={12} />
                                <span>{item.time || "18:30"}</span>
                            </div>
                        </div>
                        <MapPin size={14} className="text-slate-300" />
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors leading-tight">
                        {item.title}
                    </h3>

                    <p className="text-slate-500 text-sm line-clamp-2 mb-4 italic">
                        {item.content}
                    </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <span className="text-slate-400 text-[10px] font-bold uppercase">{item.location || "Konservatoriya"}</span>
                    <button className="flex items-center text-blue-600 text-[10px] font-bold uppercase tracking-widest hover:translate-x-1 transition-transform">
                        <span>Chiptalar</span>
                        <ChevronRight size={14} className="ml-1" />
                    </button>
                </div>
            </div>
        </article>
    );

    return (
        <div className="flex-grow bg-white">
            <Hero />

            {/* News Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex items-end justify-between mb-12 border-b border-slate-100 pb-8">
                        <div className="max-w-xl">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="h-0.5 w-8 bg-blue-600"></div>
                                <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest italic opacity-60">News & Highlights</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                                {t('home.title')} <span className="text-blue-600 italic font-serif normal-case font-black tracking-tighter">{t('home.subtitle')}</span>
                            </h2>
                        </div>
                        <a href="/news" className="hidden sm:flex items-center space-x-2 text-slate-400 hover:text-blue-600 font-bold text-[10px] uppercase tracking-widest transition-all hover:-translate-x-2">
                            <span>{t('home.allNews')}</span>
                            <ChevronRight size={14} />
                        </a>
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="w-10 h-10 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            {news.slice(0, 3).map((item) => (
                                <NewsCard key={item.id} item={item} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Events (Afishalar) Section */}
            <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex items-end justify-between mb-12 border-b border-slate-200 pb-8">
                        <div className="max-w-xl">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="h-0.5 w-8 bg-blue-600"></div>
                                <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest italic opacity-60">Live Performances</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                                {t('home.eventsTitle')} <span className="text-blue-600 italic font-serif normal-case font-black tracking-tighter">{t('home.eventsSubtitle')}</span>
                            </h2>
                        </div>
                        <a href="/events" className="hidden sm:flex items-center space-x-2 text-slate-400 hover:text-blue-600 font-bold text-[10px] uppercase tracking-widest transition-all hover:-translate-x-2">
                            <span>{t('home.allEvents')}</span>
                            <ChevronRight size={14} />
                        </a>
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="w-10 h-10 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                            {events.slice(0, 4).map((item) => (
                                <EventCard key={item.id} item={item} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
            {/* 3D Virtual Tour Section */}
            <section className="py-20 md:py-32 bg-white overflow-hidden selection:bg-blue-100">
                <div className="container mx-auto px-6">
                    <div className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden group h-[500px] md:h-[650px] shadow-2xl">
                        {/* Background Image with Zoom effect */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/brain/8dc12225-e601-4028-8f26-62cf2148589b/conservatory_exterior_1775475905807.png"
                                alt="Conservatory 3D Tour"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5000ms] ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/40 to-transparent"></div>
                            <div className="absolute inset-0 bg-blue-950/20 backdrop-blur-[2px]"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-20 max-w-3xl">
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                                </div>
                                <span className="text-white font-black text-xs uppercase tracking-[0.4em]">Virtual Sayohat</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 font-serif leading-tight uppercase tracking-tighter">
                                Konservatoriya <br />
                                <span className="text-blue-400 italic">3D dunyosiga</span> <br />
                                xush kelibsiz
                            </h2>

                            <p className="text-white/70 text-lg md:text-xl mb-12 font-medium max-w-xl leading-relaxed italic border-l-4 border-blue-500 pl-8">
                                Endilikda oliygohimizning barcha koncert zallari, o'quv xonalari va muzeylarini 360 darajali interaktiv shaklda tomosha qilishingiz mumkin.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                                <Link
                                    to="/virtual-tour"
                                    className="w-full sm:w-auto flex items-center justify-center space-x-4 bg-white text-blue-950 px-10 py-5 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all hover:-translate-y-2 group/btn shadow-2xl"
                                >
                                    <span>Sayohatni boshlash</span>
                                    <PlayCircle size={24} className="group-hover/btn:scale-125 transition-transform" />
                                </Link>

                                <div className="flex items-center space-x-4 text-white/50">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-blue-950 bg-slate-400 overflow-hidden flex items-center justify-center text-[10px] font-bold text-white uppercase">{i}</div>)}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">+12k kishi ko'rdi</span>
                                </div>
                            </div>
                        </div>

                        {/* Interactive UI Decorations (3D feel) */}
                        <div className="absolute top-10 right-10 hidden lg:block">
                            <div className="w-64 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl animate-float">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-white/40 text-[9px] font-black uppercase tracking-widest">360° Panorama</span>
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                                <div className="h-32 bg-white/10 rounded-2xl overflow-hidden mb-4 border border-white/5 flex items-center justify-center p-6">
                                    <img src="/logo.png" alt="logo placeholder" className="h-full w-auto object-contain opacity-20 grayscale brightness-200" />
                                </div>
                                <p className="text-white/60 text-[10px] font-bold">Katta Organ zali endi 3D shaklda mavjud!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3D TOUR MODAL */}
            {isTourOpen && (
                <div className="fixed inset-0 z-[100] bg-black flex flex-col animate-fade-in">
                    {/* Header */}
                    <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10 bg-gradient-to-b from-black/80 to-transparent">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white">3D</div>
                            <div>
                                <h4 className="text-white font-bold text-sm">{tourScenes[currentScene].title}</h4>
                                <p className="text-white/60 text-[10px] uppercase tracking-widest">Virtual Sayohat</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsTourOpen(false)}
                            className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white transition-all hover:rotate-90"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Scene Display */}
                    <div className="flex-grow relative overflow-hidden flex items-center justify-center">
                        <img
                            key={currentScene}
                            src={tourScenes[currentScene].image}
                            alt="scene"
                            className="w-full h-full object-cover animate-ken-burns"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Control Bar */}
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-black/40 backdrop-blur-3xl border border-white/10 p-2 rounded-full">
                            <button
                                onClick={() => setCurrentScene((prev) => (prev > 0 ? prev - 1 : tourScenes.length - 1))}
                                className="w-14 h-14 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all transform active:scale-90"
                            >
                                <ChevronRight className="rotate-180" size={24} />
                            </button>
                            <div className="px-6 flex flex-col items-center">
                                <span className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-1">Joylashuv</span>
                                <span className="text-white font-bold text-xs">{currentScene + 1} / {tourScenes.length}</span>
                            </div>
                            <button
                                onClick={() => setCurrentScene((prev) => (prev < tourScenes.length - 1 ? prev + 1 : 0))}
                                className="w-14 h-14 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all transform active:scale-90"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Description Overlay */}
                    <div className="absolute bottom-32 left-12 max-w-md hidden md:block">
                        <div className="p-8 bg-blue-950/20 backdrop-blur-2xl border-l-4 border-blue-600 text-white rounded-r-3xl">
                            <h5 className="font-bold text-lg mb-2">Ma'lumot</h5>
                            <p className="text-white/70 text-sm italic leading-relaxed">
                                {tourScenes[currentScene].desc}
                            </p>
                        </div>
                    </div>

                    {/* Bottom Status */}
                    <div className="bg-black border-t border-white/5 p-4 flex justify-between items-center px-8">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2 text-[10px] text-white/40 font-bold uppercase">
                                <RotateCcw size={14} className="text-blue-500" />
                                <span>360° Ko'rinish</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[10px] text-white/40 font-bold uppercase">
                                <Maximize size={14} className="text-blue-500" />
                                <span>To'liq ekran</span>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            {tourScenes.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1 rounded-full transition-all duration-500 ${currentScene === idx ? 'w-8 bg-blue-500' : 'w-4 bg-white/20'}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;






