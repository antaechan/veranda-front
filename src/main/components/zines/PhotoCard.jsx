import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import imgPlaceholder from "../../../asset/imgs/imgPlaceholder.png";

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
            src={path || imgPlaceholder}
            style={{
              // width: "100%",
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
          />
        }
        style={{
          backgroundColor: `rgb(255, 252, 246)`,
          border: "none",
        }}
      >
        <Meta
          title={
            <span
              style={{
                fontFamily: "Times New Roman",
                fontWeight: "bold",
              }}
            >
              {title}
            </span>
          }
        />
      </Card>
    </Link>
  );
};

export default PhotoCard;
