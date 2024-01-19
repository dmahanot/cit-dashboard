// import { RectangleGroupIcon, RectangleStackIcon } from '@heroicons/react/24/outline'
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// function Anf() {
//     const [toggleSanity, setToggleSanity] = useState(true);
//     const [toggleCRR, setToggleCRR] = useState(true);

//     function toggleSelf1() {

//         toggleSanity ? setToggleCRR(false) : setToggleSanity(true);

//         if (!toggleCRR && toggleSanity) {
//             setToggleCRR(true);
//             setToggleSanity(true);
//         }


//     }
//     function toggleSelf2() {

//         toggleCRR ? setToggleSanity(false) : setToggleCRR(true);
//         if (toggleCRR && !toggleSanity) {
//             setToggleCRR(true);
//             setToggleSanity(true);
//         }


//     }

//     return (
//         <>
//             <div className='w-full rounded-xl bg-gray-50 p-2  shadow-sm'>
//                 <div className='p-4 gap-10 columns-2 py-4 px-2 justify-evenly flex grow '>
//                     {toggleSanity && <div onClick={() => toggleSelf1()} className='h-20 p-4 w-full text-center rounded-xl flex bg-gray-200 justify-center  hover:bg-sky-100 hover:text-blue-600 '>
//                         <RectangleStackIcon />
//                         <Link to='' className='font-bold  p-3'>Anf Sanity</Link>
//                     </div>}
//                     {toggleCRR && <div onClick={() => toggleSelf2()} className='h-20 p-4 w-full text-center rounded-xl flex bg-gray-200 justify-center  hover:bg-sky-100 hover:text-blue-600'>
//                         <RectangleGroupIcon />
//                         <Link to='' className='font-bold p-3'>Anf CRR</Link>
//                     </div>}
//                 </div>
//             </div >
//         </>

//     )
// }

// export default Anf