import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useInventoryDetails from "../../hooks/useInventoryDetails";
import "./InventoryItemDetails.css";

const InventoryItemDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useInventoryDetails(id);
  const { img, name, desc, price, quantity, supplierName } = product;

  const { register, getValues, handleSubmit } = useForm();

  const storeQuantity = getValues("storeQuantity");

  const onSubmit = async (data) => {
    const itemQuantity = quantity;
    const setSoreQuantity = parseInt(storeQuantity);
    const updateInfo = {
      quantity: itemQuantity + setSoreQuantity,
    };

    const url = `https://boiling-escarpment-44673.herokuapp.com/api/products/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const handleDeliverBtn = () => {
    const itemQuantity = parseInt(quantity);

    const updateInfo = {
      quantity: itemQuantity - 1,
    };

    const url = `https://boiling-escarpment-44673.herokuapp.com/api/products/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="py-5">
      <Container>
        <div>
          <div className="">
            <Row className="g-4 justify-content-center ">
              <Col sm={12} md={8} lg={6} xl={6} className="">
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
                    <p>
                      <strong>Quantity:</strong> {quantity}
                    </p>
                    <p>
                      <strong>SupplierName:</strong> {supplierName}
                    </p>
                    <div className="d-flex justify-content-between">
                      <Button
                        onClick={() => handleDeliverBtn()}
                        className="btn btn-danger"
                      >
                        Deliver
                      </Button>
                      <div className="ms-5">
                        <form
                          className="d-flex "
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          <input
                            className="shadow m-0 "
                            placeholder="Store Quantity"
                            {...register("storeQuantity", {
                              required: "This input is required.",
                            })}
                          />

                          <input
                            className="m-0 str-qty-btn "
                            type="submit"
                            value="Store Quantity"
                          />
                        </form>
                      </div>
                    </div>
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
