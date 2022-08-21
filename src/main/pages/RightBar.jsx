import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import menuBarSlice from "../../slices/menuBarSlice";

function RightBar(props) {
  const isRightBarClicked = useSelector((state) => {
    return state.menuBar.isRightBarClicked;
  });

  const currCategory = useSelector((state) => {
    return state.menuBar.category;
  });

  const dispatch = useDispatch();

  function workWhenRightBarClicked(bool) {
    dispatch(menuBarSlice.actions.setRightBarClicked(bool));
  }

  if (isRightBarClicked && currCategory === "Zine") {
    return (
      <div className="unFoldedRightBar">
        <div onClick={() => workWhenRightBarClicked(false)}>
          <div>Zine</div>
          <br />
          <div onClick={(e) => {}}>Fashion</div>
          <div onClick={(e) => {}}>Food</div>
          <div onClick={(e) => {}}>Music</div>
          <div onClick={(e) => {}}>Lifestyle</div>
          <br />
          <div onClick={(e) => {}}>Exclusives</div>
          <br />
        </div>
        <div className="search">
          <input type="text" className="searchLine" />
          🔍
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="foldedRightBar"
        onClick={() => workWhenRightBarClicked(true)}
      >
        {currCategory}
      </div>
    );
  }
}

export default RightBar;
