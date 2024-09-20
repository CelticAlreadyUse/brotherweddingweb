import React from 'react'
import "./pengantin.css"
import TitleBox from '../TitleBox'
const Wanita = () => {
  return (
    <div className='mt-24'>
            <div className='relative grid place-content-center'>
        <div className='mb-2 grid place-content-end'>
    <TitleBox text={"Pengantin Wanita"}/>
        </div>
        <div className="absolute rotate-[80deg] mt-10 -left-8 bottom-24 ">
          <img
            className="w-[13.5rem]  "
            data-aos="zoom-in-down "
            src={"/assets/1.svg"}
          ></img>
        </div>
    <img src='/assets/Frame 2-1.svg' className=' w-[281px] h-[221px]  rounded-tl-[82px] rounded-br-[82px] border-b-white'>
    </img>
    <div className="absolute rotate-[-10deg] mt-10 -left-8 -bottom-24 ">
          <img
            className="w-[13.5rem]  "
            data-aos="zoom-in-down "
            src={"/assets/1.svg"}
          ></img>
        </div>
    
    
    <div className='grid place-content-center place-items-center w-full'>
    <div className='bg-[#C89860]   h-8 place-content-center absolute bottom-0 right-0  rounded-l-[23px] px-9' >
        <h1 className='text-white text-center font-bold text-lg baskervville-bold-title  ' data-aos="fade-left" >Astri Sumarah</h1>
    </div>
            </div>
    </div>
    <div className='flex justify-end place '>
    <p data-aos="fade-left" className=' baskervville-regular text-center mr-2 text-white'>Putri pertama dari  Ibu Suwawi Astuti</p>
    </div>
    </div>
  )
}

export default Wanita