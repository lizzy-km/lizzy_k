import React from "react"
import Left from './components/left'
import Right from './components/right'
import Top from './components/top'
import Mid from './components/mid'
import User from './components/User'
import { useState } from "react"
import { useEffect } from "react"
import { Component } from "react"
import { Link } from "react-router-dom"



const index = ({product}) => {
 
  const user =[
    { 
    
     username: 'Kaung Myat Soe',
      id: '100000456348756',
     email: 'kaungmyatsoe2k21@gmail.com',
     pass: 'Lizzy-02',
     pf: 'https://i.pinimg.com/originals/b2/24/98/b2249825f1f726eb175a0d08c0396ece.jpg',
     cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
     image:[
       'https://i.pinimg.com/originals/d3/7f/9e/d37f9e47dd65894cebab9e091a9b842d.jpg'
       
     ],
     
     description: 'blah blah'
   }
 
   ]
   console.log(product)


   

  
    
      return (
        <main>
         

         <section id="b2" className="body-2">
    <Left user={user} product={product}  />
    <Mid product={product} /> 
    <Right product={product} />
    </section>
    <div id="user">
                <div id="pf">
                <User user={user} />
                </div>
              
              </div>
          
        </main>
        );
        
  
}

export default index;
