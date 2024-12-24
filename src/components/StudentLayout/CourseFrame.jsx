import React from 'react';

const CourseFrame = ({ courseName, index }) => {
    const imageSrc = index % 2 === 0 ? 'T2.png' : 'T1.png';

    return (
        <div className="w-[134.97px] h-[20px] flex px-[4px] py-[2px] bg-[#F6F8FA] rounded-[6px_0px_0px_0px] opacity-1">
            <img
                src={imageSrc}
                className="w-[15px] h-[15px] rounded-[4px_0px_0px_0px] opacity-1"
                alt="course"
            />
            <div className="w-[85px] h-[16px] mt-[-3px] opacity-1 text-ellipsis whitespace-nowrap">
                {courseName}
            </div>
        </div>
    );
}

export default CourseFrame;
