import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Meta } = Card;

const PhotoCard = ({ zine }) => {
  const { title, path, alt, id } = zine;
  return (
    <Link to={`/viewer/${id}`}>
      <Card
        hoverable
        cover={
          <img
            alt={alt}
            src={path}
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
    </Link>
  );
};

export default PhotoCard;
