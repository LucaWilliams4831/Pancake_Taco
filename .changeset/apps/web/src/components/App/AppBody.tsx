import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'

export const BodyWrapper = styled(Card)`
  border-radius: 10px;
  // max-width: 436px;
  // width: 100%;
  @media (max-width: 767px) {
    & {
      width: 328px;
    }
  }
  
  z-index: 1;
  border: 1px solid #403d3f;
  margin-bottom: 15px;
  background: linear-gradient(90deg, #040304 0%, #050303 50%, #020102 100%);
  box-shadow: #fff 0px 2px 20px;
  height:440px;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
