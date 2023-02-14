import cover from "./cover.png"
import me from './lalisa.jpg'
import NavBar from "./NavBar.component";
import { BrowserRouter, Route,Link } from "react-router-dom";
// import index from "./Index.component";
function User(){

return (

    <div>
    <div className="nav_hold">
    <NavBar />
    </div>
    
    <div id="profile" className="P_f">

    <div className="pf_hold">
        
    

        <div id="1" draggable='true' className="pf ">
            <div className="card_1 C_2">


                <img className="c-img" src={cover} alt=""></img>
                <img id="pi" className="img " src={me} alt="Rose`"></img>
                <p id="name" className=" u_n">
                    Kaung Myat Soe
                </p>
                <div className="p-d">

                    <div className="cc bt b-d">Edit profile</div>
                    <div className="cc bt b-c">
                        Add to story
                    </div>


                </div>

            </div>
        </div>
        <div className="data">
            <div className="l_b">


                <div className="u_intro">


                    <div className="u_bio">
                        <b className="u_int">Intro</b>
                        <div className="u_edit_bio">
                            <b className="u_eb"> Edit bio</b>
                        </div>
                    </div>

                    <div className="u_about">

                        <div>
                            Relationship <span> Single.</span>

                        </div>
                        <div>
                            Followed by <Link type='submit' id="flop" to='/'>4 people</Link>
                        </div>
                        <div className="u_edit_detail">
                            <b className="u_ed"> Edit detail</b>
                        </div>
                    </div><br></br>
                    <div className="u_highlight">
                        <div className="u_highlight_items">


                            <div className="u_highlight_item">

                            </div>
                            <div className="u_highlight_item">

                            </div>
                            <div className="u_highlight_item">

                            </div>
                            <div className="u_highlight_item">

                            </div>
                            <div className="u_highlight_item">

                            </div>
                            <div className="u_highlight_item">

                            </div>
                            <div className="u_highlight_item">

                            </div>

                        </div>
                        <div className="u_edit_highlight">
                            <b className="u_eh"> Edit highlight</b>
                        </div>
                    </div>
                </div>
                <div className="u_photos">
                    <b className="u_ph_n">Photos</b> <a className="u_sa_p">See all photos</a>
                    <div className="u_photo_album">
                        <div className="u_photo_item u_pi_1">

                        </div>
                        <div className="u_photo_item u_pi_2">

                        </div>
                        <div className="u_photo_item u_pi_3">

                        </div>
                        <div className="u_photo_item">

                        </div>
                        <div className="u_photo_item">

                        </div>
                        <div className="u_photo_item">

                        </div>
                        <div className="u_photo_item u_pi_7">

                        </div>
                        <div className="u_photo_item u_pi_8">

                        </div>
                        <div className="u_photo_item  u_pi_9">

                        </div>
                    </div>
                </div>
                <div className="u_friends">
                    <b className="u_fr_n">Friends</b><a className="u_sa_p">See all friends</a>
                    <div className="u_friend_list ">


                        <div className="u_firend_list ">

                        </div>
                        <div className="u_firend_list ">

                        </div>
                        <div className="u_firend_list">

                        </div>
                        <div className="u_firend_list">

                        </div>
                        <div className="u_firend_list">

                        </div>
                        <div className="u_firend_list">

                        </div>
                        <div className="u_firend_list ">

                        </div>
                        <div className="u_firend_list ">

                        </div>
                        <div className="u_firend_list ">

                        </div>

                    </div>
                </div>
            </div>

            <div className="u_posts">
                <div className="upload_post">
                    <div className="pe_h">
                        <div className="p_pe">
                            <img className="pe_m_p" src={me} alt=""></img>
                            <div className="pe_txt">
                                <span>What's on your mind?</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>

    </div>
    </div>
    </div>

);
};
export default User;