import { Link } from "react-router-dom";

import React from "react";

const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">OS</Link>
        </li>
        <li>
          <Link to="/products/p2">Design Pattern</Link>
        </li>
        <li>
          <Link to="/products/p3">Network</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
