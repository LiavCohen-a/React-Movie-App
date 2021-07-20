// Modules
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import UsersRequest from '../../Services/UsersRequest';
import PermissionsRequest from '../../Services/PermissionsRequest';

//Css
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


//Components
import Permissions from '../components/Permissions';



function AddUserPage(props) {
  const history = useHistory();
  
  const [fname,setFName] = useState("")
  const [lname,setLName] = useState("")
  const [createdDate,setCreatedDate] = useState("")
  const [userName,setUserName] = useState("")
  const [sessionTU,setSessionTU] = useState(0)
  const [newUserPer , setUserPer ] = useState([])

  let setNewUser = async (e) => {
    e.preventDefault();
    let obj = {
      FirstName : fname,
      LastName : lname,
      CreatedDate : createdDate,
      SessionTimeOut : sessionTU,
    }

    let resp = await UsersRequest.addUser(obj)
    let resp2 = await PermissionsRequest.addPermissionsToUser(resp.id,newUserPer)
    alert(resp + " " + resp2)
    history.push('/UserManagement/AllUsers')
  }
  
  return (
    <div> 
      <h5> ManageUsersPage </h5>
      <form onSubmit={(e) => setNewUser(e)} >
      <TextField margin="dense" id="outlined-search" value={fname} size="small" label="First Name" type="text" variant="outlined" onChange={e => setFName(e.target.value)} /> <br />
        <TextField margin="dense" id="outlined-search" value={lname} size="small" label="Last Name" type="text" variant="outlined" onChange={e => setLName(e.target.value)} /> <br />
        <TextField margin="dense" id="outlined-search" value={createdDate} size="small" label="Created Date" type="date" variant="outlined"  onChange={e => setCreatedDate(e.target.value)} /> <br />
        <TextField margin="dense" id="outlined-search" value={userName} size="small" label="User Name" type="text" variant="outlined" onChange={e => setUserName(e.target.value)} /> <br />
        <TextField margin="dense" id="outlined-search" value={sessionTU} size="small" label="Session Time Out" type="number" variant="outlined" onChange={e => setSessionTU(e.target.value)} /> <br />
      <Permissions  getUserPermissions={(per) => setUserPer(per) } />
      <Button type="submit" variant="outlined" color="primary" size="small" > 
          Save
        </Button>
           &nbsp;
        <Button type="button" variant="outlined" color="primary" size="small" onClick={() => history.push("/UserManagement/AllUsers")}  > 
          Cancel
        </Button>
      </form>
    </div>
  );
}

export default AddUserPage;
