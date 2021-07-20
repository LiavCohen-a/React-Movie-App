// Modules
import {Route,Switch} from 'react-router-dom';

//Components
import AllMembersPage from '../Pages/MembersPage';
import EditMemberPage from '../Pages/EditMemberPage';
import AddMemberPage from '../Pages/AddMemberPage';
import MemberPage from '../Pages/MemberPage';


function MoviesSwitchComp() {

  return (
    <div>
    <Switch>
      <Route  path="/Subscriptions/AllMembers" component={AllMembersPage} />
      <Route  path="/Subscriptions/EditMember/:id" component={EditMemberPage} />
      <Route  path="/Subscriptions/AddMember" component={AddMemberPage} />
      <Route  path="/Subscriptions/MemberPage/:id" component={MemberPage} />
     
    </Switch>
    </div>
  );
}

export default MoviesSwitchComp;