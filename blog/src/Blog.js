import { Route, Routes } from "react-router-dom";
import {
  Authorization,
  Registration,
  MainPage,
  Post,
  Users,
  Error,
  NewPost,
} from "./pages";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./store/actions";
import { server } from "./bff";
import { FullscreenLayout, DefaultLayout } from "./components";

function Blog() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedSession = localStorage.getItem("session");
    if (!savedSession) return;

    const curentUserData = JSON.parse(savedSession);
    server.addSession(curentUserData.session, curentUserData);
    dispatch(
      setUser({ ...curentUserData, roleId: Number(curentUserData.roleId) })
    );
  }, [dispatch]);

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
