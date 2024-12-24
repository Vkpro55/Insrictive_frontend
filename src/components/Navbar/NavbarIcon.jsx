import React, { useState } from 'react';

const NavbarIcon = ({ icon: Icon }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 200);
    };

    return (
        <div
            className={`w-[24px] h-[24px] flex items-center justify-center p-[2px_0px_0px_0px] 
                cursor-pointer transition-all duration-300 ease-in-out 
                transform ${isClicked ? 'scale-110' : 'scale-100'}
                hover:scale-125 hover:text-blue-500`}
            onClick={handleClick}
        >
            <Icon size={24} />
        </div>
    );
};

export default NavbarIcon;
