import React from 'react';
import { useTranslation } from 'react-i18next';

const Kafedralar = () => {
    const { t } = useTranslation();

    const faculties = [
        {
            name: "MUSIQA SAN’ATI FAKULTETI",
            departments: [
                {
                    name: "Akademik xonandalik va opera tayyorlov kafedrasi",
                    head: "Razzaqova Muyassar Qodirovna",
                    title: "O‘zbekiston va Qoraqalpog‘iston xalq artisti",
                    phone: "+99871 239-46-53",
                    description: "Vokal san’ati va opera tayyorlovi bo‘yicha mutaxassislar tayyorlaydi."
                },
                {
                    name: "Akademik xor dirijorligi kafedrasi",
                    head: "Kadirova Sevara Pulatovna",
                    phone: "+99871 239-46-53",
                    description: "Xor dirijorligi (bakalavr va magistratura)."
                },
                {
                    name: "Maxsus fortepiano kafedrasi",
                    description: "Kafedraning boy tarixi va malakali o‘qituvchilar jamoasi faoliyat ko'rsatadi."
                },
                {
                    name: "Musiqa nazariyasi kafedrasi",
                    description: "Solfedjio, Polifoniya, Garmoniya, Musiqa asarlari tahlili fanlari o'qitiladi."
                },
                {
                    name: "Musiqa tarix va tanqid kafedrasi",
                    head: "Turayeva Muyassar Erkinovna",
                    phone: "+99871 239-46-53"
                },
                {
                    name: "Konsertmeystrlik mahorati kafedrasi",
                    head: "Sharipova Dilobar Shuxratovna",
                    phone: "+99871 239-46-53"
                },
                {
                    name: "Kamer musiqasi kafedrasi",
                    head: "Gofurbekova Adolatxon Ne’matillaevna",
                    phone: "+99871 239-46-53"
                },
                {
                    name: "Kompozitorlik va cholg’ulashtirish kafedrasi",
                    head: "Mansurov Oybek Abdubanopovich",
                    phone: "+99871 239-46-53"
                },
                {
                    name: "Oʻzbek musiqasi tarixi kafedrasi",
                    head: "Ergasheva Chinora Ergash qizi",
                    phone: "+99894 643-47-01"
                }
            ]
        },
        {
            name: "CHOLG’U IJROCHILIK FAKULTETI",
            departments: [
                {
                    name: "Torli cholg’ular kafedrasi",
                    head: "Saparov Abduqaxxor",
                    phone: "+99893 252-47-28"
                },
                {
                    name: "Puflama va zarbli cholg’ular kafedrasi",
                    description: "Kafedra tarixi va puflama va zarbli cholg'ular ijrochiligi bo'yicha mutaxassislar tayyorlash."
                },
                {
                    name: "Xalq cholg’ularida ijrochilik kafedrasi",
                    head: "To‘rayev Fozilbek",
                    phone: "+99893 543-21-00"
                },
                {
                    name: "Orkestr dirijorligi kafedrasi",
                    description: "Orkestr dirijorligi san'ati bo'yicha yuqori malakali mutaxassislar tayyorlash."
                }
            ]
        },
        {
            name: "MUSIQIY PEDAGOGIKA FAKULTETI",
            departments: [
                {
                    name: "Musiqiy pedagogika kafedrasi",
                    head: "Abdugapparov Abdufattox",
                    phone: "+99899 310-50-44",
                    email: "abdugapparov65@inbox.ru"
                },
                {
                    name: "O’zbek tili va ijtimoiy fanlar kafedrasi",
                    head: "Maxmanov Saloxiddin Beknazarovich",
                    phone: "+99871 239-46-53"
                },
                {
                    name: "Fakultetlararo fortepiano ijrochiligi",
                    description: "Boshqa mutaxassisliklar uchun umumiy fortepiano fanini o'qitish."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 uppercase tracking-tight">
                        {t('nav.kafedralar')}
                    </h1>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                        O‘zbekiston davlat konservatoriyasining tarkibiy qismi bo'lgan kafedralar, ularning rahbarlari va faoliyat yo'nalishlari haqida ma'lumot.
                    </p>
                </div>

                <div className="space-y-20">
                    {faculties.map((faculty, fIdx) => (
                        <div key={fIdx}>
                            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center border-l-8 border-blue-700 pl-4 py-1 bg-white shadow-sm rounded-r-lg">
                                {faculty.name}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {faculty.departments.map((dept, dIdx) => (
                                    <div key={dIdx} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group translate-y-0 hover:-translate-y-2">
                                        <div className="p-6 bg-gradient-to-br from-blue-50 to-white border-b border-gray-50 relative overflow-hidden">
                                            <div className="absolute -right-4 -bottom-4 text-blue-100 opacity-20 group-hover:scale-110 transition-transform duration-500">
                                                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 min-h-[3rem] relative z-10">{dept.name}</h3>
                                        </div>
                                        <div className="p-6 flex-grow space-y-4 text-sm relative z-10">
                                            {dept.head && (
                                                <div className="flex items-start">
                                                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 shrink-0">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-0.5">{t('rektorat.reception')}</p>
                                                        <p className="text-gray-800 font-bold">{dept.head}</p>
                                                        {dept.title && <p className="text-gray-500 text-[10px] italic mt-0.5">{dept.title}</p>}
                                                    </div>
                                                </div>
                                            )}

                                            {dept.description && (
                                                <div className="flex items-start">
                                                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 shrink-0">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-0.5">Info</p>
                                                        <p className="text-gray-600 leading-relaxed italic line-clamp-3">{dept.description}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {dept.phone && (
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mr-3 shrink-0">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-0.5">{t('rektorat.phone')}</p>
                                                        <p className="text-gray-700 font-medium">{dept.phone}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {dept.email && (
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mr-3 shrink-0">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-0.5">E-mail</p>
                                                        <a href={`mailto:${dept.email}`} className="text-blue-600 hover:text-blue-800 font-medium">{dept.email}</a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                                            <button className="text-blue-700 text-[10px] font-black flex items-center hover:text-blue-900 transition-all uppercase tracking-widest">
                                                {t('home.more')} 
                                                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                            </button>
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

export default Kafedralar;
