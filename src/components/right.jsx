import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

const Right = (props) => {
  
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
          {props.girlfriends.map((gf)=>(
                <div className="rf_usr">
                <div className="rf_usr_p ">
                  <Link to={'/'+gf.url}><img className="p_hover" src={gf.pf} alt=""/></Link>
                    
                </div>
                <div className="rf_usr_n">
                <Link to={'/'+gf.url}><p>{gf.username}</p></Link>
                    
                </div>
            </div>
            ))}
          </div>
           
            
        </div>
</div>

  
);
};
export default Right;