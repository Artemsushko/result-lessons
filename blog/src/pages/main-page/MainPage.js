import styled from "styled-components";
import { Input, Post } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store/actions";
import { selectSearch } from "../../store/selectors/selectors";
import { useFilteredPosts } from "../../hooks";

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; /* центрирует Input */
  margin-bottom: 30px;
`;

const PostsWarapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;
`;

const MainPageContainer = ({ className }) => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const posts = useFilteredPosts();

  return (
    <div className={className}>
      <InputWrapper>
        <Input
          type="text"
          width="400px"
          placeholder="Search..."
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </InputWrapper>
      <PostsWarapper>
        {posts.map(({ title, id, image_url, published_at }) => (
          <Post key={id} postId={id} src={image_url} date={published_at}>
            {title}
          </Post>
        ))}
      </PostsWarapper>
    </div>
  );
};

export const MainPage = styled(MainPageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;
