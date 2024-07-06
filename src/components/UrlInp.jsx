import React from 'react'
import "../styles/UrlInp.css"

export const UrlInp = () => {
  return (
    <div className='w-full flex justify-center -translate-y-1/2 '>
    <div className='flex contain bg-DarkViolet py-7 rounded w-4/5 justify-center items-center'>
        <input type="text" name="" className='w-4/5 p-3 mx-4  rounded' placeholder='Shorten a link herer!' required id="" />
        <a href="" className='bg-Cyan p-3 rounded font-bold text-white'>Shorten it!</a>
    </div>
    </div>
  )
}
