// Modules
import { Link } from 'react-router-dom';

//Components
function UsersLinksComp(props) {

  return (
    <div> 
      <Link to="/UserManagement/AllUsers" > All Users </Link> &nbsp;
      <Link to="/UserManagement/AddUser" > Add User </Link> &nbsp;
    </div>
  );
}

export default UsersLinksComp;
