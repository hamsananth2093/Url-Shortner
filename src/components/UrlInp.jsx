import React, { useState } from 'react'
import "../styles/UrlInp.css"

export const UrlInp = () => {

  var [inp_link,set_inp_link]=useState("https://www.google.co.in/");

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '9634fce35amsh368f03510a48998p18acf4jsn636e34465633',
      'x-rapidapi-host': 'url-shortner-api.p.rapidapi.com'
    }
  };

  const shorten = async ()=>{
    try{
      const url = `https://url-shortner-api.p.rapidapi.com/?url=${inp_link}`;
      console.log(inp_link)
      const response = await fetch(url, options);
	    const result = await response.text();
	    console.log(result);
    }
    catch(err){
      console.log(err)
    }

  }

  return (
    <div className='w-full flex  justify-center -translate-y-1/2 '>
    <form className='flex flex-col md:flex-row lg:py-4 lg:px-2 py-4  contain bg-DarkViolet p-1  rounded w-4/5 justify-center items-center'>
        <input type="text" name="" className='w-4/5 md:p-2  md:text-lg p-1 mx-2 my-2 text-lg  rounded' required  placeholder='Shorten a link here!' onChange={(e)=>{set_inp_link(e.target.value)}} id="" />
        <a type='submit' className='bg-Cyan  rounded font-bold text-white  text-center text-sm px-3 py-3 text-lg md:text-md cursor:pointer ' onClick={shorten} >Shorten it!</a>
    </form>
    </div>
  )
}
