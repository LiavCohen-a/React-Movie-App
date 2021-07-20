// Modules
import { useEffect, useState } from "react";
import  MoviesRequest from "../../Services/MoviesRequest";
import { useHistory } from "react-router-dom";

//Css
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


//Components

function EditMoviePage(props) {

  const [name,setName] = useState("");
  const [genres,setGenres] = useState([]);
  const [image,setImage] = useState("");
  const [premiered,setPremiered] = useState("");
  const history = useHistory();

  useEffect( () => {
    let id =props.match.params.id;
    async function setData(){
      let resp = await MoviesRequest.getMovie(id);
      setName(resp.Name)
      setGenres(resp.Genres)
      setImage(resp.Image)
      setPremiered(resp.Premiered)
    }
    setData()
  }, [])

  let saveNewMovie = async (e) => {
    let id =props.match.params.id;
    e.preventDefault();
    let myArr = genres.split(",");
    setGenres(myArr)

    let obj = {
        Name : name,
        Genres : myArr,
        Image : image,
        Premiered : premiered,
      }

      let resp = await MoviesRequest.editMovie(id,obj)
      alert(resp)

      history.push("/Movies/AllMovies")
  }
  return (
    <div>
      
      <h3> Edit Movie Page </h3>
    <form onSubmit={(e) => saveNewMovie(e)}>
     <TextField margin="dense" id="outlined-search" value={name} size="small" label="Name" type="text" variant="outlined" onChange={e => setName(e.target.value)} /> <br />
     <TextField margin="dense" id="outlined-search" value={genres} size="small" label="Genres" type="text" variant="outlined" onChange={e => setGenres(e.target.value)} /> <br />
     <TextField margin="dense" id="outlined-search" value={image} size="small" label="Image Url" type="text" variant="outlined" onChange={e => setImage(e.target.value)} /> <br />
     <TextField margin="dense" id="outlined-search" value={premiered} size="small" label="Premiered" type="date" variant="outlined" onChange={e => setPremiered(e.target.value)} /> <br />
     <Button type="submit" variant="outlined" color="primary" size="small"   > 
     Update
      </Button>
      &nbsp;
      <Button type="button" variant="outlined" color="primary" size="small" onClick={() => history.push("/Movies/AllMovies")}  > 
      Cancel
      </Button>
  
    </form>
    </div>
  );
}

export default EditMoviePage;
