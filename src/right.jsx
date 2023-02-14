import React from "react";
import './index.css'

const Right = () => {
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
    return(

<div  class="right_feed">
      <div className="r_to">
        <div>
          No data aviliable!
        </div>
      </div>
        <div className="ct_h">
         
            <div className="ct_t">
                <p>Contacts</p>
                <p>. . .</p>
            </div>
            <div className="ct_hc">
          {girlfriends.map((gf)=>(
                <div className="rf_usr">
                <div className="rf_usr_p ">
                    <img className="pf_hover" src={gf.pf} alt=""/>
                </div>
                <div className="rf_usr_n">
                    <p>{gf.username}</p>
                </div>
            </div>
            ))}
          </div>
           
            
        </div>
</div>

  
);
};
export default Right;