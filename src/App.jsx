import * as React from "react";
import './index.css';


import { BrowserRouter, Routes, Route} from "react-router-dom";
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
import Loading from "./components/Loading";
import { StateContextProvider } from "./Context/StateContext";

// import Mid from "./components/mid";
const App =()=> {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
 
const [product, setProduct]=useState([]);

const [data,setData] = useState([])

useEffect(()=>{
  fetchData()
},[setProduct])



  const fetchData = async () =>{
    const api = await fetch('https://fakestoreapi.com/products')
    const data = await api.json();
    setData(data)
    setProduct(data);



  }

  









  return(
    <>
    {loading === false ? (
  <BrowserRouter >
   <StateContextProvider>
   <main>
    <div className="nav_hold">
    <Top data={data} product={product} setProduct={setProduct} />
    </div>
   
    </main>
   
    
        <Routes data={data} product={product} setProduct={setProduct} >
            <Route  exact path='*' element={<Error />}/>
           <Route exact path='/Sug' element={<Sug />} />
           <Route exact path='/' element={<Index product={product} />} />
            <Route exact path='/Auth' element={<Auth/>}/>\
            <Route exact path='/Profile' element={<Profile/>}/>
            <Route exact path='/Story' element={<Story/>}/>
            <Route exact path='/Video' element={<Video />} />
            <Route exact path='/Group' element={<Group />} />
            <Route exact path='/Mid' element={<Mid data={data} product={product} setProduct={setProduct} />} />
            
            
                <Route exact path='/User/:id' element={<User data={data} product={product} setProduct={setProduct} />}/>
             
            
  
            
            
            
            
        </Routes>
   </StateContextProvider>
   
       
  </BrowserRouter>
  ) : (
    <Loading/>
  ) }
 
  </>
 );
        

}

export default App;