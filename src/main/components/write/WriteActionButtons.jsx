import React from "react";
import styled from "styled-components";
import Button from "antd/lib/button";

const WriteActionButtonsBlock = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  button + button {
    margin-left: 1rem;
  }
  justify-content: end;
`;
const WriteActionButtons = () => {
  return (
    <WriteActionButtonsBlock>
      <Button type="primary">포스트 등록</Button>
      <Button>취소</Button>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
