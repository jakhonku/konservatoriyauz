import React from 'react';
import { useTranslation } from 'react-i18next';

const DarsMagistratura = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-blue-900 mb-6">DarsMagistratura</h1>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                    Bu sahifa tez orada to'ldiriladi...
                </p>
            </div>
        </div>
    );
};

export default DarsMagistratura;
