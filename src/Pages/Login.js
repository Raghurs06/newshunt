import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);
  console.log("AuthContext in Login:", useContext(AuthContext));

  const handleLogin = (e) => {
    e.preventDefault();
    const mockUser = {
      email: "user@gmail.com",
      password: "password",
    };

    if (email === mockUser.email && password === mockUser.password) {
      login(email);
      navigate("/newshunt/");
    } else {
      setError("Invalid username or password.");
    }
  };  
  
  const authContext = useContext(AuthContext);
  console.log(authContext);

  return (
    <div className="form-container">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className="shadow rounded"
        onSubmit={handleLogin}
      >
        <h1>Login</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value= {email}
            onChange={(e) => {setEmail(e.target.value); setError('');}}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <h6>
          Don't have an Account?<Link to="/newshunt/">Try for now</Link>
        </h6>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="guestLogin">
        <h2>Don't have an Account?</h2>
        <h3><Link to="/newshunt/">Try for now</Link></h3>
      </div>
    </div>
  );
}

export default Login;