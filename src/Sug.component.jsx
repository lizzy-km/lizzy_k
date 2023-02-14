
import Profile from "./Profile.component"
import Top from "./top";
import Draw from "./Draw.component"
import User from "./User.component"
import React from "react";
import './App.css';
// import SignIn from "./SingnIn.component";
const Sug = () => {

  
 

return (
    
        
    <div>
            <Top/>
        <div id="b1" className="body-1"> 
            <div id="dp">
              
                
              
            <Draw/>
          
            <Profile/>
            
            
            
            </div>
            
            {/* <SignIn/> */}
        </div>
        <div id="user">
          <div id="pf">
          <User/>
          </div>
        
        </div>
        
    </d>
    
  );
  
};
export default Sug;