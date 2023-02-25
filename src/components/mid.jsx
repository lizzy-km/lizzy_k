import React from "react";
import {Link} from "react-router-dom"
import  Post  from  './post'
import '../index.css';

const Mid = (props) => {
 
  function create (){
        // let mid =document.getElementsByTagName("data");
            // let create =document.getElementsByTagName('ce');
              // mid.style.display='none';
              // create.style.display="flex"
     
      };

      
    
    return(
       
        <div  id="nf"  className="newfeed">
    

    <div  className="mid_feed">
    <div  className="mf_highlight">
                <div  className="mf_highlight_items">
                    <div className="mf_hldata">
                    <div  className="mf_highlight_item">
                            <div className="hl_c">
                                {props.user.map((user)=>(
                                    <div className="hl_m">
                                    <img className=" hd_p br_1" src={user.pf} alt={user.username}/>
                                </div>
                                ))}
                                
                                <div className="cr_s">
                                    <p className="s_add p_hover">+</p>
                                    <p className="cs_t">Create story</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {props.girlfriends.map((gf)=>(
                        <div  className="mf_highlight_item" id={gf.id} key={gf.id} >
                        <div className="hl_c">
                       
                            <div className="hl_m ">
                           
                                <img className="hl_mp br_1 " id={gf.id} key={gf.id} src={gf.image} alt=""/>
                            </div>
                            <div className="hl_n">
                            <img className="h_l_p p_hover" id={gf.id} key={gf.id} src={gf.pf} alt=""/>
                                <p id={gf.id} key={gf.id} className="hln_t">{gf.username}</p>
                            </div>
                            
                            
                            
                            
                
                        </div>
                    </div>
                    ))}
                    
                   

                </div>
               
            </div>

    <div  className=" mf_up">
            <div  className="pe_h">
                <div  className=" mf_pe">
                {props.user.map((user)=>(
                                 <Link to='/User'>
                                 <a href="">
                                     <img   className="pe_m_p " 
                               
                                 src={user.pf}
                                  alt=""/> 
                                 </a></Link>   
                                    ))}
                  
                 
                  <div  id="create" className="pe_txt" onClick={create()} >
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
       
    <div  className="all_post">
            {props.girlfriends.map((gf)=>(
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