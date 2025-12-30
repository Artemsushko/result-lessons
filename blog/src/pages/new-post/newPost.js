import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSession } from "../../store/selectors/selectors";
import { createPostAsync } from "../../store/actions";
import styled from "styled-components";
import { UIButtonLink } from "../../components";

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

const NewPostContainer = ({ className }) => {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [imageUrlValue, setImageUrlValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const session = useSelector(selectSession);

  const onSave = () => {
    if (!titleValue.trim() || !contentValue.trim() || !imageUrlValue.trim()) {
      alert("Please fill in all fields!");
      return;
    }
    dispatch(
      createPostAsync(session, {
        title: titleValue,
        content: contentValue,
        image_url: imageUrlValue,
      })
    ).then((newPost) => navigate(`/post/${newPost.id}`));
  };

  return (
    <div className={className}>
      <ImageUrlInput
        type="text"
        placeholder="Image URL"
        value={imageUrlValue}
        onChange={(e) => setImageUrlValue(e.target.value)}
      />
      <TitleInput
        type="text"
        placeholder="Title"
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <ContentTextarea
        placeholder="Content"
        value={contentValue}
        onChange={(e) => setContentValue(e.target.value)}
      ></ContentTextarea>
      <UIButtonLink onClick={onSave}>Save Post</UIButtonLink>
    </div>
  );
};

export const NewPost = styled(NewPostContainer)`
  max-width: 800px;
  margin: 42px auto;
  padding: 20px;
`;
