import * as React from "react";
import './index.css';


import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Sug from "./components/Sug.component";
import Index from "./index";
import User from "./components/User.component";
import Auth from "./components/Auth.component";
import Profile from "./components/Profile.component";
import Story from "./components/story";
import Top from "./components/top";

function App() {
  return (
  <Router>
   
        <Routes>
           <Route exact path='/Sug' element={<Sug />} />
           <Route exact path='/' element={<Index />} />
            <Route exact path='/Auth' element={<Auth/>}/>\
            <Route exact path='/Profile' element={<Profile/>}/>
            <Route exact path='/Story' element={<Story/>}/>
            <Route exact path='/User' element={<User/>}/>
        </Routes>
       
  </Router>);
}

export default App;