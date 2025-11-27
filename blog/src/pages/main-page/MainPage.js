import styled from "styled-components";
import { getPosts } from "../../bff";
import { Post } from "../../components";
import { useEffect, useState } from "react";

const MainPageContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const load = async () => {
      setPosts(await getPosts());
    };
    load();
  }, []);

  return (
    <div className={className}>
      {posts.map(({ title, id, image_url, published_at }) => (
        <Post key={id} postId={id} src={image_url} date={published_at}>
          {title}
        </Post>
      ))}
    </div>
  );
};

export const MainPage = styled(MainPageContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 40px;
`;
