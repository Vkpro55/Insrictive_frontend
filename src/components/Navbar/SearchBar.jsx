import React, { useState } from 'react';

const SearchBar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300);
    };

    return (
        <div
            className={`w-full sm:max-w-[614px] h-[48px] flex items-center gap-[10px] p-[14px_20px] rounded-tl-[12px] bg-white
            opacity-100 cursor-pointer ${isClicked ? 'bg-[#007BFF] scale-105' : 'hover:bg-gray-200'} 
            transition-all duration-300 ease-in-out`}
            onClick={handleClick}
        >
            <div className="w-[18px] h-[18px]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-full h-full"
                >
                    <path
                        d="M11 16c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM21 21l-6-6"
                    />
                </svg>
            </div>

            <input
                type="text"
                placeholder="Search Your Course"
                className={`w-full sm:w-auto h-[20px] font-noto font-medium text-[14px] 
                leading-[20px] placeholder:text-[#808281] border-none outline-none rounded 
                ${isClicked ? 'text-white' : 'text-gray-800'} transition-all duration-300`}
            />

            <iframe src="" className="hidden sm:block w-[157px] h-[20px] opacity-0" />
        </div>
    );
};

export default SearchBar;
