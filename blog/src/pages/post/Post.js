import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Content } from "../../components";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAppError,
  selectComments,
  selectPost,
} from "../../store/selectors/selectors";
import { loadPostAsync } from "../../store/actions";
import { Comments, PostContent } from "./components";
import { setAppError } from "../../store/actions/set-app-error";

const PostContainer = ({ className }) => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector(selectPost);
  const comments = useSelector(selectComments);
  const appError = useSelector(selectAppError);

  useEffect(() => {
    dispatch(setAppError(null));
    dispatch(loadPostAsync(postId));
  }, [dispatch, postId]);

  return (
    <div className={className}>
      <Content error={appError}>
        <PostContent post={post} />
        <Comments comments={comments} postId={postId} />
      </Content>
    </div>
  );
};

export const Post = styled(PostContainer)`
  max-width: 800px;
  margin: 42px auto;
  padding: 20px;
`;
