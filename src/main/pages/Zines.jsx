import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PhotoCard from "../components/PhotoCard";
import axios from "axios";

const ZineContainer = styled.div`
  box-sizing: border-box;
`;

const sampleZine = {
  title: "Spongebob",
  alt: "alt",
  src: "https://ww.namu.la/s/bd52223e4d1f11fcc4c7f6506bf3321b26579bf118db6c1ca20492b9af4228a414edd25f1006baace220e4ca771288e0f38d6cbf253ae4e9d39aaf4b881600b0d65e518e7d94891837ee9a0c6a723aac0f4d2b7bf4a65b36bd1fe636aa49c632",
};
const Zines = () => {
  const [zines, setZines] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("url");
        setZines(response.data.zines);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <ZineContainer>로딩 중...</ZineContainer>;
  }

  if (!zines) {
    return null;
  }

  return (
    <ZineContainer>
      <Row gutter={[16, 16]}>
        {zines.map((zine) => (
          <Col xs={12} sm={12} md={8} lg={6} xl={6}>
            <PhotoCard zine={zine} />
          </Col>
        ))}
      </Row>
    </ZineContainer>
  );
};

export default Zines;
