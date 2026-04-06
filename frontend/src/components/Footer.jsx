import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 text-center md:text-left">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">{t('footer.title')}</h3>
                        <p className="text-gray-400 text-sm">{t('footer.desc')}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">{t('footer.contact')}</h3>
                        <p className="text-gray-400 text-sm">E-mail: info@konservatoriya.uz</p>
                        <p className="text-gray-400 text-sm">Tel: +99871 239-46-53</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">{t('footer.addressTitle')}</h3>
                        <p className="text-gray-400 text-sm">{t('footer.address')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
