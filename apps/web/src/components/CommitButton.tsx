import { Button, ButtonProps } from '@pancakeswap/uikit'
import { useSwitchNetworkLoading } from 'hooks/useSwitchNetworkLoading'
import { useSetAtom } from 'jotai'
import { useActiveChainId } from 'hooks/useActiveChainId'
import styled from 'styled-components'
import { hideWrongNetworkModalAtom } from './NetworkModal'
import Trans from './Trans'

const ButtonGradient = styled(Button)`
  background: linear-gradient(180deg, #7a436e, #7c364c);
  width:100%;
  height:100%;
  font-size:20px;
`;

const wrongNetworkProps: ButtonProps = {
  variant: 'danger',
  disabled: false,
  children: <Trans>Wrong Network</Trans>,
}

export const CommitButton = (props: ButtonProps) => {
  const { isWrongNetwork } = useActiveChainId()
  const [switchNetworkLoading] = useSwitchNetworkLoading()
  const setHideWrongNetwork = useSetAtom(hideWrongNetworkModalAtom)

  return (
    <ButtonGradient
      {...props}
      onClick={(e) => {
        if (isWrongNetwork) {
          setHideWrongNetwork(false)
        } else {
          props.onClick?.(e)
        }
      }}
      {...(switchNetworkLoading && { disabled: true })}
      {...(isWrongNetwork && wrongNetworkProps)}
    />
  )
}
