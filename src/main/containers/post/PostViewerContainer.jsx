import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostViewer from "../../components/post/PostViewer";
import { read_post, unload_post } from "../../../slices/viewerSlice";
import { useParams } from "react-router-dom";

const PostViewerContainer = () => {
  const params = useParams();
  const { articleId } = params;
  const dispatch = useDispatch();
  const { post, error } = useSelector(({ viewer }) => ({
    post: viewer.post,
    error: viewer.error,
    // loading: loading["post/read_post"],
  }));

  useEffect(() => {
    dispatch(read_post(articleId));
    return () => {
      dispatch(unload_post());
    };
  }, [dispatch, articleId]);
  return <PostViewer post={post} error={error} />;
};

export default PostViewerContainer;
