import React from "react";
import Footer from "../Footer";
import MainRoute from "../MainRoute";

const CombinedHome = () => {
  return (
    <div>
      <div>
        <MainRoute />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CombinedHome;
