import React, { useState } from "react";
import StyledLink from "./../StyledLink";
import { useSelector, useDispatch } from "react-redux";
import menuBarSlice from "../../slices/menuBarSlice";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";

function LeftBar() {
  const [leftBarClicked, setLeftBarClicked] = useState(false);
  const dispatch = useDispatch();

  const isRightBarClicked = useSelector((state) => {
    return state.menuBar.isRightBarClicked;
  });

  const currCategory = useSelector((state) => {
    return state.menuBar.category;
  });

  const workWhenLeftBarClicked = (e) => {
    dispatch(menuBarSlice.actions.setCategory(e));
    dispatch(menuBarSlice.actions.setRightBarClicked(false));
  };

  if (leftBarClicked) {
    return (
      <div
        className="unFoldedLeftBar"
        onClick={() => setLeftBarClicked(false)}
        style={{
          borderRight:
            isRightBarClicked && currCategory === "Zine"
              ? "none"
              : "2px solid black",
        }}
      >
        <div>Index</div>
        <br />
        <StyledLink
          to="zine"
          onClick={(e) => {
            workWhenLeftBarClicked("Zine");
          }}
        >
          Zine
        </StyledLink>
        <StyledLink
          to="videos"
          onClick={(e) => {
            workWhenLeftBarClicked("Videos");
          }}
        >
          Videos
        </StyledLink>
        <br />
        <StyledLink
          to="clubhouse"
          onClick={(e) => {
            workWhenLeftBarClicked("Clubhouse");
          }}
        >
          Clubhouse
        </StyledLink>
        <StyledLink
          to="community"
          onClick={(e) => {
            workWhenLeftBarClicked("Community");
          }}
        >
          Community
        </StyledLink>
        <br />
        <StyledLink
          to="about"
          onClick={(e) => {
            workWhenLeftBarClicked("About");
          }}
        >
          About
        </StyledLink>
        <StyledLink
          to="values"
          onClick={(e) => {
            workWhenLeftBarClicked("Values");
          }}
        >
          Our Values
        </StyledLink>
        <StyledLink
          to="Contact"
          onClick={(e) => {
            workWhenLeftBarClicked("Contact");
          }}
        >
          Contact
        </StyledLink>
      </div>
    );
  } else {
    return (
      <div
        className="foldedLeftBar"
        onClick={() => setLeftBarClicked(true)}
        style={{
          borderRight:
            isRightBarClicked && currCategory === "Zine"
              ? "none"
              : "2px solid black",
        }}
      >
        Index
      </div>
    );
  }
}

export default LeftBar;
