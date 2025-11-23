import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import styled from "styled-components";

const Content = styled.div`
  padding: 120px 0;
`;

const H2 = styled.h2`
  text-align: center;
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
        <H2>Content</H2>
        <Routes>
          <Route path="/" element={<div>Main Page</div>} />
          <Route path="/login" element={<div>Autorization</div>} />
          <Route path="/register" element={<div>Registration</div>} />
          <Route path="/users" element={<div>Users</div>} />
          <Route path="/post/:postId" element={<div>Post</div>} />
          <Route path="/post" element={<div>New post</div>} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Content>
      <Footer />
    </AppColumn>
  );
}

export default Blog;
