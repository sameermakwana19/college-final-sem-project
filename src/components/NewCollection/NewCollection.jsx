import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const NewCollection = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:5000/new-collection");
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {};
  }, []);

  return (
    <>
      <div className="popular">
        <h2 className="popular-heading">
          New Collections
          <hr />
        </h2>
        <div className="popular-products">
          {products?.map((item) => (
            <Link to={`kids/29`} key={item.id}>
              <ProductCard {...item} />
            </Link>
          ))}

          {!products && <h2>Loading ....</h2>}
        </div>
      </div>
    </>
  );
};

export default NewCollection;
