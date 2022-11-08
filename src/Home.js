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
          <span className="text3">Despre Masca</span>
          <div className="gelria1"></div>
        </div>
        <div className="section-cards-1">
          <div class="container">
            <div className="row">
              <div className="col-m">
                <img
                  className="img2"
                  src="https://www.sublimet.com/6237-large_default/reusable-hygienic-black-face-mask.jpg"
                ></img>
                <h1>Protecţie:</h1>
                <p className="paragraf1">
                  <ul>
                    <li>Țesătură hidrofugata pe ambele părți </li>
                    <li> Tratament antibacterian</li>
                    <li>APPLIFRESH BC. </li>
                    <li> Agent microbian permanent static. Tehnologia C6</li>
                  </ul>
                </p>
              </div>

              <div className="col-m">
                <img
                  className="img2"
                  src="https://www.globalvifel.com/1592-large_default/reusable-hygienic-black-face-mask.jpg"
                ></img>
                <h1>Informații suplimentare</h1>
                <p className="paragraf1">
                  <ul>
                    <li> Eficiență de filtrare cu aerosoli: 96%.</li>
                    <li>Eficiența filtrării particulelor: 95%. </li>
                    <li> Încercări efectuate conform UNE-EN 13274.</li>
                    <li>
                      Determinarea stabilității dimensionale conform ISO 5077:
                      2008.
                    </li>
                    <li>
                      {" "}
                      Garanta protectie impotriva aerosolilor solizi si lichizi.
                    </li>
                    <li>
                      Respectă tot ceea ce este specificat în noul standard
                      UNE-0065: 2020 și standardul european CWA 17553{" "}
                    </li>
                  </ul>
                </p>
              </div>

              <div className="col-m">
                <img
                  className="img2"
                  src="https://www.sublimet.com/6237-large_default/reusable-hygienic-black-face-mask.jpg"
                ></img>
                <h1>Mască de față neagră igienă reutilizabilă</h1>
                <p className="paragraf1">
                  Măștile de față reutilizabile sunt realizate din țesătură
                  impermeabilă și respectă reglementările UNE 0065/20. Are si un
                  tratament antibacterian cu filtrare 92%. Personalizare prin
                  transfer sau vinil. NU SE ADEPTA pentru sublimare.
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
                  Purtarea măștii este una dintre măsurile de prevenire și
                  limitare pentru răspândirea anumitor boli respiratorii,
                  inclusiv cea determinată de noul coronavirus. Cu toate
                  acestea, doar utilizarea unei măști nu este suficientă pentru
                  a asigura un nivel adecvat de protecție și ar trebui adoptate
                  și alte măsuri la fel de relevante. Folosirea măștii trebuie
                  combinată cu igiena adecvată a mâinilor și cu alte măsuri de
                  prevenire si control a transmiterii noului coronavirus de la
                  om la om. Purtarea măștii, atunci când nu este indicată, poate
                  provoca costuri inutile, încărcarea achizițiilor și poate crea
                  un fals sentiment de securitate care poate duce la neglijarea
                  altor măsuri esențiale, cum ar fi practicile de igienă a
                  mâinilor. Mai mult decât atât, utilizarea incorectă a unei
                  măști poate afecta eficacitatea acesteia în reducerea riscului
                  de transmitere.
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
