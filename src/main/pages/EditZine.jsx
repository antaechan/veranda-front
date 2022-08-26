import React, { Component } from "react";
import EditorContainer from "../containers/write/EditorContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";

class EditZine extends Component {
  editor = null;

  render() {
    return (
      <>
        <WriteActionButtonsContainer />
        <EditorContainer />
      </>
    );
  }
}

export default EditZine;
