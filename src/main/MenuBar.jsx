import React from "react";
import LeftBar from "./menuBar/LeftBar";
import RightBar from "./menuBar/RightBar";

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
