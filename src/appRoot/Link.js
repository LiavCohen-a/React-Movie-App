// Modules
import { Link ,useHistory } from 'react-router-dom';
import AuthenticationRequest from '../Services/AuthenticationRequest';
import {connect} from "react-redux";

//Components
function LinksComp(props) {
  const history = useHistory()
  let Logout =async () => {
    let response = await AuthenticationRequest.logOut()
    if(response)
    {
      AuthenticationRequest.logOut()
      let actionObj = {
        type : "Logout"
      }
      props.dispatch(actionObj)
      history.push('/')
    }
  }
  return (
    <div> 
      <Link to="/Movies/AllMovies" > Movies </Link> &nbsp;
      <Link to="/Subscriptions/AllMembers" > Subscriptions </Link> &nbsp;
      <Link to="/UserManagement/AllUsers" > User Management </Link> &nbsp;
      <input type="button" value="Log Out" onClick={() => Logout()} />
    </div>
  );
}

export default connect()(LinksComp);
