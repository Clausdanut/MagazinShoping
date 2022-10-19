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

  function handleSubmit(e) {
    e.preventDefault();
    db.collection("products")
      .add({
        nume: name,
        pret:price,
        is_product : true
      })
      .then(() => {
        alert("Mesaj trmis👍");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setPrice("")
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>New Product</h1>

        <label>Name</label>
        <input placeholder="Nume" onChange={(e) => setName(e.target.value)} />

        <label>Pret</label>
        <input placeholder="pret" onChange={(e) => setPrice(e.target.value)} />

        <div class="form-group">
          <label>Imagine</label>
          <div class="">
            <input type="file" name="product_images" multiple />
          </div>
        </div>
        <div class="form-group">
          <label for="price_field">Rating</label>

          <input type="text" />
        </div>

        <button id="login_button" type="submit" class="btn btn-block py-3">
          CREATE
        </button>
      </form>
    </div>
  );
}
