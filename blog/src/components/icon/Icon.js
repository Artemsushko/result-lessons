import styled, { css } from "styled-components";

const IconContainer = ({ className, iconClass, ...props }) => (
  <div className={className} {...props}>
    <i className={`fa ${iconClass}`} aria-hidden="true"></i>
  </div>
);

export const Icon = styled(IconContainer)`
  font-size: ${({ size = "24px" }) => size};
  margin: ${({ margin = "0" }) => margin};
  &:hover {
    color: ${({ color = "#333" }) => color};
    transform: scale(1.05);
  }
  cursor: pointer;
  line-height: 0;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      color: #666;
    `}
`;
