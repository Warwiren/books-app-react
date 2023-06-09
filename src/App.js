import { useState, useEffect } from "react";
import Main from "./Components/Main";
import "./Components/style.css";

function App() {
  return (
    <div className="App">
      {/* <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul> */}
      <Main />
    </div>
  );
}

export default App;
