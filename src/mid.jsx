import React from "react";
import Create from "./create"
import {Link} from "react-router-dom"
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';

const Mid = () => {
  const girlfriends = [
    {
        id: 1,
        username: "Lalisa Manoban",
        description:
          "Detail",
        image: "https://i.pinimg.com/474x/86/ad/8c/86ad8ca08bef251166cf6e0ff9c5f913.jpg",
       
      },
      {
        id: 2,
        username: "Kim Jisoo",
        description:
          "Detail",
        image:
          "https://i.pinimg.com/474x/29/8a/2a/298a2a26ee41eb8d864c0bddd14218b2.jpg",
      },
      {
        id: 3,
        username: "Park Chaeyoung",
        description:
          "Detail",
        image:
          "https://i.pinimg.com/474x/69/8f/41/698f416c08feb77049fcedbfe9b6de70.jpg",
      },
      {
        id: 4,
        username: "Jennie Kim",
        description:
          "Detail",
        image:
          "https://i.pinimg.com/474x/86/81/20/86812015336442c38a2b6e086125c8de.jpg",
      },{
        id: 5,
        username: "Hanni",
        description:
          "Detail",
        image: "https://i.pinimg.com/originals/d5/b6/83/d5b683af4288c20e1fa86488eebd5bc3.jpg",
       
      },
      {
        id: 6,
        username: "Minji",
        description:
          "Detail",
        image:
          "https://i.pinimg.com/originals/00/dc/b9/00dcb9ffa9d338683cfbbab57a249527.jpg",
      },
      {
        id: 7,
        username: "Daniella",
        description:
          "Detail",
        image:
          "https://i.pinimg.com/originals/f7/9f/7c/f79f7c41029cadbd0d990c9d97575239.jpg",
      },
      {
        id: 8,
        username: "Haerin",
        description:
          "Detail",
        image:
          "https://i.pinimg.com/originals/4a/dd/0b/4add0bb47728e72da5781c4cb556c14c.jpg",
      },{
        id: 9,
        username: "Hyein",
        description:
          "Detail",
        image: "https://i.pinimg.com/564x/2a/84/6e/2a846e624d3bfc2d0bd03f34a9826046.jpg",
       
      },
      {
        id: 10,
        username: "Winter",
        description:
          "Detail",
        image:
          "https://i.pinimg.com/originals/50/40/e2/5040e2d5e311959e8008a875c13f21ee.jpg",
      },
      {
        id: 11,
        username: "Karina",
        description:
          "Detail",
        image:
          "https://i.pinimg.com/originals/9d/5d/f8/9d5df8cc098e6a083b0721812a3ce3f3.jpg",
      },
      {
        id: 12,
        username: "Ning Ning",
        description:
          "Detail",
        image:
          "https://i.pinimg.com/originals/89/dd/1b/89dd1bc8ff27398d8cea085fece88360.jpg",
      },
   
   
  ];
  

    
    
    // document.querySelectorAll('section').forEach(occurence =>{
    //   occurence.addEventListener('click', (e)=>{
    //     let id = e.target.id;
    //     let tag = e.target.parentNode;
    //     // let section =document.getElementsById('nf');
    //     if(id !='.'){
    //       let mid =document.getElementsByClassName('newfeed');
    //       let create =document.getElementsByClassName('cr_form');
    //       mid.style.height='1px'
    //       create.style.display="flex"
    //     }
        
    //   })
    // })
    
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
                                
                                <div className="hl_m">
                                    <img className=" hd_p br_1" src="https://i.pinimg.com/originals/b2/8d/49/b28d498426618a770616b58b087fa07b.jpg"alt=""/>
                                </div>
                                <div className="cr_s">
                                    <p className="s_add">+</p>
                                    <p className="cs_t">Create story</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {girlfriends.map((gf)=>(
                        <div  className="mf_highlight_item">
                            <div className="hl_c">
                           
                                <div className="hl_m ">
                               
                                    <img className="hl_mp br_1 " src={gf.image} alt=""/>
                                </div>
                                <div className="hl_n">
                                <img className="h_l_p pf_hover" src={gf.image} alt=""/>
                                    <p className="hln_t">{gf.username}</p>
                                </div>
                                
                                
                                
                                

                            </div>
                        </div>
                    ))}
                    
                   

                </div>
               
            </div>

    <div  className=" mf_up">
            <div  className="pe_h">
                <div  className=" mf_pe">
                    <a href="">
                        <img   className="pe_m_p " 
                  
                    src="/src/assets/react.svg"
                     alt=""/> 
                    </a>
                 
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
    <div  className="ppl_ymk">
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
        
        </div>
       
    <div  className="all_post">
            {girlfriends.map((gf)=>(
                <div className="all_post_data">

           
                <div  className="all_p_owner">
                    <a href="">
                        <img  className="p_o_p"   
                        src={gf.image}/>
                    </a>
                  
                    
                    <a href="{{ route('profiles.index') }}" className="p_o_n">
                         <span  className="span">{gf.username}</span>
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
                    <div  className="p_d_tex">
                    <p>{gf.description}</p>
                    </div>
    
                   
                    <img  className='p_d_p' src={gf.image}/>
    
                   
                 
                    
                </div>
               
                <div  className="post_react">
                    <div  className="p_r_count">
                        <div  className="p_l_c">
                            1.2M Likes
                        </div>
                        <div  className="p_c_c">
                            50M comments
                        </div>
                        <div  className="p_s_c">
                            500k Shares
                        </div>
                    </div>
                    <div  className="p_r_data">
                        
                    
                    <div  className="p_r_r">
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
            ))}
           
        
       

    </div>

 
    </div>

   
</div>

  
);
  
    

      
     
}

export default Mid;