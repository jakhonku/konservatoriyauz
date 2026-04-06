import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Breadcrumbs = () => {
    const location = useLocation();
    const { t } = useTranslation();

    const pathnames = location.pathname.split('/').filter((x) => x);

    // Skip showing breadcrumbs on the home page
    if (pathnames.length === 0) {
        return null;
    }

    // Helper to format the breadcrumb label
    const formatLabel = (name) => {
        // Convert dashed string (e.g., "odob-ahloq") to camelCase (e.g., "odobAhloq")
        const camelCase = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        
        // Try looking up the translation from 'nav' section since header uses it
        const translated = t(`nav.${camelCase}`);
        if (translated && translated !== `nav.${camelCase}`) {
            return translated;
        }
        
        // Fallback: capitalize the words
        return name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <div className="bg-gray-50 py-3 border-b border-gray-200">
            <div className="container mx-auto px-6">
                <nav className="text-sm text-gray-500 flex items-center space-x-2 whitespace-nowrap overflow-x-auto">
                    <Link to="/" className="hover:text-blue-700 transition flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        {t('nav.boshSahifa') !== 'nav.boshSahifa' ? t('nav.boshSahifa') : 'Bosh sahifa'}
                    </Link>
                    
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;

                        return (
                            <React.Fragment key={name}>
                                <span className="text-gray-400">/</span>
                                {isLast ? (
                                    <span className="text-blue-900 font-medium">
                                        {formatLabel(name)}
                                    </span>
                                ) : (
                                    <Link to={routeTo} className="hover:text-blue-700 transition">
                                        {formatLabel(name)}
                                    </Link>
                                )}
                            </React.Fragment>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default Breadcrumbs;
