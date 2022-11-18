import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import { db } from "./firebase";
import "./Login.css";
import { storage } from "./firebase";


export default function Create() {
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [detaliu, setdetaliu] = useState("");
  const [rating, setRating] = useState("");
  const [imagine, setImage] = useState("");
  const [img, setImg] = useState();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(file);
  };

  function handleSubmit(e) {
    e.preventDefault();
    function postProduct(uri) {
      db.collection("products")
        .add({
          nume: name,
          detaliu: detaliu,
          pret: Number(price),
          is_product: true,
          rating: Number(rating),
          id: Math.random(),
          imagine: uri,
        })
        .then(() => {
          alert("Produs adaugat👍");
        })
        .catch((error) => {
          alert(error.message);
        });

      setName("");
      setPrice("");
      setRating("");
      setImage("");
    }
    uploadFiles(img);

    const timeout1 = setTimeout(() => {
      storage
        .ref("files")
        .child(img.name)
        .getDownloadURL()
        .then((url) => {
          postProduct(url);
        });
    }, 3000);
  }
  const uploadFiles = (file) => {
    storage.ref(`files/${file.name}`).put(file);
  };

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Adaugare Produs</h1>

        <label>Name</label>
        <input placeholder="Nume" onChange={(e) => setName(e.target.value)} />

        <label>Pret</label>
        <input placeholder="pret" onChange={(e) => setPrice(e.target.value)} />
        <label>Detaliu</label>
        <textarea
          placeholder="detaliu"
          onChange={(e) => setdetaliu(e.target.value)}
        />
         


        <label>Rating</label>
        <input
          placeholder="rating"
          onChange={(e) => setRating(e.target.value)}
        />
        <label>Imagine</label>
        <input type="file" name="image" onChange={onImageChange} />

        <button type="submit">Upload</button>
        <img src={img} alt="" />
      </form>
    </div>
  );
}
