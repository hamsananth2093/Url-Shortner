import React from 'react' 
import logo from '../assets/images/logo.svg'
export const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center font-bold py-2 my-1'>
        <div className=' flex w-full justify-between items-center  '>
          <div className=' w-1/4 pl-1 flex md:ml-2   justify-start'>
            <img src={logo}  className='' alt="logo img" />
          </div>
          <div>
            <a href="#" className=' text-Gray text-sm md:text-lg lg:mx-3 my-1 mx-2 hover:text-black hover:font-bolder'>Pricing</a>
            <a href="#" className=' text-Gray text-sm md:text-lg lg:mx-3 my-1 mx-2 hover:text-black hover:font-bolder'>Resources</a>
            <a href="#" className=' text-Gray text-sm md:text-lg lg:mx-3 my-1 mx-2 hover:text-black hover:font-bolder'>Features</a>
          </div>
        </div>
    </div>
  )
}
