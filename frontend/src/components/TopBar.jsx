import React from 'react';

const TopBar = () => {
    return (
        <div className="bg-blue-900 text-white text-[10px] sm:text-xs py-2">
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <div className="flex space-x-2 sm:space-x-4">
                    <a href="#" className="hover:text-blue-200 transition">BOSH SAHIFA</a>
                    <a href="#" className="hover:text-blue-200 transition">BOG‘LANISH</a>
                    <a href="#" className="hover:text-blue-200 transition hidden sm:inline">SAYT XARITASI</a>
                </div>
                <div className="flex space-x-2 sm:space-x-4 items-center">
                    <span className="hidden md:inline">ISHONCH TELEFONI: +99871 239-46-53</span>
                    <div className="flex space-x-2">
                        <a href="#" className="hover:text-blue-200 font-bold">O'ZB</a>
                        <a href="#" className="hover:text-blue-200">РУС</a>
                        <a href="#" className="hover:text-blue-200">ENG</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
