import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Trash2, Edit3, Settings, Users, FileText, Bell, Image as ImageIcon, Video, X } from 'lucide-react';

const Admin = () => {
    const [news, setNews] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('Yangiliklar');
    const [mediaFile, setMediaFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/news');
            setNews(res.data);
        } catch (err) { console.error(err); }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setMediaFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleAddNews = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('category', category);
        if (mediaFile) formData.append('media', mediaFile);

        try {
            await axios.post('http://localhost:5000/api/news', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setTitle('');
            setContent('');
            setMediaFile(null);
            setPreview(null);
            fetchNews();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Buni o'chirishni tasdiqlaysizmi?")) {
            await axios.delete(`http://localhost:5000/api/news/${id}`);
            fetchNews();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex font-serif">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white min-h-screen p-6 hidden md:block sticky top-0 h-screen">
                <div className="flex items-center space-x-3 mb-10 border-b border-gray-700 pb-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">K</div>
                    <span className="text-xl font-bold font-sans">ADMIN</span>
                </div>
                <nav className="space-y-4">
                    <a href="#" className="flex items-center space-x-4 p-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-sans shadow-lg shadow-blue-500/20">
                        <FileText size={20} />
                        <span>Yangiliklar</span>
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-4 md:p-10">
                <header className="flex justify-between items-center mb-10 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    <h1 className="text-2xl md:text-3xl font-black text-slate-800 font-sans uppercase tracking-tight">Media Boshqaruvi</h1>
                    <div className="hidden sm:flex items-center space-x-4">
                        <div className="text-right">
                            <p className="font-sans font-bold text-slate-800 leading-none">Matbuot Kotibi</p>
                            <p className="text-xs text-gray-400 font-sans">Panel Faol</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl shadow-lg ring-4 ring-blue-50"></div>
                    </div>
                </header>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                    {/* Form Section */}
                    <section className="xl:col-span-12 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-gray-100">
                        <div className="flex items-center mb-8 space-x-4">
                            <div className="p-3 bg-blue-50 rounded-2xl text-blue-600"><Plus size={24} /></div>
                            <h2 className="text-2xl font-black text-slate-800 font-sans">Yangi Media Post</h2>
                        </div>
                        
                        <form onSubmit={handleAddNews} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-black text-slate-400 mb-2 font-sans uppercase tracking-[0.2em] px-2">Post Sarlavhasi</label>
                                        <input 
                                            className="w-full p-5 bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[1.5rem] outline-none transition-all placeholder:text-gray-400 font-serif text-xl font-medium"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="Masalan: Konsert dasturi o'tkazildi"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-slate-400 mb-2 font-sans uppercase tracking-[0.2em] px-2">Kategoriya</label>
                                        <select 
                                            className="w-full p-5 bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[1.5rem] outline-none transition-all font-sans font-bold text-slate-700 appearance-none cursor-pointer"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                            <option value="Yangiliklar">Yangiliklar</option>
                                            <option value="Afisha">Afisha / Konsert</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-slate-400 mb-2 font-sans uppercase tracking-[0.2em] px-2">Kontent / Tavsif</label>
                                        <textarea 
                                            className="w-full p-5 bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-[1.5rem] outline-none transition-all h-40 resize-none font-serif text-lg leading-relaxed"
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            placeholder="Yangilik matnini batafsil yozing..."
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-black text-slate-400 mb-2 font-sans uppercase tracking-[0.2em] px-2">Media Fayl (Rasm/Video)</label>
                                        <div className="relative group">
                                            <input 
                                                type="file" 
                                                id="media-upload"
                                                className="hidden"
                                                onChange={handleFileChange}
                                                accept="image/*,video/*"
                                            />
                                            <label 
                                                htmlFor="media-upload"
                                                className={`flex flex-col items-center justify-center w-full h-[400px] border-3 border-dashed rounded-[2rem] cursor-pointer transition-all ${preview ? 'border-blue-500 bg-blue-50/10' : 'border-gray-200 hover:border-blue-400 hover:bg-gray-50'}`}
                                            >
                                                {preview ? (
                                                    <div className="relative w-full h-full p-4">
                                                        <button 
                                                            onClick={(e) => { e.preventDefault(); setPreview(null); setMediaFile(null); }}
                                                            className="absolute top-6 right-6 z-10 p-2 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition"
                                                        >
                                                            <X size={20} />
                                                        </button>
                                                        {mediaFile?.type.startsWith('video') ? (
                                                            <video src={preview} className="w-full h-full object-cover rounded-2xl" />
                                                        ) : (
                                                            <img src={preview} className="w-full h-full object-cover rounded-2xl" />
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-col items-center space-y-4">
                                                        <div className="p-5 bg-white shadow-xl rounded-3xl text-gray-400 group-hover:text-blue-500 transition">
                                                            <ImageIcon size={40} />
                                                        </div>
                                                        <p className="font-sans text-gray-500 font-bold">Faylni tanlang yoki shu yerga tashlang</p>
                                                        <p className="text-xs text-gray-400 font-sans">JPG, PNG, MP4 (Max 100MB)</p>
                                                    </div>
                                                )}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex justify-end pt-4">
                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition shadow-2xl shadow-blue-500/40 active:scale-95 disabled:opacity-50 font-sans uppercase tracking-[0.2em] text-sm"
                                >
                                    {loading ? 'Yuborilmoqda...' : 'SAYTGA JOYLASHTIRISH'}
                                </button>
                            </div>
                        </form>
                    </section>

                    {/* News List */}
                    <div className="xl:col-span-12">
                         <h2 className="text-2xl font-black text-slate-800 font-sans mb-8 px-4 uppercase tracking-widest">Boshqaruvdagi Yangiliklar</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {news.map(item => (
                                <div key={item.id} className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 group">
                                    <div className="h-48 relative overflow-hidden bg-gray-100">
                                        {item.media ? (
                                            item.mediaType === 'video' ? (
                                                <video src={`http://localhost:5000${item.media}`} className="w-full h-full object-cover" />
                                            ) : (
                                                <img src={`http://localhost:5000${item.media}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                            )
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                <ImageIcon size={40} />
                                            </div>
                                        )}
                                        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition duration-300">
                                            <button onClick={() => handleDelete(item.id)} className="p-3 bg-red-500 text-white rounded-xl shadow-xl hover:bg-red-600 active:scale-90 transition">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-6 space-y-3">
                                        <div className="flex items-center space-x-2">
                                            <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${item.category === 'Afisha' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>
                                                {item.category || 'Yangiliklar'}
                                            </span>
                                            <span className="text-[10px] font-bold text-gray-400 font-sans lowercase">{new Date(item.date).toLocaleDateString()}</span>
                                        </div>
                                        <h3 className="font-bold text-slate-800 text-lg leading-tight font-serif h-14 overflow-hidden line-clamp-2">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Admin;
