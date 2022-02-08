import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import Header from "./Header";
import myData from "../data.json";

function Detail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const productDetails = myData.data.find((i) => i.uuid === id);
    if (productDetails) setProduct(productDetails);
  }, [id]);
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-lg-6">
          <img
            src={`${product?.imageUrls}`}
            height="300"
            className="img-thumbnail"
            alt="images"
          />
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-3 my-2">Name:</div>
            <div className="col-lg-9 my-2">{product?.name}</div>
            <div className="col-lg-3 my-2">Rank:</div>
            <div className="col-lg-9 my-2">{product?.rank}</div>
            <div className="col-lg-3 my-2">Status:</div>
            <div className="col-lg-9 my-2">{product?.status}</div>
            <div className="col-lg-3 my-2">Key word:</div>
            <div className="col-lg-9 my-2">{product?.seo}</div>
            <div className="col-lg-3 my-2">Create at:</div>
            <div className="col-lg-9 my-2">{product?.createdAt}</div>
            <div className="col-lg-3 my-2">Description:</div>
            <div className="col-lg-9 my-2">{product?.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
