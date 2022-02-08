import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Header from "./Header";
import myData from "../data.json";

const pagination = (number) => {
  const arrayPage = [];
  for (let i = 1; i <= number; i++) {
    arrayPage.push(i);
  }
  return arrayPage;
};

function ListProduct() {
  const numberPagesize = 6;
  const defaultProducts = myData.data.slice(0, numberPagesize);
  const [currentPage, setCurrentPage] = useState(1);
  const [keyWord, setKeyWord] = useState("");
  const [products, setProducts] = useState(defaultProducts);
  const numberPage = Math.ceil(myData.data.length / numberPagesize);
  const page = useMemo(() => pagination(numberPage), [numberPage]);
  const indexOfLastNews = currentPage * numberPagesize;
  const indexOfFirstNews = indexOfLastNews - numberPagesize;

  useEffect(() => {
    console.log(indexOfLastNews, indexOfFirstNews);
    const nextData = myData.data.slice(indexOfFirstNews, indexOfLastNews);
    setProducts(nextData);
  }, [currentPage]);

  useEffect(() => {
    if (!keyWord) {
      setProducts(defaultProducts);
    }
  }, [keyWord]);

  const handleSearch = () => {
    if (keyWord) {
      let result = myData.data.filter(
        (el) =>
          String(el.name).toLowerCase().indexOf(String(keyWord).toLowerCase()) >
          -1
      );
      setProducts(result);
    } else {
      setProducts(defaultProducts);
    }
  };

  const handleChangePage = (value) => setCurrentPage(value);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && keyWord) {
      handleSearch();
    }
  };

  return (
    <>
      <Header />
      <div className="row">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name..."
            aria-describedby="button-addon2"
            onChange={(e) => setKeyWord(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {products.length
          ? products.map((product, index) => (
              <div key={index} className="col-lg-4 my-3">
                <div className="card">
                  <img
                    src={`${product.imageUrls}`}
                    height="300"
                    className="card-img-top"
                    alt="images"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">
                      {product.description.slice(0, 30)}...
                    </p>
                    <Link to={`/${product.uuid}`} className="btn btn-primary">
                      View Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : "No products"}
        <nav aria-label="...">
          <ul className="pagination pagination-sm">
            {page.length && !keyWord
              ? page.map((i, index) => (
                  <li
                    key={index}
                    className={`page-item ${i === currentPage ? "active" : ""}`}
                    aria-current="page"
                  >
                    <span
                      className="page-link"
                      onClick={() => handleChangePage(i)}
                    >
                      {i}
                    </span>
                  </li>
                ))
              : ""}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default ListProduct;
