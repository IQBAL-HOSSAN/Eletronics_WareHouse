import React, { useState, useEffect } from "react";

const useInventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://boiling-escarpment-44673.herokuapp.com/api/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => setProducts(data));
  return [products, setProducts];
};

export default useInventory;
