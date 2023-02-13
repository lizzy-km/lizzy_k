import React from "react";

const Right = () => {
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
    return(

<div  class="right_feed">
        <div className="ct_h">
            <div className="ct_t">
                <p>Contacts</p>
                <p>. . .</p>
            </div>
            {girlfriends.map((gf)=>(
                <div className="rf_usr">
                <div className="rf_usr_p ">
                    <img className="pf_hover" src={gf.image} alt=""/>
                </div>
                <div className="rf_usr_n">
                    <p>{gf.username}</p>
                </div>
            </div>
            ))}
            
        </div>
</div>

  
);
};
export default Right;