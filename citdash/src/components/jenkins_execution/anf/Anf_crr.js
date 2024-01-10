import React from 'react'

function Anf_sanity() {
  return (
    <>
      <div className="relative flex w-full flex-col rounded-xl  bg-clip-border shadow-md bg-gray-50">
        {/* <nav className="flex min-w-[240px] flex-row gap-1 p-2 font-sans text-base font-normal">
    <div role="button"
      className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-opacity-80 focus:bg-sky-100 focus:bg-opacity-80 active:bg-blue-blue-200 active:bg-opacity-80 active:text-sky-600">
      <label htmlFor="horizontal-list-react" className="flex items-center w-full px-3 py-2 cursor-pointer">
        <div className="grid mr-3 place-items-center">
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-0 rounded-full cursor-pointer"
              htmlFor="horizontal-list-react">
              <input name="horizontal-list" id="horizontal-list-react" type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-sky-500 before:opacity-0 before:transition-opacity checked:border-sky-900 checked:before:bg-sky-600 hover:before:opacity-0" />
              <span
                className="absolute text-sky-600 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
          </div>
        </div>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-500">
          WEST US 2
        </p>
      </label>
    </div>
    <div role="button"
      className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-opacity-80 focus:bg-sky-100 focus:bg-opacity-80 active:bg-blue-blue-200 active:bg-opacity-80 active:text-sky-600">
      <label htmlFor="horizontal-list-react" className="flex items-center w-full px-3 py-2 cursor-pointer">
        <div className="grid mr-3 place-items-center">
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-0 rounded-full cursor-pointer"
              htmlFor="horizontal-list-react">
              <input name="horizontal-list" id="horizontal-list-react" type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-sky-500 before:opacity-0 before:transition-opacity checked:border-sky-900 checked:before:bg-sky-600 hover:before:opacity-0" />
              <span
                className="absolute text-sky-600 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
          </div>
        </div>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-500">
          SCUS
        </p>
      </label>
    </div>
    <div role="button"
      className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-opacity-80 focus:bg-sky-100 focus:bg-opacity-80 active:bg-blue-blue-200 active:bg-opacity-80 active:text-sky-600">
      <label htmlFor="horizontal-list-react" className="flex items-center w-full px-3 py-2 cursor-pointer">
        <div className="grid mr-3 place-items-center">
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-0 rounded-full cursor-pointer"
              htmlFor="horizontal-list-react">
              <input name="horizontal-list" id="horizontal-list-react" type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-sky-500 before:opacity-0 before:transition-opacity checked:border-sky-900 checked:before:bg-sky-600 hover:before:opacity-0" />
              <span
                className="absolute text-sky-600 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
          </div>
        </div>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-500">
          CENTRAL-US-EUAP
        </p>
      </label>
    </div>
    <div role="button"
      className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-opacity-80 focus:bg-sky-100 focus:bg-opacity-80 active:bg-blue-blue-200 active:bg-opacity-80 active:text-sky-600">
      <label htmlFor="horizontal-list-react" className="flex items-center w-full px-3 py-2 cursor-pointer">
        <div className="grid mr-3 place-items-center">
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-0 rounded-full cursor-pointer"
              htmlFor="horizontal-list-react">
              <input name="horizontal-list" id="horizontal-list-react" type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-sky-500 before:opacity-0 before:transition-opacity checked:border-sky-900 checked:before:bg-sky-600 hover:before:opacity-0" />
              <span
                className="absolute text-sky-600 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
          </div>
        </div>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-500">
          EAST-US-EUAP
        </p>
      </label>
    </div>    
  </nav> */}
        <div className=' flex min-w-min flex-row gap-1 p-3 font-sans text-base font-normal'>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" className="radio radio-info" checked />
            <span className='p-2'>westus2stage</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" className="radio radio-info" />
            <span className='p-2'>southcentralusstage</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" className="radio radio-info" />
            <span className='p-2'>eastus2euap</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" className="radio radio-info" />
            <span className='p-2'>eastusstage</span>
          </div>
        </div>
      </div>
      <div className='relative w-full items-center my-20 p-4 min-h-max '>
        <div className='text-sky-600 items-center leading-tight text-center flex'>
          <button className='font-sans bg-gray-300 rounded-xl w-40 h-16  hover:text-white hover:bg-sky-600 mx-1'>View </button>
          <button className='font-sans bg-gray-300 rounded-xl w-40 h-16  hover:text-white hover:bg-sky-600 mx-1'>Trigger NEW</button>
          <button className='font-sans bg-gray-300 rounded-xl w-40 h-16  hover:text-white hover:bg-sky-600 mx-1'>Disable Job</button>
          </div>
      </div>
    </>
  )
}

export default Anf_sanity