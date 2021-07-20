// Modules
import { Link } from 'react-router-dom';
import AuthenticationRequest from '../Services/AuthenticationRequest';
import { useHistory } from "react-router-dom";
import {connect} from "react-redux";

//Components
import UsersSwitch from './root/Switch';
import UsersLink from './root/Link';

function UserManagementPage(props) {
 
  return (
    <div> 
      <h4> Users Page</h4>
      
      
      <UsersLink />
      <UsersSwitch />
    </div>
  );
}

export default UserManagementPage;
