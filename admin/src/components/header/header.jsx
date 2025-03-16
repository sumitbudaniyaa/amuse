import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import "./header.css";

const Header = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <header>
      <img
        src="logo.png"
        alt="logo"
        onClick={() => {
          navigate("/");
        }}
      />

        <User id="user-icon" color="white" size={30} />

    </header>
  );
};

export default Header;
