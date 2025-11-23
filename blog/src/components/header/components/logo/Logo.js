import styled from "styled-components";
import { Icon } from "../../../../components";
import { Link } from "react-router-dom";

const LargeText = styled.div`
  font-size: 36px;
  font-weight: 600;
  line-height: 48px;
`;

const SmallText = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
`;

const LogoText = styled.div`
  margin-left: 10px;
`;

const LogoContainer = ({ className }) => (
  <Link className={className} to="/">
    <Icon iconClass="fa-code" size="70px" margin="0 10px 0 0" />
    <LogoText>
      <LargeText>Web Developer</LargeText>
      <SmallText>Blog</SmallText>
    </LogoText>
  </Link>
);

export const Logo = styled(LogoContainer)`
  display: flex;
`;
