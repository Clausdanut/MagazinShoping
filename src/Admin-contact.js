import React from "react";
import "./Contact.css";
import Contact from "./Contact";
import { db } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";
import Admin from "./Admin";
import { ContactEmergency } from "@mui/icons-material";
const AdminContact = props =>{
    const [data , setData] = useState();
    const [isLoading , setIsLoading] = useState(true);
    async function getData(){
        setIsLoading(true);
        let helperArr = []
        const contact = db.collection('contacts');
        const doc = await contact.where('is_contact','==',true).get();
        if (doc.empty) {
        console.log('No such document!');
        } else {
            doc.forEach(doc =>{
                helperArr.push(doc.data());
            })
        setData(helperArr);
        setIsLoading(false);
        }     
    }
    useEffect(() => {
        getData();
    } , [])
    
    console.log(data);
    

    

    return <div>
         {isLoading ? (<div>Loading</div>) : (data.map((contact) => {
                         return (
                         <div className="contact-admin">
                            <ul>
                                <li> {contact.name}</li>
                                <li>{contact.email}</li>
                                <li>{contact.message}</li>
                                
                            </ul>
                                    

                         </div>)   
                         
              
              }))}
              
    </div>
    
}







export default AdminContact