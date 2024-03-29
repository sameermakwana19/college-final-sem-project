import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import OfferBanner from "../../components/OfferBanner/OfferBanner";
import MenBannerImage from "../../assets/product_22.png";
import WomenBannerImage from "../../assets/product_9.png";
import KidsBannerImage from "../../assets/product_29.png";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";

const availableCategories = ["men", "women", "kids"];

const ShopCategory = () => {
  // const [endpoint, setEndpoint] = useState();
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const { pathname } = useLocation();

  const endpoint = pathname.split("/").at(-1);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:5000/${endpoint}`);
        setError();
        setData(res.data);
        setSearchParams();
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [endpoint]);

  let bannerElement = {
    men: (
      <OfferBanner
        heading={"Flat 50% off"}
        hours={12}
        minutes={50}
        image={MenBannerImage}
        buttonText={"Explore Now"}
      />
    ),
    women: (
      <OfferBanner
        heading={"Flat 70% off"}
        hours={12}
        minutes={50}
        image={WomenBannerImage}
        buttonText={"Explore Now"}
      />
    ),
    kids: (
      <OfferBanner
        heading={"Flat 60% off"}
        hours={12}
        minutes={50}
        image={KidsBannerImage}
        buttonText={"Explore Now"}
      />
    ),
  };
  console.log({ data });

  useEffect(() => {
    if (searchParams.get("sortby") === "price") {
      const demo = [...data];
      // alert(JSON.stringify(demo));
      demo.sort((a, b) => a.new_price > b.new_price);
      console.log(demo);
      setData(demo);
    }
  }, [searchParams.get("sortby")]);

  console.log({ sortby: searchParams.get("sortby") });

  return (
    <>
      {bannerElement[endpoint]}
      <div className="shop-category">
        <div className="shop-category-header">
          <p className="shop-category-heading">{endpoint}'s Collection</p>
          <div className="sort-container">
            <select
              className="sort-by"
              value={searchParams.get("sortby") ?? ""}
              onChange={(e) => {
                // alert(e.target.value);
                if (!e.target.value) {
                  console.log("no - value");
                  setSearchParams();
                } else {
                  setSearchParams({ sortby: e.target.value });
                }
              }}
            >
              <option value="">Sort By </option>
              <option value="price">price</option>
              <option value="date">date</option>
              <option value="rating">rating</option>
            </select>
          </div>
        </div>
        <div className="products-container">
          {error && <h2>{error}</h2>}
          {!error &&
            data.map((product) => (
              <Link to={product.id} key={product.id}>
                <ProductCard {...product} />
              </Link>
            ))}
        </div>
      </div>
      <div className="shop-category-explore-more">
        <button className="explore-more-btn">Explore More</button>
      </div>
    </>
  );
};

export default ShopCategory;

// console.log(category);

// if (availableCategories.indexOf(category) === -1) {
//   throw Error("404 - NO PAGE FOUND");
// }
