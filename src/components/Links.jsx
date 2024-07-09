import React from 'react'

export const Links = () => {
  return (
    <div className='w-8/12 bg-white rounded flex flex-col md:flex-row justify-between items-center px-2 py-2 rounded'>
    <a href="" className='py-2'>actuall link</a>
    <div className=" flex flex-col md:flex-row items-center">
        <a href="" className='text-Cyan my-2'>shorten links</a>
        <a href="" className='ml-6 mx-8 my-2 bg-Cyan py-2 px-6 text-white rounded'>Copy</a>
    </div>
    </div>
  )
}
