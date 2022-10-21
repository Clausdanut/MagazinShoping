import React, { useState, useEffect } from "react";
import "./Contact.css";
import { db } from "./firebase";
import "./Login.css";

import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { auth } from "./firebase";

export default function Create() {
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [imagine, setImagine] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    db.collection("products" )
      .add({
        nume: name,
        imagine: imagine,
        pret: price, 
        is_product : true,
        rating: rating,
        id:Math.random(),
      })
      .then(() => {
        alert("Mesaj trmis👍");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setPrice("");
    setRating("");
    setImagine("");
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Adaugare Produs</h1>

        <label>Name</label>
        <input placeholder="Nume" onChange={(e) => setName(e.target.value)} />

        <label>Pret</label>
        <input placeholder="pret" onChange={(e) => setPrice(e.target.value)} />
        <label>Rating</label>
        <input placeholder="rating" onChange={(e) => setRating(e.target.value)} />
        <label>Imagine</label>
        <input type="file" name="image" multiple onChange={(e) => setImagine(e.target.value)} />
        <button id="login_button" type="submit" class="btn btn-block py-3">
          CREATE
        </button>
     
      </form>
    </div>
  );
}
