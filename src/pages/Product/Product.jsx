import React, { useContext, useEffect, useState } from "react";
import image from "../../assets/product_29.png";
import image1 from "../../assets/product_30.png";
import image2 from "../../assets/product_31.png";
import image3 from "../../assets/product_33.png";

import star_dull from "../../assets/star_dull_icon.png";
import star from "../../assets/star_icon.png";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import ProductDescriptionReviews from "../../components/ProductDescriptionReviews/ProductDescriptionReviews";
import { CartContext } from "../../context/CartContext/CardContextProvider";

const Product = () => {
  // const [mainImage, setMainImage] = useState(image);
  // const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("S");

  const data = useLocation();
  const [category, id] = data.pathname.split("/").slice(-2);
  console.log(category, id);

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        `http://localhost:5000/${category}?id=${id}`
      );
      if (data.status === 200) {
        setProduct(data.data[0]);
      }
    })();

    return () => {};
  }, []);
  console.log({ product });

  function updateSize(size) {
    setSize(size);
  }

  return (
    <>
      <div className="product-page">
        <div className="product-details">
          <div className="product-details-left">
            <div className="product-img-list">
              <img
                src={product.image}
                alt=""
                onClick={() => {
                  setMainImage(product.image);
                }}
              />
              <img
                src={product.image}
                alt=""
                onClick={() => {
                  setMainImage(product.image);
                }}
              />
              <img
                src={product.image}
                alt=""
                onClick={() => {
                  setMainImage(product.image);
                }}
              />
              <img
                src={product.image}
                alt=""
                onClick={() => {
                  setMainImage(product.image);
                }}
              />
            </div>
            <div className="product-main-img">
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className="product-details-right">
            <p className="product-name">{product.name}</p>
            <div className="product-rating">
              <div className="star-container">
                {Array.from({ length: 4 }).map((_, index) => (
                  <img key={index} src={star} alt="" />
                ))}
                {/* 
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" /> */}
                <img src={star_dull} alt="" />
              </div>
              <p>(129)</p>
            </div>
            <p className="product-specification">White Plush Bunny, kids</p>
            <div className="price">
              <p>Price : </p>
              <p className="new-price">$80</p>
              <p className="old-price">$120</p>
            </div>
            <div className="sizes">
              <h3>Select Size</h3>
              <div className="size-container">
                <div
                  className={size === "S" ? "size active" : "size"}
                  onClick={() => updateSize("S")}
                >
                  S
                </div>
                <div
                  className={size === "M" ? "size active" : "size"}
                  onClick={() => updateSize("M")}
                >
                  M
                </div>
                <div
                  className={size === "L" ? "size active" : "size"}
                  onClick={() => updateSize("L")}
                >
                  L
                </div>
                <div
                  className={size === "XL" ? "size active" : "size"}
                  onClick={() => updateSize("XL")}
                >
                  XL
                </div>
                <div
                  className={size === "XXL" ? "size active" : "size"}
                  onClick={() => updateSize("XXL")}
                >
                  XXL
                </div>
              </div>
            </div>
            <div className="quantity">
              <p>Quantity :</p>
              <div className="quantity-container">
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  -
                </button>
                <p className="quantity-count">{quantity}</p>
                <button
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="add-to-cart">
              <button
                className="add-to-cart-button"
                onClick={() => {
                  addToCart({ ...product, quantity, size });
                }}
              >
                Add to Cart
              </button>
            </div>
            <div className="product-category-detail">
              <h3>Category : </h3>
              <p> Women, T-Shirt , Crop Top</p>
            </div>
            <div className="product-category-tags">
              <h3>Tags : </h3>
              <p> Modern, Latest</p>
            </div>
          </div>
        </div>
      </div>
      <ProductDescriptionReviews />
    </>
  );
};

export default Product;
