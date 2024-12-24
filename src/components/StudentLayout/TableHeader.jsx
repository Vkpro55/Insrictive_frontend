import React from 'react';

const TableHeader = () => {
    return (
        <div className="grid grid-cols-10 w-full h-[32px] gap-0 border-t-[1px] border-solid border-[#ffffff] opacity-1">
            <div className="col-span-2 text-left font-medium text-sm flex items-center pl-[10px]">Student</div>
            <div className="col-span-1 text-left font-medium text-sm flex items-center pl-[10px]">Cohort</div>
            <div className="col-span-3 text-left font-medium text-sm flex items-center pl-[10px]">Course</div>
            <div className="col-span-1 text-left font-medium text-sm flex items-center pl-[10px]">Date Joined</div>
            <div className="col-span-2 text-left font-medium text-sm flex items-center pl-[10px]">Last Login</div>
            <div className="col-span-1 text-left font-medium text-sm flex items-center pl-[10px]">Status</div>
        </div>
    );
}

export default TableHeader;
