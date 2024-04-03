import React, { useState } from "react";
import '../styles.css';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Sign In</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control" // Add the form-control class
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control" // Add the form-control class
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
