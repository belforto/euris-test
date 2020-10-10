import React, { useState, useEffect } from "react";
import { deleteRequest } from "../api/addProduct";
import Reviews from "./Reviews";
import DataVisual from "./DataVisual";

export default function ScreenAllProducts(props: any) {
  const [reload, setReload] = useState(false);
  const [layout, setLayout] = useState("");

  const [data, setData] = useState();

  const [page, setPage] = useState(1);
  const [elements, setElements] = useState(4);
  let url =
    "http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products/?page=" +
    page +
    "&elements=" +
    elements;

  const fetchData = async () => {
    let res = await fetch(url);
    let resData = await res.json();
    console.log("render", url, elements, resData);
    setData(resData.list);
  };

  useEffect(() => {
    fetchData();
  }, [reload, elements, page]);

  const deleteFunc = async (item: any) => {
    await deleteRequest(item);
    setReload(!reload);
  };

  const handlePagination = async (item: any) => {
    // console.log(item)
    setElements(item);
  };
  const handlePageNum = async (item: any) => {
    // console.log(item)
    setPage(item);
  };

  const paginationSection = () => {
    return (
      <div>
        Number of results per page
        <button className="button is-small" onClick={x => handlePagination(5)}>
          5{" "}
        </button>
        <button className="button is-small" onClick={x => handlePagination(15)}>
          15{" "}
        </button>
        <button
          className="button is-small"
          onClick={x => handlePagination(555)}
        >
          {" "}
          All
        </button>
        <hr />
        Page Number
        <button className="button is-small" onClick={x => handlePageNum(1)}>
          1{" "}
        </button>
        <button className="button is-small" onClick={x => handlePageNum(2)}>
          2{" "}
        </button>
        <button className="button is-small" onClick={x => handlePageNum(3)}>
          {" "}
          3
        </button>
      </div>
    );
  };

  const layoutSection = () => {
    return (
      <div className="notification is-primary mt-4">
        Change layout
        <br />
        <div className="select">
          <select
            onChange={x => {
              setLayout(x.target.value);
            }}
          >
            <option value="">Grid</option>
            <option value="is-full">Panel</option>
          </select>
        </div>
      </div>
    );
  };

  const allProducts = (data: any) => {
    return data.map((item: any, i: any) => (
      <div key={i} className={"column " + layout}>
        <div className="card mt-5">
          <header className="card-header">
            <p className="card-header-title">{item.data.title}</p>
            <p> Prezzo : {item.data.price} €</p>
            <a href="#" className="card-header-icon" aria-label="more options">
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div className="card-content">
            <div className="content">
              {item.data.description}

              <hr />
              {item.data.category}
            </div>

            <div className="block is-pulled-right">
              <span className="tag is-danger">
                Delete
                <button
                  className="delete is-small"
                  onClick={x => {
                    deleteFunc(item.id);
                  }}
                ></button>
              </span>
            </div>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              {" "}
              {item.data.reviews && <Reviews reviews={item.data.reviews} />}
            </p>
            <p className="card-footer-item"> {item.data.employee}</p>
          </footer>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {layoutSection()}
      {paginationSection()}
      
      <div className="columns is-multiline">{data && allProducts(data)}</div>
    </div>
  );
}
