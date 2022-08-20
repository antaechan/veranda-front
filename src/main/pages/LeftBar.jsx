import React, { useState } from "react";
import StyledLink from "./../StyledLink";
import { useDispatch } from "react-redux";
import categorySlice from "../../slices/categorySlice";

function LeftBar() {
  const [leftBarClicked, setLeftBarClicked] = useState(false);
  const dispatch = useDispatch();

  const setRightBarCategory = (e) => {
    dispatch(categorySlice.actions.setCategory(e));
  };

  if (leftBarClicked) {
    return (
      <div
        className="unFoldedLeftBar"
        onClick={() => setLeftBarClicked(!leftBarClicked)}
      >
        <div>Index</div>
        <br />
        <StyledLink
          to="zine"
          onClick={(e) => {
            setRightBarCategory("Zine");
          }}
        >
          Zine
        </StyledLink>
        <StyledLink
          to="videos"
          onClick={(e) => {
            setRightBarCategory("Videos");
          }}
        >
          Videos
        </StyledLink>
        <br />
        <StyledLink
          to="clubhouse"
          onClick={(e) => {
            setRightBarCategory("Clubhouse");
          }}
        >
          Clubhouse
        </StyledLink>
        <StyledLink
          to="community"
          onClick={(e) => {
            setRightBarCategory("Community");
          }}
        >
          Community
        </StyledLink>
        <br />
        <StyledLink
          to="about"
          onClick={(e) => {
            setRightBarCategory("About");
          }}
        >
          About
        </StyledLink>
        <StyledLink
          to="values"
          onClick={(e) => {
            setRightBarCategory("Values");
          }}
        >
          Our Values
        </StyledLink>
        <StyledLink
          to="Contact"
          onClick={(e) => {
            setRightBarCategory("Contact");
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
        onClick={() => setLeftBarClicked(!leftBarClicked)}
      >
        Index
      </div>
    );
  }
}

export default LeftBar;
