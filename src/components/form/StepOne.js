import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
} from "reactstrap";
import styled from "styled-components";

const ButtonContainer = styled.div`
  Button{
    background-color: #6114ef;
    margin-top: 20px;
    border-radius:5px
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

export const StepOne = ({ goToNext }) => {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  return (
      
    <>
      <NewContainer>
        <HeaderText>Welcome ! First things first...</HeaderText>
        <Text>you can always change them later.</Text>
        <div>
          <Label>Full Name</Label>
          <Input
            type="text"
            placeholder="Steave Job"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Label>Display Name</Label>
          <Input
            type="text"
            placeholder="Steave"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <ButtonContainer>
          <Button block  onClick={() => goToNext({ name, displayName })}>
            Create Workspace
          </Button>
        </ButtonContainer>
      </NewContainer>

      {/* <button onClick={() => goToNext({ name: "Amol" })}>Create Workspace</button> */}
    </>
  );
};
