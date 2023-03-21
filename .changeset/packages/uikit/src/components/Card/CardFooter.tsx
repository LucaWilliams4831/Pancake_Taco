import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardFooterProps = SpaceProps;

const CardFooter = styled.div<CardFooterProps>`
  // border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  ${space}
  background: linear-gradient(90deg, #10080c 0%, #291a1f 50%, #0d040b 100%);
`;

CardFooter.defaultProps = {
  p: "24px",
};

export default CardFooter;
