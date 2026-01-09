import { Outlet } from "react-router-dom";
import styled from "styled-components";

const ErrorBackgrondColor = styled.div`
  height: 100vh;
  background-color: #fff;
`;

export const FullscreenLayout = () => {
  return (
    <ErrorBackgrondColor>
      <Outlet />
    </ErrorBackgrondColor>
  );
};
