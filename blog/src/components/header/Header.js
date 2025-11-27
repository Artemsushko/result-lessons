import styled from "styled-components";
import { Logo, Discription, ControlPanel } from "./components";

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <Discription />
    <ControlPanel />
  </header>
);

export const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  padding: 20px 40px;
  z-index: 1000;
  background-color: #fff;
  width: 1000px;
  height: 120px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;
