import React, { useEffect, useState } from "react";
import {Link, NavLink} from "react-router-dom";
// import toLo 

const Top = ({product,setProduct,data}) => {

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

  const empty =[{
    id:'0'
  }]

  const type =event=>{
    setVal(event.target.value)
    
      setProduct(sproduct)
    
    
  }
 

  const [val,setVal] = useState(data)
 
  const sproduct = (product || []).filter(data => data.title.toLowerCase().includes(val)) 

  console.log(sproduct)

  
    if(val===''){
      setProduct(data)
  
    }
  
  

  
  
  return (
    <div class="top">
      <div className="nav_l">
        <div className="f p_hover">
          <Link to='/'>
        <svg viewBox="0 0 36 36" class=" x1lliihq x1k90msu x2h7rmj x1qfuztq" fill="url(#jsc_s_2)" height="40" width="40">
          <defs>
          <linearGradient
           x1="50%" x2="50%" y1="97.0782153%" y2="0%"
            id="jsc_s_2">
            <stop offset="0%" stop-color="#0062E0">
            </stop>
            <stop offset="100%" stop-color="#19AFFF"></stop>
            </linearGradient>
            </defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
            <path class="xe3v8dz" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
        </svg></Link>
        </div>
        <div className="ser">
          <input 
          // onClick={search}
           onChange={type}
            className="s_o_f p_hover"
            type="text"
            name="sof" id="bleh"
            value ={val} placeholder='Search on facebook'
          />
          <div className="searchdata">
            {sproduct.map((dat)=>{
              
              if(val){
                return(
                  <div id={dat.id} className="sdata">
              <Link to={'/'+dat.id} className="sd-img">
                <img src={dat.image} alt=""/>
              </Link>
              <Link to={'/'+dat.id} className="sd-n">
                <p>{dat.title.substring(0, 10)}</p>
              </Link>
              </div>
                );
                
              }
            })}
            
          </div>
        </div>
      </div>
      <div id="1" className="flex p-[1rem] gap-8">
        <NavLink to={'/'} id="1">
          <svg id="1"
            viewBox="0 0 28 28"
            class=""
            fill="currentColor"
            height="28"
            width="28"
          >
            <path  d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path>
          </svg>
        </NavLink>
        <NavLink to={'/Video'} id="2"><svg viewBox="0 0 28 28" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6" fill="currentColor" height="28" width="28"><path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"></path></svg></NavLink>
        <NavLink to={'/Group'} id="3"><svg viewBox="0 0 28 28" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6" fill="currentColor" height="28" width="28"><path d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path></svg></NavLink>
      </div>
      <div className="nav_r">
        <div className="p_hover"><svg fill="currentColor" viewBox="0 0 44 44" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo"><circle cx="7" cy="7" r="6"></circle><circle cx="22" cy="7" r="6"></circle><circle cx="37" cy="7" r="6"></circle><circle cx="7" cy="22" r="6"></circle><circle cx="22" cy="22" r="6"></circle><circle cx="37" cy="22" r="6"></circle><circle cx="7" cy="37" r="6"></circle><circle cx="22" cy="37" r="6"></circle><circle cx="37" cy="37" r="6"></circle></svg>
        </div>
        <div className="p_hover"><svg viewBox="0 0 28 28" alt="" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0" fill="currentColor" height="20" width="20"><path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path></svg>
        </div>
        <div className="p_hover"><svg viewBox="0 0 28 28" alt="" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0" fill="currentColor" height="20" width="20"><path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path></svg>
        </div>
        {user.map((user)=>(
          <Link to='/Auth'>
        <a href="">
          <img className="n_r_p" src={user.pf} alt={user.username}/>
        </a></Link>
        ))}
        
      </div>
    </div>
  );
};
export default Top;
