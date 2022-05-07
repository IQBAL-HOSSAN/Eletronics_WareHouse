import { useEffect, useState } from "react";

const useInventoryDetails = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://boiling-escarpment-44673.herokuapp.com/api/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [product, setProduct];
};

export default useInventoryDetails;
