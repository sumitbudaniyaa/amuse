import EventDash from "../event-dash/eventdash";
import "./dashboard.css";
import { ScanQrCode } from "lucide-react";
import eventsadmin from "../../data1";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  const [isPast, setisPast] = useState(false);

  const handleToggle = (e) => {

      setisPast(e.target.checked);
 
  };

  return (
    <div className="dashboard">
      <div className="your-event-wrapper">
        <h1>Your Events </h1>

        <label htmlFor="filter" className="switch" aria-label="Toggle Filter">
          <input
            type="checkbox"
            id="filter"
            onChange={handleToggle}
          />
          <span>Ongoing</span>
          <span>Past</span>
        </label>

        <div className="your-event">
          {isPast
            ? eventsadmin
                .filter((event) => event.status !== "ongoing")
                .map((doneEvent) => (
                  <EventDash key={doneEvent.id} event={doneEvent} />
                ))
            : eventsadmin
                .filter((event) => event.status !== "done")
                .map((ongoingEvent) => (
                  <EventDash key={ongoingEvent.id} event={ongoingEvent} />
                ))}
        </div>
      </div>

      <div className="nav">
        <button onClick={()=>navigate('/create-event')}>Create Event</button>
        <button id="qr-scan" onClick={()=>navigate('/validate-qr')}>
          <ScanQrCode color="white" size={28} />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
