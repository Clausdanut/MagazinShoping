import React from 'react';

import { db,Storage } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";

import { getStorage } from "firebase/storage";
import { Link, useHistory, } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Create from "./Create";
import { storage } from "./firebase";
import { auth } from "./firebase";






function HomeScreen({}) {
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [imagine, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log(file)
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    const uploadTask = storage.ref(`files/${file.name} `).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  };
  


  return (
    <div>
 <div className="App">
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <button type="submit">Upload</button>
      </form>
      <hr />
      <h2>Uploading done {progress}%</h2>
    </div>
    </div>
  );

}

export default HomeScreen;