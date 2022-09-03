import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import editorSlice from "../../../slices/editorSlice";
import Editor from "../../components/write/Editor";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body, thumbnail } = useSelector(({ editor }) => ({
    title: editor.title,
    body: editor.body,
    thumbnail: editor.thumbnail,
  }));

  const onChangeField = useCallback(
    (payload) => {
      dispatch(editorSlice.actions.changeField(payload));
    },
    [dispatch]
  );

  useEffect(() => {
    return () => {
      dispatch(editorSlice.actions.initialize());
    };
  }, [dispatch]);

  return (
    <Editor
      onChangeField={onChangeField}
      title={title}
      body={body}
      thumbnail={thumbnail}
    />
  );
};

export default EditorContainer;
