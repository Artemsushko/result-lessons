import styled from "styled-components";

const DiscriptionContainer = ({ className }) => (
  <div className={className}>
    Web technologies
    <br />
    Coding
    <br />
    Debugging
  </div>
);

export const Discription = styled(DiscriptionContainer)`
  text-align: center;
  font-style: italic;
  font-size: 18px;
  font-weight: 450;
`;
