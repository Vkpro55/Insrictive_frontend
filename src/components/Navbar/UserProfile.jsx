import React from 'react';

const UserProfile = () => {
    return (
        <div className="flex items-center gap-4 sm:gap-[20px]">
            <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                <img
                    src="/profile.jpg"
                    alt="User Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="text-[10px] sm:text-[18px] font-noto font-semibold text-[#003C69]">
                Vinod Kumar
            </div>
        </div>
    );
};

export default UserProfile;
