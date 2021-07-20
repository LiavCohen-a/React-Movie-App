
// Modules
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthenticationRequest from '../Services/AuthenticationRequest';

//Components

function UpdateDetailsComp() {
  const history = useHistory()
    const [userName,setUserName] = useState("")

    let setDetails =async () => {
        if(userName.length >= 2)
        {
            let response = await AuthenticationRequest.userDetailsUpdate(userName);
            if(response)
            {
              history.push('/HomePage')
            }
        }
    }

  return (
    <div>
      
      <h3> Only One Step Before We Start </h3>

      User Name : <input type="text" onChange={e => setUserName(e.target.value) } /> <br/>

      <input type="button" value="Submit" onClick={() => setDetails() } /> <br/>

    </div>
  );
}

export default UpdateDetailsComp;
