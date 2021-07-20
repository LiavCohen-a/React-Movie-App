// Modules
import UsersRequest from '../../Services/UsersRequest';
import PermissionsRequest from '../../Services/PermissionsRequest';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

//Css
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


//Components
import Permissions from '../components/Permissions';

function EditUserPage(props) {
  const history = useHistory();
  const [permissions,setPer] = useState([])
  const [fname,setFName] = useState("")
  const [lname,setLName] = useState("")
  const [createdDate,setCreatedDate] = useState("")
  const [userName,setUserName] = useState("")
  const [sessionTU,setSessionTU] = useState(0)

  let callBack =async (userPer) => {
    setPer(userPer)
    console.log(userPer)
  }
  
  useEffect( () => {
    let id =props.match.params.id;
    async function getData()
    {
      let user = await UsersRequest.getUser(id)
      let permissions = await PermissionsRequest.getUserPermissions(id)
      setPer(permissions.data.Permissions)
      setFName(user.FirstName)
      setLName(user.LastName)
      setCreatedDate(user.CreatedDate)
      setSessionTU(user.SessionTimeOut)
    }
    getData();
  },[])

  let setUserDetails =async (e) => {
    let id =props.match.params.id;
    e.preventDefault();
    let obj = {

      FirstName : fname,
      LastName : lname,
      CreatedDate : createdDate,
      SessionTimeOut : sessionTU,
    }

    let response = await UsersRequest.editUser(id,obj);
    let response2 = await PermissionsRequest.editUserPermissions(id,permissions);

    alert(response + " " + response2)
    history.push('/UserManagement/AllUsers')

  }

  return (
    <div> 
      <h4> Edit User Page </h4>
      
      <form onSubmit={(e) => setUserDetails(e)}>
        <TextField margin="dense" id="outlined-search" value={fname} size="small" label="First Name" type="text" variant="outlined" onChange={e => setFName(e.target.value)} /> <br />
        <TextField margin="dense" id="outlined-search" value={lname} size="small" label="Last Name" type="text" variant="outlined" onChange={e => setLName(e.target.value)} /> <br />
        <TextField margin="dense" id="outlined-search" value={createdDate} size="small" label="Created Date" type="date" variant="outlined" disabled="true" onChange={e => setCreatedDate(e.target.value)} /> <br />
        <TextField margin="dense" id="outlined-search" value={userName} size="small" label="User Name" type="text" variant="outlined" onChange={e => setUserName(e.target.value)} /> <br />
        <TextField margin="dense" id="outlined-search" value={sessionTU} size="small" label="Session Time Out" type="number" variant="outlined" onChange={e => setSessionTU(e.target.value)} /> <br />
        <Permissions  userPer={permissions}  getUserPermissions={(userPer) => callBack(userPer)} />
        <Button type="submit" variant="outlined" color="primary" size="small" > 
          Update
        </Button>
           &nbsp;
        <Button type="button" variant="outlined" color="primary" size="small"  onClick={() => history.push("/UserManagement/AllUsers")} > 
          Cancel
        </Button>
      </form>
    </div>
  );
}

export default EditUserPage;
