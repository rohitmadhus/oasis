import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productList } from "../actions/product-actions";

import Product from "../components/product";
import LoadingBox from "../components/loading-box";
import MessageBox from "../components/message-box";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.productList);
  const { loading, error, products } = state;
  // use effect when component mount to page will only once
  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
