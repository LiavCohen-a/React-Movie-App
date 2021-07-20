// Modules
import { useEffect, useState } from 'react';
import UsersRequest from '../../Services/UsersRequest';
//Components
import UserComp from '../components/User';

import '../usersCss.css'

function AllUsersPage(props) {
  
  const [users,setUsers] = useState([])
  const [bool , setBool ] = useState(true)
  useEffect( () => {
    async function getData(){
      let response = await UsersRequest.getUsers();
      setUsers(response)
    }
    getData();
  }, [])

  let deleteUser =async (id) => {
    let response = await UsersRequest.deleteUser(id)
    alert(response)
    let response2 = await UsersRequest.getUsers();
    setUsers(response2)
    
  }

  return (
    <div> 
      <h5> all users </h5>
      <div className="allUsers" >
       {
         users.map((x,index) => {
          return <div key={index}> <UserComp User={x} deleteUser={(userId) => deleteUser(userId)} />  <br /></div> 
        })
       }
     </div>
    </div>
  );
}

export default AllUsersPage;
