import { Link } from "react-router-dom";
import styled from "styled-components";

const RegistrationLink = styled(Link)`
  margin-left: 4px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const RegistrationFooterContainer = ({ className }) => (
  <div className={className}>
    Don’t have an account?
    <RegistrationLink to="/register">Register</RegistrationLink>
  </div>
);

export const RegistrationFooter = styled(RegistrationFooterContainer)`
  margin-top: 12px;
  font-size: 14px;
  text-align: center;
  color: #666;
`;
