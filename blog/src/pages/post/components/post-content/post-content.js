import { FormatedDate, Icon, Title } from "../../../../components";
import { server } from "../../../../bff";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRoleId,
  selectSession,
} from "../../../../store/selectors/selectors";
import { useState } from "react";
import styled from "styled-components";
import { ROLE } from "../../../../constants";
import { savePostAsync, setAppError } from "../../../../store/actions";

const DateContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PostInfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
`;

const PostImage = styled.img`
  width: 300px;
  height: 200px;
  float: left;
  border-radius: 12px;
  margin: 0 20px 20px 0;
`;

const PostText = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const ImageUrlInput = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const ContentTextarea = styled.textarea`
  width: 100%;
  min-height: 400px;
  font-size: 16px;
  line-height: 1.6;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const StyledEditContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const PostContentContainer = ({ className, post }) => {
  const { id, title, content, image_url, published_at } = post;

  const [isEditing, setIsEditing] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const [contentValue, setContentValue] = useState(content);
  const [imageUrlValue, setImageUrlValue] = useState(image_url);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const session = useSelector(selectSession);
  const roleId = useSelector(selectRoleId);

  const handleDeletePost = async (postId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmDelete) return;

    const data = await server.fetchDeletePost(session, postId);
    const { error } = data;
    if (error) {
      dispatch(setAppError(error));
      return;
    }
    navigate("/");
  };

  const onSave = () => {
    if (!titleValue.trim() || !contentValue.trim() || !imageUrlValue.trim()) {
      alert("Please fill in all fields!");
      return;
    }
    dispatch(
      savePostAsync(session, {
        id,
        title: titleValue,
        content: contentValue,
        image_url: imageUrlValue,
      })
    ).then(() => setIsEditing(false));
  };

  const onCancel = () => {
    setTitleValue(title);
    setContentValue(content);
    setImageUrlValue(image_url);
    setIsEditing(false);
  };

  return (
    <div className={className}>
      {isEditing ? (
        <ImageUrlInput
          value={imageUrlValue}
          onChange={({ target }) => setImageUrlValue(target.value)}
          placeholder="Image URL..."
        />
      ) : (
        <PostImage src={image_url} alt={title} />
      )}

      {isEditing ? (
        <TitleInput
          value={titleValue}
          onChange={({ target }) => setTitleValue(target.value)}
          placeholder="Post Title..."
        />
      ) : (
        <Title margin="0">{title}</Title>
      )}

      <PostInfoBar>
        <DateContainer>
          <Icon iconClass="fa-calendar-o" size="18px" margin="0 10px 0 0" />
          <FormatedDate>{published_at}</FormatedDate>
        </DateContainer>

        {roleId !== ROLE.GUEST && (
          <StyledEditContainer>
            {isEditing ? (
              <>
                <Icon iconClass="fa-floppy-o" onClick={onSave} hover />
                <Icon
                  iconClass="fa-times"
                  onClick={onCancel}
                  hover
                  color="#e74c3c"
                />
              </>
            ) : (
              <>
                <Icon
                  iconClass="fa-pencil-square-o"
                  onClick={() => setIsEditing(true)}
                  hover
                />
                <Icon
                  iconClass="fa-trash-o"
                  onClick={() => handleDeletePost(id)}
                  hover
                  color="#e74c3c"
                />
              </>
            )}
          </StyledEditContainer>
        )}
      </PostInfoBar>

      {isEditing ? (
        <ContentTextarea
          value={contentValue}
          onChange={({ target }) => setContentValue(target.value)}
          placeholder="Post content..."
        />
      ) : (
        <PostText>{content}</PostText>
      )}
    </div>
  );
};

export const PostContent = styled(PostContentContainer)``;
