import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import { useState } from "react";

function ContactDelete({ id, nume, email, message }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [state, dispatch] = useStateValue();
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

  console.log(id);

  return (
    <>
      {isDeleted ? (
        <div></div>
      ) : (
        <tr>
          <td> {nume}</td>
          <td> {email}</td>
          <td> {message}</td>
          <td onClick={deleteContact} className="delete">
            Delete
          </td>
        </tr>
      )}
    </>
  );
}

export default ContactDelete;
