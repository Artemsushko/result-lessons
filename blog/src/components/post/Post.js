import styled from "styled-components";
import { Title, FormatedDate } from "../../components";
import { Link } from "react-router-dom";

const PostImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
`;

const PostContainer = ({ children, className, src, date, postId }) => {
  return (
    <Link to={`/post/${postId}`} className={className}>
      <PostImage src={src} alt="Post image" />
      <div>
        <Title fontSize="18px">{children}</Title>
        <FormatedDate>{date}</FormatedDate>
      </div>
    </Link>
  );
};

export const Post = styled(PostContainer)`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 20px;
  transition: 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;
