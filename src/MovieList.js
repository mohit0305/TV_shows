import { Link } from "react-router-dom";
import {useContext} from 'react';
import './movielist.css'
import DataContext from "./DataContext";
// const BlogList = ({blogs,handleDelete}) => {
const MovieList = ({movies}) => {
    const { showid, setShowid } = useContext(DataContext);
    
    // const blogs = prop.blogs;
    return ( 
        <div className="blog-list">
        {movies.map( movie => (
            <div class="wrapper">
            <div class="main_card">
                <div class="card_left">
                    <div class="card_datails">
                        <h1>{movie.show.name}</h1>
                        <div class="card_cat">
                            {/* <p class="PG">PG - 13</p> */}
                            <p class="year">{movie.show.premiered}</p>
                            <p class="genre">{movie.show.genres.map(gen => (
                                gen + ' | '
                            ))}</p>
                            { movie.show.averageRuntime!= null && <p class="time">{movie.show.averageRuntime} m</p>}
                        </div>
                        <p class="disc"></p>
                        
                    <div class="social-btn">
                {/* <!-- WATCH TRAILER--> */}
                        <button onClick={() => {
                            setShowid(movie.show.id);
                            // console.log(movie.show.id);
                        }} className="Read_More">
                            <i class="fas fa-play"></i> Read More
                        </button>
                        {/* <!-- GET--> */}
                        {movie.show.officialSite != null && 
                        <button>
                            <i class="fas fa-download"></i> <a href={movie.show.officialSite} target="_blank">Official site </a>
                        </button>}
                        {/* <!--USERS RATINGS--> */}
                        {movie.show.rating.average != null && 
                        <button>
                            <i class="fas fa-thumbs-up"></i> {movie.show.rating.average} / 10
                        </button>}
                        {/* <!--BOOKMARK--> */}
                        {movie.show.status != null && 
                        <button>
                            <i class="fas fa-star"></i>{movie.show.status}
                        </button>}
                    </div>	
                    </div>
                </div>
                <div class="card_right">
                    <div class="img_container">
                       { movie.show.image != null && <img src={movie.show.image.medium} alt=""/>}
                        </div>
                    </div>
                </div>
            </div>
            
          ) 
         )
        }
      </div>
     );
}
 
export default MovieList ;