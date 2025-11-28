import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPosts } from "../../bff";
import styled from "styled-components";
import { Loader, Title, FormatedDate } from "../../components";

const SinglePostImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const PostText = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const SinglePostPageContainer = ({ className }) => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const posts = await getPosts();
      const post = posts.find((p) => p.id === postId);
      setPost(post);
    };
    loadPost();
  }, [postId]);

  const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
  `;

  if (!post)
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );

  return (
    <div className={className}>
      <Title>{post.title}</Title>
      <SinglePostImage src={post.image_url} alt="Post image" />
      <PostText>{post.content}</PostText>
      <FormatedDate>{post.published_at}</FormatedDate>
    </div>
  );
};

export const SinglePostPage = styled(SinglePostPageContainer)`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;
