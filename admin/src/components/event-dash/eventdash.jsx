import './eventdash.css'


const EventDash = ({event}) => {
  return(
    <div className="eventdash">
       <div className="poster-div">
          <img src={event.poster} alt="" />
       </div>
       <div className="desc-div">
           <h1>{event.name}</h1>
           <h4>{event.venue}</h4>
           <h4>₹{event.price}</h4>
           <h4>At {event.time} on {event.date}</h4>

       </div>
       <div className="action-div">
           <p><strong>Status: </strong>{event.status}</p>
           <p><strong>Sold:</strong> {event.ticketsSold}</p>
           <button>Edit Details</button>
       </div>
    </div>
)};

export default EventDash;