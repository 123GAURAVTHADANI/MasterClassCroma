import { useEffect, useState } from "react";
import axios from "axios";

function Card({ item }) {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <img src={item.image} alt={item.title} />
    </div>
  );
}
function DynamicProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <>
      <h2>Breathe Fresh with Air Purifiers</h2>
      <div className="dynamic__products">
        {products &&
          products.map((item) => {
            return <Card item={item} />;
          })}
      </div>
    </>
  );
}
export default DynamicProducts;
