import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import './header.css'

const Header = ({isLoggedIn}) => {

   const navigate = useNavigate();

  return(
     <header>
        <img src="logo.png" alt="logo" onClick={()=>{navigate('/')}}/>
        {isLoggedIn ? <User id='user-icon' color='white' size={30} onClick={()=>{navigate('/account')}}/> : <button onClick={()=>{navigate('/login')}}>Log In</button>}
     </header>
)};

export default Header;