// Modules
import {Route,Switch} from 'react-router-dom';

//Components
import AllUsersPage from '../Pages/AllUsers';
import EditUserPage from '../Pages/EditUserPage';
import AddUserPage from '../Pages/AddUserPage';

function UsersSwitchComp() {

  return (
    <div>
    <Switch>
      <Route  path="/UserManagement/AllUsers" component={AllUsersPage} />
      <Route  path="/EditUser/:id" component={EditUserPage} />
      <Route  path="/UserManagement/AddUser" component={AddUserPage} />
    </Switch>
    </div>
  );
}

export default UsersSwitchComp;