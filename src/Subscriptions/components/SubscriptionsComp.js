// Modules
import { useEffect, useState } from "react";
import SubscriptionRequest  from '../../Services/SubscriptionRequest';
import MoviesRequest  from '../../Services/MoviesRequest';
import { Link } from 'react-router-dom';

//Css
import Button from '@material-ui/core/Button';

//Components
import AddMovieComp from './AddMovieComp' ;

function SubscriptionsComp(props) {

  const [subs,setSubs] = useState([]);

  const [bool,setBool] = useState(true);
  const [subSectionBool,setSubSection] = useState(false);


  useEffect(() => {
    async function setData(){
      if(bool)
      {
        let resp = await SubscriptionRequest.getSubscriptionsToMember(props.memberID);
         resp.Movies?.map(async movie => {
             movie.MovieName =await  MoviesRequest.getMovieName(movie.MovieID)
         });
         setSubs(resp)
         setBool(false)
      }
    }
    setData();
  }, [subs] )

  let subscribeNewMovie =async (movieData) => {
    let data = await SubscriptionRequest.addSubscription(movieData,props.memberID)
    alert(data)
    setSubSection(!subSectionBool)
  }
  let subSection;
  if(subSectionBool)
  {
    subSection = <AddMovieComp memberID={props.memberID} subscribe={(movieData) =>subscribeNewMovie(movieData) } callBackDate={(date) => setDate(date) } />
  }

  return (
    <div >
        <div>  
        <Button variant="contained" onClick={() => setSubSection(!subSectionBool)} size="small" color="primary">
            Subscribe To New Movie
        </Button>
        {subSection}
        <h4>  Movies Watched </h4>
        </div>
        <div>
        <ul>
            {
                subs.Movies?.map((movie,index) => {
                  return <li key={index} > <Link to={"/Movies/AllMovies/" +  movie.MovieID} >  { movie.MovieName} </Link> , {movie.Date} </li>})
            }
        </ul>
        </div>
    </div>
  );
}

export default SubscriptionsComp;
