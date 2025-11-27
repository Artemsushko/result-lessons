import styled from "styled-components";

const FormatedDateContainer = ({ className, children }) => (
  <p className={className}>{children}</p>
);

export const FormatedDate = styled(FormatedDateContainer)`
  font-style: italic;
  color: #666;
  font-size: 14px;
`;
