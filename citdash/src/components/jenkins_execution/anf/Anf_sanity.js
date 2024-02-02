import React from 'react'

function Anf_sanity() {
  return (
    <>
      <div className="relative flex w-full flex-col rounded-xl  bg-clip-border shadow-md bg-gray-50">
        <div className=' flex min-w-min flex-row gap-1 p-3 font-sans text-base font-normal'>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" className="radio radio-info" checked />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>WEST US2-STAGE</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" className="radio radio-info" />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>SOUTH CENTRAL US-STAGE</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" className="radio radio-info" />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>EAST US-STAGE</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" className="radio radio-info" />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>EAST US2 EUAP</span>
          </div>
        </div>
        {/* 2 row starts here  */}
        <div className=' flex min-w-min flex-row gap-1 p-3 font-sans text-base font-normal'>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" className="radio radio-info" checked />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>CENTRAL US EUAP-STAGE</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" className="radio radio-info" />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>UK SOUTH</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" className="radio radio-info" />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>UK WEST</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" className="radio radio-info" />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>EAST US2 EUAP</span>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 place-items-center m-1 p-4'>
        <button className='font-sans bg-gray-300 rounded-xl w-40 h-16  hover:text-white hover:bg-sky-600 '>View Previous</button>
        <button className='font-sans bg-gray-300 rounded-xl w-40 h-16  hover:text-white hover:bg-sky-600 '>Trigger New </button>
        <button className='font-sans bg-gray-300 rounded-xl w-40 h-16  hover:text-white hover:bg-sky-600 '>Abort Run </button>
        <button className='font-sans bg-gray-300 rounded-xl w-40 h-16  hover:text-white hover:bg-sky-600 '>Disable Job</button>
      </div>
      <div className='bg-gray-900 h-[240px] text-white p-1'>Console logs</div>
    </>
  )
}

export default Anf_sanity