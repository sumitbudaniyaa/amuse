import './home.css'
import EventCard from '../eventCard/eventcard';
import events from '../../../data';

const Home = () => {
  return(

<div className="home">
      <div className="upcoming-events">
        <h3>Upcoming Events</h3>
        <div className="events">
        {events.map((event) => (
        <EventCard id={event.id} name={event.name} venue={event.venue} poster={event.poster}/>
      ))}
        </div>
      </div>
</div>

)};

export default Home;