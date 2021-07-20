// Modules
import {Route,Switch} from 'react-router-dom';

//Components
import LoginPage from '../LoginPage/LoginPage';
import RegistrationPage from '../LoginPage/RegistrationPage';
import UpdateDetailsPag from '../FireBase/UpdateDetailsPage';
import ManageUserPage from '../ManageUsers/UserManagementPage';
import EditUserPage from '../ManageUsers/Pages/EditUserPage';
import SubscriptionsPage from '../Subscriptions/SubscriptionsPage';
import MoviesPage from '../Movies/MoviesPage';
import MemberPage from '../Subscriptions/Pages/MemberPage';


function SwitchComp() {

  return (
    <div>
              
    <Switch>
      <Route  exact path="/" component={LoginPage} />
      <Route  path="/RegistrationPage" component={RegistrationPage} />
      <Route  path="/UpdateDetails" component={UpdateDetailsPag} />
      <Route  path="/UserManagement/AllUsers" component={ManageUserPage} />
      <Route  path="/UserManagement/AddUser" component={ManageUserPage} />
      <Route  path="/EditUser/:id" component={EditUserPage} />

      <Route  exact path="/Movies/AllMovies" component={MoviesPage} />
      <Route  exact path="/Movies/AllMovies/:id" component={MoviesPage} />
      <Route  path="/Movies/EditMovie/:id" component={MoviesPage} />
      <Route  path="/Movies/AddMovie" component={MoviesPage} />


      <Route  path="/Subscriptions/AllMembers" component={SubscriptionsPage} />
      <Route  path="/Subscriptions/EditMember/:id" component={SubscriptionsPage} />
      <Route  path="/Subscriptions/AddMember" component={SubscriptionsPage} />
      <Route  path="/Subscriptions/MemberPage/:id" component={MemberPage} />

      
    </Switch>
    </div>
  );
}

export default SwitchComp;
