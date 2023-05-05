import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useNavigate } from "react-router-dom";
import './showdetail.css'
const ShowDetail = ({id,movies}) => {
    
    let main_show = movies.filter(movie => movie.show.id === id );
    const parser = new DOMParser();
    const doc = parser.parseFromString(main_show[0].show.summary, "text/html");
    return ( 
        // <div className="tv-show" >
    <div className="tv-show-details">
      <h2 className="tv-show-details-title">{main_show[0].show.name}</h2>
  { main_show[0].show.image != null && <img src={main_show[0].show.image.original} alt={main_show[0].show.name} className="tv-show-details-poster" />}
      <div className="tv-show-details-info">
      { main_show[0].show.network != null && <p className="tv-show-details-info-item"><strong>Network: </strong> {main_show[0].show.network.name}</p>}
      {main_show[0].show.rating!= null &&  <p className="tv-show-details-info-item"><strong>Rating:</strong> <span>{main_show[0].show.rating.average} / 10</span></p>}
       {main_show[0].show.language != null && <p className="tv-show-details-info-item"><strong>Language:</strong> <span>{main_show[0].show.language}</span></p>}
        <p className="tv-show-details-info-item"><strong>Description:</strong> <span>{doc.body.textContent}</span></p>
      </div>
    {/* </div> */}
 
</div>  

     );
}
 
export default ShowDetail;