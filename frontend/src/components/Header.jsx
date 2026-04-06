import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    const navItems = [
        {
            title: t('nav.konservatoriya'),
            links: [t('nav.konservatoriya'), t('nav.davlatRamzlari'), t('nav.tuzilma')]
        },
        {
            title: t('nav.faoliyat'),
            links: [t('nav.ilmiyFaoliyat'), t('nav.ilmiyUslubiy'), t('nav.korrupsiya'), t('nav.xalqaro'), t('nav.yoshlar'), t('nav.xalqaroXabarlar')]
        },
        {
            title: t('nav.ochiqMalumotlar'),
            links: [t('nav.yashilMakon'), t('nav.moliyaviy'), t('nav.oquvUslubiy')]
        },
        {
            title: t('nav.talabalar'),
            links: [t('nav.grantAriza'), t('nav.grantTest'), t('nav.yakuniyJarayon'), t('nav.darsBakalavr'), t('nav.darsMagistratura'), t('nav.talabaYutuqlari'), t('nav.ekofaol')]
        },
        {
            title: t('nav.qabul'),
            links: [t('nav.qabulDasturlari'), t('nav.ijodiyNatijalar'), "2023-2024", "2024-2025"]
        }
    ];

    return (
        <header className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo area */}
                <a href="/" className="flex items-center group transition-all">
                    <div className="h-10 md:h-14 lg:h-16 shrink-0 overflow-hidden transition-all">
                        <img src="/logo.jpg" alt="Logo" className="h-full w-auto object-contain" />
                    </div>
                </a>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 text-gray-600 hover:text-blue-700 cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-wrap lg:space-x-2 xl:space-x-4 justify-center items-center font-medium text-[11px] lg:text-xs">
                    {navItems.map((item, idx) => (
                        <div key={idx} className="dropdown relative py-3 group">
                            <a href="#" className="nav-link flex items-center space-x-1 text-gray-800 hover:text-blue-700 whitespace-nowrap">
                                <span>{item.title}</span>
                                <svg className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </a>
                            <div className="dropdown-menu absolute top-full left-0 mt-0 w-64 bg-white border border-gray-100 shadow-2xl rounded-b-lg overflow-hidden z-50">
                                {item.links.map((link, lIdx) => (
                                    <a key={lIdx} href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition">
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                    <a href="#" className="nav-link text-gray-800 hover:text-blue-700 py-3 whitespace-nowrap">{t('nav.festivallar')}</a>
                    <a href="#" className="nav-link text-gray-800 hover:text-blue-700 py-3 whitespace-nowrap text-xs">{t('nav.onlaynKuzatish')}</a>
                </nav>

                {/* Right side CTA */}
                <div className="hidden lg:flex items-center space-x-4">
                    <button className="w-8 h-8 rounded-full border border-gray-300 flex justify-center items-center text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <a href="#" className="inline-flex items-center justify-center px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-[10px] xl:text-xs font-semibold rounded-md transition-colors shadow-sm whitespace-nowrap">
                        {t('nav.hemis')}
                    </a>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 p-4 max-h-[80vh] overflow-y-auto slide-down">
                    {navItems.map((item, idx) => (
                        <div key={idx} className="mb-4">
                            <div className="font-bold text-blue-900 mb-2 border-b border-gray-100 pb-1">{item.title}</div>
                            <div className="pl-4 space-y-2">
                                {item.links.map((link, lIdx) => (
                                    <a key={lIdx} href="#" className="block text-sm text-gray-600 hover:text-blue-700">{link}</a>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="pt-4 space-y-4">
                        <a href="#" className="block font-bold text-blue-900">{t('nav.festivallar')}</a>
                        <a href="#" className="block w-full py-3 bg-blue-700 text-white text-center rounded-md font-semibold">{t('nav.hemis')}</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
