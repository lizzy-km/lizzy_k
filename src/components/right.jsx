import React from "react";
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
                    <img className="p_hover" src={gf.pf} alt=""/>
                </div>
                <div className="rf_usr_n">
                    <p>{gf.username}</p>
                </div>
            </div>
            ))}
          </div>
           
            
        </div>
</div>

  
);
};
export default Right;