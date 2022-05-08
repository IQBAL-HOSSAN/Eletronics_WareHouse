import React from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import InventoryItem from "../InventoryItem/InventoryItem";

const InventoryItems = () => {
  const [products] = useInventory([]);

  const maxItems = products.slice(0, 6);

  const navigate = useNavigate();
  const handleManageInventoriesBtn = () => {
    navigate(`/manageInventories`);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Recent Items</h2>
      {
        <Row xs={1} md={3} lg={3} xl={3} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) =>
            maxItems.map((item) => <InventoryItem key={item._id} item={item} />)
          )}
        </Row>
      }

      <div className="text-center mt-2">
        <Button
          onClick={handleManageInventoriesBtn}
          className="btn btn-secondary"
        >
          Manage Inventories
        </Button>
      </div>
    </div>
  );
};

export default InventoryItems;
