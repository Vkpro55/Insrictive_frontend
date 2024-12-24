





import React, { useState, useEffect } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const StudentData = ({ filters }) => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('https://instrictive-backend.onrender.com/api/students');
                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.error('Error fetching student data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchStudents();
    }, [students]);


    const filteredStudents = students.filter(student => {
        const cohortMatch = filters.AY ? student.cohort === `AY${filters.AY}` : true;
        const courseMatch = filters.Course
            ? student.courses.some(course => course.name.toLowerCase().includes(filters.Course.toLowerCase()))
            : true;

        return cohortMatch && courseMatch;
    });


    return (
        <div className="container w-full max-w-[1121px] h-[585px] mt-[40px] ml-[16px] gap-0 border-t-[1px] border-solid border-[1px solid #EAEAEA] opacity-1">
            <TableHeader />
            {loading ? (
                <p>Loading...</p>
            ) : (
                filteredStudents.map((student) => (
                    <TableRow key={student.id} student={student} />
                ))
            )}
        </div>
    );
};

export default StudentData;






