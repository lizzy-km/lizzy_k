import * as React from "react";
// import Navbar from "react-bootstrap/Navbar";

// import "bootstrap/dist/css/bootstrap.css";
import './index.css';


import { BrowserRouter as Router , Routes, Route} from "react-router-dom";

// import EditProduct from "./components/product/edit.component";
import Sug from "./components/Sug.component";
import Index from "./index";
// import NewFeed from "./components/product/NewFeed.component"
import User from "./components/User.component";
import Auth from "./components/Auth.component";
// import SignUp from "./components/product/SignUp.component";
import Profile from "./components/Profile.component";
// import CreateProduct from "./components/product/create.component";

function App() {
  return (
  <Router>
   
        <Routes>
           <Route exact path='/Sug' element={<Sug />} />
           <Route exact path='/' element={<Index />} />
            <Route exact path='/Auth' element={<Auth/>}/>\
            <Route exact path='/Profile' element={<Profile/>}/>
            <Route exact path='/User' element={<User/>}/>
        </Routes>
       
  </Router>);
}

export default App;