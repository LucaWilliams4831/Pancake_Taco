import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div<CardBodyProps>`
  ${space}
  background: linear-gradient(90deg, #10080c 0%, #291a1f 50%, #0d040b 100%);
`;

CardBody.defaultProps = {
  p: "24px",
};

export default CardBody;
