import { useNavigate } from "react-router-dom";
import "./eventcard.css";

const eventcard = ({id, name, venue, poster}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/booking/${name}`); 
  };

  return (
    <div className="eventcard-wrapper"onClick={handleClick}>
      <div className="event-card">
        <img src={poster} alt="" />
     
      </div>
      <p>{name}</p>
      <span>{venue}</span>
    </div>
  );
};

export default eventcard;
