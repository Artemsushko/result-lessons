import { Icon } from "../../../../components";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -2px;
`;

const StyledLink = styled(Link)`
  &:hover {
    color: #333;
    transform: scale(1.05);
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 36px;
  font-size: 16px;
  font-weight: 600;
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 6px;
  transition: 0.2s;
  &:hover {
    background: #e9e9e9;
  }
  &:active {
    background: #dcdcdc;
  }
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <RightAligned>
        <Button to="/login">Sign In</Button>
      </RightAligned>
      <RightAligned>
        <StyledLink onClick={() => navigate(-1)}>
          <Icon iconClass="fa-hand-o-left" margin="16px 0 0 0" />
        </StyledLink>
        <StyledLink to="/post">
          <Icon iconClass="fa-file-text-o" margin="16px 0 0 14px" />
        </StyledLink>
        <StyledLink to="/users">
          <Icon iconClass="fa-users" margin="16px 0 0 14px" />
        </StyledLink>
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)`
  color: #000;
`;
