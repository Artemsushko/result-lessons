import { Title } from "../../../title/Title";
import styled from "styled-components";

const Email = styled.div`
  font-size: 14px;
  color: #666;
`;

const ContactsContainer = ({ className }) => {
  return (
    <div className={className}>
      <Title fontSize="16px">Web Developer Blog</Title>
      <Email>web@developer.com</Email>
    </div>
  );
};

export const Contacts = styled(ContactsContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;
