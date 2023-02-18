import React, { Component } from 'react'

export class highlight extends Component {
  render() {
    return (
        <div  className="mf_highlight_item" key={gf.id} >
        <div className="hl_c">
       
            <div className="hl_m ">
           
                <img className="hl_mp br_1 " src={gf.image} alt=""/>
            </div>
            <div className="hl_n">
            <img className="h_l_p p_hover" src={gf.pf} alt=""/>
                <p className="hln_t">{gf.username}</p>
            </div>
            
            
            
            

        </div>
    </div>
    )
  }
}

export default highlight
