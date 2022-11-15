import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import { useState } from "react";

function ProductDelete({ id, title, imagine, price, rating, operation }) {
  const [isDeleted, setIsDeleted] = useState(false);
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
        imagine: imagine,
        price: price,
        rating: rating,
        operations: operation,
      },
    });
  };
  console.log(id);

  return (
    <div>
      {isDeleted ? (
        <div></div>
      ) : (
        <div className="product-delete">
          <div className="">
            <p>{title}</p>
            <p className="">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
          </div>

          <img src={imagine} />

          <span onClick={deleteProduct} className="delete">
            Delete
          </span>
        </div>
      )}
    </div>
  );
}

export default ProductDelete;
