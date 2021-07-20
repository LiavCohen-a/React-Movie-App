// Modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  MembersRequest from "../../Services/MembersRequest";
import { useHistory } from "react-router-dom";

//Components

function MoviePage(props) {

  const [member,setMember] = useState({});
  const [name,setName] = useState("");
  const [city,setCity] = useState("");
  const [email,setEmail] = useState("");
  const history = useHistory();

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


  return (
    <div>

      <h3> Member Data Page </h3>

    Name : {name} <br />
    City : {city}<br />
    Email : {email} <br />

   <input type="button" value="Back" onClick={() => history.push("/Movies/AllMovies")} />
    
 

    </div>
  );
}

export default MoviePage;
