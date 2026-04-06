import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, ChevronRight, Music, Globe, Users } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();

    const sections = [
        {
            title: t('footer.siteMap'),
            links: [
                { name: t('nav.konservatoriya'), path: '/konservatoriya' },
                { name: t('nav.rektorat'), path: '/rektorat' },
                { name: t('nav.fakultetlar'), path: '/kafedralar' },
                { name: t('nav.tuzilma'), path: '/tuzilma' },
                { name: t('nav.markazVaBolimlar'), path: '/markaz-va-bolimlar' },
            ]
        },
        {
            title: t('footer.usefulLinks'),
            links: [
                { name: t('nav.ilmiyFaoliyat'), path: '/ilmiy-faoliyat' },
                { name: t('nav.korrupsiya'), path: '/korrupsiya' },
                { name: t('nav.xalqaro'), path: '/xalqaro' },
                { name: t('nav.qabul'), path: '/qabul-dasturlari' },
                { name: t('nav.darsBakalavr'), path: '/dars-bakalavr' },
            ]
        },
    ];

    return (
        <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-900/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Info */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-blue-700 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl shadow-blue-500/20">K</div>
                                <h3 className="text-2xl font-black font-sans tracking-tight uppercase">{t('footer.title')}</h3>
                            </div>
                            <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-xs italic opacity-80">
                                {t('footer.desc')}
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">{t('footer.socials')}</h4>
                            <div className="flex items-center space-x-4">
                                {[
                                    { 
                                        icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2s-.21-.05-.3-.03c-.11.02-1.84 1.16-5.18 3.42-.49.33-.93.5-1.33.49-.44-.01-1.28-.24-1.9-.44-.77-.25-1.38-.38-1.33-.8.03-.22.33-.44.89-.67 3.49-1.52 5.83-2.52 7.01-3 .16-.06.28-.1.37-.1.08 0 .26.02.38.12.1.08.13.19.14.28.01.07.01.15.01.18z"/></svg>, 
                                        link: "https://t.me/Ozbekistondavlatkonservatoriyasi" 
                                    },
                                    { 
                                        icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>, 
                                        link: "https://www.instagram.com/konservatoriya_uzb/" 
                                    },
                                    { 
                                        icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>, 
                                        link: "https://www.youtube.com/@stateconservatoryofuzbekis282/featured" 
                                    },
                                    { 
                                        icon: <Mail size={20} />, 
                                        link: "mailto:info@konservatoriya.uz" 
                                    }
                                ].map((social, i) => (
                                    <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:bg-blue-700 hover:border-blue-700 transition-all duration-300">
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Site Map columns */}
                    {sections.map((section, idx) => ( section &&
                        <div key={idx}>
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <a href={link.path} className="text-gray-400 hover:text-white transition-colors flex items-center group font-sans text-sm">
                                            <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-blue-500" />
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8">{t('footer.contact')}</h4>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-blue-500"><MapPin size={18} /></div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{t('footer.addressTitle')}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">{t('footer.address')}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-blue-500"><Phone size={18} /></div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Aloqa</p>
                                    <p className="text-gray-400 text-sm">+99871 239-46-53</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-blue-500"><Mail size={18} /></div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">E-pochta</p>
                                    <p className="text-gray-400 text-sm">info@konservatoriya.uz</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
                        &copy; {new Date().getFullYear()} O'ZBEKISTON DAVLAT KONSERVATORIYASI.
                    </p>
                    <div className="flex items-center space-x-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                        <a href="/terms" className="hover:text-white transition-colors">Yuridik ma'lumotlar</a>
                        <a href="/privacy" className="hover:text-white transition-colors">Maxfiylik</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

