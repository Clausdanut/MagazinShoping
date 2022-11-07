import React from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  async function getData() {
    setIsLoading(true);
    let helperArr = [];
    const products = db.collection("products");
    const doc = await products.where("is_product", "==", true).get();
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
    <div className="home1">
      <div className="home__container">
        <div class="section-header-image">
          <div className="coloana1">
          <h1 className="text1">
            <span className="color_15">
              <span className="color_14" >Resusable
              </span>
            </span>
            <br></br>
            <span className="color_15"></span>
            <span className="text2">Face Masks
            </span>
          </h1>
          <button className="button" type="button">Click Me!</button>
          </div>
        </div>
        

        <div className="section-products">
          <div className="text4">
            <h2 className="font_2"></h2>
            <span className="text3">Most Popular
            </span>
            <div className="gelria1">
              <ul>
              
              </ul>
            </div>

          </div>

        <div className="products">
          {isLoading ? (
            <div>Loading</div>
          ) : (
            data.map((product, key) => {
              return (
                <Product
                  key={key}
                  id={key}
                  title={product.nume}
                  price={product.pret}
                  rating={product.rating}
                  image={product.imagine}
                />
              );
            })
          )}
          </div>
        </div>

        <div className="section-cards-1"></div>
        <div className="section-cards-2"></div>
        <div className="section-images"></div>
        <div class="footer"></div>
      </div>
    </div>
  );
}

export default Home;
