import React, { useState } from 'react';
import DropDown from './DropDown';
import AddNewStudent from './AddNewStudent';

const FirstDiv = ({ setFilters, onStudentAdded }) => {
    const dropdownOption = [
        {
            section: "AY",
            options: ["24", "25"],
        },
        {
            section: "Course",
            options: ["Math", "Science"],
        },
    ];

    const handleSelect = (section, selectedOption) => {
        setFilters(prev => ({
            ...prev,
            [section]: selectedOption,
        }));
    };

    return (
        <div className="w-full h-auto bg-white flex flex-col md:flex-row md:justify-between items-center p-4 rounded-tl-[12px] gap-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                {dropdownOption.map(({ section, options }) => (
                    <DropDown
                        key={section}
                        section={section}
                        options={options}
                        onSelect={handleSelect}
                    />
                ))}
            </div>

            <AddNewStudent onStudentAdded={onStudentAdded} />
        </div>
    );
};

export default FirstDiv;
