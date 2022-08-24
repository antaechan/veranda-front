import { Card } from "antd";
import React from "react";
import StyledLink from "./StyledLink";

const { Meta } = Card;

const PhotoCard = ({ zine }) => {
  const { title, src, alt, url } = zine;
  return (
    <div to={url}>
      <Card
        hoverable
        cover={
          <img
            alt={alt}
            src={src}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          />
        }
        style={{
          backgroundColor: `rgb(255, 252, 246)`,
          border: "none",
        }}
      >
        <Meta
          title={title}
          style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}
        />
      </Card>
    </div>
  );
};

export default PhotoCard;
