import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import { useState } from "react";

function Product({ id, title, image, price, rating, operation ,slug}) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEdit, setIsEdu] = useState(false);
  const [state, dispatch] = useStateValue();
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
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
        operations: operation,
        title: title,
      },
    });
  };
  console.log(id);

  return (
    <div>
      {isDeleted ? (
        <div className="products">

        </div>
      ) : (
        <a  className="slug1" href={`/products/${slug}`}>
        <div className="product">
            <img src={image} />
          <div className="product__info">
            <p className="product__name">{title}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
          </div>

        

          <button className="add_to__cart" onClick={addToBasket}>Add to Basket</button>

        </div>
        </a>
      )}
    </div>
  );
}

export default Product;
