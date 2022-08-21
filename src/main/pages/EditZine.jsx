import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";

class App extends Component {
  editor = null;

  render() {
    return (
      <div className="App">
        <h2>웹진 작성</h2>
        <CKEditor
          onReady={(editor) => {
            console.log("Editor is ready to use!", editor);

            // Insert the toolbar before the editable area.
            editor.ui
              .getEditableElement()
              .parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
              );

            this.editor = editor;
          }}
          onError={(error, { willEditorRestart }) => {
            // If the editor is restarted, the toolbar element will be created once again.
            // The `onReady` callback will be called again and the new toolbar will be added.
            // This is why you need to remove the older toolbar.
            if (willEditorRestart) {
              this.editor.ui.view.toolbar.element.remove();
            }
          }}
          onChange={(event, editor) => console.log({ event, editor })}
          editor={Editor}
          // data="<p>Hello from CKEditor 5's decoupled editor!</p>"
          config={{
            placeholder: "당신의 이야기를 들려주세요!",
          }}
        />
      </div>
    );
  }
}

export default App;
