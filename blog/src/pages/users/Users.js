import { useEffect, useState } from "react";
import styled from "styled-components";
import { getUsers } from "../../bff/get-users";
import { Loader, FormatedDate, Title } from "../../components";

const UsersContainer = ({ className }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const loadUsers = async () => {
      setUsers(await getUsers());
    };
    loadUsers();
  }, []);

  const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
  `;

  const UsersList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  `;

  const UserItem = styled.li`
    background: #fafafa;
    padding: 14px 20px;
    border-radius: 8px;
    margin-bottom: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;

    span:first-child {
      color: #333;
    }

    span:last-child {
      color: #666;
      font-size: 14px;
      font-style: italic;
    }
  `;

  const UserLogin = styled.span`
    color: #333;
  `;

  if (!users)
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  return (
    <div className={className}>
      <Title>Registrated Users</Title>
      <UsersList>
        {users.map(({ login, registred_at }, index) => (
          <UserItem key={index}>
            <UserLogin>{login}</UserLogin>
            <FormatedDate>{registred_at}</FormatedDate>
          </UserItem>
        ))}
      </UsersList>
    </div>
  );
};

export const Users = styled(UsersContainer)`
  padding: 40px;
`;
