import React from 'react';
import CourseFrame from './CourseFrame';

const TableRow = ({ student }) => {
    return (
        <div className="pt-3 grid grid-cols-10 w-full h-[32px] gap-0 border-t-[1px] border-solid border-[#EAEAEA] opacity-1">

            <div className="col-span-2 text-left font-medium text-sm flex items-center pl-[10px] w-[124.93px] h-[16px] opacity-100 font-noto-sans text-[12px] text-black">
                {student.name}
            </div>

            <div className="col-span-1 text-left font-medium text-sm flex items-center pl-[10px] w-[124.93px] h-[16px] opacity-100 font-noto-sans text-[12px] text-black">
                {student.cohort}
            </div>


            <div className="col-span-3 text-left font-medium text-sm flex items-center justify-between pl-[10px]">
                {student.courses.map((course, index) => (
                    <CourseFrame key={course.id} courseName={course.name} index={index} />
                ))}
            </div>


            <div className="col-span-1 text-left font-medium text-sm flex items-center pl-[10px] w-[82.54px] h-[16px] opacity-100 text-black">
                <span className="font-noto-sans text-[12px] font-normal leading-[16.34px]">
                    {new Date(student.dateJoined).toLocaleDateString()}
                </span>
            </div>


            <div className="col-span-2 text-left font-medium text-sm flex items-center pl-[10px] w-[136.08px] h-[16px] opacity-100 text-black">
                <span className="font-noto-sans text-[12px] font-normal leading-[16.34px]">
                    {new Date(student.lastLogin).toLocaleString()}
                </span>
            </div>


            <div className={`col-span-1 text-left font-medium text-sm flex items-center pl-[10px] w-[14.4px] h-[14px] rounded-full ${student.status ? 'bg-[#4AEA40]' : 'bg-[#FF3B30]'} opacity-100`}>
            </div>
        </div>
    );
}

export default TableRow;
