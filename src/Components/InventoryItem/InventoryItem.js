import React from "react";
import { Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const InventoryItem = (props) => {
  const { _id, img, name, desc, price, quantity, sold, supplierName } =
    props.item;
  const navigate = useNavigate();
  const navigateToInventoryItemDetails = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <Col>
      <Card className="mb-4">
        <Card.Img className="p-3" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <p>
            <strong>Price:</strong> $ {price}
          </p>
          <p>
            <strong>Quantity:</strong> {quantity}
          </p>
          <p>
            <strong>Sold:</strong> {sold}
          </p>
          <p>
            <strong>SupplierName:</strong> {supplierName}
          </p>
          <Button
            onClick={() => navigateToInventoryItemDetails(_id)}
            className="btn btn-danger"
          >
            Stock Update
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InventoryItem;
