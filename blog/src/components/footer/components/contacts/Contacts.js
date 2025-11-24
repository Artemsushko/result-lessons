import styled from "styled-components";

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const Email = styled.div`
  font-size: 14px;
  color: #666;
`;

const ContactsContainer = ({ className }) => {
  return (
    <div className={className}>
      <Title>Web Developer Blog</Title>
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
