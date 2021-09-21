import React from "react";
import { Link } from "react-router-dom";

import Rating from "../components/Rating";
import data from "../constants/data";
import ErrorScreen from "./ErrorScreen";

export default function ProductScreen(props) {
  const product = data.products.find(
    (product) => product._id === props.match.params.id
  );
  console.log(product);
  console.log(props.match.params.id);
  if (!product) {
    return <ErrorScreen></ErrorScreen>;
  }
  return (
    <div>
      <Link to="/">back to home screen</Link>
      <div className="row top">
        <div className="col-2">
          <img
            className="large"
            src={"../" + product.image}
            alt={product.name}
          ></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>Price : {product.price} Rs</li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">{product.price} Rs</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
