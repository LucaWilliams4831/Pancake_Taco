import { constants } from '@gelatonetwork/limit-orders-lib'
import { useTranslation } from '@pancakeswap/localization'
import { Flex, Text, HelpIcon, useTooltip } from '@pancakeswap/uikit'

const ExpiredDate = () => {
  const { t } = useTranslation()

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <Text>{t('After your order is expired it might never be executed. Please cancel your order once expired')}</Text>,
    { placement: 'bottom' },
  )

  const expiryDate = new Date(Date.now() + constants.MAX_LIFETIME_IN_SECONDS * 1000).toLocaleString([], {
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
  })

  return (
    <Flex alignItems="center" justifyContent="center" minHeight="16px">
      <Text fontSize="8px" small color="#fff" mr="4px">
        {t('Expires in %expiryDate%', { expiryDate })}
      </Text>
      {/* <span ref={targetRef}>
        <HelpIcon color="textSubtle" />
        {tooltipVisible && tooltip}
      </span> */}
    </Flex>
  )
}

export default ExpiredDate
