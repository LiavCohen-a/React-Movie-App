// Modules
import { useEffect, useState } from "react";
import MoviesRequest from "../../Services/MoviesRequest";
import  '../membersCss.css';

//Css
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
//Components

function AddMovieComp(props) {
  const classes = useStyles();
  const [movies,setMovies] = useState([]);
  const [newMovie,setNewMovie] = useState("");
  const [date,setDate] = useState("");
  
  useEffect( () => {
    async function setData(){
      let result = await MoviesRequest.getMoviesForMember(props.memberID)
      setMovies(result)
    }
    setData();

  },[])

 
  let sendData = () => {
    let obj = {
      MovieID : newMovie,
      Date : date
    }
    props.subscribe(obj)
  }

  return (
    <div >
      <h4>Add a new movie</h4>
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Select Movie</InputLabel>
        <Select  onChange={(e) => setNewMovie(e.target.value) } label="Select Movie" >
          {
          movies.map((movie,index)=> {
            return <MenuItem key={index} value={movie.movieId} > {movie.Name} </MenuItem> 
            })
          }
        </Select>
      </FormControl>

      <TextField margin="dense" id="outlined-search" value={date} size="small" label="Subscription Date" type="date" variant="outlined" onChange={e => setDate(e.target.value)} /> <br />
      <Button onClick={() => sendData() } variant="contained" size="small" color="inherit">
        Subscribe
      </Button>
    </div>
  );
}

export default AddMovieComp;
