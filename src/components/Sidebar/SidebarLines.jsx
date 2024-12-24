import React from 'react'
import NestedDiv from './NestedDiv';
import { MdDashboard, MdPeople, MdBook, MdAssessment, MdHelp, MdSettings } from 'react-icons/md';

const SidebarLines = () => {

    const options = [
        { icon: MdDashboard, text: 'Dashboard' },
        { icon: MdPeople, text: 'Students' },
        { icon: MdBook, text: 'Chapters' },
        { icon: MdAssessment, text: 'Reports' },
        { icon: MdHelp, text: 'Help' },
        { icon: MdSettings, text: 'Settings' },
    ];

    return (
        <div className="flex flex-col w-[224px] h-auto gap-[30px]">

            <div className="flex flex-col gap-[8px]">

                <div className="flex items-center">
                    <img
                        src="/image.png"
                        alt="Logo"
                        className="w-[98px] h-[42px] opacity-1"
                    />
                </div>

                <div className="flex flex-col w-[224px] h-auto gap-[8px] opacity-1 borde rounded">

                    {options.map(({ icon, text }) => (
                        <NestedDiv key={text} icon={icon} text={text} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default SidebarLines