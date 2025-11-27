import styled from "styled-components";

const PublishedDateContainer = ({ className, children }) => (
  <p className={className}>{children}</p>
);

export const PublishedDate = styled(PublishedDateContainer)`
  font-style: italic;
  color: #666;
  font-size: 14px;
`;
