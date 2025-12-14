import styled from "styled-components";
import { Error } from "../error/Error";

const ContentContainer = ({ className, children, error }) =>
  error ? (
    <div className={className}>
      <Error>{error}</Error>
    </div>
  ) : (
    <div className={className}>{children}</div>
  );

export const Content = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
`;
