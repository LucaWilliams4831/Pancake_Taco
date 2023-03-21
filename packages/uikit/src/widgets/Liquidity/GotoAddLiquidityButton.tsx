import { useTranslation } from "@pancakeswap/localization";
import styled from "styled-components";
import { AddIcon, Button } from "../../components";
import { NextLinkFromReactRouter } from "../../components/NextLink";

const ButtonGradient = styled(Button)`
  background: linear-gradient(180deg, #7a436e, #7c364c);
  height:100%;
  font-size:25px;
`

export function GotoAddLiquidityButton() {
  const { t } = useTranslation();

  return (
    
    <NextLinkFromReactRouter to="/add">
      
      <ButtonGradient id="join-pool-button" width="100%" startIcon={<AddIcon color="invertedContrast" />}>
        {t("Add Liquidity")}
      </ButtonGradient>
      
    </NextLinkFromReactRouter>
    
  );
}
