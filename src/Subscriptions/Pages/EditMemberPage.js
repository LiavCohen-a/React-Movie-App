// Modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  MembersRequest from "../../Services/MembersRequest";
import { useHistory } from "react-router-dom";
//Components

function EditMemberPage(props) {
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

  let updateMember =async (e) => {   
    e.preventDefault();
    let obj = {
        Name : name,
        City : city,
        Email : email
    }
    let resp = await MembersRequest.editMember(props.match.params.id,obj)
    alert(resp);
    history.push("/Subscriptions/AllMembers")
  }

  return (
    <div>
      
      <h3> Edit Members : {member.Name} </h3>
      <form onSubmit={e => updateMember(e) } >
      Name : <input type="text" value={name} onChange={e => setName(e.target.value)} /> <br/>
      City :<input type="text" value={city} onChange={e => setCity(e.target.value)} /> <br/>
      Email : <input type="text" value={email} onChange={e => setEmail(e.target.value)} /> <br/>

      <input type="submit" value="Update" /> &nbsp;   <input type="button" value="Cancel" onClick={() => history.push("/Subscriptions/AllMembers")} />
    
      </form>
    </div>
  );
}

export default EditMemberPage;
