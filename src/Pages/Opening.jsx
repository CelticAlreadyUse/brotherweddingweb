import React from 'react'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import "./css/opening.css"
import { Link } from 'react-router-dom'
const Opening = () => {
  
  return (
    <div  className=" grid place-content-center  bg-white z-10  ">
      <div className=' max-w-[375px] '>
    <div  className='max-w-[375px] w-full h-svh self-center   bg-main'>
    </div>
      </div>
    <div className=' max-w-[375px] h-svh z-10 grid bg-opening  place-content-center r'>
        <div data-aos="fade-up" className='sofadi-one-regular text-8xl text-center text-white'>
        <h1>YUDA</h1>
        <span>&</span>
        <h1>Astri</h1>
        </div>
          <h1 className='text-center text-white text-2xl mt-2'>Kepada Yth;<br></br>Bapak/Ibu/Saudara/i</h1>
        <Link to={'/home'}  className='w-fit flex gap-5 mt-5 bg-slate-500 px-3 py-2 rounded-md items-center'><strong className='text-white text-2xl'>Open the Invitation</strong><FaEnvelopeOpenText className='text-white' size={32} /> </Link> 
    </div>
    </div>
  )
}

export default Opening