import React from 'react'
import illu from '../assets/images/illustration-working.svg'
import { UrlInp } from './UrlInp'

export const Hero = () => {
  return (
    <div className='flex w-full my-20'>
        <div className='w-2/5 mx-auto px-8 flex flex-col items-center justify-center '>
        <h1 className='text-6xl py-2 font-bolder'>More than just</h1>
        <h1 className='text-6xl py-2 font-bolder'>shorter links</h1>
        <p className='w-full py-4'>Build your brand's recognition and get detailed insights on how your links are perfroming</p>
        <a href="#" className='bg-Cyan text-white font-bold py-2 px-8 rounded-3xl'>Get started</a>
        </div>
        <div className=' w-1/2 ml-auto '>
            <img src={illu} alt="working illustration object-contain" />
        </div>
  
    </div>
  )
}
