import React from 'react';
import { useTranslation } from 'react-i18next';

const MarkazVaBolimlar = () => {
    const { t } = useTranslation();

    const sections = [
        {
            title: "MA'MURIY BO'LIMLAR",
            items: [
                {
                    name: "Buxgalteriya",
                    head: "Qurbanov Orif Bozar o‘g‘li",
                    position: "Bosh buxgalter",
                    hours: "Dushanba – Juma, 09:00 – 18:00",
                    description: "Moliyaviy operatsiyalarni boshqarish, ish haqi va resurslarni monitoring qilish."
                },
                {
                    name: "Kadrlar bo'limi",
                    head: "Islamov Ubaydullo",
                    position: "Bo’lim boshlig’i",
                    hours: "Dushanba – Juma"
                },
                {
                    name: "Huquqiy bo'lim",
                    head: "Narzullayev Jo’ra",
                    position: "Yurist"
                },
                {
                    name: "Reja moliya bo'limi",
                    head: "Sultonova Tatyana",
                    position: "Bo’lim boshlig’i"
                },
                {
                    name: "Кanselyariya va arxiv",
                    head: "Axmedova Ma’suma",
                    position: "Bo’lim boshlig’i"
                },
                {
                    name: "Ta’lim sifatini nazorat qilish bo‘limi",
                    head: "Norbekov Anvar Shomuradovich",
                    reception: "Dushanba – Juma, 15:00 – 17:00",
                    email: "a.norbekov71@inbox.uz"
                },
                {
                    name: "Bosh auditor",
                    description: "Ichki audit va resurslardan foydalanishni nazorat qilish."
                },
                {
                    name: "Korrupsiyaga qarshi kurashish bo'limi",
                    description: "Korrupsiyaga qarshi kurashish va komplayens nazorat."
                }
            ]
        },
        {
            title: "O'QUV VA ILMIY MARKAZLAR",
            items: [
                {
                    name: "O’quv-uslubiy bo’lim",
                    head: "Turajonov Murod",
                    position: "Bo’lim boshlig’i"
                },
                {
                    name: "Magistratura bo'limi",
                    description: "Magistratura bosqichidagi o'quv jarayonlarini boshqarish."
                },
                {
                    name: "Axborot - resurs Markazi",
                    head: "Xodjayeva Shaxida Baxramovna",
                    position: "Bo’lim boshlig’i"
                },
                {
                    name: "Raqamli ta'lim texnologiyalar markazi",
                    head: "Yo’ldoshev Aziz Baxtiyor o’g’li",
                    position: "Bo’lim boshlig’i"
                },
                {
                    name: "Xalqaro aloqalar bo'limi",
                    head: "Mamajanova Elnora",
                    position: "Bo’lim boshlig’i"
                }
            ]
        },
        {
            title: "IJTIMOIY VA XIZMAT KO'RSATISH",
            items: [
                {
                    name: "Yoshlar bilan ishlash, ma'naviyat va ma'rifat bo'limi",
                    description: "Ma'naviy-ma'rifiy ishlar, talabalar ijtimoiy hayoti va tadbirlarni tashkil etish."
                },
                {
                    name: "Matbuot xizmati",
                    head: "Mukadamova Saule Raimbekovna",
                    position: "Matbuot kotibi"
                },
                {
                    name: "Marketing Bo'limi",
                    head: "Abdulakimov Asror Forxod o‘g‘li",
                    position: "Bo’lim boshlig’i"
                },
                {
                    name: "Ishlar boshqarmasi",
                    head: "Namozov Najmiddin",
                    position: "Boshqarma boshlig'i"
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-black text-blue-950 mb-6 tracking-tight">
                        Markaz va Bo'limlar
                    </h1>
                    <div className="flex justify-center mb-8">
                        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
                        <div className="h-1 w-8 bg-blue-300 rounded-full mx-1"></div>
                        <div className="h-1 w-4 bg-blue-100 rounded-full"></div>
                    </div>
                    <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
                        O‘zbekiston davlat konservatoriyasining ma'muriy, o'quv va yordamchi bo'limlari, markazlari hamda ularning mas'ul xodimlari haqida ma'lumotlar.
                    </p>
                </div>

                <div className="space-y-24">
                    {sections.map((section, sIdx) => (
                        <div key={sIdx} className="group">
                            <div className="flex items-center mb-10">
                                <h2 className="text-2xl font-extrabold text-blue-900 tracking-wider">
                                    {section.title}
                                </h2>
                                <div className="ml-6 flex-grow h-px bg-gradient-to-r from-blue-200 to-transparent"></div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.items.map((item, iIdx) => (
                                    <div key={iIdx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 transform hover:-translate-y-2 flex flex-col group/item">
                                        <div className="mb-6">
                                            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-2xl text-blue-600 mb-6 group-hover/item:scale-110 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-500">
                                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 group-hover/item:text-blue-700 transition-colors min-h-[3.5rem] flex items-center">
                                                {item.name}
                                            </h3>
                                        </div>

                                        <div className="space-y-5 flex-grow">
                                            {item.head && (
                                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover/item:bg-white transition-colors">
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Mas'ul</p>
                                                    <p className="text-slate-900 font-bold leading-tight">{item.head}</p>
                                                    {item.position && <p className="text-slate-500 text-xs mt-1 font-medium">{item.position}</p>}
                                                </div>
                                            )}

                                            {item.description && (
                                                <div className="flex items-start">
                                                    <svg className="w-5 h-5 text-blue-400 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    <p className="text-slate-600 text-sm leading-relaxed italic">{item.description}</p>
                                                </div>
                                            )}

                                            <div className="grid grid-cols-1 gap-3 pt-2">
                                                {item.hours && (
                                                    <div className="flex items-center text-xs text-slate-500">
                                                        <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                        {item.hours}
                                                    </div>
                                                )}
                                                {item.reception && (
                                                    <div className="flex items-center text-xs text-slate-500">
                                                        <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                        Qabul: {item.reception}
                                                    </div>
                                                )}
                                                {item.email && (
                                                    <div className="flex items-center text-xs text-blue-600 hover:text-blue-800">
                                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                        <a href={`mailto:${item.email}`}>{item.email}</a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarkazVaBolimlar;
