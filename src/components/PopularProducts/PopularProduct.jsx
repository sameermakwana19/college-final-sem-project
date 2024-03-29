import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const PopularProduct = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:5000/popular");
        setProducts(res.data);
      } catch (error) {
        // throw Error("Error has occurred while fetching the data.");
        console.log({ error });
        console.log(error.msg);
        // alert(error);
      }
    })();

    return () => {};
  }, []);

  // console.log(products);
  // (async () => {
  //   const res = await axios.get("http://localhost:5000/popular");
  //   setProducts(res.data);
  // })();

  return (
    <>
      <div className="popular">
        <h2 className="popular-heading">
          Popular Products
          <hr />
        </h2>
        <div className="popular-products">
          {products?.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
          {/* {smaeer} */}

          {!products && <h2>Loading ....</h2>}
        </div>
      </div>
    </>
  );
};

export default PopularProduct;
