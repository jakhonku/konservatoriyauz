import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden flex items-end">
            {/* Background with Zoom Animation (Ken Burns Effect) */}
            <div className="absolute inset-0 z-0 scale-110">
                <div 
                    className="absolute inset-0 bg-cover bg-center animate-ken-burns"
                    style={{ 
                        backgroundImage: "url('/bg.jpg')",
                    }}
                ></div>
                
                {/* Layer 1: Darkened Overall Exposure */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Layer 2: Main Bottom Gradient for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                
                {/* Layer 3: Top Gradient for Header Contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent h-1/3"></div>
            </div>

            {/* Content Container (Statik qoladi) */}
            <div className="relative z-10 w-full pb-16 md:pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl relative">
                        {/* Decorative Quote Icon */}
                        <div className="absolute -top-12 -left-4 text-6xl text-white/20 font-serif pointer-events-none">
                            “
                        </div>
                        
                        <div className="border-l-4 border-blue-900 pl-8 space-y-8 animate-fade-in-up">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide leading-relaxed drop-shadow-2xl italic text-white/95">
                                {t('hero.quote')} <span className="text-gray-300 not-italic">{t('hero.quoteHighlight')}</span> {t('hero.quoteEnd')}
                            </h1>
                            
                            <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-8 pt-4">
                                <a href="#" className="group relative px-8 py-3 bg-blue-900 text-white font-bold rounded-full overflow-hidden transition-all hover:bg-blue-950 shadow-xl shadow-black/60 text-center">
                                    <span className="relative z-10 flex items-center justify-center">
                                        {t('hero.qabul')}
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                                    </span>
                                </a>
                                <a href="#" className="px-8 py-3 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center">
                                    {t('hero.bizHaqimizda')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
