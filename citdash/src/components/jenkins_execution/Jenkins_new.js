import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { BugAntIcon, PowerIcon } from '@heroicons/react/24/outline';
import NavLinks from './NavLinks';
import Onprem from './onprem/Onprem';
import Anf_sanity from './anf/Anf_sanity';
import Anf_crr from './anf/Anf_crr';
import Gcp_sanity from './gcp/Gcp_sanity';
import Gcp_crr from './gcp/Gcp_crr';


function Jenkins_new() {
  return (
    <>
      <div className="flex h-screen flex-col px-3 py-4 md:px-2 bg-gray-300">
        <Link
          className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
          to="/dashboard"
        >
          <div className="w-32 text-white md:w-full flex" >
            <BugAntIcon className="h-12 w-12 rotate-[15deg]" />
            <div className="text-[40px] px-2">CIT Regression Executions</div>
          </div>
        </Link>
        <div className='grid grid-flow-col h-full '>
          <div className="col-span-1 mx-1 p-2 flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
              <NavLinks />
              <div className="hidden h-auto w-full grow rounded-md invisible md:block"></div>
              <hr className='text-slate-600'></hr>
              <form>
                <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                  <PowerIcon className="w-6" />
                  <div className="hidden md:block">Sign Out</div>
                </button>
              </form>
            </div>
          </div>
          <div className='bg-gray-200 col-span-3 mx-1 p-2'>
            <Routes>
              {/* <Route exact path='/anf' Component={Anf} /> */}
              <Route exact path='/anf_sanity' Component={Anf_sanity} />
              <Route exact path='/anf_crr' Component={Anf_crr} />
              <Route exact path='/onprem' Component={Onprem} />
              <Route exact path='/gcp_sanity' Component={Gcp_sanity} />
              <Route exact path='/gcp_crr' Component={Gcp_crr} />
            </Routes>
          </div>
        </div>
      </div>

    </>
  );
}

export default Jenkins_new

function Anf_new() {
  return (
    <>
      <div>Anf</div>
    </>

  )
}