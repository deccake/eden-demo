import { useState } from "react";
import "./App.css";
import { ControlledOnboardingFlow } from "./components/form/ControlledOnboardingFlow";
import { StepOne } from "./components/form/StepOne";
import { StepTwo } from "./components/form/StepTwo";
import { StepThree } from "./components/form/StepThree";
import { StepFour } from "./components/form/StepFour";
import { LogoComponent } from "./components/logo/LogoComponent";
import Stepper from "react-stepper-horizontal";
import { CurrentStepContainer } from "./components/form/CurrentStepContainer";
import { Container } from "reactstrap";
import styled from "styled-components";

const NewContainer = styled.div`
  background: rgb(255, 255, 255);
  margin: 25px 0px 40px;
  overflow: hidden;
  position: relative;
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  height: 70vh;
  border: 2px solid white;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 10%) 2px 2px 2px 4px;
`;

function App() {
  const [onboradingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const sendToServer = (data) => {
    console.log(data);
  };

  const onNext = (stepData) => {
    console.log("in app", stepData);
    setOnboardingData({ ...onboradingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  console.log("in app", onboradingData);

  return (
    <NewContainer>
      <LogoComponent />
      {currentIndex < 4 ? (
        <>
          <CurrentStepContainer currentIndex={currentIndex} />
          <ControlledOnboardingFlow
            currentIndex={currentIndex}
            onNext={onNext}
            name={onboradingData.name}
          >
            <StepOne />
            <StepTwo />
            <StepThree />
            <StepFour />
          </ControlledOnboardingFlow>
        </>
      ) : (
        <Container>
          <h2>Thanks! Here is your info</h2>
          <pre>{JSON.stringify(onboradingData, null, 2)}</pre>
        </Container>
      )}
    </NewContainer>
  );
}

export default App;
