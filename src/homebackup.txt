import React from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";


function Home() {

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
    

    

    return (
        <div className="home1">
            <div className="home__container">

                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />

                <div className="home2">
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

                </div>

              
                   

            </div>   
        </div> 
    )
}

export default Home;