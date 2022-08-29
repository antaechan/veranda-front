import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { write_post } from "../../../slices/editorSlice";
import WriteActionButtons from "../../components/write/WriteActionButtons";
const WriteActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, thumbnail, post, postError } = useSelector(
    ({ editor }) => ({
      title: editor.title,
      body: editor.body,
      thumbnail: editor.thumbnail,
      post: editor.post,
      postError: editor.postError,
    })
  );

  const onPublish = () => {
    dispatch(write_post({ title, body, thumbnail }));
  };

  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }
    if (postError) {
      alert(postError.message);
      console.log("postError", postError);
    }
  }, [navigate, post, postError]);
  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteActionButtonsContainer;
