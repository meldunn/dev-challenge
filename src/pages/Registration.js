import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";
import NavBar from "../components/Nav";
import Centerpiece from "../components/Centerpiece";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        //password,
      }),
    });
  };

  return (
    <div>
      <NavBar></NavBar>
      <Centerpiece></Centerpiece>
      <div className="form-submission">
        <form onSubmit={register}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="enter your email to hear about our events"
          />
          <br />
          {/* <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        /> */}
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
      <style jsx>{`
          
          .form-submission {
               width: 100%;
               height: 100%;
               //min-height: 100vh;
               display: flex;
               justify-content: center;
               align-items: center;
            width: 100%;
            height: 100%;
          }
        `}</style>
    </div>
  );
}
