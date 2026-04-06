import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const TopBar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="bg-[#0f172a] text-white py-1.5 border-b border-white/5 relative z-[1001]">
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                
                {/* News Ticker / Marquee */}
                <div className="flex-1 overflow-hidden mr-6 hidden lg:block">
                    <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1 border border-white/5 w-fit">
                        <span className="flex h-1.5 w-1.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                        </span>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-200/90">{t('saytTest')}</p>
                    </div>
                </div>

                {/* Right Controls Container */}
                <div className="flex items-center justify-end w-full lg:w-auto">
                    {/* Manual 3-Language Toggle */}
                    <div className="flex items-center bg-black/40 rounded-full p-1 border border-white/5 shadow-inner">
                        {['uz', 'ru', 'en'].map((lang) => (
                            <button
                                key={lang}
                                onClick={() => changeLanguage(lang)}
                                className={`
                                    px-4 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300
                                    ${i18n.language === lang 
                                        ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]' 
                                        : 'text-gray-500 hover:text-gray-300'
                                    }
                                `}
                            >
                                {lang === 'uz' ? "O'ZB" : lang === 'ru' ? "РУС" : "ENG"}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
