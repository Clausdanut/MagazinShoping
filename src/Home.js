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

                <div className="home2">
                    <Product
                        id="4903850"
                        title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
                        price={199.99}
                        rating={3}
                        image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home3">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>   
        </div> 
    )
}

export default Home