    // Modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Css
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


//Components
function UserCredentialComp(props) {

  const [userEmail,setEmail] = useState("");
  const [userPassword,setPassword] = useState("");

  const callBack = () => {
      let UserCredential = {
          Email : userEmail,
          Password : userPassword
      }
      props.callBack(UserCredential)
  }

  return (
    <div>

    
      User Email : <TextField id="outlined-email-input" size="small" type="email" variant="outlined" onChange={e => setEmail(e.target.value)} /> <br/>
      Password :   <TextField id="outlined-password-input" size="small" type="password" variant="outlined" onChange={e => setPassword(e.target.value)} /> <br/>
      <Button variant="outlined" color="primary" size="small"  onClick={() => callBack()}  > 
        {props.value}
      </Button>

    </div>
  );
}

export default UserCredentialComp;
