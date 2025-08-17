import React, { useState, useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const BASE_URL = "http://127.0.0.1:8000/api/v1/";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {  setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Handle login logic here
    setLoading(true);
    const userData = {
      username: username,
      password: password,
    };
    console.log("User logged in:", userData);

    try {
      const response = await axios.post(`${BASE_URL}token/`, userData);
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      console.log("Login successful:", response.data);
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error.response.data);
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark rounded p-5 mt-5">
            <h3 className="text-light text-center mt-5">
              Login to your account
            </h3>
            <form action="" onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  name=""
                  id=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Set password"
                  name=""
                  id=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <div className="text-danger">{error}</div>}

              {loading && (
                <div className="alert alert-info">
                  <FontAwesomeIcon icon={faSpinner} spin />
                  Logging in...
                </div>
              )}
              <button type="submit" className="btn btn-info d-block mx-auto">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
