import { useCallback, memo, useMemo } from 'react'
import { Currency, TradeType, CurrencyAmount } from '@pancakeswap/sdk'
import {
  InjectedModalProps,
  LinkExternal,
  Text,
  TransactionErrorContent,
  ConfirmationPendingContent,
} from '@pancakeswap/uikit'
import { TransactionSubmittedContent } from 'components/TransactionConfirmationModal'
import { useTranslation } from '@pancakeswap/localization'
import { Field } from 'state/swap/actions'
import { TradeWithStableSwap } from '@pancakeswap/smart-router/evm'
import { useActiveChainId } from 'hooks/useActiveChainId'
import ConfirmSwapModalContainer from '../../components/ConfirmSwapModalContainer'
import TransactionConfirmSwapContentWithSmartRouter from './TransactionConfirmSwapContent'

const PancakeRouterSlippageErrorMsg =
  'This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.'

const SwapTransactionErrorContent = ({ onDismiss, message, openSettingModal }) => {
  const isSlippagedErrorMsg = message?.includes(PancakeRouterSlippageErrorMsg)

  const handleErrorDismiss = useCallback(() => {
    onDismiss?.()
    if (isSlippagedErrorMsg && openSettingModal) {
      openSettingModal()
    }
  }, [isSlippagedErrorMsg, onDismiss, openSettingModal])
  const { t } = useTranslation()

  return isSlippagedErrorMsg ? (
    <TransactionErrorContent
      message={
        <>
          <Text mb="16px">
            {t(
              'This transaction will not succeed either due to price movement or fee on transfer. Try increasing your',
            )}{' '}
            <Text bold display="inline" style={{ cursor: 'pointer' }} onClick={handleErrorDismiss}>
              <u>{t('slippage tolerance.')}</u>
            </Text>
          </Text>
          <LinkExternal
            href="https://docs.pancakeswap.finance/products/pancakeswap-exchange/trade-guide"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {t('What are the potential issues with the token?')}
          </LinkExternal>
        </>
      }
    />
  ) : (
    <TransactionErrorContent message={message} onDismiss={onDismiss} />
  )
}

interface ConfirmSwapModalProps {
  trade?: TradeWithStableSwap<Currency, Currency, TradeType>
  originalTrade?: TradeWithStableSwap<Currency, Currency, TradeType>
  currencyBalances: { [field in Field]?: CurrencyAmount<Currency> }
  attemptingTxn: boolean
  txHash?: string
  recipient: string | null
  allowedSlippage: number
  onAcceptChanges: () => void
  onConfirm: () => void
  swapErrorMessage?: string
  customOnDismiss?: () => void
  openSettingModal?: () => void
}

const ConfirmSwapModal: React.FC<React.PropsWithChildren<InjectedModalProps & ConfirmSwapModalProps>> = ({
  trade,
  originalTrade,
  currencyBalances,
  onAcceptChanges,
  allowedSlippage,
  onConfirm,
  onDismiss,
  customOnDismiss,
  recipient,
  swapErrorMessage,
  attemptingTxn,
  txHash,
  openSettingModal,
}) => {
  const { chainId } = useActiveChainId()
  const { t } = useTranslation()

  const handleDismiss = useCallback(() => {
    if (customOnDismiss) {
      customOnDismiss()
    }
    onDismiss?.()
  }, [customOnDismiss, onDismiss])

  const confirmationContent = useCallback(
    () =>
      swapErrorMessage ? (
        <SwapTransactionErrorContent
          openSettingModal={openSettingModal}
          onDismiss={onDismiss}
          message={swapErrorMessage}
        />
      ) : (
        <TransactionConfirmSwapContentWithSmartRouter
          trade={trade}
          currencyBalances={currencyBalances}
          originalTrade={originalTrade}
          onAcceptChanges={onAcceptChanges}
          allowedSlippage={allowedSlippage}
          onConfirm={onConfirm}
          recipient={recipient}
        />
      ),
    [
      trade,
      originalTrade,
      onAcceptChanges,
      allowedSlippage,
      onConfirm,
      recipient,
      swapErrorMessage,
      onDismiss,
      openSettingModal,
      currencyBalances,
    ],
  )

  // text to show while loading
  const pendingText = useMemo(() => {
    return t('Swapping %amountA% %symbolA% for %amountB% %symbolB%', {
      amountA: trade?.inputAmount?.toSignificant(6) ?? '',
      symbolA: trade?.inputAmount?.currency?.symbol ?? '',
      amountB: trade?.outputAmount?.toSignificant(6) ?? '',
      symbolB: trade?.outputAmount?.currency?.symbol ?? '',
    })
  }, [t, trade])

  if (!chainId) return null

  return (
    <ConfirmSwapModalContainer handleDismiss={handleDismiss}>
      {attemptingTxn ? (
        <ConfirmationPendingContent pendingText={pendingText} />
      ) : txHash ? (
        <TransactionSubmittedContent
          chainId={chainId}
          hash={txHash}
          onDismiss={handleDismiss}
          currencyToAdd={trade?.outputAmount.currency}
        />
      ) : (
        confirmationContent()
      )}
    </ConfirmSwapModalContainer>
  )
}

export default memo(ConfirmSwapModal)
