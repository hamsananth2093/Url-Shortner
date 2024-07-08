import React from 'react'
import { UrlInp } from './UrlInp'
import { Card } from './Card'
import { Links } from './Links'
import brand_recog from '../assets/images/icon-brand-recognition.svg'
import fully_cus from '../assets/images/icon-fully-customizable.svg'
import detailed_records from "../assets/images/icon-detailed-records.svg"

export const Stats = () => {


  var card_list=[
    {
      id:1,
      title:"Brand Recognition",
      img:brand_recog,
      desc:" Boost your brand recognition with each click. generic links dont't mean a thing Branded links help instill confidence in your content."
    },
    {
      id:2,
      title:"Detailed Records",
      img:detailed_records,
      desc:"Gain Insight into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions"
    },
    {
      id:3,
      title:"full Customizable",
      img:fully_cus,
      desc:"improve brand awarness and content discoverability through customizable links.supercharging audience engangement."
    }
  ]

  return (
    <div className=' bg-gray-100 w-full flex justify-center flex-col items-center'>
        <UrlInp/>
        <div className="w-full flex flex-col justify-center items-center">
          <Links/>
        </div>
       <div className=" flex flex-col justify-center w-2/6">
       <h1 className='text-center text-5xl font-bolder my-4'>Advanced Statics</h1>
       <p className='text-center text-gray-400'>Track how your links are performing across the web with our advanced statics dashboard</p>
       </div>
       <div className='flex'>
       {card_list.map(card=><Card key={card.id} data={card} />)}
       </div>
       
    </div>
  )
}
