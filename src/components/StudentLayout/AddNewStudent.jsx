


import React, { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import AddStudentForm from './AddStudentForm';

const AddNewStudent = ({ onStudentAdded }) => {
    const [showForm, setShowForm] = useState(false);

    const handleFormClose = () => {
        setShowForm(false);
    };

    return (
        <div className="flex justify-center md:justify-end">
            {!showForm && (
                <div
                    className="w-auto h-auto bg-[#E9EDF1] rounded-tl-[6px] flex items-center p-3 gap-2 hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
                    onClick={() => setShowForm(true)}
                >
                    <FaUserPlus
                        className="text-[#3F526E] bg-[#3F526E] rounded-full p-1"
                        style={{ width: '20px', height: '20px', color: 'white' }}
                    />
                    <p className="font-noto text-[14px] md:text-[16px] font-bold leading-[22px] text-left text-[#3F526E]">
                        Add New Student
                    </p>
                </div>
            )}
            {showForm && (
                <AddStudentForm onStudentAdded={onStudentAdded} onClose={handleFormClose} />
            )}
        </div>
    );
};

export default AddNewStudent;
