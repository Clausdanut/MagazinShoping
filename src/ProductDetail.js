import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "./firebase";

function ProductDetail() {
  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
  const { productId } = useParams();
  const [data, setData] = useState();
  const [product, setProduct] = useState();
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
      const thisProduct = helperArr.find(
        (prod) => convertToSlug(prod.nume) === convertToSlug(productId)
      );
      setProduct(thisProduct);
      setData(helperArr);
      console.log(thisProduct);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="product-details">
          <h1>{product.nume}</h1>
          <img src={product.imagine} />
          <h1>{product.pret}<small>$</small></h1>
         
          <div className="product__rating">
              {Array(product.rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
