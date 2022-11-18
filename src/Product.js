import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import { useState } from "react";

function Product({
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
        detaliu: detaliu,
      },
    });
  };
  console.log(id);

  return (
    <div>
      {isDeleted ? (
        <div className="products"></div>
      ) : (
        <div className="product">
          <a className="slug1" href={`/products/${slug}`}>
            {isHovered ? <img src={overlay} /> : <img src={image} />}
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
            
          </a>
          <button className="add_to__cart" onClick={addToBasket}>
            Add to Basket
          </button>
        </div>
      )}
    </div>
  );
}

export default Product;
