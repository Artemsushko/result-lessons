import styled from "styled-components";

const ErrorContainer = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const Error = styled(ErrorContainer)`
  margin: 8px 0;
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  background: #ffe5e5;
  border: 1px solid #ffb3b3;
  color: #cc0000;
  animation: fadeIn 0.2s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-3px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
