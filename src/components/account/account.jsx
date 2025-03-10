import { useNavigate } from 'react-router-dom';
import './account.css'


const Account = ({setisLoggedIn}) => {

    const navigate = useNavigate();


    const handleLogOut = () =>{
        setisLoggedIn(false);
        navigate('/');
    }

  return(  
  <div className="account">

     <h4 onClick={()=>{navigate('/')}}>home</h4>

  <h1>Welcome! /user id/</h1>

  <div className="my-bookings">
    <h1>You have no bookings!</h1>
  </div>

  <button onClick={handleLogOut}>Log Out</button>
  </div>
)};  

export default Account;