import React from 'react';
import data from './constants/data'

function App() {
  return (
    <div className="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="index.html">EaseMyCart</a>
      </div>
      <div>
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign in</a>
      </div>
    </header>
    <main>
      <div className="row center">
        {data.products.map((product) => (
          <div key={product._id} className="card">
          <a href={`/products/${product._id}`}>
            {/* 680 * 830 */}
            <img className="medium" src={product.image} alt={product.name} />
          </a>
          <div className="card-body">
            <a href={`/products/${product._id}`}><h2>{product.name}</h2></a>
            <div className="rating">
              <span><i className="fa fa-star"></i></span>
              <span><i className="fa fa-star"></i></span>
              <span><i className="fa fa-star"></i></span>
              <span><i className="fa fa-star-half-o"></i></span>
              <span><i className="fa fa-star-o"></i></span>
            </div>
            <div className="price">{product.price} Rs</div>
          </div>
        </div>)
        )
        
        }
        
      </div>
    </main>
    <footer className="row center">All rights reserved</footer>
  </div>
  );
}

export default App;
