import React, { useState } from 'react'

const VideoData = ({data}) => {

    // const {video} = useContext(StateContext);
  return (
    <div className=' tracking-wider m-[1rem] bg-[#222222] rounded-[8px] flex flex-col w-[15rem] h-[20rem] ' key={data.id} id={data.id} >

        <div className=' text-lg font-medium p-[.5rem]'>
       <h1> {data.title?.substring(0,20)} </h1>
        </div>
        <div>
            <img className=' h-[15rem] w-[15rem]' src={data.image} alt=""/>
        </div>
        <div className='p-[.5rem]'>
            <span> ${data.price}</span>
        </div>
      
    </div>
  )
}

export default VideoData
