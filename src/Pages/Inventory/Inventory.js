import React from "react";
import { Row } from "react-bootstrap";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import InventoryItem from "../../Components/InventoryItem/InventoryItem";
import useInventory from "../../hooks/useInventory";

const Inventory = () => {
  const [products] = useInventory([]);
  console.log(products);
  return (
    <section className="container py-5">
      <CommonBanner img="" />
      <h2 className="text-center mb-3">Inventory Items</h2>
      {
        <Row xs={1} md={3} lg={3} xl={3} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) =>
            products.map((item) => <InventoryItem key={item._id} item={item} />)
          )}
        </Row>
      }
    </section>
  );
};

export default Inventory;
