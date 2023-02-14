import React from "react";
import { BrowserRouter, Route,Link } from "react-router-dom";

const Left = () => {

    return(



<div className="left_feed">
                <Link to='/User' className="lf_me">
                    <img className="lf_p" src='https://i.pinimg.com/originals/b2/8d/49/b28d498426618a770616b58b087fa07b.jpg' alt=""></img>
                    <div className="lf_n">
                        Kaung Myat Soe
                    </div>
                </Link>

                <Link to='/Sug' className="lf_me">
                <img className="lf_p" src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" alt=""></img>
                    <div className="lf_n">
                       Friends Suggestions
                    </div>
                </Link>

                <Link to='/User' className="lf_me">
                <img className="lf_p" src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" alt=""></img>
                    <div className="lf_n">
                        Groups
                    </div>
                </Link>

                <Link to='/User' className="lf_me">
                <img className="lf_p" src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png" alt=""></img>
                    <div className="lf_n">
                        Watch
                    </div>
                </Link>

                <Link to='/User' className="lf_me">
                <img className="lf_p" src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png" alt=""></img>
                    <div className="lf_n">
                        Memories
                    </div>
                </Link>

                <Link to='/User' className="lf_me">
                <img className="lf_p" src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png" alt=""></img>
                    <div className="lf_n">
                        Save
                    </div>
                </Link>

                <Link to='/User' className="lf_me">
                <img className="lf_p" src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/_JPdPzLmp9j.png" alt=""></img>
                    <div className="lf_n">
                        Ad Center
                    </div>
                </Link>
                
            </div>

    
);
};
export default Left;