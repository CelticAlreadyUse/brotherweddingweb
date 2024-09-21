import React from 'react'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import "./css/opening.css"
import { Link } from 'react-router-dom'
const Opening = () => {
  
  return (
    <>
    <div  className='bg-main absolute top-0 bottom-0 left-0 right-0  '>
    </div>
    <div className='h-svh z-10 relative bg-opening grid place-content-center place-items-center'>
        <div data-aos="fade-up" className='sofadi-one-regular text-8xl text-center text-white'>
        <h1>YUDA</h1>
        <span>&</span>
        <h1>Astri</h1>
        </div>
          <h1 className='text-center text-white text-2xl mt-2'>Kepada Yth;<br></br>Bapak/Ibu/Saudara/i</h1>
        <Link to={'/home'}  className='w-fit flex gap-5 mt-5 bg-slate-500 px-3 py-2 rounded-md items-center'><strong className='text-white text-2xl'>Open the Invitation</strong><FaEnvelopeOpenText className='text-white' size={32} /> </Link> 
    </div>
    </>
  )
}

export default Opening