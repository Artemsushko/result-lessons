import { Outlet } from "react-router-dom";
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";
import styled from "styled-components";

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

export const DefaultLayout = () => {
  return (
    <AppColumn>
      <Header />
      <Outlet />
      <Footer />
    </AppColumn>
  );
};
