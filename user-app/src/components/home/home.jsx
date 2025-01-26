import EventCard from "../eventcard/eventcard";
import "./home.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useRef } from "react";

const Home = () => {

  const ListRef = useRef(null);

  const scrollList = (direction) => {
    if (ListRef.current) {
      const scrollAmount = 400;
      ListRef.current.scrollLeft += direction * scrollAmount;
    }
  };


  return (

      <div className="home">
        <h2>
          Showing events in
          <span>
            <FaLocationDot />
            Jaipur
          </span>
        </h2>

        <div className="upcoming-events">
            <h2>Upcoming Events</h2>
            <div className="upcoming-event-wrapper" ref={ListRef}>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />

<div className="scroll-btns">
<FaArrowAltCircleLeft id="scroll-btn" onClick={() => scrollList(-1)}/>
<FaArrowAltCircleRight id="scroll-btn" onClick={() => scrollList(+1)}/>
</div>
            </div>
        </div>
      </div> 
  );
};

export default Home;
