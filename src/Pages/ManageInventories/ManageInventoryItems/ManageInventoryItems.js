import React from "react";
import "./ManageInventoryItems.css";
import Button from "react-bootstrap/Button";
import useInventory from "../../../hooks/useInventory";

const ManageInventoryItems = (props) => {
  const { _id, img, name, desc, price, quantity, supplierName } = props.item;
  const [products, setProducts] = useInventory([]);

  const handleDeleItemBtn = (id) => {
    const url = `https://boiling-escarpment-44673.herokuapp.com/api/products/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        // Indicates the content
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
        const remaining = products.filter((product) => product._id !== id);
        setProducts(remaining);
      });
    console.log(products);
  };

  return (
    <div className="d-flex p-2 shadow rounded mb-4">
      <img src={img} height="200px" width="250px" alt="" />
      <div className="mx-3">
        <h3>{name}</h3>
        <p>{desc}</p>
        <p>
          <strong>Price:</strong> $ {price}
        </p>
        <p>
          <strong>Quantity:</strong> {quantity}
        </p>
        <p>
          <strong>SupplierName:</strong> {supplierName}
        </p>
      </div>
      <div className="mi-delete-btn d-flex  align-items-center justify-content-end">
        <Button
          onClick={() => handleDeleItemBtn(_id)}
          className="btn btn-danger me-5"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ManageInventoryItems;
