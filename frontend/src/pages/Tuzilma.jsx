import React from 'react';
import { useTranslation } from 'react-i18next';

const Tuzilma = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-extrabold text-blue-900 mb-8 border-b-2 border-blue-100 pb-4">{t('nav.tuzilma')}</h1>
            
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm font-bold">1</span>
                    Rektorat
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                        <h3 className="font-bold text-lg text-blue-900 mb-1">Rektor</h3>
                        <p className="text-gray-500 text-sm">Konservatoriyaning umumiy rahbarligi.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                        </div>
                        <h3 className="font-bold text-lg text-blue-900 mb-1">O'quv ishlari bo'yicha prorektor</h3>
                        <p className="text-gray-500 text-sm">Barcha o'quv va uslubiy jarayonlar nazorati.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                        </div>
                        <h3 className="font-bold text-lg text-blue-900 mb-1">Ilmiy ishlar va innovatsiyalar prorektori</h3>
                        <p className="text-gray-500 text-sm">Ilmiy tadqiqotlar va xalqaro aloqalar.</p>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 text-sm font-bold">2</span>
                    Fakultetlar va Kafedralar
                </h2>
                <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 relative z-10">
                        <div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-blue-300 mr-2">➜</span>
                                    <span>Vokal va an'anaviy ijrochilik fakulteti</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-300 mr-2">➜</span>
                                    <span>Cholquv ijrochiligi fakulteti</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-300 mr-2">➜</span>
                                    <span>Kompozitsiya, musiqashunoslik va fortepiano fakulteti</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-blue-300 mr-2">➜</span>
                                    <span>Estrada san'ati fakulteti</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-300 mr-2">➜</span>
                                    <span>Musiqiy pedagogika va xoreografiya fakulteti</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 flex justify-between items-center text-center mx-auto">
                 <p className="text-gray-600 italic m-auto">Davlat konservatoriyasi tarkibida hamda turli markazlar, ijodiy uyushmalar va arxiv bo'limlari faoliyat ko'rsatadi.</p>
            </div>
        </div>
    );
};

export default Tuzilma;
