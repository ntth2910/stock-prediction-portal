import React, { useContext } from "react";
import Button from "./Button";
import { AuthContext } from "../context/AuthProvider";
import { Link,useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn,setIsLoggedIn } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsLoggedIn(false);
    // window.location.href = "/login"; // Redirect to login page
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar container pt-3 pb-3 alighn-items-start">
        <Link to={"/"} className="navbar-brand text-light">
          Stock Prediction Portal
        </Link>
        <div>
          {isLoggedIn ? (
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Button text="Login" className="btn-outline-info" url="/login" />
              &nbsp;
              <Button text="Register" className="btn-info" url="/register" />
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
