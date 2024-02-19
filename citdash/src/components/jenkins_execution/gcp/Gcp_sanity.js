import React, { useState } from 'react' ;
import { MdInfoOutline } from "react-icons/md";
import axios from 'axios';



function Gcp_sanity() {
  const [radioValue, setRadioValue] = useState(0);
  const onChange = (ev) => {
    //save your value here with state variable
    console.log(ev.target.value);
    setRadioValue(ev.target.value);
  };
  const onTrigger = (ev) => {
    //TO-DO SEND/click value
    console.log("radio value ", radioValue);
    //onTriggerClickHandler();
  };
  return (
    <>
      <div className="relative flex w-full flex-col rounded-xl  bg-clip-border shadow-md bg-gray-50">
        <div className=' flex min-w-min flex-row gap-1 p-3 font-sans text-base font-normal'>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="CIT_ANF_Func_SWESOUTH_GitHub" className="radio radio-info" onChange={onChange} />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>AU-SE1-SQA </span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="GCP_Sanity_1P" className="radio radio-info" onChange={onChange} />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>US-CENTRAL1</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="CIT_ANF_Func_WESTUS2_GitHub" className="radio radio-info" onChange={onChange} />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>EUROPE-WEST1(SO)</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="CIT_ANF_Func_southcentralusstage_github" className="radio radio-info " onChange={onChange} />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>EU-NORTH1(SO)</span>
          </div>

        </div>
        {/* 2 row starts here  */}
        {/* <div className=' flex min-w-min flex-row gap-1 p-3 font-sans text-base font-normal'>
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
        </div> */}
      </div>
      <div className='grid grid-cols-4 place-items-center m-1 p-4'>
        <button className='font-sans bg-gray-300 rounded-xl w-40 h-16 flex items-center justify-center  hover:text-white hover:bg-sky-600 '>
          <div className='px-1 '>
            <MdInfoOutline />
          </div>
          <div className='px-1'>
            View Previous
          </div>

        </button>
        <button className='font-sans bg-gray-300 rounded-xl w-40 h-16 flex items-center justify-center  hover:text-white hover:bg-sky-600 '>
          <div className='px-1 '>
            <MdInfoOutline />
          </div>
          <div className='px-1'>
            Trigger New
          </div>

        </button>
        <button className='font-sans bg-gray-300 rounded-xl w-40 h-16 flex items-center justify-center  hover:text-white hover:bg-sky-600 '>
          <div className='px-1 '>
            <MdInfoOutline />
          </div>
          <div className='px-1'>
            Abort Run
          </div>

        </button>
        <button className='font-sans bg-gray-300 rounded-xl w-40 h-16 flex items-center justify-center  hover:text-white hover:bg-sky-600 '>
          <div className='px-1 '>
            <MdInfoOutline />
          </div>
          <div className='px-1'>
            Disable Job
          </div>

        </button>
      </div>
      <div className='bg-gray-900 h-[240px] text-white p-1'>Console logs</div>
    </>
  )
}

export default Gcp_sanity