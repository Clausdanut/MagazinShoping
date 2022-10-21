import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import { useState } from "react";




function ContactDelete({id, nume, email, message }) {
    const [isDeleted , setIsDeleted] = useState(false);
    const [state, dispatch] = useStateValue();
    async function deleteContact(){
        const contact = db.collection('contact');
        const doc = contact.where('id','==',id);
        if(!isDeleted){
            doc.get().then(function(querySnapshot){
                querySnapshot.forEach(function(doc) {
                    doc.ref.delete();
                    setIsDeleted(true);
                  });            
            });
        }
    }
    
console.log(id);

        return (
            <div>
                {isDeleted ? (<div></div>) : (
                               <div className="contact-admin1">
                               <div className="text-formular">
                                 <table>
                                   <tr>
                                     <th>Nume</th>
                                     {nume}
                                     <th>Email</th>
                                     {email}
                                     <th>Messge</th>
                                     {message}
                                   </tr>
                                 </table>
                               </div>
                             </div>
                    
               
                )};
                <span onClick={deleteContact} className="delete">Delete</span>
            </div>
        );
    }

export default ContactDelete