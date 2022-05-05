import React, { useEffect } from "react";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <Slider />
      <main>
        <h2>home</h2>
        {/* items */}
        <div className="recent-items"></div>
      </main>
    </div>
  );
};

export default Home;
