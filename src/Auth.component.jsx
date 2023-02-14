import SignUp from "./SignUp.component";
import SignIn from "./SingnIn.component";
import './App.css';
const Auth = () => {

    return(

        <div>
        <div id="si">
        <div id="signin" className="signin">
        <SignIn />
        </div>
        <div>
            
        </div>
        </div>

        <div id="su">
        <div id="signup" className="signup">
            <SignUp />
        </div>
        <div>
            
        </div>
        </div>
        </div>

    );

};
export default Auth;