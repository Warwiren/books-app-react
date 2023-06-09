import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAKIijcV5Qbxm5kTkHtqzo47915yWFS_2o&maxResults=30&startIndex=${startIndex}`
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  const handleNextClick = () => {
    setStartIndex(startIndex + 10);
    searchBook({ key: "Enter" });
  };

  const handlePrevClick = () => {
    setStartIndex(startIndex - 10);
    searchBook({ key: "Enter" });
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>On test notre BDD livres</h1>
        </div>
        <div className="row2">
          <h2>Trouve ton livre</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter your book name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              {/* <i className="fas fa-search"></i> */}
              search
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <Card book={bookData} />
      </div>
      <div className="btn-group">
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </>
  );
};

export default Main;
