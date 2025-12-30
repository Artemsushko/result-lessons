import styled from "styled-components";
import { Icon } from "../../../../components";
import { Comment } from "./components/comment/comment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentAsync } from "../../../../store/actions";
import {
  selectRoleId,
  selectSession,
  selectLogin,
} from "../../../../store/selectors/selectors";
import { ROLE } from "../../../../constants";

const CommentsContainer = ({ className, comments, postId }) => {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");
  const session = useSelector(selectSession);
  const userLogin = useSelector(selectLogin);
  const roleId = useSelector(selectRoleId);

  const onNewCommentAdd = async (session, userLogin, postId, content) => {
    if (!content || content.trim() === "") {
      alert("Comment content cannot be empty.");
      return;
    }

    dispatch(addCommentAsync(session, userLogin, postId, content));
    setNewComment("");
  };

  return (
    <div className={className}>
      {roleId !== ROLE.GUEST && (
        <div className="new-comment">
          <textarea
            name="comment"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Icon
            hover
            margin="0 0 0 10px"
            iconClass="fa-paper-plane-o"
            onClick={() =>
              onNewCommentAdd(session, userLogin, postId, newComment)
            }
          />
        </div>
      )}

      <div className="comments">
        {comments.map((c) => (
          <Comment key={c.id} comment={c} postId={postId} />
        ))}
      </div>
    </div>
  );
};

export const Comments = styled(CommentsContainer)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;

  .new-comment {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .new-comment textarea {
    flex: 1;
    height: 100px;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
  }

  .new-comment svg {
    cursor: pointer;
    align-self: flex-end;
  }

  .comments {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
