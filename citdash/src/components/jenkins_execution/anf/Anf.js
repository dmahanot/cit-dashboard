import { RectangleGroupIcon, RectangleStackIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'


function Anf() {
    return (
        <>
            <div className='w-full rounded-xl bg-gray-50 p-2  shadow-sm'>
                <div className='p-4 gap-10 columns-2 py-4 px-2 justify-evenly flex grow '>
                    <div  className='h-20 p-4 w-full text-center rounded-xl flex bg-gray-200 justify-center  hover:bg-sky-100 hover:text-blue-600 '>
                        <RectangleStackIcon />
                        <Link to='anf_sanity' className='font-bold  p-3'>Anf Sanity</Link>
                    </div>
                    <div className='h-20 p-4 w-full text-center rounded-xl flex bg-gray-200 justify-center  hover:bg-sky-100 hover:text-blue-600'>
                        <RectangleGroupIcon />
                        <Link to='' className='font-bold p-3'>Anf CRR</Link>
                    </div>
                    
                </div>
            </div>
        </>

    )
}

export default Anf