import React, { useState } from 'react'

const VideoData = ({title,image,id}) => {

    const[value,setValue] = useState('')

  return (
    <div className=' flex flex-col  ' key={id} id={id} >

        <div>
        <img className=' w-[10rem] h-[10rem]  ' src={image} alt=""/>
        </div>
        <div>
            <p> {title} </p>
        </div>
      
    </div>
  )
}

export default VideoData
