import { useState, useEffect } from "react";
import Card from "./components/Cards/Cards";
import "./App.css";
const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = async () => {
    const jsonData = await fetch("https://dummyjson.com/products?limit=0").then(
      (res) => res.json()
    );
    setProducts(jsonData.products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const pageSize = 10;
  const pageCount = Math.ceil(products.length / pageSize);
  const start = currentPage * pageSize;
  const end = start + pageSize;
  return !products.length ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      <div className="pages">
        <button
          className="arrow"
          onClick={() =>
            currentPage > 0 ? setCurrentPage((prev) => prev - 1) : ""
          }
        >
          ◀️
        </button>
        {[...Array(pageCount).keys()].map((n) => (
          <button
            className={`page ${n === currentPage ? "active" : ""}`}
            key={n}
            onClick={() => setCurrentPage(n)}
          >
            {n + 1}
          </button>
        ))}
        <button
          className="arrow"
          onClick={() =>
            currentPage < pageSize ? setCurrentPage((prev) => prev + 1) : ""
          }
        >
          ▶️
        </button>
      </div>
      <div className="container">
        {products.slice(start, end).map((p) => (
          <Card key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  );
};

export default App;
