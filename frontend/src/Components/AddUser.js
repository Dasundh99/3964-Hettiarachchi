import '../styles.css';
import React, { useState } from "react";
import axios from "axios";

export default function AddUser() {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Role, setRole] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newUser = {
      Username,
      Email,
      Password,
      Role,
    };

    axios
      .post("http://localhost:8070/User/add", newUser)
      .then(() => {
        alert("User Added");
        setUsername("");
        setEmail("");
        setPassword("");
        setRole("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Welcome Mate!</h2>
          <form onSubmit={sendData}>
            <div className="mb-3">

              <input
                type="text"
                placeholder='Username'
                className="form-control"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">

              <input
                type="email"
                placeholder='Email'
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">

              <input

                type="password"
                placeholder='Password'
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
    
              <input
                type="text"
                
                className="form-control"
                placeholder='User/Admin'
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
