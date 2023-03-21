import styled from 'styled-components'
import { CHAIN_IDS } from 'utils/wagmi'
import Liquidity from '../views/Pool'

const MobileView = styled.div`
  @media (max-width: 767px) {
    width:100%;
    position:absolute;
  & {
    // display: none;
    
    height:200%;
  }
}
`
const LiquidityPage = () => {
  return (
    <>
      <MobileView>
        <img style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
          alt=''
          src='./images/bg2.png' />
      </MobileView>
      <Liquidity />
    </>
  )

}

LiquidityPage.chains = CHAIN_IDS

export default LiquidityPage
