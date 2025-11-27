import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  Authorization,
  Registration,
  MainPage,
  SinglePostPage,
  Users,
} from "./pages";
import styled from "styled-components";

const Content = styled.div`
  padding: 120px 0;
`;

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  margin: auto;
  background-color: #fff;
`;

function Blog() {
  return (
    <AppColumn>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/post/:postId" element={<SinglePostPage />} />
          <Route path="/post" element={<div>New post</div>} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Content>
      <Footer />
    </AppColumn>
  );
}

export default Blog;
