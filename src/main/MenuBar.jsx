import React from "react";
import LeftBar from "./pages/LeftBar";
import RightBar from "./pages/RightBar";

import "./css/MenuBar.css";

function MenuBar(props) {
  return (
    <div className="MenuBar">
      <LeftBar />
      <RightBar />
    </div>
  );
}

export default MenuBar;
