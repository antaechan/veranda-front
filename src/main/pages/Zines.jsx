import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PhotoCard from "../components/PhotoCard";
import axios from "axios";
import StyledLink from "./../components/StyledLink";

import "./css/Zines.css";

const ZineContainer = styled.div`
  box-sizing: border-box;
`;

const sampleZine = {
  title: "Spongebob",
  alt: "alt",
  src: "https://ww.namu.la/s/bd52223e4d1f11fcc4c7f6506bf3321b26579bf118db6c1ca20492b9af4228a414edd25f1006baace220e4ca771288e0f38d6cbf253ae4e9d39aaf4b881600b0d65e518e7d94891837ee9a0c6a723aac0f4d2b7bf4a65b36bd1fe636aa49c632",
};

const Zines = () => {
  const [zines, setZines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const zinesInPage = 12;

  useEffect(() => {
    // const fetchZines = async () => {
    //   setLoading(true);
    //   try {
    //     const response = await axios.get("url");
    //     setZines(response.data.zines);
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   setLoading(false);
    // };
    // fetchZines();

    setZines([
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
      sampleZine,
    ]);
  }, []);

  function range(start, end) {
    let array = [];
    for (let i = start; i <= end; ++i) {
      array.push(i);
    }
    return array;
  }

  const pageEnd = Math.ceil(zines.length / zinesInPage);
  const pageList = range(1, pageEnd);

  const zinesAtPage = zines.slice(
    zinesInPage * (pageNumber - 1),
    zinesInPage * pageNumber
  );

  if (loading) {
    return <ZineContainer>로딩 중...</ZineContainer>;
  }

  if (!zines) {
    return null;
  }

  const PageNavigator = () => {
    // const prevPageNumber =
    //   pageNumber === 1 ? pageNumber : setPageNumber(pageNumber - 1);
    // const nextPageNumber =
    //   pageNumber === pageEnd ? pageNumber : setPageNumber(pageNumber + 1);
    var prevURL = `/zine/${pageNumber}`;
    var nextURL = `/zine/${pageNumber}`;

    return (
      <div className="pageNavigator" onClick={() => {}}>
        <StyledLink to={String(pageNumber)} className="previousButton">
          Previous
        </StyledLink>
        {pageList.map((pageNumber) => {
          const pageURL = `/zine/${pageNumber}`;
          return (
            <StyledLink to={pageURL} className="pageNumberButton">
              {pageNumber}
            </StyledLink>
          );
        })}
        <StyledLink to={String(pageNumber)} className="nextButton">
          Next
        </StyledLink>
      </div>
    );
  };

  return (
    <div className="zineContent">
      <ZineContainer>
        <Row gutter={[16, 16]}>
          {zinesAtPage.map((zine) => (
            <Col xs={12} sm={12} md={8} lg={6} xl={6}>
              <PhotoCard zine={zine} />
            </Col>
          ))}
        </Row>
      </ZineContainer>
      <PageNavigator />
      <StyledLink to="/edit" className="postButton" onClick={() => {}}>
        ✍
      </StyledLink>
    </div>
  );
};

export default Zines;
