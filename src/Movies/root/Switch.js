// Modules
import {Route,Switch} from 'react-router-dom';

//Components
import AllMoviesPage from '../Pages/AllMovies';
import EditMoviePage from '../Pages/EditMovie';
import AddMoviePage from '../Pages/AddMovie';


function MoviesSwitchComp() {

  return (
    <div>
    <Switch>
      <Route  path="/Movies/AllMovies" component={AllMoviesPage} />
      <Route  path="/Movies/EditMovie/:id" component={EditMoviePage} />
      <Route  path="/Movies/AddMovie" component={AddMoviePage} />
      <Route  path="/Movies/AllMovies/:id" component={AllMoviesPage} />
      

    </Switch>
    </div>
  );
}

export default MoviesSwitchComp;