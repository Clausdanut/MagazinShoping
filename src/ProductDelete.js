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
    <>
      {isDeleted ? (
        <div></div>
      ) : (
        <tr className="product-del-table">
          <td> {title}</td>
          <td> {rating}</td>
          <td> {price}</td>
          <td>
            <img src={imagine} />{" "}
          </td>
          <td onClick={deleteProduct} className="delete">
            Delete
          </td>
        </tr>
      )}
    </>
  );
}

export default ProductDelete;
