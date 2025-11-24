import styled from "styled-components";
import { WeatherWidget, Contacts } from "./components";

const FooterContainer = ({ className }) => {
  return (
    <footer className={className}>
      <Contacts />
      <WeatherWidget />
    </footer>
  );
};

export const Footer = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: 1000px;
  padding: 20px 40px;
  box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.2);
`;
