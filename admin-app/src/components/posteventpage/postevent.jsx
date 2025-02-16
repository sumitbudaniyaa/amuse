import './postevent.css'
import { IoMdAdd } from "react-icons/io";


const PostEvent = ({setcurrentPage}) =>{
    return(
       <>


        <div className="posteventpage">

            <h1>Fill out the Event Details</h1>

            <div className="poster">
            <h1><IoMdAdd /> <p>Add Poster</p></h1>
            <input type="file" id='poster-upload'/>
            </div>

<div className="event-desc">
<input type="text" placeholder='Name of Event'/>
            <input type="text" placeholder='Venue'/>
            <input type="date"/>
            <input type="time" />
            <input type="text" placeholder='Duration (ex: 1hr 30mins)'/>
            <input type="number" placeholder='Minimum Age'/>
            <input type="number" placeholder='Total tickets'/>
            <input type="number" placeholder='Price'/>
            <textarea name="about" id="about" rows="10"  placeholder='Write something about the event'></textarea>
</div>

        </div>
       </>
    )
}


export default PostEvent;