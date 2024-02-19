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
  const onTrigger = (ev) => {
    //TO-DO SEND/click value
    console.log("radio value ", radioValue);
    onTriggerClickHandler();
  };

  const onTriggerClickHandler = () => {
    let config = {
      method: 'get',
      url: `http://localhost:3000/trigger-build/${radioValue}?p=build`,
    }

    axios.request(config)
      .then((response) => {
        console.log(response.status);
        console.log(JSON.stringify(response.data));
        const url = response.data.url;
        alert(" Build Triggered on : "  + radioValue + " Successfully on \n " + url)
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const onAbortClickHandler = () => {    
    console.log("radio value ", radioValue);
    console.log("Aborted the Existing run");
    let config = {
      method: 'get',
      url: `http://localhost:3000/abort-build/${radioValue}?p=stop`
    }

    axios.request(config)
      .then((response) => {
        console.log(response.status);
        console.log(JSON.stringify(response.data));
        const url = response.data.url;
        alert("Build Aborted on : " + radioValue + "Successfully on \n " + url)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const ondisableClickHandler = () => {
    console.log("radio value ", radioValue);
    console.log("Disabled the JOB you selected");

    let config = {
      method: 'get',
      url: `http://localhost:3000/disable-job/${radioValue}?p=disable`
    }

    axios.request(config)
      .then((response) => {
        console.log(response.status);
        console.log(JSON.stringify(response.data));
        const url = response.data.url;
        alert("Job Disabled on : " + radioValue +  " Successfully on \n " + url)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <div className="relative flex w-full flex-col rounded-xl  bg-clip-border shadow-md bg-gray-50">
        <div className=' flex min-w-min flex-row gap-1 p-3 font-sans text-base font-normal'>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="CIT_ANF_Func_SWESOUTH_GitHub" className="radio radio-info" onChange={onChange} />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>SWEDEN SOUTH - STAGE</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="CIT_ANF_Func_eastus_github" className="radio radio-info" onChange={onChange} />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>EAST US-STAGE</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="CIT_ANF_Func_WESTUS2_GitHub" className="radio radio-info" onChange={onChange} />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>WEST US2-STAGE</span>
          </div>
          <div className='flex flex-row p-0 items-center leading-tight w-full transition-all'>
            <input type="radio" name="radio-1" value="CIT_ANF_Func_southcentralusstage_github" className="radio radio-info " onChange={onChange} />
            <span className='p-2 block font-sans text-base antialiased font-medium leading-relaxed text-gray-500'>SOUTH CENTRAL US-STAGE</span>
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
            {/* <MdInfoOutline /> */}
          </div>
          <div className='px-1'>
            View Previous
          </div>

        </button>
        <button onClick={() => onTrigger()} className='font-sans bg-gray-300 rounded-xl w-40 h-16 flex items-center justify-center  hover:text-white hover:bg-sky-600 '>
          <div className='px-1 '>
            {/* <MdInfoOutline /> */}
          </div>
          <div className='px-1'>
            Trigger New
          </div>

        </button>
        <button onClick={() => onAbortClickHandler()} className='font-sans bg-gray-300 rounded-xl w-40 h-16 flex items-center justify-center  hover:text-white hover:bg-sky-600 '>
          <div className='px-1 '>
            {/* <MdInfoOutline /> */}
          </div>
          <div className='px-1'>
            Abort Run
          </div>

        </button>
        <button onClick={ () => ondisableClickHandler()} className='font-sans bg-gray-300 rounded-xl w-40 h-16 flex items-center justify-center  hover:text-white hover:bg-sky-600 '>
          <div className='px-1 '>
            {/* <MdInfoOutline /> */}
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