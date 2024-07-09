import React from 'react'
import illu from '../assets/images/illustration-working.svg'
import { UrlInp } from './UrlInp'

export const Hero = () => {
  return (
    <div className='flex w-full flex-col-reverse mb-20 md:flex-row items-center justify-start '>
        <div className='w-full px-8 flex flex-col items-center justify-center '>
        <h1 className='md:text-6xl w-full text-left text-3xl  py-2 font-bolder'>More than just</h1>
        <h1 className='md:text-6xl w-full text-left text-3xl py-2 font-bolder text-left'>shorter links</h1>
        <p className='w-full py-4'>Build your brand's recognition and get detailed insights on how your links are perfroming</p>
        <a href="#" className='bg-Cyan text-white font-bold py-2 px-8 rounded-3xl'>Get started</a>
        </div>
        <div className=' w-full p-4 ml-auto '>
            <img src={illu} alt="working illustration object-contain" />
        </div>
  
    </div>
  )
}
