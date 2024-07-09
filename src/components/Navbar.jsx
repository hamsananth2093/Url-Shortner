import React from 'react' 
import logo from '../assets/images/logo.svg'
export const Navbar = () => {
  return (
    <div className='flex justify-between items-center font-bold mx-32 sm:mx-2 my-8'>
        <div className=' flex   '>
            <img src={logo}  className='mx-8 sm:mx-1' alt="logo img" />
            <a href="#" className='mx-8 sm:mx-1 text-Gray hover:text-black hover:font-bolder'>Features</a>
            <a href="#" className='mx-8 sm:mx-1 text-Gray hover:text-black hover:font-bolder'>Pricing</a>
            <a href="#" className='mx-8 sm:mx-1 text-Gray hover:text-black hover:font-bolder'>Resources</a>
        </div>
        <div>
            <a href="#" className='mx-8 '>login</a>
            <a href="#" className='mx-8 bg-Cyan py-2 px-6 text-white rounded-3xl '>Signup</a>
        </div>
    </div>
  )
}
