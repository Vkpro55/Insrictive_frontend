import React, { useState } from 'react';

const AddStudentForm = ({ onStudentAdded }) => {
    const [name, setName] = useState('');
    const [cohort, setCohort] = useState('');
    const [dateJoined, setDateJoined] = useState('');
    const [lastLogin, setLastLogin] = useState('');
    const [status, setStatus] = useState(true);
    const [courses, setCourses] = useState([{ name: '' }]);

    const handleCourseChange = (index, value) => {
        const updatedCourses = [...courses];
        updatedCourses[index].name = value;
        setCourses(updatedCourses);
    };

    const addCourse = () => {
        setCourses([...courses, { name: '' }]);
    };

    const removeCourse = (index) => {
        const updatedCourses = courses.filter((_, i) => i !== index);
        setCourses(updatedCourses);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://instrictive-backend.onrender.com/api/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    cohort,
                    dateJoined,
                    lastLogin,
                    status,
                    courses: courses && courses.map(course => ({ name: course.name })),
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to add student');
            }

            const newStudent = await response.json();
            onStudentAdded(newStudent);
            onClose();

            setName('');
            setCohort('');
            setDateJoined('');
            setLastLogin('');
            setStatus(true);
            setCourses([{ name: '' }]);
        } catch (error) {
            console.error('Error adding student:', error);
            alert("Error adding student. Please check the provided data.");

        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">

            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="cohort">Cohort:</label>
                <input type="text" id="cohort" value={cohort} onChange={(e) => setCohort(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="dateJoined">Date Joined:</label>
                <input type="datetime-local" id="dateJoined" value={dateJoined} onChange={(e) => setDateJoined(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="lastLogin">Last Login:</label>
                <input type="datetime-local" id="lastLogin" value={lastLogin} onChange={(e) => setLastLogin(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="status">Status:</label>
                <input type="checkbox" id="status" checked={status} onChange={(e) => setStatus(e.target.checked)} />
            </div>
            <div>
                <label>Courses:</label>
                {courses.map((course, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <input
                            type="text"
                            value={course.name}
                            onChange={(e) => handleCourseChange(index, e.target.value)}
                            placeholder="Course Name"
                            required
                        />
                        {index > 0 && (
                            <button type="button" onClick={() => removeCourse(index)}>Remove</button>
                        )}
                    </div>
                ))}
                <button type="button" onClick={addCourse}>Add Course</button>
            </div>
            <button type="submit">Add Student</button>
        </form>
    );
};

export default AddStudentForm;