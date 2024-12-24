import React from 'react';
import SearchBar from './SearchBar';
import RightSide from './RightSide';

const Navbar = () => {
    return (
        <div
            className="w-full max-w-[1152px] h-[48px] flex justify-between items-center px-4 sm:px-6 lg:px-8"
        >
            <SearchBar />
            <RightSide />
        </div>
    );
};

export default Navbar;
