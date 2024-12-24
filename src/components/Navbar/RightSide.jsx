import React from 'react';
import NavbarIcon from './NavbarIcon';
import { FaQuestionCircle, FaCog, FaBell, FaEnvelope } from 'react-icons/fa';
import UserProfile from './UserProfile';

const RightSide = () => {
    const options = [
        { icon: FaQuestionCircle },
        { icon: FaCog },
        { icon: FaBell },
        { icon: FaEnvelope },
    ];

    return (
        <div className="flex items-center gap-4 sm:gap-8 md:gap-20">
            {options.map(({ icon }, index) => (
                <NavbarIcon key={index} icon={icon} />
            ))}
            <UserProfile />
        </div>
    );
};

export default RightSide;
