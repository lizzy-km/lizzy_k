
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Post = ({gf}) => {

    // const User = gf.url;
    // console.log(gf.id)
    const [state ,setState] =useState(0);
      let like;
      let likec;
    if (state>0) {
      like =<p > {state}</p>;
    }
    if (state>1) {
      likec =<p >Likes</p>;
    }
    if(state==0){
      likec =<p ></p>;
    }
    if(state==1){
      likec =<p >Like</p>;
    }
   
      
    
        return (
            <div className="all_post_data tracking-wider  "  >
    
               
                    <div  className="all_p_owner">
                        <Link to={`/User/${gf.id}`} id={gf.id}   >
                            <img id={gf.id} key={gf.id}  className="p_o_p"   
                            src={gf.image}/>
                        </Link>
                      
                        
                        <Link  to={'/'+gf.id} className="p_o_n">
                             <span id={gf.id} key={gf.id}  className="span">{gf.title}</span>
                        </Link>
                        <div  className="p_opt">
                            <strong> . . .</strong>
                           
                            <form action="" className="post_action" method="POST">
                                <a className="ed_post" href="">Edit</a>
                                
                                <button type="submit" className="de_post">Delete</button>
                            </form>
                        </div>
                        
                    </div>
            
                    <div  className="post_data">
                        <div id={gf.id} key={gf.id}  className="p_d_tex">
                        <p>{gf.description}</p>
                        </div>
            
                       
                        <img id={gf.id} key={gf.id}  className='p_d_p' src={gf.image}/>
            
                       
                     
                        
                    </div>
                   
                    <div  className="post_react">
                        <div  className="p_r_count">
                            <div key={gf.id} id={gf.id}   className="p_l_c">
                                {like}{likec}
                            </div>
                            <div  className="p_c_c">
                                
                            </div>
                            <div  className="p_s_c">
                                
                            </div>
                        </div>
                        <div  className="p_r_data">
                            
                        
                        <div type='submit' key={gf.id}  id={gf.id} onClick={()=> setState(state + 1)}  className="p_r_r">
                            Like
                        </div>
                        <div  className="p_r_c">
                            comment
                        </div>
                        <div  className="p_r_s">
                            Share
                        </div>
                        </div>
                        
                    </div>
                    
                </div>
        )
    

    
  }


export default Post