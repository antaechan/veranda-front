import React from "react";
import styled from "styled-components";

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

const StyledButton = styled.button`
  padding: 0.3rem 1rem;
  /* font-family: "Times New Roman", serif; */
  font-size: 1rem;
  /* font-weight: bold; */
  text-align: center;
  text-decoration: none;

  display: inline-block;

  border: 1.5px solid ${(props) => props.borderColor};
  border-radius: 3px;

  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    /* color: ${(props) => props.backgroundColor};
    background-color: ${(props) => props.color}; */
    cursor: pointer;
  }
`;

const WriteActionButtons = ({ onPublish, onCancel }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton
        color={"white"}
        backgroundColor={"black"}
        borderColor={"black"}
        onClick={onPublish}
      >
        출간하기
      </StyledButton>
      <StyledButton
        color={"#353535"}
        backgroundColor={"white"}
        borderColor={"LightGrey"}
        onClick={onCancel}
      >
        나가기
      </StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
