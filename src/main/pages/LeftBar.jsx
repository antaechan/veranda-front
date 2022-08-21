import React, { useState } from "react";
import StyledLink from "./../StyledLink";
import { useDispatch } from "react-redux";
import menuBarSlice from "../../slices/menuBarSlice";

function LeftBar() {
  const [leftBarClicked, setLeftBarClicked] = useState(false);
  const dispatch = useDispatch();

  const workWhenLeftBarClicked = (e) => {
    dispatch(menuBarSlice.actions.setCategory(e));
    dispatch(menuBarSlice.actions.setRightBarClicked(false));
  };

  if (leftBarClicked) {
    return (
      <div className="unFoldedLeftBar" onClick={() => setLeftBarClicked(false)}>
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
      <div className="foldedLeftBar" onClick={() => setLeftBarClicked(true)}>
        Index
      </div>
    );
  }
}

export default LeftBar;
