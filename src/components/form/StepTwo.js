import styled from "styled-components";
import { useState } from "react";
import { Label, Input, Container, Button, Col } from "reactstrap";

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

const Span = styled.span`
  color: lightgrey;
`;

const InputWrapper = styled.div`
  position: relative;
  label {
    position: absolute;
    left: 1px;
    font-weight: bold;
    font-size: 0.8em;
    color: grey;
    top: 9px;
    padding: 7px;
    top: 1.1px;
    background-color: lightgrey;
  }

  Input {
    padding: 5px 5px 5px 115px;
  }
`;

const HeaderWrapper = styled.div`
  justify-content: center;
  display: flex;
`;

export const StepTwo = ({ goToNext }) => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceURL, setWorkspaceURL] = useState("");
  return (
    <>
      <NewContainer>
        <HeaderWrapper>
          <HeaderText>Let's set up a home for all your work</HeaderText>
        </HeaderWrapper>
        <Text>you can always create another workspace later.</Text>
        <div>
          <Label>Workspace Name</Label>
          <Input
            type="text"
            placeholder="Eden"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
          />

          <Label>
            Workspace URL <Span>(optional)</Span>
          </Label>
          <InputWrapper>
            <label>www.eden.com/</label>
            <Input
              type="url"
              placeholder="example"
              value={workspaceURL}
              onChange={(e) => setWorkspaceURL(e.target.value)}
            />
          </InputWrapper>
        </div>
        <ButtonContainer>
          <Button block onClick={() => goToNext({ workspaceName,workspaceURL })}>
            Create Workspace
          </Button>
        </ButtonContainer>
      </NewContainer>
    </>
  );
};
