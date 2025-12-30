import { getComments } from "../../bff/api";
import { createComment } from "../../bff/operations";
import { setAppError } from "./set-app-error";
import { setCommentsData } from "./set-comments-data";

export const addCommentAsync =
  (session, userLogin, postId, content) => async (dispatch) => {
    const { error } = await createComment(session, userLogin, postId, content);

    if (error) {
      dispatch(setAppError(error));
      return;
    }

    const comments = await getComments();
    const postComments = comments.filter(
      (comment) => comment.postId === postId
    );

    dispatch(setCommentsData(postComments));
  };
