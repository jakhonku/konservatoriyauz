import React from 'react';
import { useTranslation } from 'react-i18next';

const TopBar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="bg-blue-900 text-white text-[10px] sm:text-xs py-2">
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center overflow-hidden">
                <div className="flex-1 overflow-hidden whitespace-nowrap mr-4 relative h-4 flex items-center">
                    <div className="animate-marquee whitespace-nowrap absolute flex">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <span key={item} className="mx-4">{t('saytTest')}</span>
                        ))}
                    </div>
                </div>
                <div className="flex space-x-2 shrink-0">
                    <button onClick={() => changeLanguage('uz')} className={`font-bold hover:text-blue-200 cursor-pointer ${i18n.language === 'uz' ? 'text-blue-200' : ''}`}>O'ZB</button>
                    <button onClick={() => changeLanguage('ru')} className={`font-bold hover:text-blue-200 cursor-pointer ${i18n.language === 'ru' ? 'text-blue-200' : ''}`}>РУС</button>
                    <button onClick={() => changeLanguage('en')} className={`font-bold hover:text-blue-200 cursor-pointer ${i18n.language === 'en' ? 'text-blue-200' : ''}`}>ENG</button>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
