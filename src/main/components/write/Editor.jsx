import { useRef, useEffect, useState } from "react";
import Quill from "quill";
import styled from "styled-components";
import imgClient from "../../../lib/api/imgClient";
import ClipLoader from "react-spinners/ClipLoader";

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
    line-height: 1.5;
    max-height: 500px;
    overflow: auto;
  }
  .ql-editor.ql-blanck::before {
    left: 0px;
  }
  padding-bottom: 2rem;
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
  border: 1px solid darkgrey;
  margin-bottom: 2rem;
  width: 50%;
`;
const ThumbnailEmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid darkgrey;
  margin-bottom: 2rem;
  background-color: white;
  min-width: 50%;
  aspect-ratio: 1/1;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Editor = ({ title, body, thumbnail, onChangeField }) => {
  const [thumbnailLoading, setThumbnailLoading] = useState(false);
  const quillElement = useRef(null);
  const quillInstance = useRef(null);
  const thumbnailInputElement = useRef(null);

  useEffect(() => {
    if (!quillInstance.current) {
      quillInstance.current = new Quill(quillElement.current, {
        theme: "snow",
        placeholder: "????????? ???????????????...",
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
      const toolbar = quillInstance.current.getModule("toolbar");
      toolbar.addHandler("image", imageHandler);
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

  const imageHandler = () => {
    console.log("????????? ????????? ??????");
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("image", file);
      try {
        const result = await imgClient.post("/articles/upload", formData);
        console.log("????????? ????????? ??????, result:", result);
        const filename = result.data;
        const IMG_URL = `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/images/${filename}`;
        const range = quillInstance.current.getSelection();
        quillInstance.current.insertEmbed(range.index, "image", IMG_URL);
        onChangeField({
          key: "body",
          value: quillInstance.current.root.innerHTML,
        });
      } catch (error) {
        console.log("????????? ????????? ??????");
      }
    });
  };
  const onThumbnailInputBtnClick = (e) => {
    e.preventDefault();
    thumbnailInputElement.current.click();
  };

  const onThumbnailChange = async (e) => {
    setThumbnailLoading(true);
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("image", file);
    try {
      const result = await imgClient.post("/articles/upload", formData);
      console.log("????????? ????????? ??????, result: ", result);
      const filename = result.data;
      const IMG_URL = `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/images/${filename}`;
      onChangeField({ key: "thumbnail", value: IMG_URL });
    } catch (error) {
      console.log("????????? ????????? ??????");
      console.log(error);
    }
    setThumbnailLoading(false);
  };
  return (
    <>
      <TitleInput
        placeholder="????????? ???????????????"
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
        {thumbnail ? (
          <ThumbnailBox src={thumbnail} />
        ) : (
          <ThumbnailEmptyBox>
            <ClipLoader color={"black"} loading={thumbnailLoading} size={100} />
          </ThumbnailEmptyBox>
        )}

        <StyledButton
          color={"white"}
          backgroundColor={"black"}
          borderColor={"black"}
          onClick={onThumbnailInputBtnClick}
        >
          ????????? ????????? ??????
        </StyledButton>
      </ThumbnailContainer>
    </>
  );
};

export default Editor;
