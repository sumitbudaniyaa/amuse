import { useState } from "react";
import "./signup.css";
import {useNavigate} from 'react-router'
import { IoChevronBackOutline } from "react-icons/io5";

const SignUp = () => {

  const [selectedType,setselectedType] = useState("");
  const navigate = useNavigate();

  return (
      

      <center>
        <div className="signup">

        <p id="backbtn" onClick={()=>navigate('/')}><IoChevronBackOutline />back</p>

          <h1>Account Setup</h1>
          <h3>Please fill the required information</h3>

        
          <div className="type-selection">
            <div className={`individual-container ${selectedType === "individual" ? "iselected" : ""}`} onClick={()=>setselectedType("individual")}>
              <p>Individual</p>
            </div>
            <div className={`organisation-container ${selectedType === "organisation" ? "oselected" : ""}`} onClick={()=>setselectedType("organisation")}>
              <p>Organisation</p>
            </div>
          </div>

          <div className="basic-info">
            <input type="text" placeholder="Name (Individual or Organisation)"/>
            <input type="email" placeholder="Email"/>
            <input type="number" placeholder="Phone"/>
          </div>

<button onClick={()=>navigate('/dashboard')}>Submit</button>
        </div>
      </center>
  );
};

export default SignUp;
