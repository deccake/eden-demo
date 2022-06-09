import styled from "styled-components";
import { SiAerlingus } from "react-icons/si";

const LogoText = styled.div`
text-align: center;
padding: 40px;
}
`;
const Span = styled.span`
  margin-left: 10px;
  font-size: x-large;
  font-weight: 500;
`;

export const LogoComponent = () => {
  return (
    <>
      <LogoText>
        <SiAerlingus size={30} color={"#6114ef"} />
        <Span>Eden</Span>
      </LogoText>
    </>
  );
};
