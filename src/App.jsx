import * as React from "react";
import './index.css';


import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Sug from "./components/Sug.component";
import Index from "./index";
import User from "./components/User";
import Auth from "./components/Auth.component";
import Profile from "./components/Profile.component";
import Story from "./components/story";
import Top from "./components/top";
import Error from "./components/Error";
import Video from "./components/video";
import Group from "./components/group";
import Mid from "./components/mid";
import { useState, useEffect } from "react";

// import Mid from "./components/mid";
const App =()=> {

  
 
const [product, setProduct]=useState([]);

const [data,setData] = useState([])

useEffect(()=>{
  fetchData()
},[setProduct])

// console.log(product)


  const fetchData = async () =>{
    const api = await fetch('https://fakestoreapi.com/products')
    const data = await api.json();
    setData(data)
    setProduct(data);
    console.log(data)



  }

  









  return(
  <Router >
   
    <main>
    <div className="nav_hold">
    <Top data={data} product={product} setProduct={setProduct} />
    </div>
   
    </main>
   
    
        <Routes>
            <Route  exact path='*' element={<Error />}/>
           <Route exact path='/Sug' element={<Sug />} />
           <Route exact path='/' element={<Index product={product} />} />
            <Route exact path='/Auth' element={<Auth/>}/>\
            <Route exact path='/Profile' element={<Profile/>}/>
            <Route exact path='/Story' element={<Story/>}/>
            <Route exact path='/Video' element={<Video />} />
            <Route exact path='/Group' element={<Group />} />
            <Route exact path='/Mid' element={<Mid product={product} />} />
            
            
                <Route exact path='/User/:id' element={<User product={product} />}/>
             
            
  
            
            
            
            
        </Routes>
       
  </Router>
 );
        

}

export default App;