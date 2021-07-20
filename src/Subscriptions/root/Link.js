// Modules
import { Link } from 'react-router-dom';

//Components
function MoviesLinksComp(props) {

  return (
    <div> 
      <Link to="/Subscriptions/AllMembers" > All Members </Link> &nbsp;
      <Link to="/Subscriptions/AddMember" > Add Member </Link> &nbsp;
    </div>
  );
}

export default MoviesLinksComp;
