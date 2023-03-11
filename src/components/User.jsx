import Top from "./top";
import '../App.css'
import Post from "./post";
import {Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";

const User = ({product})=>{
  const {id} = useParams();
    
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
   
       const[Iproduct,setIproduct]=useState([]);

       console.log(Iproduct)
       
         useEffect(()=>{
           fetchData()
         },[])
       
         const fetchData = async () =>{
           const api = await fetch(`https://fakestoreapi.com/products/${id}`)
           const data =await api.json();
           setIproduct(data);
           // console.log(data)
       
       
       
         }
      
      
return (

    <div>
       
    <div className="nav_hold">
    <Top />
    </div>
    
    <div id="profile" className="P_f">

    <div className="pf_hold">
        
    

        <div id="1" draggable='true' className="pf ">
          {/* {Iproduct.map((user)=>( */}
            <div className="card_1 C_2">
        
        
            <img className="c-img" src={user.cv} alt=""></img>
            <img id="pi" className="img p_hover " src={Iproduct.image} alt={Iproduct.title}></img>
            <p id="name" className=" u_n">
                {Iproduct.title}
            </p>
            <div className="p-d">
        
                <div className="cc bt b-d">Edit profile</div>
                <div className="cc bt b-c">
                    Add to story
                </div>
        
        
            </div>
        
        </div>
          {/* ))} */}
            
        </div>
        <div className="data">
            <div className="l_b">
        
        
                <div className="u_intro">
        
        
                    <div className="u_bio">
                        <b className="u_int">Intro</b>
                        <div className="u_edit_bio">
                            <b className="u_eb"> Edit bio</b>
                        </div>
                    </div>
        
                    <div className="u_about">
        
                        <div>
                            Relationship <span> Single.</span>
        
                        </div>
                        <div>
                            Followed by <Link type='submit' id="flop" to='/'>4 people</Link>
                        </div>
                        <div className="u_edit_detail">
                            <b className="u_ed"> Edit detail</b>
                        </div>
                    </div><br></br>
                    <div className="u_highlight">
                        <div className="u_highlight_items">
        
                        {/* {Iproduct.map((gf)=>( */}
                        <div  className="mf_highlight_item">
                            <div className="hl_c">
                           
                                <div className="hl_m ">
                               
                                    <img className="hl_mp br_1 " src={Iproduct.image} alt=""/>
                                </div>
                                {/* <div className="hl_n">
                                <img className="h_l_p p_hover" src={gf.pf} alt=""/>
                                    <p className="hln_t">{gf.username}</p>
                                </div> */}
                                
                                
                                
                                
        
                            </div>
                        </div>
                    {/* ))} */}
                            
                           
        
                        </div>
                        <div className="u_edit_highlight">
                            <b className="u_eh"> Edit highlight</b>
                        </div>
                    </div>
                </div>
                <div className="u_photos">
                    <b className="u_ph_n">Photos</b> <a className="u_sa_p">See all photos</a>
                    <div className="u_photo_album">
                        {product?.map((gf)=>(
                            <div className="u_photo_item u_pi_1">
                                <img src={gf.image} alt=""/>
                            </div>
                        ))}
                        
                       
                    </div>
                </div>
                <div className="u_friends">
                    <b className="u_fr_n">Friends</b><a className="u_sa_p">See all friends</a>
                    <div className="u_friend_list ">
        
                    {product?.map((gf)=>(
                       
                            <Link to={`/User/${gf.id}`} onClick="window.location.reload()" className="u_firend_list u_pi_1">
                                <img src={gf.image} alt=""/>
                                <p>{gf.username} </p>
                            </Link>
                        ))} 
                        {/* <div className="u_firend_list ">
        
                        </div> */}
                       
        
                    </div>
                </div>
            </div>
            <div className="u_posts">
            <div  className=" mf_up">
            <div  className="pe_h">
              {/* {Iproduct.map((user)=>( */}
                <div  className=" mf_pe">
                    <a href="">
                        <img   className="pe_m_p " 
                  
                    src={user.image}
                     alt={Iproduct.title}/> 
                    </a>
                 
                  <div  id="create" className="pe_txt"  >
                        <span id="create">What's on your mind, {Iproduct.title}?</span>
                    </div>
                  
                    
                </div>
              {/* ))} */}
                
                <div  className="mf_md">
                    <div  className="mf_live md_li">
                        Live video
                    </div>
                    <div  className="mf_phvd md_li">
                        Photo/Video
                    </div>
                    <div  className="mf_fel md_li">
                        Feeling/Activity
                    </div>
                </div>
            </div>
        
        </div>
        {/* <div className="filter-card">
        <ul className="filter">
            <div className="ft-h">
            <h6> Filter</h6>
            <p>{filter}</p>
            </div>
           
           <div className="ft-bt">
           <button id="us" onClick={()=>{
            setPost(girlfriends)
            setFilter('All') 
           }
            }>All posts</button>
                <button id="us" onClick={()=>
                {
                    setPost(profile);
                     setFilter('User') 
                }
                    }>User posts</button>
                <button id="us" onClick={()=>
                   {
                     setPost(blackpink);
                     setFilter('Blackpink') 
                    }
                     }>Blackpink posts</button>
                <button id="us" onClick={()=>
                   {
                     setPost(newjeans);
                     setFilter('Newjeans') 
                     } }>Newjeans posts</button>
                <button id="us" onClick={()=>
                   { 
                    setPost(aespa);
                    setFilter('Aespa') 
                }
                     }>Aespa posts</button>
                
           </div>
                

                </ul>  
            </div> */}
            <div  className="all_post">
            {/* {Iproduct.map((gf)=>( */}
                <Post gf={Iproduct} id={Iproduct.id} key={Iproduct.id} />
            {/* ))} */}
        
            <div className="height">
                
            </div>
           
        
        
        
        </div>
            </div>
            
        
        
        </div>
        
        </div>
    </div>
    
    </div>

);
};
export default User;