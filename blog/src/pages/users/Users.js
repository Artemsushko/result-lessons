import { useEffect, useState } from "react";
import { Content, Icon, Title } from "../../components";
import { UserItem } from "./components";
import { useSelector } from "react-redux";
import { selectSession } from "../../store/selectors/selectors";
import { server } from "../../bff";
import styled from "styled-components";

const UsersList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  font-weight: 600;
  margin-bottom: 12px;
  padding: 0 4px;
`;

const UserItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
`;

const UsersContainer = ({ className }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const session = useSelector(selectSession);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await server.fetchUsers(session);
      const { error, res } = data;
      if (error) {
        setErrorMessage(error);
        setUsers([]);
        return;
      }
      setUsers(res);
    };

    const loadRoles = async () => {
      const data = await server.fetchRoles(session);
      const { error, res } = data;
      if (error) {
        setErrorMessage(error);
        setRoles([]);
        return;
      }
      setRoles(res);
    };
    loadUsers();
    loadRoles();
  }, [session, setUsers, setRoles]);

  const handleDeleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    const data = await server.fetchDeleteUser(session, id);
    const { error } = data;
    if (error) {
      setErrorMessage(error);
      return;
    }
    const { res } = await server.fetchUsers(session);
    setUsers(res);
  };

  return (
    <div className={className}>
      <Content error={errorMessage}>
        <Title>Registrated Users</Title>

        <TableHeader>
          <div>Login</div>
          <div>Registration Date</div>
          <div>Role</div>
        </TableHeader>

        <UsersList>
          {users.map(({ id, login, role_id, registred_at }) => (
            <UserItemWrapper key={id}>
              <UserItem
                id={id}
                login={login}
                registred_at={registred_at}
                roleId={role_id}
                roles={roles}
              />
              <Icon
                color="#e74c3c"
                iconClass="fa-trash-o"
                margin="0 0 10px"
                hover
                onClick={() => handleDeleteUser(id)}
              />
            </UserItemWrapper>
          ))}
        </UsersList>
      </Content>
    </div>
  );
};

export const Users = styled(UsersContainer)`
  padding: 40px;
`;
