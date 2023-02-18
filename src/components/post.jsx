
import React from "react";
import Create from "./create"
import {Link} from "react-router-dom"
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import { useState } from "react";

const Post = (props) => {

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
        <div className="all_post_data"  >

           
                <div  className="all_p_owner">
                    <a href="">
                        <img id={props.gf.id} key={props.gf.id}  className="p_o_p"   
                        src={props.gf.pf}/>
                    </a>
                  
                    
                    <a href="{{ route('profiles.index') }}" className="p_o_n">
                         <span id={props.gf.id} key={props.gf.id}  className="span">{props.gf.username}</span>
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
                    <div id={props.gf.id} key={props.gf.id}  className="p_d_tex">
                    <p>{props.gf.description}</p>
                    </div>
        
                   
                    <img id={props.gf.id} key={props.gf.id}  className='p_d_p' src={props.gf.image}/>
        
                   
                 
                    
                </div>
               
                <div  className="post_react">
                    <div  className="p_r_count">
                        <div key={props.gf.id} id={props.gf.id}   className="p_l_c">
                            {like}{likec}
                        </div>
                        <div  className="p_c_c">
                            50M comments
                        </div>
                        <div  className="p_s_c">
                            500k Shares
                        </div>
                    </div>
                    <div  className="p_r_data">
                        
                    
                    <div type='submit' key={props.gf.id}  id={props.gf.id} onClick={()=> setState(state + 1)}  className="p_r_r">
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