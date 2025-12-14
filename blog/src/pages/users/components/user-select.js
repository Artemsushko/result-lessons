import { ROLE } from "../../../constants";
import styled from "styled-components";

const UserSelectContainer = ({ className, value, roles, onChange }) => {
  const onRoleChange = ({ target }) => {
    onChange(Number(target.value));
  };

  const filteredRoles = roles.filter(({ id }) => id !== ROLE.GUEST);

  return (
    <select className={className} value={value} onChange={onRoleChange}>
      {filteredRoles.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};

export const UserSelect = styled(UserSelectContainer)`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #fff;
  font-size: 14px;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    border-color: #999;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.4);
  }
`;
