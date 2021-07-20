// Modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  MembersRequest from "../../Services/MembersRequest";
import { useHistory } from "react-router-dom";
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
      Name : <input type="text" onChange={e => setName(e.target.value)} /> <br/>
      City :<input type="text" onChange={e => setCity(e.target.value)} /> <br/>
      Email : <input type="text" onChange={e => setEmail(e.target.value)} /> <br/>

      <input type="submit" value="Save" /> &nbsp;   <input type="button" value="Cancel" onClick={() => history.push("/Subscriptions/AllMembers")} />
    
      </form>
    </div>
  );
}

export default AddMemberPage;
