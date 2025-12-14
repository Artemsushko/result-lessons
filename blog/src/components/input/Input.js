import styled from "styled-components";

const InputContainer = ({ className, width, ...props }) => (
  <input className={className} {...props} />
);

export const Input = styled(InputContainer)`
  width: ${({ width = "100%" }) => width};
  padding: 12px 15px;
  margin: 10px 0;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border: 2px solid #007bff;
    box-shadow: 0 0 6px rgba(0, 123, 255, 0.3);
  }
`;
