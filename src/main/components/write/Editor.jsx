import { useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import styled from "styled-components";

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
const Editor = () => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);
  useEffect(() => {
    console.log("퀼 만들기");
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
  }, []);
  return (
    <>
      <TitleInput placeholder="제목을 입력하세요" />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </>
  );
};

export default Editor;
