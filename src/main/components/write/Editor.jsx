import { useRef, useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import styled from "styled-components";
import client from "../../../lib/api/client";

const TitleInput = styled.input`
  /* :placeholder-shown {
    font-style: italic;
  } */
  font-size: 3rem;
  font-weight: bold;
  outline: none;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid lightgray;
  border-top: 2px solid lightgray;
  width: 100%;
  background-color: transparent;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 1rem;
    height: 500px;
    font-size: 1.5rem;
    line-height: 1.2;
    max-height: 500px;
    overflow: auto;
  }
  .ql-editor.ql-blanck::before {
    left: 0px;
  }
  padding-bottom: 3rem;
`;

const ThumbnailInput = styled.input`
  display: none;
`;

const StyledButton = styled.button`
  margin-bottom: 2rem;
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
    cursor: pointer;
  }
`;

const ThumbnailBox = styled.img`
  margin: 2rem auto;
  width: 50%;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Editor = ({ title, body, onChangeField }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailLoading, setThumbnailLoading] = useState(false);
  const quillElement = useRef(null);
  const quillInstance = useRef(null);
  const thumbnailInputElement = useRef(null);

  useEffect(() => {
    if (!quillInstance.current) {
      quillInstance.current = new Quill(quillElement.current, {
        theme: "snow",
        placeholder: "내용을 입력하세요...",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            ["bold", "italic", "underline", "strike"],
            [{ align: [] }],
            // [{ list: "ordered" }, { list: "bullet" }],
            ["blockquote", "code-block", "link", "image"],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          ],
        },
      });
    }
    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDleta, source) => {
      if (source === "user") {
        onChangeField({ key: "body", value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  const onThumbnailInputBtnClick = (e) => {
    e.preventDefault();
    thumbnailInputElement.current.click();
  };

  const onThumbnailChange = async (e) => {
    setThumbnailLoading(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setThumbnail(URL.createObjectURL(e.target.files[0]));
    console.log(URL.createObjectURL(e.target.files[0]));
    // const response = await client.post("/url", formData);
    // response.data.location이 업로드한 파일의 url
    setThumbnailLoading(false);
  };
  return (
    <>
      <TitleInput
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
      />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
      <ThumbnailContainer>
        <ThumbnailInput
          ref={thumbnailInputElement}
          type="file"
          accept="image/*"
          onChange={onThumbnailChange}
        />
        <ThumbnailBox src={thumbnail} />
        <StyledButton
          color={"white"}
          backgroundColor={"DimGrey"}
          borderColor={"DimGrey"}
          onClick={onThumbnailInputBtnClick}
        >
          썸네일 이미지 등록
        </StyledButton>
      </ThumbnailContainer>
    </>
  );
};

export default Editor;
