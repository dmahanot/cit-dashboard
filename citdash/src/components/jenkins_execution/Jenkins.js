import React from 'react'

function Jenkins() {
  return (
    <>
    <div className='h-full'>
      <div className="h-10 py-2 px-3 font-bold text-center text-blue-400 text-xl my-10">Jenkins Executions</div>
      <div className=" grid grid-cols-4 my-4 h-full divide-x-2">
        <div className="grid  px-10 col-span-1 ">
          <div className="">
            <button id="anfdrop" data-dropdown-toggle="anfdropdown" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2" type="button">ANF<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>
          </div>
          <div className=" ">
            <button id="gcpdrop" data-dropdown-toggle="gcpdropdown" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2" type="button">GCP<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>
          </div>
          <div className=" ">
            <button id="onpremdrop" data-dropdown-toggle="onpremdropdown" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2" type="button">ONPREM<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>
          </div>
        </div>
        <div className="col-span-3 "></div>
      </div>
      </div>
    </>
  )
}

export default Jenkins