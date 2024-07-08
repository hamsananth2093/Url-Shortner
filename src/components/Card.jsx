import React from 'react'
import brand_recog from '../assets/images/icon-brand-recognition.svg'

export const Card = ({data}) => {
  return (
    <div className='flex flex-col max-w-xs bg-white rounded my-14 mx-8'>
        <div className='bg-DarkViolet rounded-full max-w-max -translate-y-1/2 translate-x-1/4'>
            <img src={data.img} className='p-4' alt="" />
        </div>
        <h3 className='px-6 font-bolder text-xl'>{data.title}</h3>
        <p className='p-6'>{data.desc}</p>
    </div>
  )
}
