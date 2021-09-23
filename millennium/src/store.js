import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";

const initialState = {};
const reducer = combineReducers({
  productList: productListReducer,
});

const composeEnhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhanser(applyMiddleware(thunk))
);

export default store;
