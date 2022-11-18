import React from "react";
import "./Home.css";
import Contact from "./Contact";
import Product from "./Product";
import { db, STORAGE } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";
import Create from "./Create";
import { Delete } from "@material-ui/icons";
import ProductDelete from "./ProductDelete";
import { getStorage } from "firebase/storage";

const AdminProduct = (props) => {
  const [showForm, setShowForm] = useState(false);
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
  const [nume, setName] = useState("");
  const [detaliu, setdetaliu] = useState("");
  const [image, setImagine] = useState("");
  const [pret, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const [loader, setLoader] = useState(false);

  return (
    <div class="container">
      <table>
        <tr className="product-del-table">
          <td>Nume</td>
          <td>detaliu</td>
          <td>Rating</td>
          <td>Pret</td>
          <td>Imagine</td>
          <td>Delete</td>
        </tr>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          data.map((product, key) => {
            return (
              <ProductDelete
                key={key}
                id={product.id}
                title={product.nume}
                detaliu={product.detaliu}
                price={product.pret}
                rating={product.rating}
                imagine={product.imagine}
              />
            );
          })
        )}
      </table>
      {showForm && <Create></Create>}
    </div>
  );
};

export default AdminProduct;
