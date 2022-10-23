import React from "react";
import "./Contact.css";
import Contact from "./Contact";
import { db } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";
import Admin from "./Admin";
import ContactDelete from "./ContactDelete";



const ContactEdit = (props) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    async function getData() {
      setIsLoading(true);
      let helperArr = [];
      const edit = db.collection("products");
      const doc = await edit.where("is_products", "==", true).get();
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
    useEffect(() => {
      getData();
    }, []);
  
    console.log(data);
  
    return (
      <div>
        <div className="cap-tabel-admin">
         <div>NUME</div>
         <div>EMAIL</div>
         <div>MESAJ</div>
        </div>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          data.map((contact) => {
            return (
  <ContactEdit nume={contact.name} message={contact.message} email={contact.email} id={contact.id}></ContactEdit>
            )
          })
        )}
      </div>
    );
  };

export default ContactEdit