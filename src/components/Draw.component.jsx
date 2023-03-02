import cover from "../cover.png"
import Post from "./post";
import { Link } from "react-router-dom";
import '../App.css';
function Draw(){
    const girlfriends = [
        {
            id: 1,
            username: "Lalisa Manoban",
            description:
              "Detail",
              pf: "https://i.pinimg.com/originals/08/d5/be/08d5be5926db92c51491180a211b428d.jpg",
            image: "https://i.pinimg.com/474x/86/ad/8c/86ad8ca08bef251166cf6e0ff9c5f913.jpg",
           
          },
          {
            id: 2,
            username: "Kim Jisoo",
            description:
              "Detail",
              pf:"https://i.pinimg.com/474x/88/d1/be/88d1beb2db936b269fc0d06407ceee23.jpg",
            image:
              "https://i.pinimg.com/474x/29/8a/2a/298a2a26ee41eb8d864c0bddd14218b2.jpg",
          },
          {
            id: 3,
            username: "Park Chaeyoung",
            description:
              "Detail",
              pf:"https://i.pinimg.com/474x/b5/ed/3e/b5ed3e5ed8fbfa2dceb35d1ee80c787f.jpg",
            image:
              "https://i.pinimg.com/474x/69/8f/41/698f416c08feb77049fcedbfe9b6de70.jpg",
          },
          {
            id: 4,
            username: "Jennie Kim",
            description:
              "Detail",
              pf:"https://i.pinimg.com/474x/67/8c/60/678c60e05f1a60ad69507a248b52b49f.jpg",
            image:
              "https://i.pinimg.com/474x/86/81/20/86812015336442c38a2b6e086125c8de.jpg",
          },{
            id: 5,
            username: "Hanni",
            description:
              "Detail",
              pf:"https://i.pinimg.com/474x/50/a8/82/50a8828026afd8c169d51f428d65199d.jpg",
            image: "https://i.pinimg.com/originals/d5/b6/83/d5b683af4288c20e1fa86488eebd5bc3.jpg",
           
          },
          {
            id: 6,
            username: "Minji",
            description:
              "Detail",
              pf:"https://i.pinimg.com/474x/70/a7/f1/70a7f1512db2dc03b0eff894b9070421.jpg",
            image:
              "https://i.pinimg.com/originals/00/dc/b9/00dcb9ffa9d338683cfbbab57a249527.jpg",
          },
          {
            id: 7,
            username: "Daniella",
            description:
              "Detail",
              pf:"https://i.pinimg.com/474x/84/43/09/844309b3b56214e39150a67fc07adb6a.jpg",
            image:
              "https://i.pinimg.com/originals/f7/9f/7c/f79f7c41029cadbd0d990c9d97575239.jpg",
          },
          {
            id: 8,
            username: "Haerin",
            description:
              "Detail",
              pf:"https://i.pinimg.com/474x/4f/11/0d/4f110ddb84ef173ed5d7138b4fcd73ae.jpg",
            image:
              "https://i.pinimg.com/originals/4a/dd/0b/4add0bb47728e72da5781c4cb556c14c.jpg",
          },{
            id: 9,
            username: "Hyein",
            description:
              "Detail",
              pf:"https://i.pinimg.com/474x/2e/26/80/2e2680fcea693ce55a86cd9d79052f81.jpg",
            image: "https://i.pinimg.com/564x/2a/84/6e/2a846e624d3bfc2d0bd03f34a9826046.jpg",
           
          },
          {
            id: 10,
            username: "Winter",
            description:
              "Detail",
              pf:"https://i.pinimg.com/474x/80/d3/dd/80d3ddd61d61ae37d6d74c5957404c84.jpg",
            image:
              "https://i.pinimg.com/originals/50/40/e2/5040e2d5e311959e8008a875c13f21ee.jpg",
          },
          {
            id: 11,
            username: "Karina",
            description:
              "Detail",
              pf:"https://i.pinimg.com/736x/08/1f/0f/081f0f630381dd4d25ceba0200636d7b.jpg",
            image:
              "https://i.pinimg.com/originals/9d/5d/f8/9d5df8cc098e6a083b0721812a3ce3f3.jpg",
          },
          {
            id: 12,
            username: "Ning Ning",
            description:
              "Detail",
              pf:"https://i.pinimg.com/474x/bd/f2/eb/bdf2eb5a96a8c29683972ef2116506fc.jpg",
            image:
              "https://i.pinimg.com/originals/89/dd/1b/89dd1bc8ff27398d8cea085fece88360.jpg",
          },
       
       
      ];
      let userinputname='Kaung Myat Soe'
      let userinputemail='kaungmyatsoe2k21@gmail.com'
      let userinputpass='Lizzy-02'
      let userinputdetail='blah blah'
      let userinputpf= 'https://i.pinimg.com/originals/b2/24/98/b2249825f1f726eb175a0d08c0396ece.jpg'
      let userinputcv='https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg'
      let userinputimg='https://i.pinimg.com/originals/d3/7f/9e/d37f9e47dd65894cebab9e091a9b842d.jpg'
      const user =[
       { 
       
        username: userinputname,
        id: '100000456348756',
        email: userinputemail,
        pass: userinputpass,
        pf: userinputpf,
        cv: userinputcv,
        image:userinputimg,
        description: userinputdetail
      }
    
      ]
    
    // };
   
  

return (

    <>
    <div id="P1"  className="P_1">

        {girlfriends.map((gf)=>(
            <div id="C3" className="C_1 card_1" key={gf.id} >
            <div id="2" draggable='true'
                className="C_3 card_1">
                  {user.map((user)=>(
 <img  className="c-img" src={user.cv} alt=""></img>
                  ))}
               
                <img id="pi" className="img p_hover " src={gf.pf} alt="Jisoo"></img>
                <p id="name" className=" u_n">
                       {gf.username}
                    </p>
                <div className="p-d">
                   
                    <div className="cc bt b-d">Delete</div>
                    <div className="cc bt b-c">
                    Add friend
                    </div>
                    
                    
                </div>
                <div className="detail">
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

                        {girlfriends.map((gf)=>(
                        <div  className="mf_highlight_item">
                            <div className="hl_c">
                           
                                <div className="hl_m ">
                               
                                    <img className="hl_mp br_1 " src={gf.image} alt=""/>
                                </div>
                               
                                
                                
                                
                                

                            </div>
                        </div>
                    ))}
                            
                           

                        </div>
                        <div className="u_edit_highlight">
                            <b className="u_eh"> Edit highlight</b>
                        </div>
                    </div>
                </div>
                <div className="u_photos">
                    <b className="u_ph_n">Photos</b> <a className="u_sa_p">See all photos</a>
                    <div className="u_photo_album">
                        {girlfriends.map((gf)=>(
                            <div className="u_photo_item u_pi_1">
                                <img src={gf.image} alt=""/>
                            </div>
                        ))}
                        
                       
                    </div>
                </div>
                <div className="u_friends">
                    <b className="u_fr_n">Friends</b><a className="u_sa_p">See all friends</a>
                    <div className="u_friend_list ">

                    {girlfriends.map((gf)=>(
                            <div className="u_firend_list u_pi_1">
                                <img src={gf.image} alt=""/>
                                <p>{gf.username} </p>
                            </div>
                        ))} 
                        
                       

                    </div>
                </div>
            </div>
                <div className="posts">
                    <div  className=" mf_up">
            <div  className="pe_h">
                <div  className=" mf_pe">
                    <a href="">
                        <img   className="pe_m_p " 
                  
                    src="https://i.pinimg.com/originals/b2/8d/49/b28d498426618a770616b58b087fa07b.jpg"
                     alt=""/> 
                    </a>
                 
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

       
                <div  className="all_post">
            
                <Post gf={gf} key={gf.id} id={gf.id} />
            
           
        
       

    </div>
                  </div>
                   
    
                        
                    </div>
            </div>
    </div>
        ))}
     


    </div></>
    
     
    

);
}
export default Draw;