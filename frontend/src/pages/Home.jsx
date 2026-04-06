import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import { Calendar, Tag, ChevronRight, PlayCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/news');
            setNews(res.data.reverse()); // Show latest first
        } catch (err) {
            console.error("News fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex-grow bg-white">
            <Hero />
            
            {/* News Section */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 space-y-6 md:space-y-0">
                        <div className="max-w-3xl">
                            <h2 className="text-5xl md:text-6xl font-black text-blue-950 mb-6 font-serif tracking-tight leading-tight uppercase">
                                {t('home.title')} <br />
                                <span className="text-blue-700 italic">{t('home.subtitle')}</span>
                            </h2>
                            <p className="text-gray-500 font-sans italic text-xl border-l-4 border-blue-900 pl-6">
                                {t('home.desc')}
                            </p>
                        </div>
                        <a href="/news" className="flex items-center space-x-2 text-blue-800 font-bold font-sans uppercase tracking-[0.2em] text-xs hover:translate-x-2 transition-transform">
                            <span>{t('home.allNews')}</span>
                            <ChevronRight size={18} />
                        </a>
                    </div>
                    
                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
                        </div>
                    ) : news.length === 0 ? (
                        <div className="py-20 text-center bg-gray-50 rounded-[4rem] border-2 border-dashed border-gray-100">
                            <p className="text-gray-400 font-serif italic text-xl">{t('home.noNews')}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {news.map((item) => (
                                <article key={item.id} className="group cursor-pointer">
                                    <div className="relative h-[450px] bg-gray-100 rounded-[3.5rem] overflow-hidden mb-8 shadow-2xl shadow-gray-200 group-hover:shadow-blue-200/50 transition-all duration-700 border border-gray-100">
                                        {item.media ? (
                                            item.mediaType === 'video' ? (
                                                <div className="w-full h-full relative">
                                                    <video 
                                                        src={`http://localhost:5000${item.media}`} 
                                                        className="w-full h-full object-cover"
                                                        muted
                                                        loop
                                                        onMouseOver={(e) => e.target.play()}
                                                        onMouseOut={(e) => e.target.pause()}
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity">
                                                        <PlayCircle size={60} className="text-white/80" />
                                                    </div>
                                                </div>
                                            ) : (
                                                <img 
                                                    src={`http://localhost:5000${item.media}`} 
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-1000 ease-out"
                                                />
                                            )
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-blue-950 to-blue-900 flex items-center justify-center">
                                                <span className="text-white font-serif text-8xl opacity-10 font-bold uppercase tracking-widest">{item.category}</span>
                                            </div>
                                        )}
                                        
                                        {/* Overlay Information */}
                                        <div className="absolute top-8 left-8">
                                            <span className="bg-white/90 backdrop-blur-md text-blue-900 text-[10px] font-black font-sans uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="px-4 space-y-4">
                                        <div className="flex items-center space-x-6 text-gray-400 font-sans text-[10px] font-bold uppercase tracking-widest">
                                            <div className="flex items-center space-x-2">
                                                <Calendar size={14} className="text-blue-600" />
                                                <span>{new Date(item.date).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Tag size={14} className="text-blue-600" />
                                                <span>5 {t('home.readTime')}</span>
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-2xl md:text-3xl font-black text-blue-950 font-serif leading-tight group-hover:text-blue-700 transition-colors h-22 overflow-hidden line-clamp-2">
                                            {item.title}
                                        </h3>
                                        
                                        <div className="h-0.5 w-12 bg-blue-900 group-hover:w-full transition-all duration-500"></div>
                                        
                                        <p className="text-gray-500 font-sans leading-relaxed line-clamp-3 text-lg">
                                            {item.content}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Home;
