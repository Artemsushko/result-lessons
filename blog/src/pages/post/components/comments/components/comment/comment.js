import styled from "styled-components";
import { FormatedDate, Icon } from "../../../../../../components";
import {
  loadPostAsync,
  setAppError,
  setCommentAsync,
} from "../../../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../../../../../bff";
import {
  selectRoleId,
  selectSession,
} from "../../../../../../store/selectors/selectors";
import { ROLE } from "../../../../../../constants";
import { useState } from "react";

const CommentContainer = ({ className, comment, postId }) => {
  const { id, author, content, published_at } = comment;
  const [isEditing, setIsEditing] = useState(false);
  const [contentValue, setContentValue] = useState(content);
  const dispatch = useDispatch();
  const session = useSelector(selectSession);
  const roleId = useSelector(selectRoleId);

  const handleDeleteComment = async (session, commentId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (!confirmDelete) return;

    const data = await server.fetchDeleteComment(session, commentId);
    const { error } = data;
    if (error) {
      dispatch(setAppError(error));
      return;
    }

    dispatch(loadPostAsync(postId));
  };

  const onSave = () => {
    if (!contentValue || contentValue.trim() === "") {
      alert("Comment content cannot be empty.");
      return;
    }
    dispatch(
      setCommentAsync(session, postId, { id, content: contentValue })
    ).then(() => setIsEditing(false));
  };

  const onCancel = () => {
    setContentValue(content);
    setIsEditing(false);
  };

  return (
    <div className={className}>
      <div className="information-panel">
        <div className="author">
          <Icon iconClass="fa-user-circle-o" margin="0 8px 0 0" />
          {author}
        </div>
        <div className="published_at">
          <Icon iconClass="fa-calendar-o" margin="0 8px 0 0" />
          <FormatedDate>{published_at}</FormatedDate>
        </div>
        {roleId === ROLE.ADMIN || roleId === ROLE.MODERATOR ? (
          <div className="edit-container">
            {isEditing ? (
              <>
                <Icon iconClass="fa-floppy-o" hover onClick={onSave} />
                <Icon
                  iconClass="fa-times"
                  hover
                  onClick={onCancel}
                  margin="0 0 0 10px"
                />
              </>
            ) : (
              <>
                <Icon
                  iconClass="fa-pencil-square-o"
                  hover
                  onClick={() => setIsEditing(true)}
                />
                <Icon
                  color="#e74c3c"
                  iconClass="fa-trash-o"
                  margin="0 0 0 10px"
                  hover
                  onClick={() => handleDeleteComment(session, id)}
                />
              </>
            )}
          </div>
        ) : null}
      </div>
      {isEditing ? (
        <textarea
          value={contentValue}
          onChange={(e) => setContentValue(e.target.value)}
          rows={4}
        />
      ) : (
        <div className="comment-text">{content}</div>
      )}
    </div>
  );
};

export const Comment = styled(CommentContainer)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  padding: 12px 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  & .edit-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & .information-panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 14px;
  }

  & .author {
    display: flex;
    align-items: center;
    font-weight: 500;
    color: #222;
  }

  & .published_at {
    display: flex;
    align-items: center;
  }

  & .comment-text {
    font-size: 15px;
    line-height: 1.5;
    color: #333;
    white-space: pre-wrap;
  }

  & textarea {
    width: 100%;
    resize: vertical;
    padding: 10px;
    font-size: 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-top: 5px;
    outline: none;
    font-family: inherit;

    &:focus {
      border-color: #007bff;
    }
  }
`;
