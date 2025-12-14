import { Icon, Title } from "../../../../components";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { UIButtonLink } from "../../../../components";
import { ROLE } from "../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../store/actions";
import {
  selectLogin,
  selectRoleId,
  selectSession,
} from "../../../../store/selectors/selectors";

const RightAligned = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -2px;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roleId = useSelector(selectRoleId);
  const login = useSelector(selectLogin);
  const session = useSelector(selectSession);

  return (
    <div className={className}>
      <RightAligned>
        {roleId === ROLE.GUEST ? (
          <UIButtonLink to="/login" variant="outline" size="medium">
            Log In
          </UIButtonLink>
        ) : (
          <>
            <Title fontSize="16px" margin="0px 0px 17px 0px">
              {login}
            </Title>
            <Link
              to="/"
              variant="outline"
              size="medium"
              onClick={() => {
                dispatch(logout(session));
              }}
            >
              <Icon
                iconClass="fa fa-sign-out"
                size="20px"
                margin="0 0 0 10px"
              />
            </Link>
          </>
        )}
      </RightAligned>
      <RightAligned>
        <Icon
          iconClass="fa-hand-o-left"
          margin="16px 0 0 0"
          onClick={() => navigate(-1)}
        />
        <Link to="/post">
          <Icon iconClass="fa-file-text-o" margin="16px 0 0 14px" />
        </Link>
        {roleId === ROLE.ADMIN && (
          <Link to="/users">
            <Icon iconClass="fa-users" margin="16px 0 0 14px" />
          </Link>
        )}
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)`
  color: #000;
`;
