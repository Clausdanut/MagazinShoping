import React from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";
import Svg1 from "./Svg1";
import Svg2 from "./Svg2";
import Svg3 from "./Svg3";
import masca from "./Imagini/Poza1.jpg";
import masca2 from "./Imagini/Poza2.jpg";
import masca3 from "./Imagini/Poza3.jpg";
import masca4 from "./Imagini/Poza4.jpg";
import masca5 from "./Imagini/Poza5.jpg";
import masca6 from "./Imagini/Poza6.jpg";
import masca7 from "./Imagini/Poza7.jpg";
import masca8 from "./Imagini/Poza8.jpg";

function Home() {
  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
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
                    slug={convertToSlug(product.nume)}
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

        <div className="section-images">
          <div className="text4">
            <h2 className="font_2"></h2>
            <span className="text3">Tag Us on Your Daily Cruise #visage</span>
            <div className="gelria1"></div>
          </div>
          <div className="col10">
            <img src={masca} className="masca1" alt="" />

            <img src={masca2} className="masca1" alt="" />

            <img src={masca3} className="masca1" alt="" />

            <img src={masca4} className="masca1" alt="" />

            <img src={masca5} className="masca1" alt="" />

            <img src={masca6} className="masca1" alt="" />

            <img src={masca7} className="masca1" alt="" />

            <img src={masca8} className="masca1" alt="" />
            <img src="./Imagini/Poza7.jpg" alt="" />

            <img
              src="datafile:///C:/Users/claud/Downloads/Face%20Mask%20Shop%20Website%20Template%20_%20WIX_files/01.jpg:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAD8DASIAAhEBAxEB/8QAGgABAAMAAwAAAAAAAAAAAAAAAAEDBQIEBv/EAC4QAAEDAgMIAQMFAQAAAAAAAAECAxEABCFRkhITFDFBU5HRIjJSgWFicaHwsf/EABkBAQADAQEAAAAAAAAAAAAAAAABAgUEBv/EACIRAAECBQUBAQAAAAAAAAAAAAABAgUREhRRFVJhoeFiA//aAAwDAQACEQMRAD8A9nv3u85rNN+93nNZqulYs1PUUpgs373ec1mm/e7zms1XSk1FKYLN+93nNZpv3u85rNV0pNRSmCzfvd5zWab97vOazVdKTUUpgiRmPNJGY81vW9lbXTSlNkyFAKluOgOEjIjzVaLeyXeOWyXDtogGEdYk4xHIj+8q6rTkzdS+e/DFkZjzSRmPNa91b2doppD7hClJKjCJ+IiSIGZT+JyrjeW9vauIbUJW4FKR9I+kAnnzOPSlpyS2I1LJGd+GVIzHmkjMea2La2trh51tKVJ3ZgkpHyxIkflKhjlU21va3aVKZUSCkKSSiJB5HEZg0tOQ6IUrJWd+GNIzHmkjMea2VW9mm53O0qQQlXw5KMbOMda5XNmwwhIkFxailAIEHrlkDS05I1L578OxbXDNrbobQhwxEkmekc+vQV1muEZvXLpCHQpUmOeJ58zh/A9Vg8O3krWr3Th2sla1e6tdJgppz9xt3qrS9UhTrbgVGy5GPx5xkcQMYziDU3z7d2IlaQmcNkHa5EY8xiP90wuGZ+06z7qeGa+1Ws+6XSYJSHvRZo43rV1m3eeWneK3hmCANkSTH64qP9VNs6zapWEJcV0G115nH8qNYHDtZK1q904dvJWtXul03AdD/wBHLNXG+txhV4i4l6UiYgRPL/k/6am9dau7ctqSsGeXQ49a8/w7eStavdNw3+/Wr3S6bgjTn7i2lKVxGuKUpQClKUApSlAf/9k="
              alt=""
            />
          </div>
        </div>
        <div class="footer">
          <div class="column">
            <h2 className="paragraf6">VISAGE</h2>
            <p></p>
          </div>
          <div class="column">
            <h2 className="paragraf2">Shop</h2>
            <div className="text13">
              <p>Shop all</p>
              <p>Adults</p>
              <p>Kids</p>
            </div>
          </div>
          <div class="column">
            <h2 className="paragraf2">Policy</h2>
            <div className="text13">
              <p>Shipping & Returns</p>
              <p>Store Policy</p>
              <p>Payment Methods</p>
              <p>FAQ</p>
            </div>
          </div>
          <div class="column">
            <h2 className="paragraf2">Contact Us</h2>
            <div className="text13">
              <p>Tel. 123-456-7890</p>
              <p>info@mysite.com</p>
              <div>
                <ul className="ul1">
                  <img
                    src="https://static.wixstatic.com/media/4057345bcf57474b96976284050c00df.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4057345bcf57474b96976284050c00df.png"
                    alt=""
                  />
                  <img
                    src="https://static.wixstatic.com/media/e1aa082f7c0747168d9cf43e77046142.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e1aa082f7c0747168d9cf43e77046142.png"
                    alt=""
                  />
                  <img
                    src="https://static.wixstatic.com/media/9e47c827082f40bdb54d0cd16c3b28f6.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e47c827082f40bdb54d0cd16c3b28f6.png"
                    alt=""
                  />
                </ul>
              </div>
            </div>
          </div>
          <div class="column-ultima"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
