import React from 'react';
import SidebarLines from './SidebarLines';
import ThemeDiv from './ThemeDiv';


const Sidebar = () => {


    return (
        <div className="w-[248px] h-[789px] p-[30px_12px] flex flex-col justify-between bg-[#FFFFFF] opacity-1
         md:w-[200px] sm:w-[180px] sm:p-[20px_8px] animate-slide-in">

            <SidebarLines />

            <ThemeDiv />
        </div>
    );
};

export default Sidebar;
