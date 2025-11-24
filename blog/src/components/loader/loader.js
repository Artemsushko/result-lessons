import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderCircle = styled.div`
  width: 25px;
  height: 25px;
  border: 5px solid gray;
  border-radius: 50%;
  border-left-color: transparent;
  animation: ${spin} 1s linear infinite;
`;

export const Loader = () => <LoaderCircle />;
