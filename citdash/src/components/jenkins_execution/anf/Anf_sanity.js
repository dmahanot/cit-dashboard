import React, { useState } from 'react';
import { MdInfoOutline } from "react-icons/md";
import axios from 'axios';


function Anf_sanity() {
  const [radioValue, setRadioValue] = useState(0);
  const onChange = (ev) => {
    //save your value here with state variable
    console.log(ev.target.value);
    setRadioValue(ev.target.value);
  };
  const onClick = (ev) => {
    //TO-DO SEND/click value
    console.log("radio value ", radioValue);
  };

  const onTriggerClickHandler = () => {
    console.log("hello");
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://cvscit-team-jenkins.daas.netapp.com/job/ANF_Sanity/job/ANF_Sanity_Github/job/CIT_ANF_Func_SWESOUTH_GitHub/build?token=cit-dash',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'true',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': 'Basic Y2l0dXNlcjoxMTY5MDY0MTQ2MWFiNzNkMzU2OWJhNTJhNjg1M2QyZmUz'
      }
    }

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <>
      <div className="relative flex w-full flex-col rounded-xl  bg-clip-border shadow-md bg-gray-50">
        <div className=' flex min-w-min flex-row gap-1 p-3 font-sans text-base font-normal'>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="swedensouth" className="radio radio-info" onChange={onChange} />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>SWEDEN SOUTH - STAGE</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="southcenteralus" className="radio radio-info "  onChange={onChange} />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>SOUTH CENTRAL US-STAGE</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="westus2-stage" className="radio radio-info"  onChange={onChange}/>
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>WEST US2-STAGE</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="eastus-stage" className="radio radio-info"  onChange={onChange} />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>EAST US-STAGE</span>
          </div>
        </div>
        {/* 2 row starts here  */}
        {/* <div className=' flex min-w-min flex-row gap-1 p-3 font-sans text-base font-normal'>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="centralus-euap" className="radio radio-info" onChange={onChange} />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>CENTRAL US EUAP-STAGE</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="uk-south" className="radio radio-info" onChange={onchange}/>
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>UK SOUTH</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="uk-west" className="radio radio-info" onChange={onchange}/>
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>UK WEST</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="swedensouth" className="radio radio-info" onChange={onchange} />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>SWEDEN SOUTH-STAGE</span>
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
            Abort Run
          </div>

        </button>
        <button onClick={() => onClick()} className='font-sans bg-gray-300 rounded-xl w-40 h-16 flex items-center justify-center  hover:text-white hover:bg-sky-600 '>
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
            Disable Job
          </div>

        </button>
      </div>
      <div className='bg-gray-900 h-[240px] text-white p-1'>Console logs</div>
    </>
  )
}

export default Anf_sanity