import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import { useState } from "react";

function ContactDelete({ id, nume, email, message }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [state, dispatch] = useStateValue();

  // Functia care sterge contactul dupa un anumit ID
  async function deleteContact() {
    const contact = db.collection("contacts");
    const doc = contact.where("id", "==", id);
    if (!isDeleted) {
      doc.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.delete();
          setIsDeleted(true);
        });
      });
    }
  }
  // Functia care sterge contactul dupa un anumit ID

  return (
    <>
      {isDeleted ? (
        <div></div>
      ) : (
        <tr>
          <td> {nume}</td>
          <td> {email}</td>
          <td> {message}</td>
          {/* Butonul care apeleaza functia de stergere dupa id-ul sau */}
          <td onClick={deleteContact} className="delete">
            Delete
          </td>
          {/* Butonul care apeleaza functia de stergere dupa id-ul sau */}
        </tr>
      )}
    </>
  );
}

export default ContactDelete;
