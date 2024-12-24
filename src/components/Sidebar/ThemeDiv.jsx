import React, { useState } from 'react';
import { MdWbSunny, MdNightsStay } from 'react-icons/md';
import SingleTheme from './SingleTheme';

const ThemeDiv = () => {
    const options = [
        { icon: MdWbSunny, text: 'Light' },
        { icon: MdNightsStay, text: 'Dark' },

    ];

    return (
        <div className="w-[224px] h-[40px] p-[4px_10px] flex items-center gap-[6px] rounded-tl-[6px] bg-[#F6F8FA] opacity-1 border ">
            <div className="flex gap-[10px]">



                {options.map(({ icon, text }) => (
                    <SingleTheme key={text} icon={icon} text={text} />
                ))}


            </div>
        </div>
    );
};

export default ThemeDiv;
