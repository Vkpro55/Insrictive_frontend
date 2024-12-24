import React, { useState } from 'react';

const SingleTheme = ({ icon: Icon, text }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [activeTheme, setActiveTheme] = useState(null);

    const handleClick = (theme) => {
        setIsClicked(true);
        setActiveTheme(theme);


        setTimeout(() => setIsClicked(false), 300);
    };

    return (
        <div
            className={`w-[99px] h-[32px] p-[5px_15px] flex items-center gap-[10px] rounded-tl-[6px] 
            bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] transition-all duration-300 
            ${isClicked ? 'scale-105 bg-blue-500 text-white' : 'hover:bg-gray-200'}
            cursor-pointer`}
            onClick={() => handleClick('light')}
        >
            <div className={`w-[22px] h-[22px] opacity-100 transition-all duration-300 ${isClicked ? 'bg-blue-700' : 'bg-gray-200'} rounded`}>
                <Icon size={22} />
            </div>
            <div className={`w-[39px] h-[20px] opacity-100 font-noto font-bold text-[15px] leading-[20px] text-left ${isClicked ? 'text-white' : 'text-[#05162e]'}`}>
                {text}
            </div>
        </div>
    );
};

export default SingleTheme;
