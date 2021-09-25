import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cart-action";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  //Good practice to add dependencies list in use effect
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1>Cart screen</h1>
      <p>
        Add to cart : product id : {productId} Qty : {qty}
      </p>
    </div>
  );
}
