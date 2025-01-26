import { useNavigate } from 'react-router';
import './login.css'

const Login = () =>{

    const navigate = useNavigate();

    return(
         <center><div className="login">
            
            <img src="logo.png" alt="" />
            <input type="number" placeholder='Phone'/>
            <button onClick={()=>navigate('/signup')}>Send OTP</button>
         </div>
         </center>
    )
}

export default Login;