

import React, { useState } from 'react';
import FirstDiv from './FirstDiv';
import StudentData from './StudentData';

const StudentContent = () => {
    const [students, setStudents] = useState([]);
    const [filters, setFilters] = useState({ AY: null, Course: null });

    const handleStudentAdded = (newStudent) => {
        setStudents([...students, newStudent]);
    };

    return (
        <div className="w-full max-w-[1152px] h-auto mt-[10px] ml-[3px] gap-[10px] rounded-tl-[12px] bg-white opacity-100 transition-all duration-300 ease-in-out lg:ml-auto lg:mr-auto p-4">
            <FirstDiv setFilters={setFilters} filters={filters} onStudentAdded={handleStudentAdded} />
            <StudentData students={students} filters={filters} />
        </div>
    );
};

export default StudentContent;
