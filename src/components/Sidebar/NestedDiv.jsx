import React, { useState } from 'react';

const NestedDiv = ({ icon: Icon, text }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300);
    };

    return (
        <div
            className={`flex items-center w-[190px] h-[48px] p-[12px] gap-[10px] rounded-tl-[6px] 
            border border-gray-300 cursor-pointer
            ${isClicked ? 'bg-blue-500 text-white' : 'bg-gray-100'}
            hover:bg-gray-200 transition-all duration-300 ease-in-out 
            transform ${isClicked ? 'scale-105' : ''}`}
            onClick={handleClick}
        >

            <div
                className={`w-[24px] h-[24px] flex items-center justify-center rounded ${isClicked ? 'bg-blue-700' : 'bg-gray-200'
                    } transition-all duration-300`}
            >
                <Icon size={18} className="bg-[rgba(111, 118, 126, 1)]" />
            </div>


            <div
                className={`text-[16px] leading-[22px] font-noto font-bold text-left ${isClicked ? 'text-white' : 'text-gray-800'
                    } transition-all duration-300`}
            >
                {text}
            </div>
        </div>
    );
};

export default NestedDiv;
