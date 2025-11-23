import styled from "styled-components";

const IconContainer = ({ className, iconClass }) => (
  <div className={className}>
    <i className={`fa ${iconClass}`} aria-hidden="true"></i>
  </div>
);

export const Icon = styled(IconContainer)`
  font-size: ${({ size = "24px" }) => size};
  margin: ${({ margin = "0" }) => margin};
  cursor: pointer;
  line-height: 0;
`;
