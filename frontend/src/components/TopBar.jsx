import React from 'react';

const TopBar = () => {
    return (
        <div className="bg-blue-900 text-white text-[10px] sm:text-xs py-2">
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center overflow-hidden">
                <div className="flex-1 overflow-hidden whitespace-nowrap mr-4 relative h-4 flex items-center">
                    <div className="animate-marquee whitespace-nowrap absolute">
                        <span className="mx-4">SAYT TEST REJIMIDA ISHLAYABDI</span>
                        <span className="mx-4">SAYT TEST REJIMIDA ISHLAYABDI</span>
                        <span className="mx-4">SAYT TEST REJIMIDA ISHLAYABDI</span>
                        <span className="mx-4">SAYT TEST REJIMIDA ISHLAYABDI</span>
                        <span className="mx-4">SAYT TEST REJIMIDA ISHLAYABDI</span>
                    </div>
                </div>
                <div className="flex space-x-2 shrink-0">
                    <a href="#" className="hover:text-blue-200 font-bold">O'ZB</a>
                    <a href="#" className="hover:text-blue-200">РУС</a>
                    <a href="#" className="hover:text-blue-200">ENG</a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
