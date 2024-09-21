import React from 'react'
import './content.css'
const Content = () => {
  return (
    <section className='relative h-screen w-screen '>
    <main className='grid background-image-border bottom-0  w-svh place-items-center h-full place-content-center'>
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
        <svg  data-aos="fade-up" width="70"   viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <rect opacity="0.8" x="0.5" y="0.5" width="27" height="41" rx="13.5" stroke="#aeaeae"></rect>
                                                <rect className='slide-down absolute' opacity="0.6" x="12" y="6.66699" width="4" height="9.33333" rx="2" fill="#A79E74"></rect>
                                            </svg>
    </main>
    </section>
  )
}

export default Content