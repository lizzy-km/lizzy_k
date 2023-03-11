import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

const Right = ({product}) => {
  
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
          {product.map((gf)=>(
                <div className="flex text-[.8rem] gap-2  p-[.5rem]">
                <div className="rf_usr_p ">
                  <Link to={'/'+gf.id}><img className="p_hover" src={gf.image} alt=""/></Link>
                    
                </div>
                <div className="rf_usr_n">
                <Link to={'/'+gf.id}><p>{gf.title.substring(0,15)} . . .</p></Link>
                    
                </div>
            </div>
            ))}
          </div>
           
            
        </div>
</div>

  
);
};
export default Right;