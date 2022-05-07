import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import useInventoryDetails from "../../hooks/useInventoryDetails";

const InventoryItemDetails = () => {
  const { id } = useParams();
  const [product] = useInventoryDetails(id);
  const { img, name, desc, price, quantity, supplierName } = product;
  // const [itemQuantity, setItemQuantity] = useState();

  let restQuantity = parseInt(quantity);
  const handleDeliverBtn = () => {
    if (restQuantity >= 1) {
      restQuantity -= 1;
    }
    console.log(restQuantity);
  };
  // console.log(restQuantity);

  return (
    <div className="py-5">
      <Container>
        <div>
          <div>
            <Row xs={1} md={2} lg={4} xl={4} className="g-4">
              <Col>
                <Card className="mb-4">
                  <Card.Img
                    className="p-3"
                    variant="top"
                    height="300px"
                    src={img}
                  />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <p>
                      <strong>Price:</strong> $ {price}
                    </p>
                    <p>{/* <strong>Quantity:</strong> {restQuantity} */}</p>
                    <p>
                      <strong>SupplierName:</strong> {supplierName}
                    </p>
                    <Button
                      onClick={handleDeliverBtn}
                      className="btn btn-danger"
                    >
                      Deliver
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default InventoryItemDetails;
