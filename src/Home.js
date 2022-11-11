import React from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";
import Svg1 from "./Svg1";
import Svg2 from "./Svg2";
import Svg3 from "./Svg3";

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
      <div className="home__container boxed">
        <div class="section-header-image">
          <div className="coloana1">
            <h1 className="text1">
              <span className="color_15">
                <span className="color_14">Reutilizabile</span>
              </span>
              <br></br>
              <span className="color_15"></span>
              <span className="text2">Măști de față</span>
            </h1>
            <button className="button" type="button">
              Click Me!
            </button>
          </div>
        </div>

        <div className="section-products">
          <div className="text4">
            <h2 className="font_2"></h2>
            <span className="text3">Most Popular</span>
            <div className="gelria1"></div>
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
        <div className="text4">
          <h2 className="font_2"></h2>
          <span className="text3">Fits All</span>
          <div className="gelria1"></div>
        </div>
        <div className="section-cards-1">
          <div class="container">
            <div className="row">
              <div className="col-m col3">
                <Svg3 className="svg1"></Svg3>
                <h1 className="text7">Washable</h1>
                <p className="paragraf1">
                  I'm a paragraph. Click here to add your own text and edit me.
                </p>
              </div>

              <div className="col-m col4">
                <Svg2 className="svg2"></Svg2>
                <h1 className="text7">3 Fabric Layers </h1>
                <p className="paragraf1">
                  I'm a paragraph. Click here to add your own text and edit me.
                </p>
              </div>

              <div className="col-m col3">
                <Svg1 className="svg3"></Svg1>
                <h1 className="text7">Fits All</h1>
                <p className="paragraf1">
                  I'm a paragraph. Click here to add your own text and edit me.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text4">
          <h2 className="font_2"></h2>
          <span className="text3">Ce susținem noi</span>
          <div className="gelria1"></div>
        </div>

        <div className="section-cards-2">
          <div className="container contain2">
            <div className="row1">
              <div className="col">
                <p className="text6">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </p>
              </div>

              <div class="col">
                <img
                  className="img6"
                  src="https://static.wixstatic.com/media/5743b5_8f39b268f4bf477ca1b79062233ff327~mv2.jpg/v1/fill/w_892,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5743b5_8f39b268f4bf477ca1b79062233ff327~mv2.jpg"
                ></img>
              </div>
            </div>
          </div>
        </div>

        <div className="section-images"></div>
        <div class="footer"></div>
      </div>
    </div>
  );
}

export default Home;
