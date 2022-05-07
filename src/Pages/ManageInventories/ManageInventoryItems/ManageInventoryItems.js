import React from "react";
import "./ManageInventoryItems.css";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ManageInventoryItems = (props) => {
  const { img, name, desc, price, quantity, supplierName } = props.item;

  const handleDeleItemBtn = () => {
    console.log("delete");
  };
  return (
    <div className="d-flex p-2 shadow rounded mb-4">
      <img src={img} height="200px" width="250px" alt="" />
      <div className="mx-3">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
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
        <Button onClick={handleDeleItemBtnnpm } className="btn btn-danger me-5">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ManageInventoryItems;
