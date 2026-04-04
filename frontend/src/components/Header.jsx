import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {
            title: "Konservatoriya",
            links: ["Konservatoriya", "Davlat ramzlari", "Tuzilma (Rektorat, Fakultetlar)"]
        },
        {
            title: "Faoliyat",
            links: ["Ilmiy faoliyat", "Ilmiy-uslubiy jurnal", "Korrupsiyaga qarshi kurashish", "Xalqaro hamkorlik", "Yoshlar bilan ishlash", "Xalqaro hamkorlik bo'limi xabarlari"]
        },
        {
            title: "Ochiq ma'lumotlar",
            links: ["Yashil makon", "Moliyaviy faoliyat", "O'quv-uslubiy faoliyat"]
        },
        {
            title: "Talabalar",
            links: ["Grant uchun ariza", "Grant test", "Yakuniy nazorat jarayonlarini onlayn kuzatish", "Dars jadvali «Bakalavr»", "Dars jadvali magistratura", "Talaba yutuqlari", "Ekofaol talabalar"]
        },
        {
            title: "Qabul",
            links: ["Qabul dasturlari", "Kasbiy ijodiy imtihon natijalari", "2023-2024", "2024-2025"]
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
                    className="md:hidden p-2 text-gray-600 hover:text-blue-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-wrap lg:space-x-4 xl:space-x-6 items-center font-medium text-xs lg:text-sm">
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
                    <a href="#" className="nav-link text-gray-800 hover:text-blue-700 py-3 whitespace-nowrap">Festivallar</a>
                    <a href="#" className="nav-link text-gray-800 hover:text-blue-700 py-3 whitespace-nowrap text-xs">Ijodiy imtihonlarni onlayn kuzatish</a>
                </nav>

                {/* Right side CTA */}
                <div className="hidden lg:flex items-center space-x-4">
                    <button className="w-8 h-8 rounded-full border border-gray-300 flex justify-center items-center text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <a href="#" className="inline-flex items-center justify-center px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-[10px] xl:text-xs font-semibold rounded-md transition-colors shadow-sm whitespace-nowrap">
                        HEMIS Tizimi
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
                        <a href="#" className="block font-bold text-blue-900">Festivallar</a>
                        <a href="#" className="block w-full py-3 bg-blue-700 text-white text-center rounded-md font-semibold font-bold">HEMIS Tizimi</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
