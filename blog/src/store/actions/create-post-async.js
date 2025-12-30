import { server } from "../../bff";
import { setAppError } from "./set-app-error";

export const createPostAsync = (session, postData) => async (dispatch) => {
  const { error, res: newPost } = await server.createPost(session, postData);
  if (error) {
    dispatch(setAppError(error));
    return;
  }

  return newPost;
};
