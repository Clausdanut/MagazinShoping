import React, { useState, useEffect } from "react";
import "./Contact.css";
import { db } from "./firebase";
import "./Login.css";
import { storage } from "./firebase";

import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { auth } from "./firebase";
import HomeScreen from "./HomeScreen"


export default function Create() {
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [imagine, setImage] = useState("");


  
  function handleSubmit(e) {
    e.preventDefault();
    
    db.collection("products" )
      .add({
        nume: name,
        imagine: imagine,
        pret: price, 
        is_product : true,
        rating: Number(rating),
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
    setImage("");
  }
  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Adaugare Produs</h1>

        <label>Name</label>
        <input placeholder="Nume" onChange={(e) => setName(e.target.value)} />

        <label>Pret</label>
        <input placeholder="pret" onChange={(e) => setPrice(e.target.value)} />
        <label>Rating</label>
        <input placeholder="rating" onChange={(e) => setRating(e.target.value)} />
        <label>Imagine</label>
        <input type="file" name="image" multiple onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Upload</button>
     
      </form>
    </div>
  );
}