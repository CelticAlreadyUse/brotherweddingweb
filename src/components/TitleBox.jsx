import React from 'react'

const TitleBox = ({text}) => {
  return (
    <div className='border w-52 bg-slate-700/85 rounded-[63px] px-4'>
        <h1 className='cormorant-garamond-regular text-[24px] text-center place-content-center  text-white h-9'>{text}</h1>
    </div>
  )
}

export default TitleBox