import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, RotateCw, Maximize2, Layers, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const VirtualTour = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col">
            {/* Header / Navbar (Simplified) */}
            <header className="p-6 border-b border-white/10 flex justify-between items-center bg-black/40 backdrop-blur-xl">
                <div className="flex items-center space-x-4">
                    <Link to="/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                        <ChevronLeft size={24} />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight">3D Virtual Sayohat</h1>
                        <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">Demo Versiyasi</p>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="hidden md:flex items-center space-x-2 text-[10px] font-bold text-white/40 uppercase">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Siz xonadasiz: Katta Zal</span>
                    </div>
                    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-xs font-bold transition-all uppercase tracking-widest cursor-not-allowed">
                        To'liq Rejim
                    </button>
                </div>
            </header>

            {/* Main Interactive Demo Area */}
            <main className="flex-grow relative flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#020617_100%)]">
                {/* Simulated 3D Grid / Environment */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                
                {/* Placeholder 3D Cube / Viewport */}
                <div className="relative group w-[80%] max-w-4xl aspect-video bg-black/40 rounded-[2rem] border border-white/10 shadow-[0_0_100px_-20px_rgba(30,64,175,0.3)] flex flex-col items-center justify-center overflow-hidden">
                    {/* Floating Demo Content */}
                    <div className="relative z-10 text-center space-y-8 p-12">
                        <div className="w-24 h-24 mx-auto bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30 animate-pulse">
                            <RotateCw size={48} className="text-blue-500 animate-[spin_4s_linear_infinite]" />
                        </div>
                        
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-black font-serif italic tracking-tighter">360° INTERAKTIV MUHIT</h2>
                            <p className="text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
                                Bu bo'limda siz Konservatoriyaning barcha qismlarini 3D shaklda aylanib ko'rishingiz mumkin bo'ladi. Hozirda tizim demo rejimida ishlamoqda.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                            {[
                                { name: "Aylanish", icon: RotateCw },
                                { name: "Yaqinlashish", icon: Maximize2 },
                                { name: "Qavatlar", icon: Layers },
                                { name: "Tanlash", icon: MousePointer2 }
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all flex flex-col items-center space-y-3">
                                    <item.icon size={20} className="text-blue-400" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient Overlay for modern look */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                </div>

                {/* Hotspot Indicators (Simulated) */}
                <div className="absolute top-[30%] left-[25%] p-2 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                <div className="absolute bottom-[40%] right-[30%] p-2 bg-white rounded-full animate-ping opacity-50"></div>
            </main>

            {/* Bottom Controls / Status Bar */}
            <footer className="p-6 bg-black border-t border-white/10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-8">
                        <div className="flex flex-col">
                            <span className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-1">Hozirgi Sahna</span>
                            <span className="text-white font-bold text-xs uppercase tracking-tighter">KATTA ORGAN ZALI (DEMO)</span>
                        </div>
                        <div className="h-8 w-px bg-white/10 hidden md:block"></div>
                        <div className="flex flex-col">
                            <span className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-1">FPS</span>
                            <span className="text-green-500 font-bold text-xs">60.00</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className={`w-10 h-1 md:w-16 ${i === 1 ? 'bg-blue-600' : 'bg-white/10'} rounded-full`}></div>
                        ))}
                    </div>

                    <div className="flex items-center space-x-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                        <span className="hover:text-white transition-colors cursor-pointer">Yordam</span>
                        <span className="hover:text-white transition-colors cursor-pointer">Sozlamalar</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default VirtualTour;
