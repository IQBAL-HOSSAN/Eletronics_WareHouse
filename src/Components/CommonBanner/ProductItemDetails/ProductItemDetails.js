import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const InventoryItemDetails = (props) => {
  const { img, name, desc, price, quantity, supplierName } = props.item;
  console.log(props);
  const handleStockBtn = () => {};
  return (
    <Row xs={2} md={3} lg={4} xl={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
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
                <strong>SupplierName:</strong> {supplierName}
              </p>
              <Button className="btn btn-danger">Stock Update</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default InventoryItemDetails;
