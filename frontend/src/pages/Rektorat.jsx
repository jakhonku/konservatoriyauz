import React from 'react';
import { useTranslation } from 'react-i18next';
import { Music, Phone, Mail as MailIcon } from 'lucide-react';

const Rektorat = () => {
    const { t } = useTranslation();

    const rektorlar = [
        {
            name: "Urinbayev Kamoliddin Turdimuratovich",
            position: t('rektorat.positions.rektor'),
            degree: "Oʻzbekiston Respublikasi xalq artisti, Professor",
            reception: t('rektorat.days.monFri'),
            phone: "+998 71 244-53-20",
            email: "rektor@konservatoriya.uz",
            image: "https://konservatoriya.uz/wp-content/uploads/2024/01/photo_2020-08-07_19-28-27.jpg",
            primary: true,
        },
        {
            name: "Xusnitdinova Yulduz Madatovna",
            position: t('rektorat.positions.firstProrektor'),
            degree: "Professor",
            reception: t('rektorat.days.wed'),
            phone: t('rektorat.unavailable'),
            email: "xusnitdinova@konservatoriya.uz",
            image: "https://konservatoriya.uz/wp-content/uploads/2024/01/1.png",
        },
        {
            name: "Abdullaev Farhod Rustambekovich",
            position: t('rektorat.positions.eduProrektor'),
            degree: "Professor",
            reception: t('rektorat.days.monFriRange'),
            phone: "+998 71 239-48-76",
            email: "prorektor@konservatoriya.uz",
            image: "https://konservatoriya.uz/wp-content/uploads/2024/01/farhod-abdullaev-768x516.jpg",
        },
        {
            name: "Gʻafurova Sayyora Akmalovna",
            position: t('rektorat.positions.sciProrektor'),
            degree: "Professor",
            reception: t('rektorat.days.monFriRange'),
            phone: "+998 71 244-95-09",
            email: "gafurovailmiy@konservatoriya.uz",
            image: "https://konservatoriya.uz/wp-content/uploads/2024/01/%D1%81%D0%B0%D0%B9%D1%91%D1%80%D0%B0.jpg",
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden py-16">
            {/* Background design */}
            <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-br from-blue-900 to-blue-700 -skew-y-3 transform origin-top-left shadow-lg z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md uppercase tracking-tight">
                        {t('rektorat.title')}
                    </h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg italic opacity-90">
                        {t('rektorat.subtitle')} — {t('rektorat.desc')}
                    </p>
                </div>

                {/* Primary Rektor Card */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full border border-gray-100 flex flex-col md:flex-row transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
                        <div className="md:w-2/5 relative p-6 flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-50">
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 group">
                                <img src={rektorlar[0].image} alt={rektorlar[0].name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </div>
                        </div>
                        <div className="md:w-3/5 p-8 flex flex-col justify-center">
                            <span className="text-xs font-black tracking-widest text-blue-600 uppercase mb-3 px-3 py-1 bg-blue-50 rounded-full w-max">{rektorlar[0].position}</span>
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{rektorlar[0].name}</h2>
                            <p className="text-gray-600 mb-6 flex items-center text-sm">
                                <span className="font-bold mr-2 text-blue-900 uppercase tracking-tighter text-[10px]">{t('rektorat.degreeLabel')}:</span> 
                                <span className="italic">{rektorlar[0].degree}</span>
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center text-gray-600 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="w-8 h-8 rounded-xl bg-blue-600 flex justify-center items-center mr-3 text-white shadow-lg shadow-blue-500/20">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div>
                                        <div className="text-[9px] text-gray-400 font-black uppercase tracking-widest">{t('rektorat.reception')}</div>
                                        <div className="text-xs font-bold text-slate-800">{rektorlar[0].reception}</div>
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-600 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="w-8 h-8 rounded-xl bg-blue-600 flex justify-center items-center mr-3 text-white shadow-lg shadow-blue-500/20">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1.01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </div>
                                    <div>
                                        <div className="text-[9px] text-gray-400 font-black uppercase tracking-widest">{t('rektorat.phone')}</div>
                                        <div className="text-xs font-bold text-slate-800">{rektorlar[0].phone}</div>
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-600 p-3 bg-slate-50 rounded-2xl border border-slate-100 sm:col-span-2">
                                    <div className="w-8 h-8 rounded-xl bg-blue-600 flex justify-center items-center mr-3 text-white shadow-lg shadow-blue-500/20">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <div>
                                        <div className="text-[9px] text-gray-400 font-black uppercase tracking-widest">{t('rektorat.email')}</div>
                                        <a href={`mailto:${rektorlar[0].email}`} className="text-xs font-bold text-blue-600 hover:underline">{rektorlar[0].email}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Prorectors Grid */}
                <h3 className="text-2xl font-black text-center text-slate-900 mb-12 uppercase tracking-tight flex items-center justify-center space-x-4">
                    <span className="h-px w-12 bg-slate-200"></span>
                    <span>{t('rektorat.prorectors')}</span>
                    <span className="h-px w-12 bg-slate-200"></span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rektorlar.slice(1).map((prorektor, idx) => (
                        <div key={idx} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="p-8 border-b border-gray-50 flex flex-col items-center relative overflow-hidden bg-gradient-to-br from-white to-slate-50">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                                <div className="w-28 h-28 rounded-3xl overflow-hidden border-4 border-white shadow-xl relative z-10 mb-6 bg-gray-100 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                    <img src={prorektor.image} alt={prorektor.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-lg font-black text-gray-900 text-center relative z-10 leading-tight mb-3 min-h-[3rem] tracking-tight">{prorektor.name}</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 text-center min-h-[2.5rem] relative z-10 leading-relaxed bg-blue-50/50 px-4 py-2 rounded-xl">{prorektor.position}</p>
                            </div>
                            <div className="p-8 space-y-5">
                                <div className="flex items-center space-x-4">
                                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors"><Music size={14} /></div>
                                    <div>
                                        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">{t('rektorat.degreeLabel')}</div>
                                        <div className="text-xs font-bold text-slate-700 italic">{prorektor.degree}</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2.5"></path></svg></div>
                                    <div>
                                        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">{t('rektorat.reception')}</div>
                                        <div className="text-xs font-bold text-slate-700">{prorektor.reception}</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors"><Phone size={14} /></div>
                                    <div>
                                        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">{t('rektorat.phone')}</div>
                                        <div className="text-xs font-bold text-slate-700">{prorektor.phone}</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 pt-4 border-t border-slate-50 italic">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2.5"></path></svg></div>
                                    <a href={`mailto:${prorektor.email}`} className="text-xs font-bold text-blue-600 hover:tracking-widest transition-all duration-300">{prorektor.email}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rektorat;
