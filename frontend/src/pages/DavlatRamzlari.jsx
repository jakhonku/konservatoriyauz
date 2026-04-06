import React from 'react';
import { useTranslation } from 'react-i18next';

const DavlatRamzlari = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-extrabold text-blue-900 mb-8 border-b-2 border-blue-100 pb-4">{t('nav.davlatRamzlari')}</h1>
            
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Bayroq */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition hover:-translate-y-2 hover:shadow-xl">
                    <div className="bg-blue-50/50 p-6 border-b border-blue-100 flex justify-center items-center h-48">
                        {/* Placeholder for flag image */}
                        <div className="w-32 h-20 bg-gradient-to-b from-blue-500 via-white to-green-500 rounded flex flex-col justify-between border shadow flex items-center relative">
                             <div className="absolute top-1 left-2 text-white text-[8px] flex">🌙 <span className="text-[6px] ml-1 mt-1">⭐⭐<br/>⭐⭐</span></div>
                             <div className="h-2 w-full bg-red-500 absolute top-1/3 mt-[2px]"></div>
                             <div className="h-2 w-full bg-red-500 absolute bottom-1/3 mb-[2px]"></div>
                        </div>
                    </div>
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Davlat bayrog'i</h2>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            O‘zbekiston Respublikasining Davlat bayrog‘i — davlat suverenitetining ramzidir. U 1991-yil 18-noyabrda qabul qilingan. Bayroqdagi moviy rang — tiriklik va musaffo osmon, oq rang — muqaddas tinchlik, yashil rang — tabiat yangilanishi va yoshlik, qizil chiziqlar — tomirlarda jo'sh urayotgan hayotiy qudrat, yarim oy va yulduzlar — mustaqillik va musaffo osmonimizni anglatadi.
                        </p>
                    </div>
                </div>

                {/* Gerb */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition hover:-translate-y-2 hover:shadow-xl">
                    <div className="bg-blue-50/50 p-6 border-b border-blue-100 flex justify-center items-center h-48">
                        <div className="w-24 h-24 rounded-full bg-yellow-100 border-4 border-yellow-400 flex justify-center items-center text-yellow-600 shadow-inner overflow-hidden">
                            <span className="text-xs font-bold text-center">O'ZBEKISTON</span>
                        </div>
                    </div>
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Davlat gerbi</h2>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            1992-yil 2-iyulda qabul qilingan. Gerbning markazida barcha xalqimiz ufqlarida porlayotgan tong — serquyosh diyorimizning qadriyatlari ramzi bo'lgan Humo qushi tasvirlangan. Uning orqasida daryo va tog'lar, o'ng tomonda paxta, chap tomonda bug'doy boshoqlari chambari yordamida himoyalangan. Paxta va g'alla halqimizning boyligi va daromadi ramzidir.
                        </p>
                    </div>
                </div>

                {/* Madhiya */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition hover:-translate-y-2 hover:shadow-xl">
                    <div className="bg-blue-50/50 p-6 border-b border-blue-100 flex justify-center items-center h-48">
                        <svg className="w-20 h-20 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/></svg>
                    </div>
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Davlat madhiyasi</h2>
                        <p className="text-gray-700 leading-relaxed text-sm mb-4">
                            1992-yil 10-dekabrda qabul qilingan. Mutal Burhonov musiqasi, Abdulla Oripov so'zi.
                        </p>
                        <div className="bg-gray-50 p-4 rounded text-xs text-gray-600 italic">
                            Serquyosh hur o'lkam, elga baxt, najot,<br/>
                            Sen o'zing do'stlarga yo'ldosh, mehribon!<br/>
                            Yashnagay to abad ilmu fan, ijod,<br/>
                            Shuhrating porlasin toki bor jahon!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DavlatRamzlari;
