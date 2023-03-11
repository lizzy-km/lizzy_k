import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import  Post  from  './post'
import '../index.css';
// import { NextWeek } from "@mui/icons-material";

const Mid = ({product}) => {

    
    console.log(product)
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


    
//     const[product,setProduct]=useState([]);

// console.log(product)

//   useEffect(()=>{
//     fetchData()
//   },[])

//   const fetchData = async () =>{
//     const api = await fetch(`https://fakestoreapi.com/products/`)
//     const data =await api.json();
//     setProduct(data);
//     // console.log(data)



//   }

    
    return(
       
        <div  id="nf"  className="newfeed">
    

    <div  className="mid_feed">
    <div  className="mf_highlight">
                <div  className="mf_highlight_items">
                    <div className="mf_hldata">
                    <div  className="mf_highlight_item">
                            <div className="hl_c">
                                {user.map((user)=>(
                                    <div className="hl_m">
                                    <img className=" hd_p br_1" src={user.image} alt={user.username}/>
                                </div>
                                ))}
                                
                                <div className="cr_s">
                                    <p className="s_add p_hover">+</p>
                                    <p className="cs_t">Create story</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {product.map((gf)=>(
                        <div  className="mf_highlight_item" id={gf.id} key={gf.id} >
                        <div className="hl_c">
                       
                            <div className="hl_m ">
                           <Link to='/Story'><img className="hl_mp br_1 " id={gf.id} key={gf.id} src={gf.image} alt=""/></Link>
                                
                            </div>
                            <div className="hl_n">
                                <Link to={'/'+gf.url}><img className="h_l_p p_hover" id={gf.id} key={gf.id} src={gf.image} alt=""/></Link>
                            
                                <p id={gf.id} key={gf.id} className="hln_t">{gf.title.substring(0,10)}</p>
                            </div>
                            
                            
                            
                            
                
                        </div>
                    </div>
                    ))}
                    
                   

                </div>
               
            </div>

    <div  className=" mf_up">
            <div  className="pe_h">
                <div  className=" mf_pe">
                {user?.map((user)=>(
                                 <Link to='/user'>
                                 <a href="">
                                     <img   className="pe_m_p " 
                               
                                 src={user.image}
                                  alt=""/> 
                                 </a></Link>   
                                    ))}
                  
                 
                  <div  id="create" className="pe_txt"  >
                        <span id="create">What's on your mind, Kaung?</span>
                    </div>
                  
                    
                </div>
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
    {/* <div  className="ppl_ymk">
               <p  className="ppl_t"> People you may know</p>
            
        <div  className="mc_hold">
        <div  className="mc">
                <div  className="card2">
                    <div  className="blob"></div>
                <div  className="img">
                    <img  className="pl_u_p" src="" alt=""/> 
                </div>
                <div  className="info">
                    <p  className="i_un"> </p>
                    
                </div>
                <div  className="m_bu">
                <a  className="add_fri" href="#">Add friend</a>
                
                </div>
                
                </div>
                </div>
              
       
       
           

                

                </div>
        
        </div> */}
       <div>
        {/* <div className="filter-card">
        <ul className="filter">
            <div className="ft-h">
            <h6> Filter</h6>
            <p>{filter}</p>
            </div>
           
           <div className="ft-bt">
           <button id="us" onClick={()=>{
            setState(data.girlfriends)
            setFilter('All') 
           }
            }>All posts</button>
                <button id="us" onClick={()=>
                {
                    setState(data.userpost);
                     setFilter('User') 
                }
                    }>User posts</button>
                <button id="us" onClick={()=>
                   {
                     setState(data.blackpink);
                     setFilter('Blackpink') 
                    }
                     }>Blackpink posts</button>
                <button id="us" onClick={()=>
                   {
                     setState(data.newjeans);
                     setFilter('Newjeans') 
                     } }>Newjeans posts</button>
                <button id="us" onClick={()=>
                   { 
                    setState(data.aespa);
                    setFilter('Aespa') 
                }
                     }>Aespa posts</button>
                
           </div>
                

                </ul>  
            </div> */}
        </div>
    <div  className="all_post">
       
            {product.map((gf)=>(
                <Post gf={gf} id={gf.id} key={gf.id}/>
            ))}
            
            <div className="height">
                
                </div>
           
        
       

    </div>

 
    </div>

   
</div>

  
);
  
    

      
     
}

export default Mid;