import styled from 'styled-components'
import { CHAIN_IDS } from 'utils/wagmi'
import Swap from '../views/Swap'
import { SwapFeaturesProvider } from '../views/Swap/SwapFeaturesContext'

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
const SwapPage = () => {

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
      <SwapFeaturesProvider>
        <Swap />
      </SwapFeaturesProvider>
    </>
  )
}

SwapPage.chains = CHAIN_IDS

export default SwapPage
