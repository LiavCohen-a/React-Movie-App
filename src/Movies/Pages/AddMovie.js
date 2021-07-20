// Modules
import { useState } from "react";
import  MoviesRequest from "../../Services/MoviesRequest";
import { useHistory } from "react-router-dom";

//Css
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


//Components

function AddMoviePage(props) {

  const [name,setName] = useState("");
  const [genres,setGenres] = useState([]);
  const [image,setImage] = useState("");
  const [premiered,setPremiered] = useState("");
  const history = useHistory();

  let saveNewMovie = async (e) => {
    e.preventDefault();
    const myArr = genres.split(",");
    let obj = {
        Name : name,
        Genres : myArr,
        Image : image,
        Premiered : premiered,
      }
      let resp = await MoviesRequest.addMovie(obj)
      alert(resp)

      history.push("/Movies/AllMovies")
  }
  return (
    <div>
      
      <h3> Add Movie Page </h3>
    <form onSubmit={(e) => saveNewMovie(e)}>
    <TextField margin="dense" id="outlined-search" value={name} size="small" label="Name" type="text" variant="outlined" onChange={e => setName(e.target.value)} /> <br />
     <TextField margin="dense" id="outlined-search" value={genres} size="small" label="Genres" type="text" variant="outlined" onChange={e => setGenres(e.target.value)} /> <br />
     <TextField margin="dense" id="outlined-search" value={image} size="small" label="Image Url" type="text" variant="outlined" onChange={e => setImage(e.target.value)} /> <br />
     <TextField margin="dense" id="outlined-search" value={premiered} size="small" label="Premiered" type="date" variant="outlined" onChange={e => setPremiered(e.target.value)} /> <br />
     <Button type="submit" variant="outlined" color="primary" size="small"   > 
     Save
      </Button>
      &nbsp;
      <Button type="button" variant="outlined" color="primary" size="small" onClick={() => history.push("/Movies/AllMovies")}  > 
      Cancel
      </Button>
  
    </form>
    </div>
  );
}

export default AddMoviePage;
