// Modules
import { useEffect, useState } from "react";
import  MoviesRequest from "../../Services/MoviesRequest";

//Css
import TextField from '@material-ui/core/TextField';

//Components
import  MovieComp from "../components/MovieComp";

function AllMoviesPage(props) {

  const [movies,setMovies] = useState([]);

  useEffect(() => {
    async function getData()
    {
      let resp = await MoviesRequest.getMovies();
      setMovies(resp)
    }
    getData()
  }, [])

  let filterMovies =async (txt) => {
    let resp = await MoviesRequest.getMovies();
    let newArr = resp.filter(x => x.Name.includes(txt) )  
    setMovies(newArr)
  }

  return (
    <div>
      
      <h3> All Movies Page - Find Movie : <TextField id="outlined-search" size="small" label="Search field" type="search" variant="outlined" onChange={e => filterMovies(e.target.value) } />   </h3>
    <div className="allMovies">
    {
      movies.map((movie,index) => {
        return <div key={index} > <MovieComp movie={movie} /> <br/></div>
      })
      
    }
    </div>
    </div>
  );
}

export default AllMoviesPage;
