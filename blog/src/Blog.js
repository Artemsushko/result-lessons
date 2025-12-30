import { Outlet, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  Authorization,
  Registration,
  MainPage,
  Post,
  Users,
  Error,
  NewPost,
} from "./pages";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import { setUser } from "./store/actions";
import { server } from "./bff";

const ErrorBackgrondColor = styled.div`
  height: 100vh;
  background-color: #fff;
`;

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px 0 0 0;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  margin: auto;
  background-color: #fff;
`;

function Blog() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const savedSession = localStorage.getItem("session");
    if (!savedSession) return;

    const curentUserData = JSON.parse(savedSession);
    server.addSession(curentUserData.session, curentUserData);
    dispatch(
      setUser({ ...curentUserData, roleId: Number(curentUserData.roleId) })
    );
  }, [dispatch]);

  function FullscreenLayout() {
    return (
      <ErrorBackgrondColor>
        <Outlet />
      </ErrorBackgrondColor>
    );
  }

  function DefaultLayout() {
    return (
      <AppColumn>
        <Header />
        <Outlet />
        <Footer />
      </AppColumn>
    );
  }

  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Authorization />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/users" element={<Users />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/post" element={<NewPost />} />
      </Route>

      <Route element={<FullscreenLayout />}>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default Blog;
