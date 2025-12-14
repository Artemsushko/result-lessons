import { useEffect, useRef, useState } from "react";
import { FormatedDate, Icon, Title } from "../../../components";
import { UserSelect } from "./user-select";
import { useSelector } from "react-redux";
import { selectSession } from "../../../store/selectors/selectors";
import styled from "styled-components";
import { server } from "../../../bff/server";

const IconWrapper = styled.div`
  width: 20px;
  height: 26px;
  margin: 10px 0;
`;

const UserItemContainer = ({
  className,
  id,
  login,
  registred_at,
  roleId,
  roles,
}) => {
  const [selectedRole, setSelectedRole] = useState(roleId);
  const [isRoleChanged, setIsRoleChanged] = useState(false);
  const session = useSelector(selectSession);
  const initialRoleRef = useRef(roleId);

  useEffect(() => {
    setIsRoleChanged(selectedRole !== initialRoleRef.current);
  }, [selectedRole]);

  const saveUserRole = (id, selectedRole) => {
    server.updateUserRole(session, id, selectedRole);

    initialRoleRef.current = selectedRole;
    setIsRoleChanged(false);
  };

  return (
    <li className={className}>
      <Title fontSize="16px" margin="10px 0 0 0">
        {login}
      </Title>
      <FormatedDate>{registred_at}</FormatedDate>
      <UserSelect
        value={selectedRole}
        roles={roles}
        onChange={setSelectedRole}
      />
      <IconWrapper>
        <Icon
          disabled={!isRoleChanged}
          iconClass="fa-floppy-o"
          onClick={() => saveUserRole(id, selectedRole)}
        />
      </IconWrapper>
    </li>
  );
};

export const UserItem = styled(UserItemContainer)`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 10px;
  background: #fafafa;
  padding: 14px 20px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: 500;
`;
