import Stepper from "react-stepper-horizontal";
import styled from "styled-components";

const Container = styled.div`
  width: 28%;
  margin: 0 auto;
`;

export const CurrentStepContainer = ({currentIndex}) => {
  return (
    <Container>
      <Stepper
        steps={[{}, {}, {}, {}]}
        activeStep={currentIndex}
        activeColor={"#6114ef"}
        completeColor={"#6114ef"}
        completeBarColor={"#6114ef"}
        size={36}
      />
    </Container>
  );
};
