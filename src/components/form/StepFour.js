import { AiOutlineCheck } from "react-icons/ai";
import styled from "styled-components";
import { Button, Container } from "reactstrap";

const ButtonContainer = styled.div`
  Button {
    background-color: #6114ef;
    margin-top: 20px;
    border-radius: 5px;
  }
`;

const NewContainer = styled(Container)`
  width: 29%;
`;

const HeaderText = styled.h1`
  text-align: center;
  white-space: nowrap;
  font-size: xx-large;
  padding: 10px;
  margin-top: 30px;
`;
const Text = styled.p`
  text-align: center;
  color: grey;
`;

const HeaderWrapper = styled.div`
  justify-content: center;
  display: flex;
`;

export const StepFour = ({ goToNext, name }) => {
  const iconStyle = {
    width: "60px",
    height: "60px",
    background: "rgb(97, 20, 239)",
    "border-radius": "70px",
    display: "flex",
    "justify-content": "center",
    margin: "auto",
    "margin-top": "60px",
    padding: "8px 12px 15px 12px",
    "-moz-border-radius": "70px",
    "-webkit-border-radius": "70px",
  };
  return (
    <>
      <NewContainer>
        <div style={iconStyle}>
          <AiOutlineCheck color="white" size="40" />
        </div>
        <HeaderWrapper>
          <HeaderText>Congratulations, {name}!</HeaderText>
        </HeaderWrapper>
        <Text>
          You have completed onboarding, you can start using the Eden!
        </Text>
        <ButtonContainer>
          <Button block onClick={() => goToNext({})}>
            Launch Eden
          </Button>
        </ButtonContainer>
      </NewContainer>
    </>
  );
};
