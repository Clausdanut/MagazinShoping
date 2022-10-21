import React from "react";
import "./Home.css";
import Contact from "./Contact";
import Product from "./Product";
import { db } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";
import Create from "./Create";
import { Delete } from "@material-ui/icons";

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
    const [nume, setName] = useState("");
    const [imagine, setImagine] = useState("");
    const [pret, setPrice] = useState("");
    const [rating, setRating] = useState("");
  
    const [loader, setLoader] = useState(false);

  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
  
      db.collection("contacts")
        .add({
          nume: nume,
          imagine: imagine,
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


    
  async function DeletetgetData() {
    let result = await  fetch("http://localhost:3000/admin/admin-product/delete/");
    result=await result.json();
    setData(result)
    getData()
    
  }


    return <div class="container">
         {isLoading ? (<div>Loading</div>) : (data.map((product,key) => {
                         return (<Product
                         key={key}
                         id={product.id}
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