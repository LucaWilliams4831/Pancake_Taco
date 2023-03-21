import styled from 'styled-components'
import LimitOrders from '../views/LimitOrders'

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

const LimitOrdersPage = () => {
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
      <LimitOrders />
    </>
  )
}

export default LimitOrdersPage
