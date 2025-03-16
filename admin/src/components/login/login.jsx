import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = ( {setisLoggedIn} ) => {

  const navigate = useNavigate();

  const [isOTPclicked, setisOTPclicked] = useState(false);

  const handleGetOTP = () =>{
    setisOTPclicked(true);
  }

  const handleSubmit = () =>{
    setisLoggedIn(true);
    navigate('/dashboard');
  }


  return(
<div className="login">
    <div className="login-card">
      <p>Log In / Sign Up</p>
      {isOTPclicked ?   <input type="number" placeholder= "Enter OTP" required /> : <input type="number" placeholder= 'Phone Number'required /> }
      <button onClick={isOTPclicked ? handleSubmit : handleGetOTP}>{isOTPclicked ? "Submit" : 'Get OTP'}</button>
    </div>
</div>
)};

export default Login;