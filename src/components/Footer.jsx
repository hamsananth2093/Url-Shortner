import React from 'react'
import logo from '../assets/images/logo.svg'
import { List } from './List'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pintrest from '../assets/images/icon-pinterest.svg'
import instagram from '../assets/images/icon-instagram.svg'
export const Footer = () => {


    var service_list=[{
        id:1,
        title:"Features",
        services:["Link shortening","Branded Links","Analytics"]
    },
    {
        id:2,
        title:"Resources",
        services:["Blog","Developers","support"]
    },
    {
        id:3,
        title:"company",
        services:['about',"other Team","Carrers","Contact"]
    }
]



  return (
    <div className='flex w-full md:flex-row md:items-baseline lg:justify-evenly flex-col justify-center bg-DarkViolet items-center text-white'>
        <h3 className='text-4xl font-bolder mt-10'>Shortly</h3>
        {service_list.map(service=> <List key={service.id} title={service.title} services={service.services} />)}
        <div className="flex my-3">
        <a className='cursor-pointer hover:text-Cyan'><img src={facebook} className='mx-2' alt="social media logos hover:text-Cyan" /></a>
        <a className='cursor-pointer hover:text-Cyan'><img src={twitter} className='mx-2' alt="social media logos hover:text-Cyan" />   </a>
        <a className='cursor-pointer hover:text-Cyan'><img src={pintrest} className='mx-2' alt="social media logos hover:text-Cyan" /></a>
        <a className='cursor-pointer hover:text-Cyan'><img src={instagram} className='mx-2' alt="social media logos hover:text-Cyan" /> </a> 
        </div>
    </div>
  )
}
