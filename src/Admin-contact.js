import React from "react";
import "./Contact.css";
import Contact from "./Contact";
import { db } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";
import Admin from "./Admin";
const AdminContact = props =>{
    const [data , setData] = useState();
    const [isLoading , setIsLoading] = useState(true);
    async function getData(){
        setIsLoading(true);
        let helperArr = []
        const contact = db.collection('contact');
        const doc = await contact.where('contacts','==',true).get();
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
         {isLoading ? (<div>Loading</div>) : (data.map((contact,) => {
                         return (<Contact
                         
                         title={contact.nume}
                         email={contact.email}
                         message={contact.message}
                         image={contact.imagine}
            
                     />)   
                    }))}
    </div>
    
}

export default AdminContact