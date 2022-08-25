import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import PhotoCard from "./PhotoCard";
import ZineContainer from "../ZineContainer";

const ZinesAtPageNumber = () => {
  const pageNumber = useSelector((state) => {
    return state.zines.pageNumber;
  });

  const zines = useSelector((state) => {
    return state.zines.zines;
  });

  const numberOfZinesInPage = useSelector((state) => {
    return state.zines.numberOfZinesInPage;
  });

  const zinesAtPageNumber = zines.slice(
    numberOfZinesInPage * (pageNumber - 1),
    numberOfZinesInPage * pageNumber
  );

  return (
    <ZineContainer>
      <Row gutter={[16, 16]}>
        {zinesAtPageNumber.map((zine) => (
          <Col xs={12} sm={12} md={8} lg={6} xl={6}>
            <PhotoCard zine={zine} />
          </Col>
        ))}
      </Row>
    </ZineContainer>
  );
};

export default ZinesAtPageNumber;
