import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import ManageInventoryItems from "./ManageInventoryItems/ManageInventoryItems";

const ManageInventories = () => {
  const [products] = useInventory([]);
  const navigate = useNavigate();

  const handleAddItem = () => {
    navigate(`/addItem`);
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
          <ManageInventoryItems
            key={item._id}
            item={item}
          ></ManageInventoryItems>
        ))}
      </Container>
    </section>
  );
};

export default ManageInventories;
