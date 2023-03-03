import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    const back =()=>{
        history.go(-1)
    }
  return (
    <section className='err'>
        <h1 className='error'>Error! Page not found.</h1>
        <Link to='/'><button onClick={back} type="">Return</button></Link>
    </section>
    
  )
}

export default Error