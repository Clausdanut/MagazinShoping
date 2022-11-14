import React, { useState, useEffect } from "react";
import "./Contact.css";
import { db } from "./firebase";
import './Login.css';

import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';
import { auth } from "./firebase";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message, 
        is_contact : true,
        id:Math.random()
      })
      .then(() => {
        setLoader(false);
        alert("Mesaj trmis👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (












    
    
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      
      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;