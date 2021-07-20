// Modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthenticationRequest from '../Services/AuthenticationRequest';

//Components
import UserCredential from './Components/UserCredential';


function RegistrationPageComp() {

    const [msg , setMsg] = useState(null)

    const Register =async (userCredential) => {
      let response = await AuthenticationRequest.Registration(userCredential);
      if(response.email)
      {
        alert("User Register !")
        await setMsg(null)
      }
      else
      {
        let result = AuthenticationRequest.authRegisterCase(response)
        await setMsg(result)
      }
    }

  return (
    <div>
      
      <h3> Registration Page </h3>

      <UserCredential  value="Register"  callBack={(userCredential) => Register(userCredential)} />

      <h4>{msg}</h4>
      

      Back To   <Link to="/" >Login Page</Link> <br/>
    </div>
  );
}

export default RegistrationPageComp;
