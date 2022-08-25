import React from "react";

import PageNavigator from "./PageNavigator";
import StyledLink from "./../StyledLink";

const Footer = () => {
  return (
    <div className="footer">
      <PageNavigator />
      <StyledLink to="/edit" className="postButton">
        ✍
      </StyledLink>
    </div>
  );
};

export default Footer;
