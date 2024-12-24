import React from 'react'

import Navbar from './Navbar/Navbar'
import StudentContent from './StudentLayout/StudentContent'
import Sidebar from './Sidebar/Sidebar'

const MainLayout = () => {
    return (
        <>

            <div className="flex h-screen">

                <div className="w-[248px] h-full">
                    <Sidebar />
                </div>


                <div className="flex flex-col flex-grow">

                    <div className="h-[60px] ">
                        <Navbar />
                    </div>


                    <div className="flex-grow ">
                        <StudentContent />
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainLayout