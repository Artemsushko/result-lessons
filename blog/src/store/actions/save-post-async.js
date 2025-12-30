import { server } from "../../bff";
import { setAppError } from "./set-app-error";
import { setPostData } from "./set-post-data";

export const savePostAsync = (session, postData) => async (dispatch) => {
  const { error, res: updatedPost } = await server.savePost(session, postData);
  if (error) {
    dispatch(setAppError(error));
    return;
  }

  dispatch(setPostData(updatedPost));
};
