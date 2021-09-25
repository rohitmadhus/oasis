import React from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";

export default function Product(props) {
  const { product } = props;
  return (
    <div className="card">
      <Link to={`/product/${product._id}`}>
        {/* 680 * 830 */}
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">{product.price} Rs</div>
      </div>
    </div>
  );
}
