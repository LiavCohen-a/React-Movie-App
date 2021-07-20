// Modules
import { Link } from 'react-router-dom';

//Components
function MoviesLinksComp(props) {

  return (
    <div> 
      <Link to="/Movies/AllMovies" > All Movies </Link> &nbsp;
      <Link to="/Movies/AddMovie" > Add Movie </Link> &nbsp;
    </div>
  );
}

export default MoviesLinksComp;
