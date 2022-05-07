import React from "react";
import InventoryItems from "../../Components/InventoryItems/InventoryItems";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <main>
        {/* items */}
        <div className="recent-items"></div>
        <InventoryItems />
      </main>
    </div>
  );
};

export default Home;
