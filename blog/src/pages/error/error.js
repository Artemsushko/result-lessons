import { Title, UIButtonLink } from "../../components";
import errorImage from "./error-img.png";
import styled from "styled-components";

const ErrorContainer = ({ className }) => (
  <div className={className}>
    <img src={errorImage} alt="Error img" />
    <Title color="#cf1645">Oops! Something Went Wrong.</Title>
    <UIButtonLink to="/">Go Home</UIButtonLink>
  </div>
);

export const Error = styled(ErrorContainer)`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
