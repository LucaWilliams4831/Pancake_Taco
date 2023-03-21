import { ChainId, ERC20Token, WETH9 } from '@pancakeswap/sdk'
import { CAKE_GOERLI, USDC_GOERLI } from './common'

export const goerliTestnetTokens = {
  weth: WETH9[ChainId.GOERLI],
  celr: new ERC20Token(ChainId.GOERLI, '0x5D3c0F4cA5EE99f8E8F59Ff9A5fAb04F6a7e007f', 18, 'CELR', 'CelerToken', ''),
  leet: new ERC20Token(ChainId.GOERLI, '0xBd509651E6374c327d24b9d7E3Ea46704f6F31E8', 18, 'LEET', 'Leet Token', ''),
  usdc: USDC_GOERLI,
  cake: CAKE_GOERLI,
  sfyx: new ERC20Token(ChainId.GOERLI, '0x4a364546B6765a3469ab131b96ddEbe4A2199082', 18, 'SFYX', 'SFYX Token', ''),
}
