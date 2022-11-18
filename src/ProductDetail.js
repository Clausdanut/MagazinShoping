import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import "./App.css";
import { useStateValue } from "./StateProvider";

function ProductDetail({
  id,
  title,
  image,
  price,
  rating,
  operation,
  slug,
  overlay,
  detaliu,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEdit, setIsEdu] = useState(false);
  async function deleteProduct() {
    const products = db.collection("products");
    const doc = products.where("id", "==", id);
    if (!isDeleted) {
      doc.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.delete();
          setIsDeleted(true);
        });
      });
    }
  }
  useEffect(() => {
    getData();
  }, []);

  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
  const { productId } = useParams();
  const [data, setData] = useState();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useStateValue();
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
      const thisProduct = helperArr.find(
        (prod) => convertToSlug(prod.nume) === convertToSlug(productId)
      );
      setProduct(thisProduct);
      setData(helperArr);
      setIsLoading(false);
    }
  }
  const addToBasket = () => {
    console.log(id);
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        image: product.imagine,
        price: product.pret,
        rating: product.rating,
        operations: product.operation,
        title: product.nume,
        detaliu: product.detaliu,
      },
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <div className="product_tabel">
            <img src={product.imagine} />
            <div className="table">
              <table>
                <caption class="text30">Despre Produs</caption>
                <thead>
                  <tr>
                    <th>Nume</th>
                    <th>Descriere</th>
                    <th>Pret</th>
                    <th>Rating</th>
                  </tr>
                </thead>

                <tr>
                  <td>{product.nume}</td>
                  <td>
                    <strong>{product.detaliu}</strong>
                  </td>
                  <td>
                    {product.pret}
                    <small>$</small>
                  </td>
                  <td>
                    {" "}
                    <div className="product__rating2">
                      {Array(product.rating)
                        .fill()
                        .map((l, i) => (
                          <p key={i}>⭐</p>
                        ))}
                    </div>
                  </td>
                </tr>
              </table>
              <button className="add_to__cart" onClick={addToBasket}>
                Add to Basket
              </button>
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
            <div class="column-ultima">
              <p className="paragraf20">© 2023 by Visage.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
