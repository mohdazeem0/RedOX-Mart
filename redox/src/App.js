import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import CombinedHome from "./components/A_AllCombined/CombinedHome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CombinedHome />
      </BrowserRouter>
    </div>
  );
}

export default App;
