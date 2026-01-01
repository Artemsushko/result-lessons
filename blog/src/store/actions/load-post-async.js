import { server } from "../../bff";
import { getComments } from "../../bff/api";
import { setAppError } from "./set-app-error";
import { setCommentsData } from "./set-comments-data";
import { setPostData } from "./set-post-data";

export const loadPostAsync = (postId) => async (dispatch) => {
  const { error, res: post } = await server.fetchPost(postId);
  if (error) {
    dispatch(setAppError(error));
    return;
  }

  dispatch(setPostData(post));

  const comments = await getComments();
  const postComments = comments.filter(
    (comment) => Number(comment.postId) === Number(postId)
  );

  dispatch(setCommentsData(postComments));
};
