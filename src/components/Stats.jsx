import React from 'react'
import { UrlInp } from './UrlInp'
import { Card } from './Card'

export const Stats = () => {
  return (
    <div className=' bg-gray-100 w-full flex justify-center flex-col items-center'>
        <UrlInp/>
       <div className=" flex flex-col justify-center w-2/6">
       <h1 className='text-center text-5xl font-bolder my-4'>Advanced Statics</h1>
       <p className='text-center text-gray-400'>Track how your links are performing across the web with our advanced statics dashboard</p>
       </div>
       <div className='flex'>
       <Card/>
       <Card/>
       <Card/>
       </div>
       
    </div>
  )
}
