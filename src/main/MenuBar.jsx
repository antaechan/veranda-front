import React from "react";
import { useState } from "react";
import StyledLink from "./StyledLink";

import "./css/MenuBar.css";

function MenuBar(props) {
  const [leftBarClicked, setLeftBarClicked] = useState(false);

  const LeftBar = () => {
    if (leftBarClicked) {
      return (
        <div className="unFoldedLeftBar">
          <div>Index</div>
          <br />
          <StyledLink to="zine">Zine</StyledLink>
          <StyledLink to="videos">Videos</StyledLink>
          <br />
          <StyledLink to="clubhouse">Clubhouse</StyledLink>
          <StyledLink to="community">Community</StyledLink>
          <br />
          <StyledLink to="about">About</StyledLink>
          <StyledLink to="values">Our Values</StyledLink>
          <StyledLink to="Contact">Contact</StyledLink>
        </div>
      );
    } else {
      return <div className="foldedLeftBar">Index</div>;
    }
  };

  return (
    <div className="MenuBar">
      <div
        className="LeftBar"
        onClick={() => setLeftBarClicked(!leftBarClicked)}
      >
        <LeftBar />
      </div>
      <div className="RightBar">zine</div>
    </div>
  );
}

export default MenuBar;
