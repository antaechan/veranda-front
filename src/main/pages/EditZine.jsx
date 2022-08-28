import React, { Component } from "react";
import WriteActionButtons from "../components/write/WriteActionButtons";
import EditorContainer from "../containers/write/EditorContainer";

class EditZine extends Component {
  editor = null;

  render() {
    return (
      <>
        <WriteActionButtons />
        <EditorContainer />
      </>
    );
  }
}

export default EditZine;
