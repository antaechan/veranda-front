import React, { useState } from "react";
import { useSelector } from "react-redux";

function RightBar(props) {
  const [rightBarClicked, setRightBarClicked] = useState(false);

  const currCategory = useSelector((state) => {
    return state.category.category;
  });

  if (rightBarClicked && currCategory === "Zine") {
    return (
      <div
        className="unFoldedRightBar"
        onClick={() => setRightBarClicked(false)}
      >
        <div>Zine</div>
        <br />
        <div onClick={(e) => {}}>Fashion</div>
        <div onClick={(e) => {}}>Food</div>
        <div onClick={(e) => {}}>Music</div>
        <div onClick={(e) => {}}>Lifestyle</div>
        <br />
        <div onClick={(e) => {}}>Exclusives</div>
        <br />
        <div className="search">
          <input type="text" className="searchLine" />
          🔍
        </div>
      </div>
    );
  } else {
    return (
      <div className="foldedRightBar" onClick={() => setRightBarClicked(true)}>
        {currCategory}
      </div>
    );
  }
}

export default RightBar;
