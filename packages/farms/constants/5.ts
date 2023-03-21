import { goerliTestnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  // {
  //   pid: 34,
  //   vaultPid: 3,
  //   lpSymbol: 'CELR-WETH LP',
  //   lpAddress: '0xF8E1FA0648F87c115F26E43271B3D6e4a80A2944',
  //   quoteToken: goerliTestnetTokens.weth,
  //   token: goerliTestnetTokens.celr,
  // },
  // {
  //   pid: 23,
  //   vaultPid: 3,
  //   lpSymbol: 'LEET-WETH LP',
  //   lpAddress: '0x846f5e6DDb29dC5D07f8dE0a980E30cb5aa07109',
  //   quoteToken: goerliTestnetTokens.weth,
  //   token: goerliTestnetTokens.leet,
  // },
  {
    pid: 0,
    vaultPid: 0,
    lpSymbol: 'SFY-ETH LP',
    lpAddress: '0x38fE5F2caF0176DEF63480540c8063d1D3586dBd',
    quoteToken: goerliTestnetTokens.weth,
    token: goerliTestnetTokens.cake,
  },
  {
    pid: 1,
    vaultPid: 1,
    lpSymbol: 'SFYX-ETH LP',
    lpAddress: '0x70b73AC3C37ffAAdD173eFBDfddd0b1E8FA7829B',
    quoteToken: goerliTestnetTokens.weth,
    token: goerliTestnetTokens.sfyx,
  },
  {
    pid: 2,
    vaultPid: 2,
    lpSymbol: 'SFY-SFYX LP',
    lpAddress: '0xCF029830b9fFf03Af6E833C216678CEc883A51e7',
    quoteToken: goerliTestnetTokens.sfyx,
    token: goerliTestnetTokens.cake,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
