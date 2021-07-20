// Modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AuthenticationRequest from '../Services/AuthenticationRequest';
import {connect} from "react-redux";

//Css

//Components
import UserCredential from './Components/UserCredential';

function LoginPageComp(props) {
    const history = useHistory()
    const [msg , setMsg] = useState(null)

    const Login =async (userCredential) => {
   
        let response = await AuthenticationRequest.Login(userCredential);
        if(response == true)
        {
          setMsg(null)
          let result = AuthenticationRequest.userDetailsExist()
          if(result)
          {
            let actionObj = AuthenticationRequest.setUserDetailsState();
            props.dispatch(actionObj)
            history.push('/Movies/AllMovies')
          }
          else{
              history.push('/UpdateDetails')
          }
        }
        else
        {
          let result = AuthenticationRequest.authLoginCase(response)
          setMsg(result)
        }
    }

    useEffect( () => {
      async function logOut(){
        let response = await AuthenticationRequest.logOut();
      }
      logOut();
    },[])

  return (
    <div>
      
      <h3> Login Page </h3>

      <UserCredential  value="Log In"  callBack={(userCredential) => Login(userCredential)} />

      <h4>{msg}</h4>

      New User ? <Link to="/RegistrationPage" >Create Account</Link> <br/>

    </div>
  );
}

export default connect()(LoginPageComp);
