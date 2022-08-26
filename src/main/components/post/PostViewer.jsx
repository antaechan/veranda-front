import React from "react";
import styled from "styled-components";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const PostViewerBlock = styled.div`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.5;
    margin: 0;
  }
`;
const SubInfo = styled.div`
  margin-top: 1rem;
  color: dimgray;
  span + span:before {
    color: dimgray;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: "\\B7";
  }
`;
const PostContent = styled.div`
  font-size: 1.3rem;
  color: black;
  text-align: left;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const ErrorContent = styled.div`
  font-size: ${(props) => props.fontSize};
  color: dimgray;
  text-align: center;
  font-weight: 400;
`;

const PostViewer = ({ post, error, loading }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return (
        <PostViewerBlock>
          <ErrorContent fontSize={"4rem"}>
            <AiOutlineExclamationCircle />
          </ErrorContent>
          <ErrorContent fontSize={"1.3rem"}>
            페이지를 찾을 수 없습니다.
          </ErrorContent>
        </PostViewerBlock>
      );
    }
    return (
      <PostViewerBlock>
        <ErrorContent>오류가 발생했습니다.</ErrorContent>
      </PostViewerBlock>
    );
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate } = post;
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo>
          <span>
            <b>{user.username}</b>
          </span>
          <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </SubInfo>
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};

export default PostViewer;
