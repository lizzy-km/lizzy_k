import React from "react"
import Left from './left'
import Right from './right'
import Top from './top'
import Mid from './mid'
import User from './User.component'



const Index = () => {
  // const blackpink = [
  //   {
  //     id: 1,
  //     username: "Lalisa",
  //     description:
  //       "Detail",
  //     image: "https://i.pinimg.com/474x/86/ad/8c/86ad8ca08bef251166cf6e0ff9c5f913.jpg",
     
  //   },
  //   {
  //     id: 2,
  //     username: "Kim Jisoo",
  //     description:
  //       "Detail",
  //     image:
  //       "https://i.pinimg.com/474x/29/8a/2a/298a2a26ee41eb8d864c0bddd14218b2.jpg",
  //   },
  //   {
  //     id: 3,
  //     username: "Park Chaeyoung",
  //     description:
  //       "Detail",
  //     image:
  //       "https://i.pinimg.com/474x/69/8f/41/698f416c08feb77049fcedbfe9b6de70.jpg",
  //   },
  //   {
  //     id: 4,
  //     username: "Jennie Kim",
  //     description:
  //       "Detail",
  //     image:
  //       "https://i.pinimg.com/474x/86/81/20/86812015336442c38a2b6e086125c8de.jpg",
  //   },
   
  // ];

  return (
  <main>
    <div className="nav_hold">
    <Top/>
    </div>
    
    <section id="b2" className="body-2">
             
             
  <Left/>    <Mid/>   <Right/>
    </section>
    <div id="user">
          <div id="pf">
          <User/>
          </div>
        
        </div>
  </main>
  );
};

export default Index;
