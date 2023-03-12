import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from '../Context/StateContext';
import VideoData from './VideoData';

const video = () => {

 

 const {product} = useContext(StateContext);

  return (
    <div className=' mt-[4rem] max-h-[35rem] overflow-scroll gsp-[1rem] items-center justify-center flex flex-wrap w-screen p-[2rem] '>
      {product.map(data=>{
        return(
          <VideoData data={data} key={data.id}  />
        )
      })}
      
       </div>
  )
}

export default video
