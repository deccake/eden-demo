import styled from "styled-components";
import { useState } from "react";
import { Label, Input, Container, Button, Col, Row } from "reactstrap";
import { HiOutlineUser, HiUserGroup } from "react-icons/hi";
import { InfoCard } from "./InfoCard";

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

export const StepThree = ({ goToNext }) => {
  const cards = [
    {
      icon: <HiOutlineUser size={25} fill="#6114ef" color="#6114ef" />,
      title: "For myself",
      description: "Write better. Think more clearly. Stay organized.",
    },
    {
      icon: <HiUserGroup size={25} />,
      title: "With my team",
      description: "Wikis,docs,tasks & projects, all in one place.",
    },
  ];

  const [workspaceFor, setWorkspaceFor] = useState("");

  const handleSelectCard = (title) => {
    setWorkspaceFor(title);
  };

  return (
    <>
      <NewContainer>
        <HeaderWrapper>
          <HeaderText>How are you planning to use Eden?</HeaderText>
        </HeaderWrapper>
        <Text>We'll streamline your setup experience accordingly.</Text>
        <Row>
          {cards.map((cardDetails, index) => {
            return (
              <Col key={index}>
                <InfoCard
                  cardDetails={cardDetails}
                  onSelectCard={handleSelectCard}
                />
              </Col>
            );
          })}
        </Row>
        <ButtonContainer>
          <Button block onClick={() => goToNext({ workspaceFor })}>
            Create Workspace
          </Button>
        </ButtonContainer>
      </NewContainer>
    </>
  );
};
