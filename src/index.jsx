import React from "react"
import Left from './components/left'
import Right from './components/right'
import Top from './components/top'
import Mid from './components/mid'
import User from './components/User'
import { useState } from "react"
import { useEffect } from "react"
import { Component } from "react"
import { Link } from "react-router-dom"



class Index extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
  
        girlfriends :[
          {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf1',url:'Lalisa',
              username: "Lalisa Manoban",
              groupname:'Blackpink',
              description:
                "Detail",
                pf: "https://i.pinimg.com/originals/08/d5/be/08d5be5926db92c51491180a211b428d.jpg",
              image: "https://i.pinimg.com/474x/86/ad/8c/86ad8ca08bef251166cf6e0ff9c5f913.jpg",
             
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf2',url:'Jisoo',
              username: "Kim Jisoo",
              groupname:'Blackpink',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/88/d1/be/88d1beb2db936b269fc0d06407ceee23.jpg",
              image:
                "https://i.pinimg.com/474x/29/8a/2a/298a2a26ee41eb8d864c0bddd14218b2.jpg",
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf3',url:'Chaeyoung',
              username: "Park Chaeyoung",
              groupname:'Blackpink',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/b5/ed/3e/b5ed3e5ed8fbfa2dceb35d1ee80c787f.jpg",
              image:
                "https://i.pinimg.com/474x/69/8f/41/698f416c08feb77049fcedbfe9b6de70.jpg",
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf4',url:'Jennie',
              username: "Jennie Kim",
              groupname:'Blackpink',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/67/8c/60/678c60e05f1a60ad69507a248b52b49f.jpg",
              image:
                "https://i.pinimg.com/474x/86/81/20/86812015336442c38a2b6e086125c8de.jpg",
            },{
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf5',url:'Hanni',
              username: "Hanni",
              groupname:'Newjeans',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/50/a8/82/50a8828026afd8c169d51f428d65199d.jpg",
              image: "https://i.pinimg.com/originals/d5/b6/83/d5b683af4288c20e1fa86488eebd5bc3.jpg",
             
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf6',url:'Minji',
              username: "Minji",
              groupname:'Newjeans',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/70/a7/f1/70a7f1512db2dc03b0eff894b9070421.jpg",
              image:
                "https://i.pinimg.com/originals/00/dc/b9/00dcb9ffa9d338683cfbbab57a249527.jpg",
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf7',url:'Daniella',
              username: "Daniella",
              groupname:'Newjeans',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/84/43/09/844309b3b56214e39150a67fc07adb6a.jpg",
              image:
                "https://i.pinimg.com/originals/f7/9f/7c/f79f7c41029cadbd0d990c9d97575239.jpg",
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf8',url:'Haerin',
              username: "Haerin",
              groupname:'Newjeans',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/4f/11/0d/4f110ddb84ef173ed5d7138b4fcd73ae.jpg",
              image:
                "https://i.pinimg.com/originals/4a/dd/0b/4add0bb47728e72da5781c4cb556c14c.jpg",
            },{
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf9',url:'Hyein',
              username: "Hyein",
              groupname:'Newjeans',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/2e/26/80/2e2680fcea693ce55a86cd9d79052f81.jpg",
              image: "https://i.pinimg.com/564x/2a/84/6e/2a846e624d3bfc2d0bd03f34a9826046.jpg",
             
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id:'up1',url:'user',
              pf: 'https://i.pinimg.com/originals/b2/24/98/b2249825f1f726eb175a0d08c0396ece.jpg',
              username: 'Kaung Myat Soe',
              description:'Blah Blah',
              image:'https://i.pinimg.com/originals/d3/7f/9e/d37f9e47dd65894cebab9e091a9b842d.jpg'
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id:'up2',url:'user',
              pf: 'https://i.pinimg.com/originals/b2/24/98/b2249825f1f726eb175a0d08c0396ece.jpg',
              username: 'Kaung Myat Soe',
              description:'Blah Blah',
              image:'https://i.pinimg.com/originals/ef/1c/c2/ef1cc2c1380f20532f1dd0d917513417.jpg'
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id:'up3',url:'user',
              pf: 'https://i.pinimg.com/originals/b2/24/98/b2249825f1f726eb175a0d08c0396ece.jpg',
              username: 'Kaung Myat Soe',
              description:'Blah Blah',
              image:'https://i.pinimg.com/originals/cd/4a/ff/cd4aff7dc0142c2edfdf1f9ab9802812.jpg'
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf10',url:'Winter',
              username: "Winter",
              groupname:'aespa',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/80/d3/dd/80d3ddd61d61ae37d6d74c5957404c84.jpg",
              image:
                "https://i.pinimg.com/originals/50/40/e2/5040e2d5e311959e8008a875c13f21ee.jpg",
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf11',url:'Karina',
              username: "Karina",
              groupname:'aespa',
              description:
                "Detail",
                pf:"https://i.pinimg.com/736x/08/1f/0f/081f0f630381dd4d25ceba0200636d7b.jpg",
              image:
                "https://i.pinimg.com/originals/9d/5d/f8/9d5df8cc098e6a083b0721812a3ce3f3.jpg",
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf12',url:'NingNing',
              username: "Ning Ning",
              groupname:'aespa',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/bd/f2/eb/bdf2eb5a96a8c29683972ef2116506fc.jpg",
              image:
                "https://i.pinimg.com/originals/89/dd/1b/89dd1bc8ff27398d8cea085fece88360.jpg",
            },
         
         
        ],
        blackpink :[
          {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf1',url:'Lalisa',
              username: "Lalisa Manoban",
              groupname:'Blackpink',
              description:
                "Detail",
                pf: "https://i.pinimg.com/originals/08/d5/be/08d5be5926db92c51491180a211b428d.jpg",
              image: "https://i.pinimg.com/474x/86/ad/8c/86ad8ca08bef251166cf6e0ff9c5f913.jpg",
             
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf2',url:'Jisoo',
              username: "Kim Jisoo",
              groupname:'Blackpink',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/88/d1/be/88d1beb2db936b269fc0d06407ceee23.jpg",
              image:
                "https://i.pinimg.com/474x/29/8a/2a/298a2a26ee41eb8d864c0bddd14218b2.jpg",
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf3',url:'Chaeyoung',
              username: "Park Chaeyoung",
              groupname:'Blackpink',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/b5/ed/3e/b5ed3e5ed8fbfa2dceb35d1ee80c787f.jpg",
              image:
                "https://i.pinimg.com/474x/69/8f/41/698f416c08feb77049fcedbfe9b6de70.jpg",
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf4',url:'Chaeyoung',
              username: "Jennie Kim",
              groupname:'Blackpink',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/67/8c/60/678c60e05f1a60ad69507a248b52b49f.jpg",
              image:
                "https://i.pinimg.com/474x/86/81/20/86812015336442c38a2b6e086125c8de.jpg",
            }
         
         
        ],
        newjeans :[
          {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf5',
            url:'Hanni',
              username: "Hanni",
              groupname:'Newjeans',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/50/a8/82/50a8828026afd8c169d51f428d65199d.jpg",
              image: "https://i.pinimg.com/originals/d5/b6/83/d5b683af4288c20e1fa86488eebd5bc3.jpg",
             
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf6', url:'Minji',
              username: "Minji",
              groupname:'Newjeans',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/70/a7/f1/70a7f1512db2dc03b0eff894b9070421.jpg",
              image:
                "https://i.pinimg.com/originals/00/dc/b9/00dcb9ffa9d338683cfbbab57a249527.jpg",
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf7', url:'Daniella',
              username: "Daniella",
              groupname:'Newjeans',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/84/43/09/844309b3b56214e39150a67fc07adb6a.jpg",
              image:
                "https://i.pinimg.com/originals/f7/9f/7c/f79f7c41029cadbd0d990c9d97575239.jpg",
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf8', url:'Haerin',
              username: "Haerin",
              groupname:'Newjeans',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/4f/11/0d/4f110ddb84ef173ed5d7138b4fcd73ae.jpg",
              image:
                "https://i.pinimg.com/originals/4a/dd/0b/4add0bb47728e72da5781c4cb556c14c.jpg",
            },{
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf9', url:'Hyein',
              username: "Hyein",
              groupname:'Newjeans',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/2e/26/80/2e2680fcea693ce55a86cd9d79052f81.jpg",
              image: "https://i.pinimg.com/564x/2a/84/6e/2a846e624d3bfc2d0bd03f34a9826046.jpg",
             
            },
           
         
         
        ],
        aespa :[
          
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf10', url:'Winter',
              username: "Winter",
              groupname:'aespa',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/80/d3/dd/80d3ddd61d61ae37d6d74c5957404c84.jpg",
              image:
                "https://i.pinimg.com/originals/50/40/e2/5040e2d5e311959e8008a875c13f21ee.jpg",
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf11',url:'Karina',
              username: "Karina",
              groupname:'aespa',
              description:
                "Detail",
                pf:"https://i.pinimg.com/736x/08/1f/0f/081f0f630381dd4d25ceba0200636d7b.jpg",
              image:
                "https://i.pinimg.com/originals/9d/5d/f8/9d5df8cc098e6a083b0721812a3ce3f3.jpg",
            },
            {
               cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id: 'gf12',url:'NingNing',
              username: "Ning Ning",
              groupname:'aespa',
              description:
                "Detail",
                pf:"https://i.pinimg.com/474x/bd/f2/eb/bdf2eb5a96a8c29683972ef2116506fc.jpg",
              image:
                "https://i.pinimg.com/originals/89/dd/1b/89dd1bc8ff27398d8cea085fece88360.jpg",
            },
         
         
        ],
      
        
      
        
          user :[
         { 
         
          username: 'Kaung Myat Soe',
           id: '100000456348756',
          email: 'kaungmyatsoe2k21@gmail.com',
          pass: 'Lizzy-02',
          pf: 'https://i.pinimg.com/originals/b2/24/98/b2249825f1f726eb175a0d08c0396ece.jpg',
          cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
          image:[
            'https://i.pinimg.com/originals/d3/7f/9e/d37f9e47dd65894cebab9e091a9b842d.jpg',
            'https://i.pinimg.com/originals/ef/1c/c2/ef1cc2c1380f20532f1dd0d917513417.jpg',
            'https://i.pinimg.com/originals/cd/4a/ff/cd4aff7dc0142c2edfdf1f9ab9802812.jpg',
          ],
          
          description: 'blah blah'
        }
      
        ],
         userinputname:['Kaung Myat Soe'],
      userinputemail:['kaungmyatsoe2k21@gmail.com'],
      userinputpass:['Lizzy-02'],
      userinputdetail:['blah blah'],
      userinputpf: ['https://i.pinimg.com/originals/b2/24/98/b2249825f1f726eb175a0d08c0396ece.jpg'
     ], userinputcv:['https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg'
      ],
         userpost:[
          {
             cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id:'up1',url:'user',
            pf: 'https://i.pinimg.com/originals/b2/24/98/b2249825f1f726eb175a0d08c0396ece.jpg',
            username: 'Kaung Myat Soe',
            description:'Blah Blah',
            image:'https://i.pinimg.com/originals/d3/7f/9e/d37f9e47dd65894cebab9e091a9b842d.jpg'
          },
          {
             cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id:'up2',url:'user',
            pf: 'https://i.pinimg.com/originals/b2/24/98/b2249825f1f726eb175a0d08c0396ece.jpg',
            username: 'Kaung Myat Soe',
            description:'Blah Blah',
            image:'https://i.pinimg.com/originals/ef/1c/c2/ef1cc2c1380f20532f1dd0d917513417.jpg'
          },
          {
             cv: 'https://i.pinimg.com/originals/ab/46/c0/ab46c0af4b69761acf4f844f0796aeae.jpg',
  id:'up3',url:'user',
            pf: 'https://i.pinimg.com/originals/b2/24/98/b2249825f1f726eb175a0d08c0396ece.jpg',
            username: 'Kaung Myat Soe',
            description:'Blah Blah',
            image:'https://i.pinimg.com/originals/cd/4a/ff/cd4aff7dc0142c2edfdf1f9ab9802812.jpg'
          }
        ]
      }
  }
  clickMe(item){
    const {history}=this.props;
    alert('clicked');
    console.log(item);
    history.push('/Infojc')

}
  


  

  
    render() {
      return (
        <main>
         

         <section id="b2" className="body-2">
    <Left   user={this.state.user} />
    <Mid data={this.state}/> 
    <Right blackpink={this.state.blackpink} newjeans={this.state.newjeans} aespa={this.state.aespa}   girlfriends={this.state.girlfriends} user={this.state.user} />
    </section>
    <div id="user">
                <div id="pf">
                <User user={this.state.user}   />
                </div>
              
              </div>
          
        </main>
        );
        
  }
}

export default Index;
