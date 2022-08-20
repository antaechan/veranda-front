import { Card } from "antd";
import React from "react";
import StyledLink from "../StyledLink";

const { Meta } = Card;

const PhotoCard = ({ zine }) => {
  const { title, src, alt, url } = zine;
  return (
    <StyledLink to={url}>
      <Card
        hoverable
        cover={
          <img
            alt={alt}
            src={src}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        }
      >
        <Meta title={title} />
      </Card>
    </StyledLink>
  );
};

export default PhotoCard;
