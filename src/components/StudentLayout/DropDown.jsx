import React from 'react';

const DropDown = ({ section, options, onSelect }) => {
    const handleChange = (event) => {
        onSelect(section, event.target.value);
    };

    return (
        <div className="flex items-center gap-[10px]">
            <div className="w-[149px] h-[38px] bg-[#E9EDF1] rounded-tl-[6px] p-[7px_15px] flex items-center justify-between">
                <span className="font-noto text-[16px] font-bold text-[#3F526E]">{section}</span>
                <select onChange={handleChange} className="w-[100px] h-[38px] bg-transparent">
                    <option value="" disabled selected>

                    </option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default DropDown;
