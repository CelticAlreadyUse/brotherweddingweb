import React from 'react'

const TitleBox = ({text}) => {
  return (
    <div className='border max-w-44 rounded-[63px] px-4'>
        <h1 className='cormorant-garamond-regular text-[18px] text-center place-content-center  text-white h-9'>{text}</h1>
    </div>
  )
}

export default TitleBox