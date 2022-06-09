import { Card, CardTitle, CardText, Row } from "reactstrap";
import styled from 'styled-components'

const CardTitleWrapper = styled(CardTitle)`
  font-size:medium;
  margin-top:10px;
`

const CardTextWrapper = styled(CardText)`
  color:grey;
`

export const InfoCard = ({ cardDetails,onSelectCard }) => {
  const { icon, title, description } = cardDetails;
  return (
    <>
      <Card body onClick={()=>onSelectCard(title)}>
        {icon}
        <CardTitleWrapper tag="h5">{title}</CardTitleWrapper>
        <CardTextWrapper >{description}</CardTextWrapper>
      </Card>
    </>
  );
};
