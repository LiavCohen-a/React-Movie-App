// Modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  MembersRequest from "../../Services/MembersRequest";
import { useHistory } from "react-router-dom";

//Css
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//Components

function AddMemberPage(props) {
  const history = useHistory();

  const [member,setMember] = useState({});
  const [name,setName] = useState("");
  const [city,setCity] = useState("");
  const [email,setEmail] = useState("");

  useEffect( () => {
    let id = props.match.params.id;
    async function getData(){
      let resp = await MembersRequest.getMember(id);
      setMember(resp)
      setName(resp.Name)
      setCity(resp.City)
      setEmail(resp.Email)
    }
    getData();

  }, [])

  let setNewMember =async (e) => {   
    e.preventDefault();
    let obj = {
        Name : name,
        City : city,
        Email : email
    }
    let resp = await MembersRequest.addMember(obj)
    alert(resp);
    history.push("/Subscriptions/AllMembers")
  }

  return (
    <div>
      
      <h3> Add New Member </h3>
      <form onSubmit={e => setNewMember(e) } >
        
      <TextField margin="dense" id="outlined-search" size="small" label="Name" type="text" variant="outlined" onChange={e => setName(e.target.value)} /> <br />
      <TextField margin="dense" id="outlined-search" size="small" label="Name" type="text" variant="outlined" onChange={e => setCity(e.target.value)} /> <br />
      <TextField margin="dense" id="outlined-search" size="small" label="Name" type="text" variant="outlined" onChange={e => setEmail(e.target.value)} /> <br />
      
      <Button type="submit" variant="outlined" color="primary" size="small"   > 
      Save
      </Button>
      &nbsp;
      <Button type="button" variant="outlined" color="primary" size="small" onClick={() => history.push("/Subscriptions/AllMembers")}  > 
      Cancel
      </Button>
      </form>
    </div>
  );
}

export default AddMemberPage;
