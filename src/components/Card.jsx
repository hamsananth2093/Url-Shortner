import React from 'react'
import brand_recog from '../assets/images/icon-brand-recognition.svg'

export const Card = () => {
  return (
    <div className='flex flex-col max-w-xs bg-white rounded my-14 mx-8'>
        <div className='bg-DarkViolet rounded-full max-w-max -translate-y-1/2 translate-x-1/4'>
            <img src={brand_recog} className='p-4' alt="" />
        </div>
        <h3 className='px-6 font-bolder text-xl'>Brand Recognition</h3>
        <p className='p-6'>
            Boost your brand recognition with each click. generic links dont't mean a thing Branded links help instill confidence in your content.
        </p>
    </div>
  )
}
