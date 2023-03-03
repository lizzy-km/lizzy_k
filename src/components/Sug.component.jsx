

import Top from "./top";
import Draw from "./Draw.component"
import User from "./User"
import React from "react";
import '../App.css';
import Profile from "./Profile.component";
const Sug = (props) => {

  
 

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
        
    </div>
    
  );
  
};
export default Sug;