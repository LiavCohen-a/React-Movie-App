// Modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../moviesCss.css';
import SubscriptionRequest from "../../Services/SubscriptionRequest";
import { useHistory } from "react-router-dom";

//Css
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


//Components
import SubscriptionComp from "../components/SubscriptionComp";
import MoviesRequest from "../../Services/MoviesRequest";


const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    width : 300 , 
    height : "auto",
  },
  media: {
    height: 280,
    width : 230,
    display: "block",
    marginLeft : "auto",
    marginRight : "auto"
  },
});


function MovieComp(props) {

    const classes = useStyles();
    const [sub,setSub] = useState([])
    const history = useHistory();
    
    useEffect(() => {
      async function setData()
      {
        let resp = await SubscriptionRequest.getSubscriptionByID(props.movie.movieId)
        setSub(resp)
      }
      setData()
      }, [])
      let editMovie  =async ()  => {
        history.push('/Movies/EditMovie/'+props.movie.movieId)
      } 
      let deleteMovie =async () => {
        let resp = await SubscriptionRequest.deleteSubscriptionForMovie(props.movie.movieId)
        let resp2 = await MoviesRequest.deleteMovie(props.movie.movieId);
        alert(resp2 + " " + resp)
      }
  return (
    <div className="Movie" >

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.movie.Image} />
        <CardContent>
          <Typography align="center"  gutterBottom variant="h5" component="h2">
          {props.movie.Name} , {props.movie.Premiered}
          </Typography>
          <Typography align="center" variant="body2" color="textSecondary" component="p">
          Genres : {props.movie.Genres?.map((x,index)=> {return <span key={index} >{index == 0 ? "" : ","} "{x}"</span>})}.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardContent>
          <Typography align="center"  gutterBottom variant="h6" component="h2">
          Subscriptions Watched!
          </Typography>
          <Typography align="center"  variant="body2" color="textSecondary" component="div">
          <ul>
            {
                sub.map((sub,index)=>  {
                    return <li key={index} > <SubscriptionComp  Member={sub}   /> </li> })
            }
        </ul>   
          </Typography>  
        </CardContent>
      </CardActionArea>
      <CardActions style={{display : "flex",justifyContent: "center"}} >
        <Button onClick={() => editMovie() } size="small" color="primary">
        Edit
        </Button>
        <Button onClick={() => deleteMovie() } size="small" color="primary">
         Delete
        </Button>
      </CardActions>
    </Card>

    </div> 
  );
}

export default MovieComp;
