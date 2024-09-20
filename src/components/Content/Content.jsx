import React from 'react'
import './content.css'
const Content = () => {
  return (
    <section className='relative h-screen w-screen '>
    <main className='grid  bottom-0  w-svh place-items-center h-full place-content-center'>
    <img
            className="w-[16rem] mt-10 h-[16rem]  mb-8 "
            src={"/assets/Icons1.png"}
          ></img>
        <div className='rectangle1 '>
        <h1 className="wedding-of-title ">Wedding of</h1>
        </div>

        <h1 className='heading-title mb-[-20px]'>Yuda</h1>
          <p className=' text-[#e79238] text-[20px] text-center  w-full'>&</p>
        <h1 className='heading-title mt-[-40px]'>Astri</h1>
        
    </main>
    </section>
  )
}

export default Content