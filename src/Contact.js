import React, { useState, useEffect } from "react";
import "./Contact.css";
import { db } from "./firebase";
import "./Login.css";

import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { auth } from "./firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const [loader, setLoader] = useState(false);

// Postare formular de contact in baza de date
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        is_contact: true,
        id: Math.random(),
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
// Postare formular de contact in baza de date

  return (
    <div className="contact-1">
      <div class="contact-2">
        <iframe
          className="harta1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.7788461674863!2d26.09643601535046!3d44.437698509365696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff43f6fb02c7%3A0x26c89e2c4dcf30b5!2sLINK%20Academy!5e0!3m2!1sro!2sro!4v1668605989238!5m2!1sro!2sro <iframe src="
          ht
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contact </h1>

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
    </div>
  );
};

export default Contact;
