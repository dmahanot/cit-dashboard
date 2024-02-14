import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import useIdle from "../hooks/useIdleTimer";
import { Link } from 'react-router-dom';
import { HiGlobeAlt } from "react-icons/hi2";
import Navbar from '../navbar/Navbar';


function Dashboard() {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0);

    const handleIdle = () => {
        setShowModal(true); //show modal
        setRemainingTime(0); //set 15 seconds as time remaining
    };

    const { isIdle } = useIdle({ onIdle: handleIdle, idleTime: 0.9 });

    useEffect(() => {
        let interval;

        if (isIdle && showModal) {
            interval = setInterval(() => {

                setRemainingTime(
                    (prevRemainingTime) =>
                        prevRemainingTime > 0 ? prevRemainingTime - 1 : 0 //reduces the second by 1
                );
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isIdle, showModal]);

    useEffect(() => {
        if (remainingTime === 0 && showModal) {
            alert("You have been logged out, due to inactivity.\n Please log in to continue.");
            localStorage.removeItem('login')
            setShowModal(false);
            navigate("/");
        }
    }, [remainingTime, showModal, navigate]); // this is responsoble for logging user out after timer is down to zero and they have not clicked anything

    const handleLogOut = () => {
        localStorage.removeItem('login')
        setShowModal(false);
        navigate("/");

    };
    useEffect(() => {
        let login = localStorage.getItem('login');
        if (!login) {
            navigate("/")
        }
    }
    );


    return (
        <>
            <div className="flex h-full flex-col px-3 py-4 md:px-2">
                {/* <Navbar /> */}
                <div className="bg-blue-500 py-4 px-2 justify-between flex ">
                    <div className="font-semibold text-2xl text-center items-center flex justify-evenly">
                        <HiGlobeAlt className='m-2' />
                        <Link to="/dashboard" className=''>
                            CIT DASHBOARD
                        </Link>
                    </div>
                    <div className='font-semibold m-1 '>
                        {/* <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            /> */}
                        <button className="btn btn-danger" onClick={handleLogOut}>
                            Logout
                        </button>
                    </div>
                </div>
                {/* below i section for jenkins etc */}
                <div className="gap-4 md:columns-3 py-3 px-3 flex-col columns-1">
                    <div className="bg-gray-200 h-48 flex items-center rounded-md">
                        <img className="h-fit w-48 pr-2 rounded-r-full"
                            src='data:image/png;base64,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'
                            alt='' />
                        <div className='md:font-medium text-justify lg:text-2xl hover:font-bold hover:text-green-600 text-2xl '>
                            <Link to="/jenkins_new">CIT Regressions</Link>
                        </div>
                    </div>
                    <div className='bg-gray-200 h-48 flex items-center rounded-md'>
                        <img
                            className=' h-fit w-44 pr-2 rounded-r-full'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Z9PWxZZxz4sthlwcnDBTMbeGNzAl-VyPS81YvJk0ZgyGXYKVjCxHYV3cBEQF2-kmOa0&usqp=CAU'
                            alt='' />
                        <div className='font-medium text-justify text-2xl lg:text-2xl hover:font-bold hover:text-green-600'>
                            <Link to="/kubernetes">LOCAL SDE SETUP</Link>
                        </div>
                    </div>
                    <div className='bg-gray-200 h-48 flex items-center rounded-md'>
                        <img
                            className=' h-fit w-44 pr-2 rounded-r-full bg-white'
                            src='https://logosmarcas.net/wp-content/uploads/2020/11/Ubuntu-Logo-2004-2010.png'
                            alt='' />
                        <div className='font-medium text-justify text-2xl lg:text-2xl md:pr-1 hover:font-bold hover:text-green-600 pl-2'>
                            <Link to="/testcontroller">Test ControllerSetup</Link>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-300 h-4/5 text-center py-2'>
                    BUG Details
                </div>
            </div>
        </>
    )
}

export default Dashboard