import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 text-center md:text-left">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Konservatoriya</h3>
                        <p className="text-gray-400 text-sm">O'zbekiston Davlat Konservatoriyasi veb-sayti. Barcha huquqlar himoyalangan.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Bog'lanish</h3>
                        <p className="text-gray-400 text-sm">E-mail: info@konservatoriya.uz</p>
                        <p className="text-gray-400 text-sm">Tel: +99871 239-46-53</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Manzil</h3>
                        <p className="text-gray-400 text-sm">Toshkent shahri</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
