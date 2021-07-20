// Imports
import fireBase from '../FireBase/connection/fireBase';
import SubscriptionRequest from './SubscriptionRequest';

// Variables
let collection = "Movies";

// Functions

let getMovies =async () => {
    const movies = [];
    let data = await fireBase.firestore().collection(collection).get()
    data.forEach(movie =>{
                let movieObj = {
                    movieId : movie.id ,
                    Name : movie.data().Name ,
                    Image : movie.data().Image ,
                    Premiered : movie.data().Premiered,
                    Genres : movie.data().Genres
                }
                movies.push(movieObj);
                })
    return movies;
}

let getMoviesForMember =async (memberID) => {
    const movies = [];
    let data = await getMovies();
    let subs = await SubscriptionRequest.getSubscriptionsToMember(memberID)
  
    data.forEach(movie =>{  
        let was = true;
        if(subs.Movies)
        {
            subs.Movies.forEach(subMovie => {
                if(subMovie.MovieID != movie.movieId && was == true)
                {
                    let movieObj = {
                            movieId : movie.movieId ,
                            Name : movie.Name ,
                            Image : movie.Image ,
                            Premiered : movie.Premiered,
                            Genres : movie.Genres
                    }
                    was = false
                    movies.push(movieObj);
                }
            })
        }
        else{
            let movieObj = {
                movieId : movie.movieId ,
                Name : movie.Name ,
                Image : movie.Image ,
                Premiered : movie.Premiered,
                Genres : movie.Genres
        }
        movies.push(movieObj);
        }

    })

    return movies;  
}


let getMovie =async (id) => {
    let movieData = {};
    let data = await fireBase.firestore().collection(collection).get()
    data.forEach(movie =>{
                if(movie.id == id)
                {
                    movieData = movie.data();
                }
                })
    return movieData;
}

let getMovieName =async (id) => {
    let movieData = "";
    let data = await fireBase.firestore().collection(collection).get()
    data.forEach(movie =>{
                if(movie.id == id)
                {
                    movieData = movie.data().Name;
                }
                })
    return movieData;
}


let addMovie =async (newMovieData) => {
    await fireBase.firestore().collection(collection).add(newMovieData);
    return "Movie Was Created !"
}

let editMovie = async (id,newMovieData) => {
    await fireBase.firestore().collection(collection).doc(id).set(newMovieData)
    return "Movie Was Updated !"
}

let deleteMovie =async (id) => {
    await fireBase.firestore().collection(collection).doc(id).delete()
    return "Movie Was Deleted !"

}
// Exports
export default {getMoviesForMember, getMovieName,getMovies,getMovie,addMovie,deleteMovie,editMovie};
