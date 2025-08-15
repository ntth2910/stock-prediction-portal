import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const BASE_URL = "http://127.0.0.1:8000/api/v1/";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
const [success, setSuccess] = useState(false);
const [loading, setLoading] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    // Handle registration logic here
    setLoading(true);
    console.log("User registered:", { username, email, password });
    const userData = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(`${BASE_URL}register/`, userData);
      console.log("Registration response:", response.data);
      setErrors({})
      setSuccess(true);
    } catch (error) {
      setErrors(error.response.data);
      console.error("Error during registration:", error.response.data);
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
              Create a new account
            </h3>
            <form action="" onSubmit={handleRegister}>
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
                <small>
                  {errors.username && (
                    <div className="text-danger">{errors.username}</div>
                  )}
                </small>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name=""
                  id=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  <small>
                  {errors.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                </small>
              </div>
              {success &&<div className="alert alert-success">Registration success</div>}
                  {loading && <div className="alert alert-info"><FontAwesomeIcon icon={faSpinner} spin/>Loading...</div>}
              <button type="submit" className="btn btn-info d-block mx-auto">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
