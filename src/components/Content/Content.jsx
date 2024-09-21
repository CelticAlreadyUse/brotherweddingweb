import React from 'react'
import './content.css'
const Content = () => {
  return (
    <section className='py-5'>
    <main className='grid background-image-border bottom-0  place-items-center  place-content-center'>
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