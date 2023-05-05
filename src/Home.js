import {useState,createContext} from 'react';
// import BlogList from './BlogList';
import MovieList from './MovieList';
import useFetch from './usefetch';
import ShowDetail from './ShowDetail';
import DataContext from './DataContext';
const Home = () => {
    const [showid,setShowid] = useState(0);
    const [isid,setIsid] = useState(false);
    const {data : movies , isPending , error} = useFetch('https://api.tvmaze.com/search/shows?q=all');
    
    return (  
        <div className="home">
          <div className="left-pane">
          <div className='title'><h1> TV Shows</h1></div>
          {error && <div> {error} </div>}
          {isPending && <div> Loading... </div>}
          {movies && <DataContext.Provider value={{ showid, setShowid }}>< MovieList movies = { movies}  /> </DataContext.Provider>}
          </div>
          <div className="right-pane">
           {showid === 0 && <h3>Click on <b>"Read More"</b> button in left screen to find details of that particular show show</h3>} 
          {showid != 0 && <ShowDetail id = {showid} movies = { movies} />}
          </div>
        </div>
    );
}
 
export default Home;

