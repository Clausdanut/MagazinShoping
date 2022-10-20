import React from "react";
import "./Home.css";
import Contact from "./Contact";
import Product from "./Product";
import { db } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";
import Create from "./Create";
import "./design.css";
import {storage, } from "./firebase"



const AdminProduct = props =>{
    const [showForm,setShowForm] =useState(false)
    const [data , setData] = useState();
    const [isLoading , setIsLoading] = useState(true);
   

    async function getData(){
        setIsLoading(true);
        let helperArr = []
        const products = db.collection('products');
        const doc = await products.where('is_product','==',true).get();
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
    
    const [nume, setName] = useState("");
    const [image, setImagine] = useState("");
    const [pret, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const types = [ "img/png","img/jpeg" ]
  
    const [loader, setLoader] = useState(false);
    const deleteProducts = () =>{
        db.collection("products").doc().deleteProducts()
        .then(() =>{
            alert.success("Produs delete success!!")
       
        }) .catch (() =>{
            alert.error("Something went wrong")
        })
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
  
      db.collection("products")
      .deleteproducts({
        nume: nume,
        image: image,
        pret: pret, 
        is_product : true,
        rating: rating,
       
      })
      .then(() => {
        setLoader(false);
        alert("produs sters👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });






      db.collection("products")
        .add({
          nume: nume,
          imagine: image,
          pret: pret, 
          is_product : true,
          rating: rating,
        })
        .then(() => {
          setLoader(false);
          alert("Mesaj trmis👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
  
      setName("");
      setPrice("");
      setImagine("");
      setRating ("");
    };
    
   function formShowHandler(){
    setShowForm(prevState => !prevState)
  }

  

            
    return <div class="container">
         {isLoading ? (<div>Loading</div>) : (data.map((product,key) => {
                         return (<Product
                         key={key}
                         id={key}
                         title={product.nume}
                         price={product.pret}
                         rating={product.rating}
                         image={product.imagine}
       
            
                     />)   
                
                     
                                  
                }))}
               
    {showForm && <Create></Create> }   
 
    </div>
    
}

export default AdminProduct