import { server } from "../../bff";
import { setAppError } from "./set-app-error";
import { getComments } from "../../bff/api";
import { setCommentsData } from "./set-comments-data";

export const setCommentAsync =
  (session, postId, commentData) => async (dispatch) => {
    const { error } = await server.saveComment(session, commentData);
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
