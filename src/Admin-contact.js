//i
import React from "react";
import "./Contact.css";
import Contact from "./Contact";
import { db } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";
import Admin from "./Admin";
import ContactDelete from "./ContactDelete";
const AdminContact = (props) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Functia de preluare a datelor de contact
  async function getData() {
    setIsLoading(true);
    let helperArr = [];
    const contact = db.collection("contacts");
    const doc = await contact.where("is_contact", "==", true).get();
    if (doc.empty) {
      console.log("No such document!");
    } else {
      doc.forEach((doc) => {
        helperArr.push(doc.data());
      });
      setData(helperArr);
      setIsLoading(false);
    }
  }
  // Functia de preluare a datelor de contact

  // Preluarea datelor din baza de date la deschiderea paginii
  useEffect(() => {
    getData();
  }, []);
  // Preluarea datelor din baza de date la deschiderea paginii

  return (
    <div>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Nume</th>
            <th>Email</th>
            <th>Mesaj</th>
            <th>Sterge</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <div>Loading</div>
          ) : (
            data.map((contact) => {
              return (
                <ContactDelete
                  nume={contact.name}
                  message={contact.message}
                  email={contact.email}
                  id={contact.id}
                  key={contact.id}
                ></ContactDelete>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminContact;
