import React from 'react'

export const List = ({title,services}) => {
  return (
    <div className='my-10'>
        <h3 className='font-bolder text-lg mb-2'>{title}</h3>
        {services.map(service=><p key={services.indexOf(service)} className='my-0.5 hover:text-Cyan cursor-pointer  '>{service}</p>)}
    </div>
  )
}
