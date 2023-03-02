
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Post = (girlfriends) => {

    
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
    const user = event => {
        const cid=   event.currentTarget.id;
        
      
           if(cid==girlfriends.gf.id){
             girlfriends.push('/user')
           }
        }
      
    
        return (
            <div className="all_post_data"  >
    
               
                    <div  className="all_p_owner">
                        <Link to='/user' id={girlfriends.gf.id} onClick={user}  >
                            <img id={girlfriends.gf.id} key={girlfriends.gf.id}  className="p_o_p"   
                            src={girlfriends.gf.pf}/>
                        </Link>
                      
                        
                        <a href="{{ route('profiles.index') }}" className="p_o_n">
                             <span id={girlfriends.gf.id} key={girlfriends.gf.id}  className="span">{girlfriends.gf.username}</span>
                        </a>
                        <div  className="p_opt">
                            <strong> . . .</strong>
                           
                            <form action="" className="post_action" method="POST">
                                <a className="ed_post" href="">Edit</a>
                                
                                <button type="submit" className="de_post">Delete</button>
                            </form>
                        </div>
                        
                    </div>
            
                    <div  className="post_data">
                        <div id={girlfriends.gf.id} key={girlfriends.gf.id}  className="p_d_tex">
                        <p>{girlfriends.gf.description}</p>
                        </div>
            
                       
                        <img id={girlfriends.gf.id} key={girlfriends.gf.id}  className='p_d_p' src={girlfriends.gf.image}/>
            
                       
                     
                        
                    </div>
                   
                    <div  className="post_react">
                        <div  className="p_r_count">
                            <div key={girlfriends.gf.id} id={girlfriends.gf.id}   className="p_l_c">
                                {like}{likec}
                            </div>
                            <div  className="p_c_c">
                                
                            </div>
                            <div  className="p_s_c">
                                
                            </div>
                        </div>
                        <div  className="p_r_data">
                            
                        
                        <div type='submit' key={girlfriends.gf.id}  id={girlfriends.gf.id} onClick={()=> setState(state + 1)}  className="p_r_r">
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