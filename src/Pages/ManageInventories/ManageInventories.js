import React from "react";
import { Container } from "react-bootstrap";
import useInventory from "../../hooks/useInventory";
import ManageInventoryItems from "./ManageInventoryItems/ManageInventoryItems";

const ManageInventories = () => {
  const [products] = useInventory([]);
  return (
    //   Manage inventory page
    <section className="py-5">
      <Container>
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
