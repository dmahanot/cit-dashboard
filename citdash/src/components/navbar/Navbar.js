import React from 'react'
import { Link } from 'react-router-dom';
import { HiGlobeAlt } from "react-icons/hi2";

function Navbar() {
  return (
    <div className="bg-blue-500 py-4 px-2 justify-between flex ">
      <div className="font-semibold text-2xl text-center items-center flex justify-evenly">
      <HiGlobeAlt className='m-2'/>
        <Link to="/dashboard" className=''>
          CIT DASHBOARD
        </Link>
      </div>
      <div className='font-semibold m-1 '>
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </div>
  )
}

export default Navbar