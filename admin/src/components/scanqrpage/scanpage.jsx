import './scanpage.css'
import Webcam from "react-webcam";
import {ScanLine} from "lucide-react"


const ScanPage = () => {
  return(
<div className="scan-page">

<button>New Scan<ScanLine color='white' id="scan-icon"/>
</button>

<div className="cam">
      <Webcam  id='webcam'/>
    </div>
     
    <div className="check-box">
      <p>Let Go✅</p>
    </div>
</div>
)};

export default ScanPage;