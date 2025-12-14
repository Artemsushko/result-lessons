import styled from "styled-components";

const TitleContainer = ({ children, className }) => (
  <h1 className={className}>{children}</h1>
);

export const Title = styled(TitleContainer)`
  font-weight: 600;
  color: ${({ color = "#333" }) => color};
  font-size: ${({ fontSize = "28px" }) => fontSize};
  margin: ${({ margin = "0 0 20px 0" }) => margin};
`;
