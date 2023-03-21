import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
  DropdownMenuItems,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { getPerpetualUrl } from 'utils/getPerpetualUrl'
import { SUPPORT_ONLY_BSC } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
    [
      {
        label: t('TRADE'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        href: '/swap',
        showItemsOnMobile: false,
        items: [
          {
            label: t('EXCHANGE'),
            href: '/swap',
          },
          {
            label: t('LIMIT'),
            href: '/limit-orders',
            supportChainIds: SUPPORT_ONLY_BSC,
            image: '/images/decorations/3d-coin.png',
          },
          {
            label: t('ADD LIQUIDITY'),
            href: '/liquidity',
          },
          // {
          //   label: t('Perpetual'),
          //   href: getPerpetualUrl({
          //     chainId,
          //     languageCode,
          //     isDark,
          //   }),
          //   type: DropdownMenuItemType.EXTERNAL_LINK,
          // },
          // {
          //   label: t('Bridge'),
          //   href: 'https://bridge.pancakeswap.finance/',
          //   type: DropdownMenuItemType.EXTERNAL_LINK,
          // },
        ].map((item) => addMenuItemSupported(item, chainId)),
      },
      {
        label: t('EARN'),
        href: '/farms',
        icon: EarnIcon,
        fillIcon: EarnFillIcon,
        image: '/images/decorations/pe2.png',
        items: [
          {
            label: t('FARMS'),
            href: '/farms',
          },
          {
            label: t('POOLS'),
            href: '/pools',
            supportChainIds: SUPPORT_ONLY_BSC,
          },
        ].map((item) => addMenuItemSupported(item, chainId)),
      },
      // {
      //   label: t('Win'),
      //   href: '/prediction',
      //   icon: TrophyIcon,
      //   fillIcon: TrophyFillIcon,
      //   supportChainIds: SUPPORT_ONLY_BSC,
      //   items: [
      //     {
      //       label: t('Trading Competition'),
      //       href: '/competition',
      //       image: '/images/decorations/tc.png',
      //       hideSubNav: true,
      //     },
      //     {
      //       label: t('Prediction (BETA)'),
      //       href: '/prediction',
      //       image: '/images/decorations/prediction.png',
      //     },
      //     {
      //       label: t('Lottery'),
      //       href: '/lottery',
      //       image: '/images/decorations/lottery.png',
      //     },
      //     {
      //       label: t('Pottery (BETA)'),
      //       href: '/pottery',
      //       image: '/images/decorations/lottery.png',
      //     },
      //   ],
      // },
      // {
      //   label: t('NFT'),
      //   href: `${nftsBaseUrl}`,
      //   icon: NftIcon,
      //   fillIcon: NftFillIcon,
      //   supportChainIds: SUPPORT_ONLY_BSC,
      //   image: '/images/decorations/nft.png',
      //   items: [
      //     {
      //       label: t('Overview'),
      //       href: `${nftsBaseUrl}`,
      //     },
      //     {
      //       label: t('Collections'),
      //       href: `${nftsBaseUrl}/collections`,
      //     },
      //     {
      //       label: t('Activity'),
      //       href: `${nftsBaseUrl}/activity`,
      //     },
      //   ],
      // },
      {
        label: t('ANALYTICS'),
        href: '/info',
        icon: EarnIcon,
        fillIcon: EarnFillIcon,
        image: '/images/ifos/ifo-bunny.png',
        items: [
          // {
          //   label: t('FARMS'),
          //   href: '/farms',
          // },
          // {
          //   label: t('POOLS'),
          //   href: '/pools',
          //   supportChainIds: SUPPORT_ONLY_BSC,
          // },
        ].map((item) => addMenuItemSupported(item, chainId)),
      },
      {
        label: '',
        // href: '',
        icon: MoreIcon,
        hideSubNav: true,
        items: [
          // {
          //   label: t('Info'),
          //   href: '/info',
          // },
          // {
          //   label: t('IFO'),
          //   href: '/ifo',
          //   supportChainIds: SUPPORT_ONLY_BSC,
          //   image: '/images/ifos/ifo-bunny.png',
          // },
          // {
          //   label: t('VOTING'),
          //   href: '/voting',
          //   supportChainIds: SUPPORT_ONLY_BSC,
          //   image: '/images/voting/voting-bunny.png',
          // },
          // {
          //   type: DropdownMenuItemType.DIVIDER,
          // },
          // {
          //   label: t('Leaderboard'),
          //   href: '/teams',
          //   supportChainIds: SUPPORT_ONLY_BSC,
          //   image: '/images/decorations/leaderboard.png',
          // },
          // {
          //   type: DropdownMenuItemType.DIVIDER,
          // },
          {
            label: t('BLOG'),
            href: 'https://medium.com/pancakeswap',
            type: DropdownMenuItemType.EXTERNAL_LINK,
          },
          {
            label: t('DOCS'),
            href: 'https://docs.pancakeswap.finance',
            type: DropdownMenuItemType.EXTERNAL_LINK,
          },
        ].map((item) => addMenuItemSupported(item, chainId)),
      },
    ].map((item) => addMenuItemSupported(item, chainId))

export default config
