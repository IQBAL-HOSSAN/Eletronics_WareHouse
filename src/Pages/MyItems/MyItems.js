import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useInventory from "../../hooks/useInventory";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const email = user.email;
      const url = `https://boiling-escarpment-44673.herokuapp.com/myItem?email=${email}`;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    };

    getProducts();
  }, [user]);

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
      .then((res) => {
        const remaining = products.filter((product) => product._id !== id);
        setProducts(remaining);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="container py-5">
      <Container>
        <h2 className="mb-3 text-center">My Items</h2>

        {products.map((item) => (
          <div key={item._id} className="d-flex p-2 shadow rounded mb-4">
            <img src={item.img} height="200px" width="250px" alt="" />
            <div className="mx-3">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <p>
                <strong>Price:</strong> $ {item.price}
              </p>
              <p>
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <p>
                <strong>SupplierName:</strong> {item.supplierName}
              </p>
            </div>
            <div className="mi-delete-btn d-flex  align-items-center justify-content-end">
              <Button
                onClick={() => handleDeleItemBtn(item._id)}
                className="btn btn-danger me-5"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default MyItems;
