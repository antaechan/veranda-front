import React, { Component } from "react";
import Editor from "../components/write/Editor";
import WriteActionButtons from "../components/write/WriteActionButtons";

class EditZine extends Component {
  editor = null;

  render() {
    return (
      <>
        <WriteActionButtons />
        <Editor />
      </>
    );
  }
}

export default EditZine;
