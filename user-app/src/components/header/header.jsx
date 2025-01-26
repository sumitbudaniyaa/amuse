import './header.css'


const Header = () => {
    return(
        <header>
           <img src="logo.png" alt="" />
           <input type="text" placeholder='Search'/>
           <button>Log In</button>
        </header>
    )
}


export default Header;