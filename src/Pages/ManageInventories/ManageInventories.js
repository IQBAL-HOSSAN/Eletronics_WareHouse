import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import useInventory from "../../hooks/useInventory";

const ManageInventories = () => {
  const [products, setProducts] = useInventory([]);
  const navigate = useNavigate();

  const handleAddItem = () => {
    navigate(`/addItem`);
  };
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
    //   Manage inventory page
    <section className="py-5">
      <Container>
        <div className="add-item text-center">
          <Button onClick={handleAddItem} className="btn btn-secondary mb-3">
            Add New Item
          </Button>
        </div>

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

export default ManageInventories;
