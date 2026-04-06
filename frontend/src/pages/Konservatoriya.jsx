import React from 'react';
import { useTranslation } from 'react-i18next';

const Konservatoriya = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-extrabold text-blue-900 mb-8 border-b-2 border-blue-100 pb-4">{t('nav.konservatoriya')}</h1>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
                <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <p className="text-gray-800 text-lg sm:text-xl leading-relaxed font-medium">
                            O’zbekiston davlat konservatoriyasi haqli ravishda Markaziy Osiyodagi eng qadimiy oliy musiqa ta’limi muassasasi hisoblanadi. 1936 yilda tashkil etilgan bo’lib, u ko’p yillar davomida ushbu mintaqadagi yagona musiqa oliy ta’lim muassasasi bo’lgan. 
                        </p>
                        <div className="w-16 h-1 bg-blue-500 my-6"></div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Konservatoriya tarixi juda boy va mazmunli. Bu yerda ko’plab O’zbekiston musiqa madaniyatining taniqli namoyandalari, professional san’at va musiqa ilmining darg’alarining faoliyat yuritishi diqqatga sazovardir.
                        </p>
                    </div>
                    
                    <div className="bg-blue-50/30 flex items-center justify-center p-6 lg:p-12">
                        <div className="w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            <video 
                                className="w-full h-auto aspect-video object-cover" 
                                controls 
                                poster="https://via.placeholder.com/800x450/1e3a8a/ffffff?text=O'zbekiston+Davlat+Konservatoriyasi"
                            >
                                <source src="http://konservatoriya.uz/wp-content/uploads/2023/11/IMG_1868.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Konservatoriya;
