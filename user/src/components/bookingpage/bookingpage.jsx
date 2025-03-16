import { useNavigate, useParams } from "react-router-dom";
import {MapPin} from 'lucide-react';
import events from "../../../data";
import "./bookingpage.css";

const BookingPage = () => {

  const navigate = useNavigate();

  const { name } = useParams();

  const event = events.find((e) => e.name === name); 

  if (!event) {
    return <h2>Event not found</h2>;
  }

  return (
    <div className="booking-page">

<h4 onClick={()=>{navigate('/')}}>home</h4>
      
      <img src={`/public/${event.poster}`} alt={event.name} />
      <h1>{event.name}</h1>
      <div className="info">

        <div className="description">
          <span>About the event</span>
          <p>{event.description}</p>
        </div>

        <div className="venue">
          <span>Date / Time / Venue</span>
          <p>{event.time}</p>
          <p>{event.date}</p>
          <p>{event.venue}</p>
          <div className="map" onClick={() => window.open(event.location, "_blank")}>
          <MapPin fill="green" color="white"/>
          <p>View on Maps</p>
          </div>
        </div>

        <div className="artists">
          <span>Artist</span>
          <p>{event.artists.join(", ")}</p>
        </div>

      </div>

        <div className="book-tab">
            <p>₹{event.price}</p>
            <div className="quantity">
                <p>No. of tickets</p>
                <input type="number" defaultValue={1} />
            </div>
            <button>Book</button>
        </div>
    </div>
  );
};

export default BookingPage;