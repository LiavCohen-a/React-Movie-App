// Modules
import { useEffect, useState } from "react";
import  MembersRequest from "../../Services/MembersRequest";

//Components
import MemberComp from "../components/MemberComp";

function AllMembersPage() {

  const [members,setMembers] = useState([]);

  useEffect( () => {
    async function getData(){
      let resp = await MembersRequest.getMembers();
      setMembers(resp)
    }
    getData();
  }, [])


  return (
    <div>
      
      <h3> All Members Page </h3>
    <div className="allMembers" >
    {
      members.map((member,index) => {
    
        return <div key={index} > <MemberComp Member={member} /> <br/></div>
      })
      
    }
    </div>

    </div>
  );
}

export default AllMembersPage;
