import { Icon } from "../../../../components";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { UIButtonLink } from "../../../../components";

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

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <RightAligned>
        <UIButtonLink to="/login" variant="outline" size="medium">
          Log In
        </UIButtonLink>
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
