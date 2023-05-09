import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Please Fill up the form first");
    } else {
      navigate("/home");
    }
  }

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="container ">
        <h2 className="mt-3">Signup</h2>
        <div className="mb-3 mt-4">
          <label className="form-label">
            Username:
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email:
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              autoComplete="on"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password:
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
